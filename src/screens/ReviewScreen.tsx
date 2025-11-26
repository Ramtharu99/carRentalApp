import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header'
import { FlatList, View } from 'react-native'
import ReviewCard from '../components/ReviewCard'
import SearchBar from '../components/SearchBar'
import Button from '../components/Button'

const ReviewScreen = () => {
  return (
    <SafeAreaView className='flex-1 bg-gray-100'>
        <Header type='back' title='Review' />
        <SearchBar showFilter={false} placeholder='Search Review' />
        <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
        keyExtractor={(index) => index.toString()}
        renderItem={({item}) => (
            <View className='my-2 px-4'>
                <ReviewCard />
            </View>
            )}
         />
         <View className='px-4'>
            <Button title="Book Now" containerClass="bg-button" textClass="text-white" />
         </View>
    </SafeAreaView>
  )
}

export default ReviewScreen