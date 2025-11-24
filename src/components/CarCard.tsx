import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import assets from '../../assets'

const CarCard = () => {

  const { white_car } = assets

  return (
    <Pressable className="bg-white rounded-2xl w-60 shadow-md mr-4 overflow-hidden">
      <View className="absolute top-3 right-3 bg-white p-1 rounded-full border border-gray-300"
        style={{ zIndex: 10 }}  
      >
        <Ionicons name="heart-outline" size={20} color="black" />
      </View>
      <View className="w-full bg-gray-100 rounded-xl items-center justify-center h-36">
        <Image 
          source={white_car} 
          className="w-full h-full"
          resizeMode="cover"
        />
      </View>

      <View className="p-3">
        <Text className="text-lg font-semibold">Tesla</Text>

        {/* Rating */}
        <View className="flex-row items-center mt-1">
          <Text className="text-gray-600 text-sm">5.0{' '}</Text>
          <FontAwesome name="star" size={14} color="orange" className="ml-1" />
        </View>

        {/* Location */}
        <View className="flex-row items-center mt-1">
          <Ionicons name="location-outline" size={16} color="gray" />
          <Text className="ml-1 text-gray-500 text-sm">Chicago, USA {' '}</Text>
        </View>
        <View className="flex-row justify-between mt-3">

          <View className="flex-row items-center">
            <MaterialIcons name="event-seat" size={18} color="gray" />
            <Text className="ml-1 text-gray-600 text-sm">5 Seats</Text>
          </View>

          <Text className="font-semibold text-black text-base">
            $100/Day
          </Text>
        </View>

      </View>

    </Pressable>
  )
}

export default CarCard
