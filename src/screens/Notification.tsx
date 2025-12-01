import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header'
import NotificationCardComp from '../components/NotificationCardComp'

const Notification = () => {
  return (
    <SafeAreaView className='flex-1 bg-gray-100'>
      <Header type='back' title='Notifications' />
      <View className='px-4 mt-4 gap-4'>
        <View className='flex-row items-center justify-between'>
          <Text className='text-sm text-gray-500'>Today</Text>
          <Text className='text-sm text-gray-500'>2 unread notificatios </Text>
        </View>
        <FlatList
        data={[1, 2, 3, 4, 5, 6]}
        renderItem={({item}) => (
          <NotificationCardComp title='Car booking successfull' message='your car booking has been successful' time='10:00 PM' unread={true} />
        )}
        /> 
      </View>
    </SafeAreaView>
  )
}

export default Notification