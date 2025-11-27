import React from "react";
import { View, Text } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

interface StepProps {
  label: string;
}

interface StepIndicatorProps {
  steps: StepProps[];
  currentStep: number;
}

const StepIndicator = ({ steps, currentStep }: StepIndicatorProps) => {
  return (
    <View className="flex-row items-center justify-between relative">
      {steps.map((step, index) => {
        const isActive = index === currentStep;
        const isCompleted = index < currentStep;
        const isUpcoming = index > currentStep;

        return (
          <View key={index} className="flex-1 items-center relative">
            {/* CONNECTING LINE */}
            {index !== steps.length - 1 && (
              <View
                className={`absolute top-3 left-1/2 -ml-1 w-full h-[2px] ${
                  isCompleted ? "bg-black" : "bg-gray-300"
                }`}
                style={{ zIndex: 0 }}
              />
            )}

            {/* OUTER CIRCLE */}
            <View
              className={`h-6 w-6 rounded-full bg-black justify-center items-center`}
              style={{ zIndex: 1 }}
            >
              {/* Content inside the circle */}
              {isCompleted ? (
                <MaterialIcons name="check" size={16} color="white" />
              ) : isActive ? (
                <View className="h-3 w-3 rounded-full bg-white" />
              ) : null}
            </View>

            {/* LABEL */}
            <Text
              className={`text-xs mt-2 font-semibold ${
                isActive || isCompleted ? "text-black" : "text-gray-400"
              }`}
            >
              {step.label}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

export default StepIndicator;
