import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import Octicons from "react-native-vector-icons/Octicons";
import assets from "../../assets";
import { useNavigation } from "@react-navigation/native";
import { HeaderProps } from "../types/type";

const Header = ({
  type = "home",
  title = "",
  centerTitle = false,
  showRightIcon = true,
  showNotification = true,
  badgeCount = 0,
}: HeaderProps) => {

  const navigation = useNavigation<any>();
  const { logo_black, person } = assets;

  // ---------------- HOME HEADER ----------------

  if (type === "home") {
    return (
      <View className="border-b border-gray-300 py-2 px-4">
        <View className="flex-row items-center">

          {/* LOGO + TEXT */}
          <View className="flex-row items-center gap-2">
            <Image source={logo_black} className="h-9 w-9" />
            <Text className="text-xl text-black font-extrabold">Rental</Text>
          </View>

          {/* RIGHT SIDE BUTTONS */}
          <View className="flex-row items-center gap-4 ml-auto">
            <Pressable
              onPress={() => navigation.navigate("NotificationScreen")}
              className="h-11 w-11 rounded-full border bg-white border-gray-300 items-center justify-center"
            >
              <Octicons name="bell" size={22} />
              {showNotification && badgeCount > 0 && (
                <View className="absolute -top-1 -right-1 bg-red-600 h-5 w-5 rounded-full items-center justify-center">
                  <Text className="text-white text-xs font-bold">{badgeCount}</Text>
                </View>
              )}
            </Pressable>

            <Pressable className="h-11 w-11 rounded-full border bg-white border-gray-300 items-center justify-center">
              <Image source={person} className="h-8 w-8" />
            </Pressable>
          </View>
        </View>
      </View>
    );
  }

  // ---------------- BACK HEADER (DEFAULT) ----------------

  return (
    <View className="border-b border-gray-300 py-3 px-4">

      <View className="flex-row items-center justify-between relative">

        {/* BACK BUTTON */}
        <Pressable onPress={() => navigation.goBack()} className="z-10">
          <Octicons name="chevron-left" size={28} />
        </Pressable>

        {/* CENTERED TITLE */}
        <Text
          className={`${
            centerTitle ? "absolute left-0 right-0 text-center" : "ml-4"
          } text-lg font-bold`}
        >
          {title}
        </Text>

        {/* RIGHT ICON */}
        {showRightIcon ? (
          <Pressable className="z-10">
            <Octicons name="kebab-horizontal" size={24} />
          </Pressable>
        ) : (
          <View className="w-6" /> // keep alignment clean
        )}
      </View>

    </View>
  );
};

export default Header;
