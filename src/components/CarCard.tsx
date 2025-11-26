import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import assets from '../../assets'
import Favorite from './Favorite'

interface CarCardProps {
  title?: string;
  image?: any;
  location?: string;
  seat?: number;
  price?: number;
  rate?: number;
  viewDetails?: () => void;
  buttonText?: string; 
  onButtonPress?: () => void; 
}

const CarCard = ({
  title = "Car Name",
  image,
  location = "Unknown",
  seat = 4,
  price = 0,
  rate = 0,
  viewDetails,
  buttonText,
  onButtonPress
}: CarCardProps) => {

  const { white_car } = assets

  return (
    <Pressable onPress={viewDetails} className="bg-white rounded-2xl m-2 shadow-md overflow-hidden">
      {/* Favorite Icon */}
      <Favorite />

      {/* Car Image */}
      <View className="w-full bg-gray-100 rounded-xl items-center justify-center h-36">
        <Image 
          source={ image ? image : white_car} 
          className="w-full h-full"
          resizeMode="cover"
        />
      </View>

      {/* Car Info */}
      <View className="p-3">
        <Text className="text-lg font-semibold text-black">{title}</Text>

        {/* Rating */}
        <View className="flex-row items-center mt-1">
          <FontAwesome name="star" size={14} color="orange" />
          <Text className="text-gray-600 text-sm ml-1">{rate}</Text>
        </View>

        {/* Location */}
        <View className="flex-row items-center mt-1">
          <Ionicons name="location-outline" size={16} color="gray" />
          <Text className="ml-1 text-gray-500 text-sm">{location}</Text>
        </View>

        {/* Seat */}
        <View className="flex-row items-center mt-3">
          <MaterialIcons name="event-seat" size={18} color="gray" />
          <Text className="ml-1 text-gray-600 text-sm">{seat}</Text>
        </View>

        {/* Price + Optional Button */}
        <View className="flex-row justify-between mt-2 items-center">
          <Text className="font-semibold text-black text-base">{price}/day</Text>
          {buttonText && onButtonPress && (
            <Pressable
              onPress={onButtonPress}
              className="bg-button px-3 py-2 rounded-full"
            >
              <Text className="text-white font-semibold">{buttonText}</Text>
            </Pressable>
          )}
        </View>
      </View>
    </Pressable>
  )
}

export default CarCard
