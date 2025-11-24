import React from "react";
import { View, Pressable } from "react-native";
import Octicons from "react-native-vector-icons/Octicons";
import Input from "./Input";

interface Props {
  placeholder?: string;
  showFilter?: boolean;
  onFilterPress?: () => void;
  onChangeText?: (text: string) => void;
}

const SearchBar = ({
  placeholder = "Search your dream car...",
  showFilter = true,
  onFilterPress,
  onChangeText
}: Props) => {
  return (
    <View className="flex-row gap-4 w-full px-4 items-center py-2 bg-background">
      <View className="flex-1">
        <Input placeholderText={placeholder} leftIcon="magnify" onChangeText={onChangeText} />
      </View>

      {showFilter && (
        <Pressable
          onPress={onFilterPress}
          className="h-11 w-11 rounded-full border bg-white border-gray-300 items-center justify-center"
        >
          <Octicons name="filter" size={26} />
        </Pressable>
      )}
    </View>
  );
};

export default SearchBar;
