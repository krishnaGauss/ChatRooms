import { useAppStore } from "@/store";
import { HOST } from "@/utils/constants";
import { createContext, useContext, useEffect, useRef } from "react";
import { io } from "socket.io-client";

const SocketContext = createContext(null);

export const useSocket = () => {
  return useContext(SocketContext);
};

export const SocketProvider = ({ children }) => {
  const socket = useRef();
  const { userInfo } = useAppStore();

  useEffect(() => {
    if (userInfo) {
      socket.current = io(HOST, {
        withCredentials: true,
        query: { userId: userInfo.id },
      });
      socket.current.on("connect", () => {
        console.log("Connected to socket server");
      });

      const handleReceiveMessage = (message) => {
        // const { selectedChatData, selectedChatType } = useAppStore.getState();
        const { selectedChatData, selectedChatType, addMessage } = useAppStore.getState();
        if (
          selectedChatType !== undefined &&
          (selectedChatData.id === message.sender.id ||
            selectedChatData.id === message.receiver.id)
        ) {
          console.log("Message received: ", message);
          addMessage(message);
        }
      };

      const handleReceiveChannelMessage = (message)=>{
        const { selectedChatData, selectedChatType, addMessage } = useAppStore.getState();
        if (
          selectedChatType !== undefined ||
          selectedChatData.id === message.channelId
        ) {
          // console.log("Message received: ", message);
          addMessage(message);
        }
      }



      socket.current.on("receiveMessage", handleReceiveMessage);
      socket.current.on("receive-channel-message", handleReceiveChannelMessage);

      return () => {
        socket.current.disconnect();
      };
    }
  }, [userInfo]);

  return (
    <SocketContext.Provider value={socket.current}>
      {children}
    </SocketContext.Provider>
  );
};
