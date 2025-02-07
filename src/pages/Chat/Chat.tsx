import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { BsSendFill } from 'react-icons/bs';


interface User {
  id: string;
  name: string;
  avatar: string;
  username: string;
  online: boolean;
  lastSeen?: string;
}

interface Message {
  id: string;
  senderId: string;
  content: string;
  timestamp: string;
  isRead: boolean;
}

interface Chat {
  id: string;
  user: User;
  messages: Message[];
  unreadCount: number;
}

const ChatPage: React.FC = () => {
  const currentUserId = "u1";
  const [showChatList, setShowChatList] = useState(true);
  
  const [chats, setChats] = useState<Chat[]>([
    {
      id: "chat1",
      user: {
        id: "u2",
        name: "Sarah Parker",
        avatar: "https://plus.unsplash.com/premium_photo-1663054774427-55adfb2be76f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlfGVufDB8fDB8fHww",
        username: "bookworm_sarah",
        online: true
      },
      messages: [
        {
          id: "m1",
          senderId: "u2",
          content: "Have you started reading Project Hail Mary yet?",
          timestamp: "2:30 PM",
          isRead: true
        },
        {
          id: "m2",
          senderId: "u1",
          content: "Just started it! The opening chapter is incredible.",
          timestamp: "2:32 PM",
          isRead: true
        }
      ],
      unreadCount: 0
    },
    {
      id: "chat2",
      user: {
        id: "u3",
        name: "Book Club",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fHww",
        username: "bookclub",
        online: true
      },
      messages: [
        {
          id: "m3",
          senderId: "u3",
          content: "Next week's book: Dune by Frank Herbert",
          timestamp: "1:15 PM",
          isRead: false
        }
      ],
      unreadCount: 1
    }
  ]);

  const [selectedChat, setSelectedChat] = useState<Chat | null>(null);
  const [newMessage, setNewMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleChatSelect = (chat: Chat) => {
    setSelectedChat(chat);
    setShowChatList(false);
  };

  const handleBack = () => {
    setShowChatList(true);
    setSelectedChat(null);
  };

  const handleSendMessage = () => {
    if (!newMessage.trim() || !selectedChat) return;

    const newMsg: Message = {
      id: `m${Date.now()}`,
      senderId: currentUserId,
      content: newMessage,
      timestamp: "Just now",
      isRead: false
    };

    setChats(chats.map(chat => 
      chat.id === selectedChat.id
        ? { ...chat, messages: [...chat.messages, newMsg] }
        : chat
    ));

    setSelectedChat(prev => prev ? {
      ...prev,
      messages: [...prev.messages, newMsg]
    } : null);

    setNewMessage("");
  };

  const ChatList = () => (
    <>

    <div className={`w-full md:w-80 lg:w-96 bg-white border-r h-full 


      ${showChatList ? 'block' : 'hidden md:block'}`}>
      <div className="p-4 border-b">
        <input
          type="text"
          placeholder="Search conversations..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 border rounded-lg"
        />
      </div>

      <div className="overflow-y-auto h-[calc(100vh-73px)]">
        {chats.map(chat => (
          <div
            key={chat.id}
            onClick={() => handleChatSelect(chat)}
            className={`p-4 border-b cursor-pointer hover:bg-gray-50 
              ${selectedChat?.id === chat.id ? 'bg-blue-50' : ''}`}
          >
            <div className="flex items-center">
              <div className="relative">
                <img
                  src={chat.user.avatar}
                  alt={chat.user.name}
                  className="w-12 h-12 rounded-full"
                />
                {chat.user.online && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                )}
              </div>
              <div className="ml-4 flex-1 min-w-0">
                <div className="flex justify-between">
                  <h3 className="font-semibold truncate">{chat.user.name}</h3>
                  <span className="text-sm text-gray-500 whitespace-nowrap ml-2">
                    {chat.messages[chat.messages.length - 1]?.timestamp}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-600 truncate">
                    {chat.messages[chat.messages.length - 1]?.content}
                  </p>
                  {chat.unreadCount > 0 && (
                    <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full ml-2">
                      {chat.unreadCount}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );

  const ChatWindow = () => (
    <div className={`flex-1 flex flex-col h-full 
      ${!showChatList ? 'block' : 'hidden md:block'}`}>
      {selectedChat ? (
        <>
          <div className="p-4 border-b bg-white flex items-center">
            <button 
              onClick={handleBack}
              className="mr-4 p-2 hover:bg-gray-100 rounded-full transition-colors md:hidden"
              aria-label="Back to chat list"
            >
              <ArrowLeft className="w-6 h-6 text-gray-600" />
            </button>
            <img
              src={selectedChat.user.avatar}
              alt={selectedChat.user.name}
              className="w-10 h-10 rounded-full"
            />
            <div className="ml-4">
              <h3 className="font-semibold">{selectedChat.user.name}</h3>
              <p className="text-sm text-gray-500">
                {selectedChat.user.online ? 'Online' : `Last seen ${selectedChat.user.lastSeen}`}
              </p>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
            {selectedChat.messages.map(message => (
              <div
                key={message.id}
                className={`mb-4 flex ${
                  message.senderId === currentUserId ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[70%] p-3 rounded-lg ${
                    message.senderId === currentUserId
                      ? 'bg-blue-500 text-white'
                      : 'bg-white'
                  }`}
                >
                  <p className="break-words">{message.content}</p>
                  <div className={`text-xs mt-1 ${
                    message.senderId === currentUserId
                      ? 'text-blue-100'
                      : 'text-gray-500'
                  }`}>
                    {message.timestamp}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type a message..."
                className="flex-1 p-2 border rounded-lg"
              />
              <button
                onClick={handleSendMessage}
                className="px-4 py-2 text-base border rounded-full border-base w-12 h-12"
              >
              <BsSendFill />
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="flex-1 flex items-center justify-center bg-gray-50">
          <p className="text-gray-500">Select a chat to start messaging</p>
        </div>
      )}
    </div>
  );

  return (
    <>
     
    <div className="flex h-screen bg-gray-100">
      <ChatList />
      <ChatWindow />
    </div>
    </>
  );
};

export default ChatPage;