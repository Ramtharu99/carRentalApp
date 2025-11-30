import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header'
import assets from '../../assets'
import { Divider } from 'react-native-paper'
import Button from '../components/Button'

const PaymentStatus = () => {

    const {status_success, status_failed} = assets

  return (
    <SafeAreaView className='flex-1'>
        <Header type='back' title='Payment Status' />
        <ScrollView className='px-4'>
            <View className='flex-1 items-center justify-center'>
                <Image source={status_success} resizeMode='contain'  tintColor="#43A047" className='h-56 w-56' />
                <Text className='text-black text-xl font-bold'>Payment Successful{' '}</Text>
                <Text className='text-gray-500 text-center my-2'>Your car rent Booking has been successfully {' '}</Text>
            </View>
                <View className="bg-white p-4 rounded-xl border border-gray-300 mt-4">
                {/* Title */}
                <Text className="text-xl text-black font-bold">Booking Information</Text>

                {/* Divider */}
                <Divider style={{ marginVertical: 10 }} />

                {/* Row: Label + Value */}
                <View className="flex-row justify-between items-center mb-3">
                    <Text className="text-gray-600">Car Model</Text>
                    <Text className="text-black font-semibold">Tesla Model 5</Text>
                </View>
                <View className="flex-row justify-between items-center mb-3">
                    <Text className="text-gray-600">Rental Date</Text>
                    <Text className="text-black font-semibold">19 jan 2025 10:00AM</Text>
                </View>
                <View className="flex-row justify-between items-center mb-3">
                    <Text className="text-gray-600">Name</Text>
                    <Text className="text-black font-semibold">John Snow</Text>
                </View>
            </View>
            <Divider className='my-4' />
            <View className=''>
                <Text className='text-xl text-black font-bold mb-3'>Transaction Details</Text>
                <View className='flex-row items-center justify-between mb-3'>
                    <Text className='text-gray-500 text-base'>Transaction ID</Text>
                    <Text className='text-black text-base font-bold'>#14568568 </Text>
                </View>
                <View className='flex-row items-center justify-between mb-3'>
                    <Text className='text-gray-500 text-base'>Transaction Date</Text>
                    <Text className='text-base text-black font-bold'>19 jan 2025 10:00AM </Text>
                </View>
                <View className='flex-row items-center justify-between mb-3'>
                    <Text className='text-gray-500 text-base'>Payment Method</Text>
                    <Text className='text-base text-black font-bold'>19 jan 2025 10:00AM </Text>
                </View>
            </View>
            <Divider className='my-4' />
            <View className='flex-row items-center justify-between'>
                <Text className='text-gray-500 text-base'>Amount </Text>
                <Text className='text-base text-black font-bold'>$1200</Text>
            </View>
            <View className='flex-row items-center justify-between'>
                <Text className='text-gray-500 text-base'>Service Amount </Text>
                <Text className='text-base text-black font-bold'>$12</Text>
            </View>
            <View className='flex-row items-center justify-between'>
                <Text className='text-gray-500 text-base'>Tax</Text>
                <Text className='text-base text-black font-bold'>$0</Text>
            </View>
            <Divider className='my-4' />
            <View className='flex-row items-center justify-between'>
                <Text className='text-base text-black font-bold'>Total Amount</Text>
                <Text className='text-base text-black font-bold'>$1212</Text>
            </View>
            <View className='my-4 gap-4'>
                <Button title='Download Receipt' containerClass='bg-gray-200 border border-gray-300' textClass='text-gray-500' />
                <Button title='Share your Receipt' containerClass='bg-white border border-gray-300' textClass='text-gray-500' />
            </View>
        </ScrollView>
        <View className='px-4'>
            <Button title='Confirm' containerClass='bg-button' textClass='text-white' />
        </View>
    </SafeAreaView>
  )
}

export default PaymentStatus