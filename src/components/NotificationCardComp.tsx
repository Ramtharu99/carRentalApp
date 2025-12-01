import React from "react";
import { View, Text, Pressable, PressableProps } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

interface NotificationCardProps extends PressableProps {
  title: string;
  message: string;
  time: string;
  icon?: string;
  unread?: boolean;
}

const NotificationCardComp: React.FC<NotificationCardProps> = ({
  title,
  message,
  time,
  icon = "notifications",
  unread = false,
  ...props
}) => {
  return (
    <Pressable
      className="flex-row items-start p-4 bg-white rounded-xl border border-gray-300 mb-3"
      {...props}
    >
      {/* Icon Section */}
      <View className="w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center mr-3">
        <MaterialIcons name={icon} size={24} color="black" />
      </View>

      {/* Text Section */}
      <View className="flex-1">
        <View className="flex-row justify-between items-start">
          {/* Title */}
          <Text className="text-base font-semibold text-black">{title}</Text>

          {/* Time + Unread Dot */}
          <View className="flex-row items-center gap-1">
            <Text className="text-xs text-gray-500">{time} </Text>

            {/* Unread Dot */}
            {unread && (
              <View className="w-2.5 h-2.5 rounded-2xl bg-blue-600" />
            )}
          </View>
        </View>

        {/* Message */}
        <Text className="text-sm text-gray-600 mt-1">{message}</Text>
      </View>
    </Pressable>
  );
};

export default NotificationCardComp;
