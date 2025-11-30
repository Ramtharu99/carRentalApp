import React from 'react';
import { View, Text, Modal, Pressable } from 'react-native';

interface PaymentMethodProps {
  visible: boolean;
  onClose: () => void;
  onSelectPayment: (method: string) => void;
}

const PaymentMethodComp = ({ visible, onClose , onSelectPayment}: PaymentMethodProps) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose} 
    >
      <View className="flex-1 justify-end bg-black/40">
        <View className="bg-white p-6 rounded-t-2xl">
          {/* Title */}
          <Text className="text-lg font-bold mb-4">Select Payment Method</Text>

          {/* Payment Options */}
          <Pressable
            className="bg-gray-200 rounded-xl p-4 mb-3"
            onPress={() => onSelectPayment('Credit Card')}
          >
            <Text>Credit Card</Text>
          </Pressable>

          <Pressable
            className="bg-gray-200 rounded-xl p-4 mb-3"
            onPress={() => onSelectPayment('Cash Payment')}
          >
            <Text>Cash Payment</Text>
          </Pressable>

          {/* Close Button */}
          <Pressable
            className="bg-gray-500 rounded-xl p-3 items-center mt-2"
            onPress={onClose}
          >
            <Text className="text-white">Close{' '}</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default PaymentMethodComp;
