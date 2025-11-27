import { View, Text } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import StepIndicator from "../components/StepIndicator";
import { Switch } from "react-native-paper";
import Input from "../components/Input";

const BookingScreen = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isOn, setIsOn] = useState<boolean>(false)

  const steps = [
    { label: "Booking details" },
    { label: "Payment methods" },
    { label: "Confirmation" },
  ];

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <Header type="back" title="Booking Details" />
      <View className="px-6 mt-6">
        <StepIndicator steps={steps} currentStep={currentStep} />
        <View className="my-4 py-4 flex-row items-center justify-between bg-white rounded-xl px-2 shadow-lg shadow-gray-400">
          <View className="px-2">
            <Text className="text-lg text-black font-bold">Book With Drive</Text>
            <Text className="text-sm text-gray-300">Don't have a drive? book with driver.</Text>
          </View>
            <Switch 
            value={isOn}
            onValueChange={setIsOn}
            thumbColor="black"
            trackColor={{
              false: "gray",
              true: "#21292b"
            }}
             />
        </View>
        <View className="gap-4">
          <Input placeholderText="" leftIcon={""} />
          <Input />
          <Input />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BookingScreen;
