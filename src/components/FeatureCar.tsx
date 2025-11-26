import React from "react";
import { View, Text, Image, Pressable, ViewStyle } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

interface FeatureCardProps {
  icon?: any;
  vectorIcon?: string;
  iconSize?: number;
  iconColor?: string;

  title: string;
  value: string;

  bgColor?: string;
  titleColor?: string;
  valueColor?: string;
  containerClass?: string;
  style?: ViewStyle; 
  onPress?: () => void;
}

const FeatureCard = ({
  icon,
  vectorIcon,
  iconSize = 26,
  iconColor = "#000",

  title,
  value,

  bgColor = "bg-gray-200",
  titleColor = "text-gray-600",
  valueColor = "text-black",
  containerClass = "",
  style,
  onPress
}: FeatureCardProps) => {
  return (
    <Pressable
      onPress={onPress}
      className={`rounded-xl p-4 ${bgColor} ${containerClass}`}
      style={[{ elevation: 2 }, style]} 
    >
      {/* ICON CONTAINER */}
      <View className="w-12 h-12 bg-white rounded-full items-center justify-center mb-3">
        {vectorIcon ? (
          <MaterialIcons name={vectorIcon} size={iconSize} color={iconColor} />
        ) : icon ? (
          <Image source={icon} className="w-7 h-7" resizeMode="contain" />
        ) : null}
      </View>

      {/* TITLE */}
      <Text className={`text-sm ${titleColor}`}>{title}</Text>

      {/* VALUE */}
      <Text className={`text-xl font-bold mt-1 ${valueColor}`}>{value}</Text>
    </Pressable>
  );
};

export default FeatureCard;
