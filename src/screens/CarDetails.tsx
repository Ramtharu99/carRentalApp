import { View, Text, ScrollView, Image, Pressable, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header'
import ImageSlider from '../components/ImageSlider'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { Divider } from 'react-native-paper'
import assets from '../../assets'
import  Ionicons  from 'react-native-vector-icons/Ionicons';
import FeatureCard from '../components/FeatureCar'
import Button from '../components/Button'
import ReviewCard from '../components/ReviewCard'
import { navigate } from '../navigators/navigator-utils'


const CarDetails = () => {

    const {person} = assets

    const data = [
        "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
        "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
        "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg"
    ]

    const features = [
  { id: "1", icon: "event-seat", title: "Capacity", value: "5 Seat" },
  { id: "2", icon: "engineering", title: "Engine Out", value: "670 HP" },
  { id: "3", icon: "speed", title: "Max Speed", value: "250km/H" },
  { id: "4", icon: "settings", title: "Advance", value: "Autopilot" },
  { id: "5", icon: "energy-savings-leaf", title: "Single Charge", value: "405 Miles" },
  { id: "6", icon: "local-parking", title: "Advance", value: "Auto Parking" },
];

  return (
    <SafeAreaView className='flex-1'>
        <Header type='back' title='Car Details'  />
        <ScrollView>
            <View className='flex-1'>
                <ImageSlider images={data} />

                {/* MAIN CONTENT BOX */}
                <View className="bg-gray-100 rounded-tr-2xl rounded-tl-2xl p-4 mt-4">

                    {/* top row: text left, rating right */}
                    <View className="flex-row justify-between items-start">
                        <View className="max-w-[65%]">
                        <Text className="text-2xl font-bold">Tesa model 5</Text>
                        <Text className="text-gray-700">
                        A Car with high specs that are rented at an affordable price
                        </Text>
                    </View>

                        <View className="items-end">
                            <View className="flex-row items-center">
                            <Text className="text-lg font-semibold mr-1">5.0</Text>
                            <FontAwesome name="star" size={20} color="#FDD835" />
                            </View>
                            <Text className="text-gray-600">(100+ Reviews){' '}</Text>
                        </View>
                    </View>

                    {/* Divider placed BELOW the above content */}
                    <View className="my-4">
                    <Divider />
                    </View>
                    <View className='flex-row justify-between'>
                        <View className='flex-row items-center gap-4'>
                        <Image source={person} className='h-14 w-14 rounded-full' />
                        <Text className='text-lg text-black font-semibold'>John Doe</Text>
                        </View>
                        <View className='flex-row gap-4'>
                            <Pressable onPress={() => console.log("Call button clicked")}>
                            <Ionicons name='call-outline' size={24} className='border border-gray-400 rounded-full p-3' />
                            </Pressable>
                            <Pressable onPress={() => console.log("chat button clicked")}>
                            <Ionicons name='chatbubble-ellipses-outline' size={24} className='border border-gray-400 rounded-full p-3' />
                            </Pressable>
                        </View>
                    </View>
                    <View className='my-4'>
                        <Text className='text-2xl font-bold my-2'>Car Features</Text>
                        <View className="flex-row flex-wrap justify-between">
                            {features.map((feature) => (
                                <FeatureCard
                                key={feature.id}
                                vectorIcon={feature.icon}
                                title={feature.title}
                                value={feature.value}
                                containerClass="w-[30%] mb-4"
                                />
                            ))}
                        </View>
                    </View>
                    <View>

                        {/* Top Row */}
                        <View className="flex-row justify-between items-center mb-3">
                            <Text className="text-lg font-semibold">Review (125)</Text>
                            <Pressable onPress={() => navigate('rootStack', {
                                screen: "ReviewScreen"
                            })}>
                                <Text className="text-blue-600 font-medium">View All</Text>
                            </Pressable>
                        </View>
                        <FlatList
                            data={[1, 2, 3]}
                            keyExtractor={(index) => index.toString()}
                            horizontal
                            renderItem={({item}) => (
                                <View className='mr-4 my-2'>
                                    <ReviewCard />
                                </View>
                            )}
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
        <View className='px-4'>
        <Button  title="Book Now" containerClass="bg-button" textClass="text-white" onPress={() => navigate('rootStack', {
            screen: "BookingScreen"
        })} />
        </View>
    </SafeAreaView>
  )
}

export default CarDetails