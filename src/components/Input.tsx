import { View, Text } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'
import { InputProps } from '../types/type'

const Input = ({
  placeholderText,
  leftIcon = null,
  rightIcon = null,
  secure = false,
  value,
  onChangeText,
  onRightIconPress,
  }: InputProps) => {
  return (
    <View className='mt-2'>
      <TextInput
        placeholder={placeholderText}
        mode="outlined"
        placeholderTextColor="gray"
        secureTextEntry={secure}
        value={value}
        onChangeText={onChangeText}
        left={leftIcon ? <TextInput.Icon icon={leftIcon} /> : null}
        right={rightIcon ? <TextInput.Icon icon={rightIcon} onPress={onRightIconPress} /> : null}
        dense
      />
    </View>
  )
}

export default Input