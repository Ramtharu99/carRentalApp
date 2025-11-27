import { View, ScrollView } from "react-native";
import React, { useState } from "react";
import Header from "../components/Header";
import StepIndicator from "../components/StepIndicator";
import Button from "../components/Button";
import BookingDetails from "./BookingDetails";
import PaymentMethod from "./PaymentMethod";
import Confirm from "./Confirm";
import { SafeAreaView } from "react-native-safe-area-context";

const BookingScreen = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const steps = [
    { label: "Booking details" },
    { label: "Payment methods" },
    { label: "Confirmation" },
  ];

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <Header type="back" title="Booking Details" />

      {/* Step Indicator */}
      <View className="mt-4">
        <StepIndicator steps={steps} currentStep={currentStep} />
      </View>

      {/* Scrollable Content */}
      <ScrollView className="flex-1 mt-4">
        {currentStep === 0 && <BookingDetails />}
        {currentStep === 1 && <PaymentMethod />}
        {currentStep === 2 && <Confirm />}
      </ScrollView>

      {/* Bottom Buttons */}
      <View className="px-4 py-4 bg-gray-100">
        {currentStep === 0 && (
          <Button
            title="Pay Now"
            containerClass="bg-button"
            textClass="text-white"
            onPress={() => setCurrentStep(1)}
          />
        )}

        {currentStep === 1 && (
          <View className="gap-4"> 
            <Button
              title="Confirm Payment"
              containerClass="bg-button"
              textClass="text-white"
              onPress={() => setCurrentStep(2)}
            />
            <Button
              title="Back"
              containerClass="bg-gray-300"
              textClass="text-black"
              onPress={() => setCurrentStep(0)}
            />
          </View>
        )}

        {currentStep === 2 && (
          <View className="gap-4">
            <Button
              title="Confirm"
              containerClass="bg-button"
              textClass="text-white"
              onPress={() => console.log("Booking Finished")}
            />
            <Button
              title="Back"
              containerClass="bg-gray-300"
              textClass="text-black"
              onPress={() => setCurrentStep(1)}
            />
          </View>
        )}
      </View>

    </SafeAreaView>
  );
};

export default BookingScreen;
