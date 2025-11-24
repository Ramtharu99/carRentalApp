import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import Header from "../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import assets from "../../assets";
import CarBrandItem from "../components/CarBrand";

const SearchScreen = () => {

  const {tesla} = assets
  const [selectedId, setSelectedId] = useState<number | null>(null)

    const brands = [
    { id: 1, name: "Brand 1" },
    { id: 2, name: "Brand 2" },
    { id: 3, name: "Brand 3" },
    { id: 4, name: "Brand 4" },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Header type="back" title="Search" />
      <SearchBar showFilter={true} />
      <View className="flex-1 mt-6 px-4">
        <FlatList
          data={brands}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View className="flex-1">
              <CarBrandItem size="sm" selected={selectedId === item.id} image={tesla} name={item.name} layout="row" onPress={() => setSelectedId(item.id)} />
            </View>
          )}
          ItemSeparatorComponent={() => <View className="w-4" />}
          />
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
