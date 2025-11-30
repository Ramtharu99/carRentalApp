import { View, Text, ScrollView, Image, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header'
import assets from '../../assets'
import Feather from 'react-native-vector-icons/Feather'
import SingleListComp from '../components/SingleListComp'
import { navigate } from '../navigators/navigator-utils'


const ProfileScreen = () => {

  const {person} = assets;

  return (
    <SafeAreaView className='flex-1 bg-gray-100'>
      <Header type='back' title='Profile'  />
      <ScrollView className='px-4'>
        <View className="flex-row items-center justify-between my-4">

          <View className="flex-row items-center">
            <Image 
              source={person} 
              className="w-14 h-14 rounded-full" 
              resizeMode="cover" 
            />

            <View className="ml-3">
              <Text className="text-sm font-semibold">Mr John</Text>
              <Text className="text-sm text-graycolor">john@gmail.com</Text>
            </View>
          </View>
          <Pressable className="items-center" onPress={() => navigate('rootStack', {
            screen: "EditProfileScreen"
          })}>
            <Feather name="edit-3" size={20} color="#AEAEAE" />
            <Text className="text-sm text-graycolor">Edit Profile </Text>
          </Pressable>
        </View>

        <View className='mt-4'>
          <Text className='text-lg text-black font-bold'>General</Text>
          <SingleListComp text='Favorite Cars' iconName='heart-outline' onPress={() => {}} />
          <SingleListComp text='Previous Rent' iconName='av-timer' onPress={() => {}} />
          <SingleListComp text='Notification' iconName='bell-outline' onPress={() => {}} />
          <SingleListComp text='PartnerShip' iconName='connection' onPress={() => {}} />
        </View>
        <View className='mt-4'>
          <Text className='text-lg text-black font-bold'>Support</Text>
          <SingleListComp text='Settings' iconName='cog-outline' onPress={() => {}} />
          <SingleListComp text='Langguages' iconName='translate' onPress={() => {}} />
          <SingleListComp text='Invite Friends' iconName='account-plus' onPress={() => {}} />
          <SingleListComp text='Privacy Policy' iconName='shield-lock-outline' onPress={() => {}} />
          <SingleListComp text='Help Support' iconName='help-circle-outline' onPress={() => {}} />
          <SingleListComp text='Log Out' iconName='logout' onPress={() => {}} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ProfileScreen