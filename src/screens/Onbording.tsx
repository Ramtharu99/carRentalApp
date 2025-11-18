import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import Button from '../components/Button'
import assets from '../../assets'
import { useNavigation } from '@react-navigation/native'

const Onbording = () => {
  const { carBg, logo, overlayBg } = assets
  const navigation = useNavigation<any>();

  return (
    <ImageBackground source={carBg} resizeMode="cover" className="flex-1 bg-white">
      <ImageBackground source={overlayBg} resizeMode="cover" className="flex-1 px-4 py-6">

        {/* Logo top-left with gap using margin (NO position) */}
        <View className="bg-white rounded-full p-2 h-20 w-20 justify-center items-center ml-4 mt-20">
          <Image
            source={logo}
            resizeMode="contain"
            className="h-12 w-12"
          />
        </View>

        {/* Text below logo */}
        <View className="ml-4 mt-8 gap-4">
          <Text className="text-white text-4xl font-bold">Welcome To</Text>
          <Text className="text-white text-3xl font-bold">Car Rental</Text>
        </View>

        {/* Button at bottom */}
        <View className="flex-1 justify-end mb-10">
          <Button onPress={() => navigation.navigate('Signin')} title="Get Started" containerClass="bg-button py-5" textClass="text-white" />
        </View>
      </ImageBackground>
    </ImageBackground>
  )
}

export default Onbording
