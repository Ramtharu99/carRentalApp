import { View, Text } from 'react-native'
import React from 'react'
import { Checkbox } from 'react-native-paper'

const CheckBox = ({status, onPress, label}: any) => {
  return (
    <View className='flex-row items-center'>
    <Checkbox
        status={status}
        onPress={onPress}
        color='#21292b'
        />
        <Text>{label}</Text>
        </View>
  )
}

export default CheckBox