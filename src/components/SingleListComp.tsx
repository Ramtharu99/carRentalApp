import { View, Text, Pressable } from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


interface SingleListComptProps {
    text: string;
    iconName: string;
    onPress: () => void;
}

const SingleListComp = ({text, iconName, onPress}: SingleListComptProps) => {
  return (
    <Pressable className="flex-row items-center justify-between py-4" onPress={onPress}>
      <View className="flex-row items-center gap-4">
        <View className="h-10 w-10 rounded-full border border-gray-300 items-center justify-center">
          <MaterialCommunityIcons name={iconName} size={20} color="#000" />
        </View>
        <Text className="text-base font-medium">{text}</Text>
      </View>

      {/* RIGHT SIDE — CHEVRON */}
      <MaterialCommunityIcons 
        name={"chevron-right"} 
        color="#AEAEAE" 
        size={22} 
      />
    </Pressable>
  );
};

export default SingleListComp;
