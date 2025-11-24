import React from "react";
import { Text, Pressable, Image } from "react-native";

interface CarBrandItemProps {
  image: any;
  name: string;
  layout?: "row" | "column";
  onPress?: () => void;
  selected?: boolean;
  size?: "sm" | "md" | "lg"; // Tailwind size
  textSize?: "sm" | "base" | "lg";
  padding?: "p-1" | "p-2" | "p-3";
}

const CarBrandItem = ({
  image,
  name,
  layout = "column",
  onPress,
  selected = false,
  size = "md",
  textSize = "base",
  padding = "p-1",
}: CarBrandItemProps) => {
  const isRow = layout === "row";

  const sizeClass = size === "sm" ? "w-12 h-12" : size === "lg" ? "w-20 h-20" : "w-16 h-16";
  
  return (
    <Pressable
      onPress={onPress}
      className={`
        ${isRow ? "flex-row items-start" : "flex-col items-center"} 
        mr-4 
        rounded-full 
        ${padding} 
        ${selected ? "bg-button" : "bg-transparent"}
      `}
    >
      <Image
        source={image}
        className={`${sizeClass} rounded-full border border-gray-300 ${isRow ? "mr-3" : "mb-2"}`}
      />
      <Text className={`mt-2 text-${textSize} ${selected ? "text-white" : "text-black"}`}>
        {name}
      </Text>
    </Pressable>
  );
};

export default CarBrandItem;
