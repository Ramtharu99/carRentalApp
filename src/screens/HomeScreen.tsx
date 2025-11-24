import { View, FlatList, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import CarCard from "../components/CarCard";
import assets from "../../assets";
import Header from "../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import CarBrandItem from "../components/CarBrand";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const { tesla, white_car } = assets;
  const navigation = useNavigation<any>();

  // Brands
  const brands = [
    { id: 1, name: "Tesla" },
    { id: 2, name: "BMW" },
    { id: 3, name: "Audi" },
    { id: 4, name: "Mercedes" },
  ];

  // Cars data
  const cars = [
    { id: 1, title: "Tesla Model 3", location: "Gaushala", seat: 4, price: 20000, rate: 4.5 },
    { id: 2, title: "BMW X5", location: "Lazimpat", seat: 5, price: 25000, rate: 4.7 },
    { id: 3, title: "Audi A6", location: "Bhaisepati", seat: 4, price: 22000, rate: 4.3 },
    { id: 4, title: "Mercedes GLC", location: "Bhaktapur", seat: 5, price: 27000, rate: 4.6 },
  ];

  const [searchText, setSearchText] = useState("");
  const [filteredCars, setFilteredCars] = useState(cars);

  const handleSearch = (text: string) => {
    setSearchText(text);
    if (text.trim() === "") {
      setFilteredCars(cars);
    } else {
      const filtered = cars.filter((car) =>
        car.title.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredCars(filtered);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <Header
        type="home"
        badgeCount={3}
        centerTitle={false}
        onNotificationPress={() => navigation.navigate("NotificationScreen")}
        onAccount={() => navigation.navigate("Account")}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        stickyHeaderIndices={[0]}
      >
        {/* SearchBar */}
        <SearchBar
          showFilter={true}
          placeholder="Search for cars..."
          onChangeText={handleSearch}
        />

        {/* Brands Section */}
        <View className="mt-6 px-4">
          <Text className="text-3xl font-bold mb-4">Brands</Text>
          <FlatList
            data={brands}
            horizontal
            showsHorizontalScrollIndicator={false}
            nestedScrollEnabled={true}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <CarBrandItem image={tesla} name={item.name} layout="column" />
            )}
            ItemSeparatorComponent={() => <View className="w-4" />}
          />
        </View>

        {/* Cars Section */}
        <View className="flex-1 bg-slate-100 rounded-tl-3xl rounded-tr-3xl p-4 mt-4 mb-20">
          <View className="flex-row justify-between">
            <Text className="text-3xl font-bold">Best Cars</Text>
            <Text className="text-sm text-gray-500">View all</Text>
          </View>

          <FlatList
            data={filteredCars}
            numColumns={2}
            nestedScrollEnabled={true}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <View className="flex-1 mb-4">
                <CarCard
                  image={white_car} 
                  title={item.title}
                  location={item.location}
                  seat={item.seat}
                  price={item.price}
                  rate={item.rate}
                />
              </View>
            )}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <View />}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
