import { View, Text, Pressable } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Favorite = () => {
  return (
    <Pressable className="absolute top-3 right-3 bg-white p-1 rounded-full border border-gray-300 z-10">
        <Ionicons name="heart-outline" size={20} color="black" />
    </Pressable>
  )
}

export default Favorite