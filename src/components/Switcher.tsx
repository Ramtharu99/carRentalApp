import { View, Text, Pressable } from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


interface OptionsProps{
    label: string;
    value: string
}

interface SwitcherProps {
  options: OptionsProps[];                
  activeIndex: number;             
  onChange: (index: number) => void;
  activeBg?: string;                
  inactiveBg?: string;              
  textActiveColor?: string;         
  textInactiveColor?: string;       
}

const Switcher = ({
  options,
  activeIndex,
  onChange,
  activeBg = "bg-primary",          
  inactiveBg = "bg-gray-200",
  textActiveColor = "text-white",
  textInactiveColor = "text-black"
}: SwitcherProps) => {
  return (
    <View className="flex-row items-center justify-between w-full">
      {options.map((item, index) => {
        const isActive = index === activeIndex;

        return (
          <Pressable
            key={index}
            onPress={() => onChange(index)}
            className={`flex-1 border border-black mx-1 px-4 py-4 rounded-full items-center ${
              isActive ? activeBg : inactiveBg
            }`}
          >
            <Text className={`${isActive ? textActiveColor : textInactiveColor} font-semibold`}>
              {item.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};

export default Switcher;
