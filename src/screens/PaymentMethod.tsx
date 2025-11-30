import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import LinearGradient from "react-native-linear-gradient";
import Button from "../components/Button";
import  FontAwesome  from 'react-native-vector-icons/FontAwesome';
import PaymentMethodComp from "../components/PaymentMethodComp";
import Input from "../components/Input";
import CheckBox from "../components/CheckBox";
import { Divider } from "react-native-paper";

const PaymentMethod = () => {

  const [showPayment, setShowPayment] = useState(false)
  const [selectedPayment, setSelectedPayment] = useState('Credit Card')
  const [isChecked, setIsChecked] = useState<'checked' | 'unchecked'>('unchecked')

  const handleSelectPayment = (method: string) => {
    setSelectedPayment(method);
    setShowPayment(false);
  }

  return (
    <View className="flex-1 py-6 bg-gray-100">
      {/* Credit Card */}
      <LinearGradient
        colors={['#1a1a1a', '#8B0000']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          borderRadius: 20,
          padding: 24,
          marginBottom: 24,
          minHeight: 200, 
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.3,
          shadowRadius: 8,
          elevation: 8,
        }}
      >
        {/* VISA Text Right Aligned */}
        <View className="flex-row justify-end mb-6">
          <Text className="text-white text-lg font-bold">VISA</Text>
        </View>

        {/* Name and Expiry Date in Same Row */}
        <View className="flex-row gap-20 items-center mb-4">
          <Text className="text-white text-base font-semibold">JOHN DOE</Text>
          <Text className="text-gray-300 text-sm">Expire 12/26{' '}</Text>
        </View>

        {/* Card Number */}
        <Text className="text-white text-lg font-mono tracking-widest">
          2323 1223 2323 1234
        </Text>
      </LinearGradient>

      <View className="gap-2">
      <Text className="text-xl font-bold">Select Payment Method</Text>
      <Pressable onPress={() => setShowPayment(true)} className="bg-white border border-gray-300 rounded-lg p-4 flex-row justify-between items-center">
        <View className="flex-row gap-4 items-center">
          <FontAwesome name="money" size={20} />
          <Text className="text-sm text-gray-400">{selectedPayment + " "}</Text>
        </View>
        <Button
          title="DEFAULT"
          containerClass="bg-gray-300 px-2 py-[10px] rounded-full"
          textClass="text-black text-sm"
          onPress={() => setShowPayment(true)}
        />
      </Pressable>
      <PaymentMethodComp onSelectPayment={handleSelectPayment} visible={showPayment} onClose={() => setShowPayment(false)}  />
        <View className="gap-2 mt-4">
          <Text className="text-xl text-black font-bold">Card Information</Text>
          <Input placeholderText="Full Name" />
          <Input placeholderText="Email Address" />
          <Input placeholderText="Number" />
          <View className="flex-row items-center gap-2 w-full">
            {/* MM/YY input */}
            <View className="flex-1">
              <Input placeholderText="MM/YY" />
            </View>
            <View className="flex-1">
              <Input placeholderText="CVC" />
            </View>
          </View>
          <CheckBox 
          label="Terms & Continue " 
          status={isChecked == "unchecked" ? 'checked' : 'unchecked'} 
          onPress={() => setIsChecked(prev => (prev == 'unchecked' ? 'checked': 'unchecked'))}  />
            <View className="flex-row items-center my-6">
              {/* Left line */}
              <View className="flex-1 h-px bg-gray-300" />
              
              {/* Text */}
              <Text className="px-4 text-gray-500 font-semibold">Pay with card or</Text>
              
              {/* Right line */}
              <View className="flex-1 h-px bg-gray-300" />
            </View>
            <View className="flex-col items-center gap-3">
              {/* Apple Pay */}
              <Button
                title="Apple Pay "
                containerClass="bg-white w-full border border-gray-300"
                textClass="text-black text-base font-semibold"
              />
              <Button
                title="Google Pay"
                containerClass="w-full bg-white border border-gray-300"
                textClass="text-black text-base font-semibold"
              />
            </View>
        </View>
    </View>
    </View>
  );
};

export default PaymentMethod;
