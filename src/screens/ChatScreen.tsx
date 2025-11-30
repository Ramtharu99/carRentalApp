import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header'
import assets from '../../assets'
import ChatCard from '../components/ChatCard'

const ChatScreen = () => {

    const {person} = assets

  return (
    <SafeAreaView className='flex-1 bg-gray-100'>
        <Header type='chat' userName='Mr john ' userStatus='online ' showUserImage={true} userImage={person} rightIcons={[
            {name: "device-mobile", onPress: () => {}},
            {name: "device-camera-video", onPress: () => {}},
        ]} />
        <View className='px-4 mt-4'>
            <ChatCard message="Hello dear" type="received" time="12:00" />
            <ChatCard message="Hello" type="sent" time="12:00" />
            <ChatCard message="How are you?" type="received" time="12:01" />
            <ChatCard message="I'm good!" type="sent" time="12:01" />
        </View>
    </SafeAreaView>
  )
}

export default ChatScreen