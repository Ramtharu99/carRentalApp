import { Text, Pressable, Image } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'

interface ButtonProps {
  title: string;
  onPress?: () => void;
  containerClass?: string;
  textClass?: string;
  icon?: string;
}

const Button = ({
  title,
  onPress,
  containerClass = "",
  textClass = "",
  icon
}: any) => {
  return (
    <Pressable
      onPress={onPress}
      className={`py-4 px-6 flex-row gap-2 rounded-full items-center justify-center ${containerClass}`}
    >
      {icon && (
        <AntDesign name={icon} size={24} color="black" />
      )}
      <Text className={`font-semibold text-lg ${textClass}`}>
        {title}
      </Text>
    </Pressable>
  )
}

export default Button
