import React, { useRef, useState } from 'react'
import { View, TextInput } from 'react-native';

const OtpComponent = () => {

  const [otp, setOtp] = useState<string[]>(new Array(4).fill(''));
  const inputRef = useRef<Array<TextInput | null>>([])


  const handleChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if(value && index < 3){
      inputRef.current[index + 1]?.focus();
    }

    if(value == "" && index > 0 ){
      inputRef.current[index - 1]?.focus();
    }
  }

  return (
    <View className="flex-row justify-center">
      {otp.map((_, index) => (
        <TextInput
          key={index}
          ref={ref => (inputRef.current[index] = ref)}
          keyboardType="number-pad"
          maxLength={1}
          value={otp[index]}
          onChangeText={(value) => handleChange(value, index)}
          className="w-20 h-20 bg-white border border-gray-400 text-center text-xl rounded-lg mx-2"
        />
      ))}
    </View>
  );
}

export default OtpComponent;
