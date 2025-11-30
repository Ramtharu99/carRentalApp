import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import assets from '../../assets';

interface ChatPersonCompProps {
  name: string;
  lastMessage: string;
  time: string;
  unreadCount?: number; 
  userImage?: any;
  onPress?: () => void;
}

const ChatPersonComp = ({
  name,
  lastMessage,
  time,
  unreadCount = 0,
  userImage,
  onPress,
}: ChatPersonCompProps) => {
  const { person } = assets;

  return (
    <TouchableOpacity
      onPress={onPress}
      className={`flex-row items-center p-4 my-2 rounded-lg shadow-sm ${
        unreadCount > 0 ? 'bg-gray-100' : 'bg-white'
      }`}
    >
      {/* USER IMAGE */}
      <Image
        source={userImage || person}
        className="h-14 w-14 rounded-full"
      />

      {/* NAME & MESSAGE */}
      <View className="flex-1 ml-4 justify-center">
        <Text
          className={`text-lg font-semibold ${
            unreadCount > 0 ? 'text-black' : 'text-gray-800'
          }`}
        >
          {name}
        </Text>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          className={`text-sm mt-1 ${
            unreadCount > 0 ? 'font-bold text-black' : 'text-gray-500'
          }`}
        >
          {lastMessage}
        </Text>
      </View>

      {/* TIME & UNREAD BADGE */}
      <View className="flex-col gap-2 justify-center items-center">
        {unreadCount > 0 && (
          <View className="bg-red-500 h-6 w-6 flex rounded-full items-center justify-center mt-1">
            <Text className="text-white text-xs font-bold">{unreadCount}</Text>
          </View>
        )}
        <Text className="text-xs text-gray-400">{time}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ChatPersonComp;
