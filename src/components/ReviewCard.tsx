import { View, Text, Image } from 'react-native'
import React from 'react'
import  FontAwesome  from 'react-native-vector-icons/FontAwesome';
import assets from '../../assets';

const ReviewCard = () => {

    const {person} = assets

  return (
    <View className="bg-white p-4 rounded-2xl shadow">         
        {/* Top row inside card: user + rating */}
        <View className="flex-row justify-between items-center">
            {/* User Info */}
            <View className="flex-row items-center">
                <Image source={person} className="h-14 w-14 rounded-full mr-3" />
                <View>
                    <Text className="text-base font-semibold">Mr Jack</Text>
                    <Text className="text-gray-500 text-sm">2 days ago</Text>
                </View>
                </View>
                <View className="flex-row items-center">
                    <Text className="text-lg font-semibold mr-1">5.0</Text>
                    <FontAwesome name="star" color="#FDD835" size={22} />
                </View>
            </View>
            <Text className="mt-3 text-gray-600">
            This car was amazing to drive! Super smooth, clean, and comfortable. Highly recommended.
        </Text>
    </View>
  )
}

export default ReviewCard