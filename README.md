
# Amigos
**Amigos ChatApp** is a real-time messaging and community chat application built using **React** and **Socket.IO**. It enables users to engage in instant messaging within private chats or community groups. The app supports real-time text-based conversations and includes **file transfer** functionality, allowing users to share documents and media seamlessly. Additionally, the app provides **image transfer** capabilities, enhancing the communication experience with visual content sharing in both individual and group chats.

## Table of Contents

- [Project Overview](#project-overview)
- [Requirements](#requirements)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Prototype Images](#prototype-images)
- [License](#license)

## Project Overview

### Key Features
- **Real-Time Messaging:** Users can engage in live conversations, with instant message delivery and receipt powered by Socket.IO.
- **Community Chats:** Create and participate in group chats for team collaboration or community discussions.
- **File Transfer:** Effortlessly send and receive files, including documents, videos, and other attachments.
- **Image Sharing:** Directly transfer images within chat windows, enhancing the interactive experience.
- **Responsive UI:** The app offers a smooth and responsive user interface, optimized for both desktop and mobile views.

### Technologies Used
- **React:** Frontend framework for building the user interface.
- **Node.js & Express:** Backend server for managing chat communication, file uploads, and user authentication.
- **Socket.IO:** Real-time, WebSocket-based communication for messaging.
- **Zustand:** State management for efficient global state handling in the app.
- **Axios:** HTTP client for making API requests.
- **Multer:** Middleware for handling file uploads (file and image transfers).
- **Bcrypt:** Secure password hashing for user authentication.
- **JSON Web Token (JWT):** Authentication mechanism using tokens for secure communication.
- **Tailwind CSS & shadcn:** Utility-first CSS framework and components for building a responsive and consistent UI.

## Requirements
To run the AMigos Chat App, make sure your system meets the following requirements:

- **Node.js:** Version 14.x or higher
- **NPM:** Version 6.x or higher (comes bundled with Node.js)
- **Operating System:** Cross-platform (Windows, macOS, Linux)
- **Browser:** Latest version of Chrome, Firefox, Safari, or Edge

## Installation

### Clone the Repository

```bash
git clone https://github.com/krishnaGauss/ChatRooms.git
```
### Install Dependencies

- Install Frontend Dependencies:
In project root directory;

```bash
cd client
npm i
```

- Install Backend Dependencies:
In project root directory;

```bash
cd server
npm i
```

### Creating `.env` files 
- In `client` directory setup a `.env` file with the following attributes;
```text
VITE_SERVER_URL = <Your VITE_SERVER_URL>/Backend Server URL
```
- In `server` directory setup a `.env` file with the following attributes;
```text
PORT = <Server Port>
JWT_KEY = <Your preferred JWT Secret Key>
ORIGIN = <Frontend Running URL>
DATABASE_URL = <Your MONGO URL>
```

## Running the Application

### Running Frontend 

In root directory; 
```bash
cd client
npm run dev
```
### Running Backend 

In root directory; 
```bash
cd server
npm run dev
```

## Prototype Images

###  Authorisation Page

![Authorisation Screenshot](../ChatRooms/assets/Screenshot%20(49).png)

### Profile Setup Page

![Profile Screenshot](../ChatRooms/assets/Screenshot%20(54).png)

### Chat Interface

![Chats Screenshot](../ChatRooms/assets/Screenshot%20(50).png)

### Direct Messages UI

![DM Screenshot](../ChatRooms/assets/Screenshot%20(51).png)

### Channel Messages UI

![Channel Messages Screenshot](../ChatRooms/assets/Screenshot%20(52).png)

## License

MIT License

Copyright (c) `2024` `Krishna Goswami`

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.