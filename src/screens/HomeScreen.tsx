import { View, Text, Image, Pressable, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import assets from '../../assets'
import Octicons from "react-native-vector-icons/Octicons"
import Input from '../components/Input'

const HomeScreen = () => {

    const {logo_black, person} = assets;

     const brands = [
    { id: 1, name: 'Brand 1', image: '' },
    { id: 2, name: 'Brand 2', image: '' },
    { id: 3, name: 'Brand 3', image: '' },
    { id: 4, name: 'Brand 4', image: '' },
    { id: 5, name: 'Brand 5', image: '' },
    { id: 6, name: 'Brand 6', image: '' },
  ];

  return (
    <SafeAreaView className='flex-1'>
        <View className='border-b border-b-gray-300 py-2'>
        <View className='flex-row items-center gap-2 py-2 px-4'>
            <Image source={logo_black} className='h-9 w-9' />
            <Text className='text-xl text-black font-extrabold'>Rental</Text>
            <View className='flex-row items-end gap-4 ml-auto'>
                <Pressable className='h-11 w-11 rounded-full border bg-white border-gray-300 items-center justify-center'>
                    <Octicons name='bell' size={22} />
                </Pressable>
                <Pressable className='h-11 w-11 rounded-full border bg-white border-gray-300 items-center justify-center'>
                    <Image source={person} className='h-8 w-8' />
                </Pressable>
            </View>
        </View>
        </View>
            <View className='flex-row gap-4 w-full px-4 items-center'>
                <View className='flex-1'>
            <Input placeholderText="Search your dream car..." leftIcon="magnify" onChangeText={(text) => console.log(text)} />
                </View>
                <Pressable className='h-11 w-11 rounded-full mt-5 border bg-white border-gray-300 items-center justify-center'>
                    <Octicons name='filter' size={30} className='mt-2' />
                </Pressable>
            </View>
                <View className="mt-4 px-4">
      <Text className="text-3xl font-bold my-2">Brands</Text>
      <FlatList
        data={brands}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={({ item }) => (
          <View className="flex-row items-center mb-4 gap-3">
            <Image
              source={{ uri: item.image }}
              className='w-14 h-14'
              resizeMode='contain'
            />
            <Text className="mt-2 text-sm font-Poppins">{item.name}</Text>
          </View>
        )}
      />
    </View>
    </SafeAreaView>
  )
}

export default HomeScreen