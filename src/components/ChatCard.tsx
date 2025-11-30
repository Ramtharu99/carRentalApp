import { View, Text } from 'react-native';
import React from 'react';

interface ChatCardProps {
  message: string;
  time: string;
  type: "sent" | "received"; // "sent" = your message, "received" = other person
}

const ChatCard: React.FC<ChatCardProps> = ({ message, time, type }) => {
  const isSent = type === "sent";

  return (
    <View className={`my-2 flex-row w-full ${isSent ? "justify-end" : "justify-start"}`}>
      
      {/* Chat Bubble */}
      <View
        className={`max-w-[70%] p-3 rounded-lg shadow-sm ${
          isSent
            ? "bg-black rounded-bl-none"
            : "bg-gray-200 rounded-br-none"  
        }`}
      >
        {/* Message Text */}
        <Text className={`${isSent ? "text-white" : "text-black"} text-base`}>
          {message}
        </Text>

        {/* Time */}
        <Text className={`text-xs mt-1 ${isSent ? "text-white/70" : "text-gray-500"}`}>
          {time}
        </Text>
      </View>
    </View>
  );
};

export default ChatCard;
