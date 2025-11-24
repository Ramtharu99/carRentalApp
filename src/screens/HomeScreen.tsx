import { View, FlatList, Text, Pressable, Image } from "react-native";
import React, { useEffect } from "react";
import SearchBar from "../components/SearchBar";
import CarCard from "../components/CarCard";
import assets from "../../assets";
import Header from "../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import CarBrandItem from "../components/CarBrand";

const HomeScreen = () => {

  const { tesla } = assets;

  const brands = [
    { id: 1, name: "Brand 1" },
    { id: 2, name: "Brand 2" },
    { id: 3, name: "Brand 3" },
    { id: 4, name: "Brand 4" },
  ];

  return (
    <SafeAreaView className="flex-1 bg-background">
      
      <Header type="home" badgeCount={3} centerTitle={false} />

      <SearchBar />

      {/* Brands Section */}
      <View className="mt-6 px-4">
        <Text className="text-3xl font-bold mb-4">Brands</Text>
        <FlatList
        data={brands}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => {
          return <CarBrandItem image={tesla} name={item.name} layout="column" />
        }}
        ItemSeparatorComponent={() => <View className="w-4" />}
         />
      </View>

      {/* Car List Section */}
      <View className="flex-1 bg-slate-100 rounded-tl-3xl rounded-tr-3xl p-4 mt-4">
        <View className="flex-row justify-between">
          <Text className="text-3xl font-bold">Best Cars</Text>
          <Text className="text-sm text-gray-500">View all{" "}</Text>
        </View>

        <View className="flex-row my-4">
          <FlatList
          data={[1, 2, 3, 4]}
          // keyExtractor={(item) => item.id}
          numColumns={2}
          renderItem={({item}) => {
            return (
              <View className="flex-1 mb-4">
                <CarCard />
              </View>
            )
          }}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View className=""/>}
          />
        </View>
      </View>

    </SafeAreaView>
  );
};

export default HomeScreen;
