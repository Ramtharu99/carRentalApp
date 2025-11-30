import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header'
import Input from '../components/Input'
import ChatPersonComp from '../components/ChatPersonComp'
import { navigate } from '../navigators/navigator-utils'

const MessageScreen = () => {
  return (
    <SafeAreaView className='flex-1 bg-gray-100'>
      <Header type='chat' title='Chats' showUserImage={true} userName='Mr John' rightIcons={[
        {name: 'kebab-horizontal', onPress: () => {}}
      ]} />
      <View className='px-4 mt-2'>
        <Input placeholderText='Search...' leftIcon="magnify" />
        <FlatList
        data={[1, 2, 3, 4, 5]}
        renderItem={({item}) => (
          <ChatPersonComp name='John Doe' lastMessage='Hello, how are you?' time='09:00 AM ' unreadCount={1} onPress={() => navigate('rootStack', {
            screen: "ChatScreen"
          })} />
        )}
         />
      </View>
    </SafeAreaView>
  )
}

export default MessageScreen