import { View, Text } from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";
import Input from "../components/Input";

const PaymentMethod = () => {
  return (
    <View className="flex-1 py-6 bg-gray-100">
      <LinearGradient
        colors={['#1a1a1a', '#8B0000']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          borderRadius: 20,
          padding: 24,
          marginBottom: 24,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.3,
          shadowRadius: 8,
          elevation: 8,
        }}
      >
        <View className="flex-row justify-between items-start mb-6">
          <Text className="text-white text-lg font-bold">VISA</Text>
        </View>

        <Text className="text-white text-base font-semibold mb-2">JOHN DOE</Text>
        <Text className="text-gray-300 text-sm mb-4">Expire 12/26</Text>
        <Text className="text-white text-lg font-mono tracking-widest">
          2323 1223 2323 1234
        </Text>
      </LinearGradient>

      {/* Payment Method Input */}
      <Text className="text-gray-800 mb-2 font-semibold">Select Payment Method</Text>
      <Input placeholderText="Cash Payment" />
    </View>
  );
};

export default PaymentMethod;
