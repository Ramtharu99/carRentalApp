import React, { useState, useRef } from "react";
import {
  View,
  Text,
  Pressable,
  ScrollView,
  Modal,
  TouchableWithoutFeedback,
  Animated,
  PanResponder,
  Dimensions,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Slider from "@react-native-community/slider";
import DatePicker from "./DatePicker";
import { BottomSheetProps } from "../types/type";

const { height } = Dimensions.get("window");


const BottomSheet = ({ visible, onClose, title }: BottomSheetProps) => {
  const [carType, setCarType] = useState("All Cars");
  const [minPrice, setMinPrice] = useState(0);
  const maxPrice = 100000;
  const [rentalTime, setRentalTime] = useState("Hour");
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSeats, setSelectedSeats] = useState<number | null>(null);
  const [selectedFuel, setSelectedFuel] = useState<string | null>(null);

  const colors = ["Red", "Blue", "Black", "White", "Gray", "Silver"];
  const seats = [2, 4, 5, 7];
  const fuels = ["Petrol", "Diesel", "Electric", "Hybrid"];

  // Animated value for dragging
  const translateY = useRef(new Animated.Value(0)).current;

  // PanResponder only for header
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) => {
        return Math.abs(gestureState.dy) > 5;
      },
      onPanResponderMove: (_, gestureState) => {
        if (gestureState.dy > 0) translateY.setValue(gestureState.dy);
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy > 100) {
          Animated.timing(translateY, {
            toValue: height,
            duration: 200,
            useNativeDriver: true,
          }).start(() => {
            translateY.setValue(0);
            onClose();
          });
        } else {
          Animated.spring(translateY, {
            toValue: 0,
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;

  if (!visible) return null;

  return (
    <Modal transparent visible={visible} animationType="fade">
      {/* Overlay */}
      <TouchableWithoutFeedback onPress={onClose}>
        <View className="absolute inset-0 bg-black/40" />
      </TouchableWithoutFeedback>

      {/* Bottom Sheet */}
      <Animated.View
        style={{ transform: [{ translateY }] }}
        className="absolute bottom-0 w-full h-[90%] bg-white rounded-t-3xl overflow-hidden"
      >
        {/* Header with swipe-down */}
      <Animated.View {...panResponder.panHandlers} className="flex-row justify-between items-center p-4 border-b border-gray-200">
          <Text className="text-lg font-semibold">{title}</Text>
          <Pressable onPress={onClose}>
            <Ionicons name="close-outline" size={28} color="black" />
          </Pressable>
        </Animated.View>

        {/* Sticky Car Type */}
        <View className="bg-white p-3 border-b border-gray-200">
          <Text className="text-gray-700 text-lg font-semibold">Types of Cars</Text>
          <View className="flex-row gap-2 mt-2 border border-gray-400 rounded-full justify-between">
            {["All Cars", "Regular Cars", "Luxury Cars"].map((item) => (
              <Pressable
                key={item}
                onPress={() => setCarType(item)}
                className={`px-8 py-4 rounded-full ${
                  carType === item ? "bg-button" : "bg-gray-200"
                }`}
              >
                <Text
                  className={`font-semibold ${
                    carType === item ? "text-white" : "text-black"
                  }`}
                >
                  {item}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>

        {/* Scrollable Content */}
        <ScrollView className="px-4 py-3" showsVerticalScrollIndicator={false}>
          {/* Price Range */}
          <Text className="text-gray-700 font-semibold mt-2 text-lg">Price Range</Text>
          <View className="flex-row justify-between mt-1">
            <Text>{minPrice}</Text>
            <Text>{maxPrice}</Text>
          </View>
          <Slider
            minimumValue={0}
            maximumValue={maxPrice}
            step={1000}
            value={minPrice}
            onValueChange={(val) => setMinPrice(val)}
            className="mt-2 w-full"
            minimumTrackTintColor="#21292b"
            maximumTrackTintColor="#d1d5db"
          />

          {/* Rental Time */}
          <Text className="text-gray-700 font-semibold mt-4 text-lg">Rental Time</Text>
          <View className="flex-row gap-3 mt-2 justify-between">
            {["Hour", "Day", "Week", "Month"].map((t) => (
              <Pressable
                key={t}
                onPress={() => setRentalTime(t)}
                className={`px-8 py-4 rounded-full ${
                  rentalTime === t ? "bg-button" : "bg-gray-200"
                }`}
              >
                <Text
                  className={`${
                    rentalTime === t ? "text-white" : "text-black"
                  } font-semibold`}
                >
                  {t}
                </Text>
              </Pressable>
            ))}
          </View>

          {/* Calendar */}
          <Text className="text-gray-700 font-semibold mt-4 text-lg">Select Date</Text>
          <View className="border border-gray-300 rounded-xl mt-2 overflow-hidden">
            <DatePicker />
          </View>
          {/* Car Colors */}
          <Text className="text-gray-700 font-semibold mt-4 text-lg">Car Color</Text>
          <View className="flex-row flex-wrap gap-2 mt-2">
            {colors.map((c) => (
              <Pressable
                key={c}
                onPress={() => setSelectedColor(c)}
                className={`px-8 py-4 rounded-full border ${
                  selectedColor === c
                    ? "bg-button border-button"
                    : "border-gray-300"
                }`}
              >
                <Text
                  className={`${
                    selectedColor === c ? "text-white" : "text-black"
                  }`}
                >
                  {c + " "}
                </Text>
              </Pressable>
            ))}
          </View>

          {/* Seats */}
          <Text className="text-gray-700 font-semibold mt-4 text-lg">Sitting Capacity</Text>
          <View className="flex-row gap-3 mt-2 justify-between">
            {seats.map((s) => (
              <Pressable
                key={s}
                onPress={() => setSelectedSeats(s)}
                className={`px-8 py-4 rounded-full border ${
                  selectedSeats === s
                    ? "bg-button border-button"
                    : "border-gray-300"
                }`}
              >
                <Text
                  className={`${
                    selectedSeats === s ? "text-white" : "text-black"
                  }`}
                >
                  {s}
                </Text>
              </Pressable>
            ))}
          </View>

          {/* Fuel Type */}
          <Text className="text-gray-700 font-semibold mt-4 text-lg">Fuel Type</Text>
          <View className="flex-row gap-2 mt-2 justify-between">
            {fuels.map((f) => (
              <Pressable
                key={f}
                onPress={() => setSelectedFuel(f)}
                className={`px-8 py-4 rounded-full border ${
                  selectedFuel === f
                    ? "bg-button border-button"
                    : "border-gray-300"
                }`}
              >
                <Text
                  className={`${
                    selectedFuel === f ? "text-white" : "text-black"
                  } font-semibold`}
                >
                  {f}
                </Text>
              </Pressable>
            ))}
          </View>

          <View className="h-6" />
        </ScrollView>

        {/* Buttons */}
        <View className="flex-row justify-between px-4 pb-4">
          <Pressable
            onPress={() => {
              setMinPrice(0);
              setCarType("All Cars");
              setRentalTime("Hour");
              setSelectedDate(null);
              setSelectedColor(null);
              setSelectedSeats(null);
              setSelectedFuel(null);
            }}
            className="flex-1 bg-gray-300 p-4 rounded-xl mr-2"
          >
            <Text className="text-black text-center font-semibold">Reset</Text>
          </Pressable>

          <Pressable
            onPress={onClose}
            className="flex-1 bg-button p-4 rounded-xl ml-2"
          >
            <Text className="text-white text-center font-semibold">Apply</Text>
          </Pressable>
        </View>
      </Animated.View>
    </Modal>
  );
};

export default BottomSheet;
