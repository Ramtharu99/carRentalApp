import { View, Text, Image } from 'react-native'
import React from 'react'
import assets from '../../assets'
import  FontAwesome  from 'react-native-vector-icons/FontAwesome';
import { Divider } from 'react-native-paper';

const Confirm = () => {

  const {white_car} = assets

  return (
    <View className='flex-1'>
      <View className='my-6'>  
        <Image source={white_car} resizeMode='cover' className='h-72 w-full rounded' />
      </View>
      <View className="flex-row justify-between items-start mb-4">
        <View className="max-w-[65%]">
          <Text className="text-2xl font-bold">Tesa model 5</Text>
            <Text className="text-gray-700">
            A Car with high specs that are rented at an affordable price
            </Text>
            </View>
      
            <View className="items-end">
            <View className="flex-row items-center">
            <Text className="text-lg font-semibold mr-1">5.0</Text>
            <FontAwesome name="star" size={20} color="#FDD835" />
          </View>
          <Text className="text-gray-600">(100+ Reviews){' '}</Text>
        </View>
      </View>
      {/* divider */}
      <Divider />
        <Text className='text-xl my-4 text-black font-bold'>Booking Information</Text>
        <View className='flex-row items-center justify-between mb-3'>
          <Text className='text-gray-500 text-base'>Booking ID{' '}</Text>
          <Text className='text-gray-500 text-base'>BookingId{' '}</Text>
        </View>
        <View className='flex-row items-center justify-between mb-3'>
          <Text className='text-gray-500 text-base'>Name{' '}</Text>
          <Text className='text-gray-500 text-base'>John Snow{' '}</Text>
        </View>
        <View className='flex-row items-center justify-between mb-3'>
          <Text className='text-gray-500 text-base'>Pick up Date{' '}</Text>
          <Text className='text-gray-500 text-base'>19 jan 2025 10:00AM{' '}</Text>
        </View>
        <View className='flex-row items-center justify-between mb-3'>
          <Text className='text-gray-500 text-base'>Return Date{' '}</Text>
          <Text className='text-gray-500 text-base'>20 jan 2025 12:45AM{' '}</Text>
        </View>
        <View className='flex-row items-center justify-between mb-3'>
          <Text className='text-gray-500 text-base'>Location{' '}</Text>
          <Text className='text-gray-500 text-base'>Gaushala, Kathamndu{' '}</Text>
        </View>
        <Divider />
        <Text className='text-xl my-4 text-black font-bold'>Payment</Text>
        <View className='flex-row items-center justify-between mb-3'>
          <Text className='text-gray-500 text-base'>Tax ID{' '}</Text>
          <Text className='text-black text-base font-bold'>#14568568{' '}</Text>
        </View>
        <View className='flex-row items-center justify-between mb-3'>
          <Text className='text-gray-500 text-base'>Amount{' '}</Text>
          <Text className='text-black text-base font-bold'>1200${' '}</Text>
        </View>
        <View className='flex-row items-center justify-between mb-3'>
          <Text className='text-gray-500 text-base'>Service Fee{' '}</Text>
          <Text className='text-black text-base font-bold'>$12{' '}</Text>
        </View>
        <View className='flex-row items-center justify-between mb-3'>
          <Text className='text-gray-500 text-base'>Return Date{' '}</Text>
          <Text className='text-black text-base font-bold'>20 jan 2025 12:45AM{' '}</Text>
        </View>
        <Divider />
        <View className='flex-row items-center justify-between mt-4'>
          <Text className='text-xl text-black font-bold'>Total Amount{' '}</Text>
          <Text className='text-black text-xl font-bold'>$1212{' '}</Text>
        </View>
        <View className='flex-row items-center justify-between mb-2 mt-4'>
          <Text className='text-base text-gray-500 font-bold'>Payment With{' '}</Text>
          <Text className='text-gray-500 text-base'>Cash{' '}</Text>
        </View>
    </View>
  )
}

export default Confirm