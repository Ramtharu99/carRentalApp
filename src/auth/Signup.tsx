import { View, Text, Image, ScrollView, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import Button from '../components/Button';
import CheckBox from '../components/CheckBox';
import Input from '../components/Input';
import { Divider } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import assets from '../../assets';
import { useNavigation } from '@react-navigation/native';

const Signup = () => {

  const navigation = useNavigation<any>()
  const {logo_black} = assets;
  const [showPassword, setShowPassword] = useState(false)

  const handleSignupButton = () => {
    navigation.navigate("ResetScreen")
  }

  return (
    <SafeAreaView className='flex-1 px-4 bg-background'>
            <KeyboardAvoidingView className='flex-1'>
            <View className='flex-row items-center gap-2 py-2'>
            <Image source={logo_black} className='h-9 w-9' />
            <Text className='text-xl text-black font-extrabold'>Rental</Text>
            </View>
            <View className='pt-11'>
                <Text className='text-black text-4xl text-center'>Sigun Up</Text>
            </View>
            <View className='mt-8 mb-2'>
            <Input placeholderText="Full Name" leftIcon="account" />
            <Input placeholderText="Email" leftIcon="email" />
            <Input placeholderText="Password" leftIcon="lock" rightIcon={showPassword ? "eye" : "eye-off"} secure={!showPassword} onRightIconPress={() => setShowPassword(!showPassword)}/>
            <Input placeholderText="Country" leftIcon="flag" />
            </View>
            <View className='mt-8 gap-4'>
            <Button title="Sign Up" containerClass="bg-button" textClass="text-white" onPress={handleSignupButton} />
            <Button title="Sign In" containerClass="bg-white border border-black" textClass="text-black" onPress={() => {
                console.log("Signup button is clicked");
                navigation.navigate("Signup")
            }} />
            </View>
            <View className='flex-row items-center my-4'>
                <Divider className='flex-1' />
                <Text className='mx-2 text-gray-500'>or{" "}</Text>
                <Divider className='flex-1' />
            </View>
            <View className='flex-1 gap-4'>
                <Button title="Google Pay" containerClass="bg-gray-200 border border-black" textClass="text-black" icon="google" onPress={() => console.log("google")} />
            </View>
            </KeyboardAvoidingView>
            <Text onPress={() => navigation.navigate("Signin")} className='text-gray-400 text-center mb-4'>Already have an account? Login</Text>
        </SafeAreaView>
  )
}

export default Signup