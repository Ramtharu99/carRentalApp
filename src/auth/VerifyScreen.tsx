import { View, Text, KeyboardAvoidingView, Image } from 'react-native'
import React, { useRef } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import { SafeAreaView } from 'react-native-safe-area-context'
import assets from '../../assets'
import { useNavigation } from '@react-navigation/native'

const VerifyScreen = () => {

    const {logo_black} = assets;
    const navigation = useNavigation<any>()

  return (
    <SafeAreaView className='flex-1 bg-white px-4'>
        <KeyboardAvoidingView className='flex-1'>
            <View className='flex-row items-center gap-2 py-2'>
                <Image source={logo_black} className='h-9 w-9' />
                <Text className='text-xl text-black font-extrabold'>Rental</Text>
                </View>
                <View className='mt-40 mb-4 gap-4'>
                    <Text className='text-black text-4xl text-center'>Verify your phone number</Text>
                    <Text className='text-gray-400 text-lg text-center'>We have sent you an SMS with a code to number</Text>
                </View>
                <View className='mt-8 mb-2 gap-4'>
                    <Input placeholderText="Phone number" leftIcon="phone" />
            </View>
            <View className='mt-8 gap-4'>
                <Button title="Continue" containerClass="bg-button" textClass="text-white" onPress={() => navigation.navigate("OtpScreen")} />
            </View>
            <Text onPress={() =>navigation.navigate("Signin")} className='text-gray-400 text-center m-6'>Return to Sign in</Text>
        </KeyboardAvoidingView>
        <Text onPress={() => navigation.navigate("Signup")} className='text-gray-400 text-center mb-4'>Create new account</Text>
    </SafeAreaView>
  )
}

export default VerifyScreen