import { View } from 'react-native'
import React, { useState } from 'react'
import DateTimePicker, { DateType, useDefaultStyles } from 'react-native-ui-datepicker'

interface DatePIckerProps {
  onSelect: (startDate: DateType, endDate: DateType) => void;
}

const DatePicker = ({onSelect}: DatePIckerProps) => {

    const defaultStyle = useDefaultStyles()
    const [startDate, setStartDate] = useState<DateType>()
    const [endDate, setEndDate] = useState<DateType>()

  return (
    <View className='bg-gray-500'>
      <DateTimePicker 
        mode='range'
        startDate={startDate}
        endDate={endDate}
        styles={defaultStyle}
        onChange={({startDate: s, endDate: e}) => {
        setStartDate(s)
        setEndDate(e)

        if(s && e){
          onSelect(s, e);
        }
      }}
      />
    </View>
  )
}

export default DatePicker