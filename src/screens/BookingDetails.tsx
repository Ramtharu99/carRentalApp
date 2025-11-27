import { View, Text, Modal, Pressable, ScrollView } from "react-native";
import React, { useState } from "react";
import { Switch } from "react-native-paper";
import Input from "../components/Input";
import Switcher from "../components/Switcher";
import DatePicker from "../components/DatePicker";
import { SafeAreaView } from "react-native-safe-area-context";


interface BookingDetailsProps {
  pickupDate?: string;
  returnDate?: string;
  setPickupDate?: (date: string) => void;
  setReturnDate?: (date: string) => void;
}

const BookingDetails: React.FC<BookingDetailsProps> = ({
  pickupDate: initialPickupDate = "19/Jan/2025",
  returnDate: initialReturnDate = "19/Jan/2025",
  setPickupDate,
  setReturnDate,
}) => {
  const [isOn, setIsOn] = useState<boolean>(false);
  const [genderActive, setGenderActive] = useState<number>(0);
  const [rentalDate, setRentalDate] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(false);

  const [pickup, setPickup] = useState<string>(initialPickupDate);
  const [returnD, setReturn] = useState<string>(initialReturnDate);

  const genderData = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
  ];

  const rentalDateData = [
    { label: "Hour", value: "hour" },
    { label: "Day", value: "day" },
    { label: "Week", value: "week" },
    { label: "Month", value: "month" },
  ];

  const formatDate = (d: Date) =>
    `${d.getDate()}/${d.toLocaleString("en", { month: "short" })}/${d.getFullYear()}`;

  const handleDateSelect = (start?: Date | string, end?: Date | string) => {
    if (start) {
      const s = typeof start === "string" ? new Date(start) : start;
      const formatted = formatDate(s);
      setPickup(formatted);
      setPickupDate?.(formatted);
    }
    if (end) {
      const e = typeof end === "string" ? new Date(end) : end;
      const formatted = formatDate(e);
      setReturn(formatted);
      setReturnDate?.(formatted);
    }
    setVisible(false);
  };

  return (
    <View className="flex-1">
      {/* Book With Driver */}
      <View className="my-4 flex-row items-center justify-between bg-white rounded-xl px-2 shadow-lg shadow-gray-400">
        <View className="px-2">
          <Text className="text-lg text-black font-bold">Book With Driver</Text>
          <Text className="text-sm text-gray-400">
            Don't have a drive? Book with driver.
          </Text>
        </View>
        <Switch
          value={isOn}
          onValueChange={setIsOn}
          thumbColor="black"
          trackColor={{ false: "gray", true: "#21292b" }}
        />
      </View>

      {/* Inputs */}
      <View className="gap-4">
        <Input placeholderText="Full Name" leftIcon={"account"} />
        <Input placeholderText="Email Address" leftIcon={"email"} />
        <Input placeholderText="Contact" leftIcon={"phone"} />
      </View>

      {/* Gender */}
      <View className="my-6">
        <Text className="my-2 text-xl text-black font-bold">Gender</Text>
        <Switcher
          options={genderData}
          activeIndex={genderActive}
          onChange={setGenderActive}
          activeBg="bg-button"
          inactiveBg="bg-gray-300"
          textActiveColor="text-white"
          textInactiveColor="text-black"
        />
      </View>

      {/* Rental Date */}
      <View className="my-2">
        <Text className="text-xl mb-3 text-black font-bold">Rental Date & Time</Text>
        <Switcher
          options={rentalDateData}
          activeIndex={rentalDate}
          onChange={setRentalDate}
          activeBg="bg-button"
          inactiveBg="bg-gray-300"
          textActiveColor="text-white"
          textInactiveColor="text-black"
        />
      </View>

      {/* Pick Up & Return Dates */}
      <View className="my-6">
        <Pressable
          onPress={() => setVisible(true)}
          className="flex-row items-center justify-between p-4 rounded-full bg-white"
        >
          {/* Pick Up */}
          <View className="flex-1 items-start px-6">
            <Text className="text-gray-600 text-sm">Pick up Date</Text>
            <Text className="text-base font-semibold mt-1">{pickup}</Text>
          </View>

          {/* Divider */}
          <View className="w-[1px] h-full bg-gray-300 mx-3 self-center" />

          {/* Return */}
          <View className="flex-1 items-end px-6">
            <Text className="text-gray-600 text-sm">Return Date</Text>
            <Text className="text-base font-semibold mt-1">{returnD}</Text>
          </View>
        </Pressable>

        {/* Modal Calendar */}
        <Modal visible={visible} transparent animationType="slide">
          <Pressable className="flex-1 justify-center bg-black/40" onPress={() => setVisible(false)}>
            <Pressable onPress={() => {}} className="mx-4 rounded-xl overflow-hidden bg-white">
              <DatePicker onSelect={() => {}} />
            </Pressable>
          </Pressable>
        </Modal>
      </View>

      {/* Car Location */}
      <Text className="text-xl text-black font-bold">Car Location</Text>
      <Input placeholderText="Enter Location" leftIcon={"map-marker"} />
    </View>
  );
};

export default BookingDetails;
