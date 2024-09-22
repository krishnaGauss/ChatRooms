import { useAppStore } from "@/store";
import { RiCloseFill } from "react-icons/ri";
import { HOST } from "@/utils/constants";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { getColor } from "@/lib/utils";

function ChatHeader() {
  const { closeChat, selectedChatData, selectedChatType } = useAppStore();

  return (
    <div className="h-[10vh] border-b-2 border-[#2f303b] flex items-center justify-between px-20">
      <div className="flex gap-5 items-center justify-between w-full">
        <div className="flex gap-3 items-center justify-center">
          <div className="flex items-center justify-center gap-5">
            <button
              className="text-neutral-500 focus:border-none focus:outline-none focus:text-white duration-300 transition-all"
              onClick={closeChat}
            >
              <RiCloseFill className="text-3xl" />
            </button>
          </div>
          <div className="w-12 h-12 relative">
            <Avatar className="h-12 w-12  rounded-full overflow-hidden">
              {selectedChatData.image ? (
                <AvatarImage
                  src={`${HOST}/${selectedChatData.image}`}
                  alt="profile"
                  className="object-cover w-full h-full bg-black"
                />
              ) : (
                <div
                  className={`uppercase h-12 w-12  text-lg border-[1px] flex items-center justify-center rounded-full ${getColor(
                    selectedChatData.color
                  )}`}
                >
                  {selectedChatData.firstName
                    ? selectedChatData.firstName.split("").shift()
                    : selectedChatData.email.split("").shift()}
                </div>
              )}
            </Avatar>
          </div>
          {selectedChatType === "contact" && (
            <div className="flex flex-col">
              <span>
                {selectedChatData.firstName && selectedChatData.lastName
                  ? `${selectedChatData.firstName} ${selectedChatData.lastName}`
                  : selectedChatData.email}
              </span>
              <span className="text-xs">{selectedChatData.email}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ChatHeader;