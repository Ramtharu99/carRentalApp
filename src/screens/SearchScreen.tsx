import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import Header from "../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, ScrollView, Text, View } from "react-native";
import assets from "../../assets";
import CarBrandItem from "../components/CarBrand";
import CarCard from "../components/CarCard";

const SearchScreen = () => {
  const { tesla, white_car } = assets;
  const [selectedId, setSelectedId] = useState<number | null>(null);

  // Brands
  const brands = [
    { id: 1, name: "Brand 1" },
    { id: 2, name: "Brand 2" },
    { id: 3, name: "Brand 3" },
    { id: 4, name: "Brand 4" },
  ];

  // Cars data (you can add real data here)
  const cars = [
    { id: 1, title: "Tesla Model 3", location: "Gaushala", seat: 4, price: 20000, rate: 4.5 },
    { id: 2, title: "BMW X5", location: "Lazimpat", seat: 5, price: 25000, rate: 4.7 },
    { id: 3, title: "Audi A6", location: "Bhaisepati", seat: 4, price: 22000, rate: 4.3 },
    { id: 4, title: "Mercedes GLC", location: "Bhaktapur", seat: 5, price: 27000, rate: 4.6 },
    { id: 5, title: "Tesla Model X", location: "Baneshwor", seat: 7, price: 35000, rate: 4.8 },
    { id: 6, title: "BMW i8", location: "Kapan", seat: 2, price: 30000, rate: 4.4 },
  ];

  const [filteredCars, setFilteredCars] = useState(cars);

  // Search handler
  const handleSearch = (text: string) => {
    if (text.trim() === "") {
      setFilteredCars(cars);
    } else {
      setFilteredCars(
        cars.filter((car) => car.title.toLowerCase().includes(text.toLowerCase()))
      );
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Header type="back" title="Search" />
      <ScrollView showsVerticalScrollIndicator={false} bounces={false} stickyHeaderIndices={[0]}>
        {/* SearchBar */}
        <SearchBar showFilter={true} onChangeText={handleSearch} placeholder="Search cars..." />

        {/* Car Brands */}
        <View className="mt-6 px-4">
          <FlatList
            data={brands}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <CarBrandItem
                size="sm"
                selected={selectedId === item.id}
                image={tesla}
                name={item.name}
                layout="row"
                onPress={() => setSelectedId(item.id)}
              />
            )}
            ItemSeparatorComponent={() => <View className="w-4" />}
          />
        </View>

        {/* Best Cars */}
        <View className="flex-1 bg-slate-100 rounded-tl-3xl rounded-tr-3xl p-4 mt-4 mb-20">
          <View className="flex-row justify-between items-center">
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
                  buttonText="Book Now"
                  onButtonPress={() => console.log("Book now")}
                />
              </View>
            )}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchScreen;
