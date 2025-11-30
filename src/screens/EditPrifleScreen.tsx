import { View, Text, ScrollView, Pressable, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header'
import Input from '../components/Input'
import assets from '../../assets'
import Button from '../components/Button'
import Feather from 'react-native-vector-icons/Feather';
import { useEdit } from '../hooks/editImage'

const EditPrifleScreen = () => {

    const {person} = assets;

    const {photo, selectImage} = useEdit()
    console.log(photo);
    const source = photo?.uri ? {uri: photo?.uri} : person

  return (
    <SafeAreaView className='flex-1 bg-gray-100'>
      <Header type='back' title='Edit Profile' />
      <ScrollView className='px-4'>
        <Pressable onPress={selectImage} className="my-6 flex-col items-center justify-center">

            {/* IMAGE WRAPPER for absolute positioning */}
            <View className="relative">
                <Image 
                source={source} 
                className="w-20 h-20 rounded-full" 
                resizeMode="cover" 
                />
                <View className="absolute bottom-0 right-0 bg-white rounded-full p-1">
                <Feather name="edit-3" color="black" size={16} />
                </View>
            </View>
            <Text className="mt-2 text-base font-medium">Mr John</Text>

            </Pressable>

        <View className='gap-4'>
            <Input placeholderText='mr John' />
            <Input placeholderText='Doe' />
            <Input placeholderText='john@gmail.com' />
            <Input placeholderText='+977' />
        </View>
        <View className='mt-6'>
            <Button title='Save' containerClass='bg-button' textClass='text-white' />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default EditPrifleScreen