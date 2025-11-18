import { View, Text, KeyboardAvoidingView, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import assets from '../../assets'
import Input from '../components/Input'
import Button from '../components/Button'
import { useNavigation } from '@react-navigation/native'

const ResetScreen = () => {

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
                    <Text className='text-black text-4xl text-center'>Reset Password</Text>
                    <Text className='text-gray-400 text-lg text-center'>Enter the email address with your account and we'll send you a link to reset your password</Text>
                </View>
                <View className='mt-8 mb-2'>
                <Input placeholderText="Email" leftIcon="email" />
            </View>
            <View className='mt-8 gap-4'>
                <Button title="Continue" containerClass="bg-button" textClass="text-white" onPress={() => navigation.navigate("VerifyScreen")} />
            </View>
            <Text onPress={() =>navigation.navigate("Signin")} className='text-gray-400 text-center m-6'>Return to Sign in</Text>
        </KeyboardAvoidingView>
        <Text onPress={() => navigation.navigate("Signup")} className='text-gray-400 text-center mb-4'>Create new account</Text>
    </SafeAreaView>
  )
}

export default ResetScreen