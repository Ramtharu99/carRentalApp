import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import Octicons from "react-native-vector-icons/Octicons";
import assets from "../../assets";
import { HeaderProps } from "../types/type";
import { useNavigation } from "@react-navigation/native";

const Header = ({
  type = "home",
  title = "",
  centerTitle = false,
  showRightIcon = true,
  showNotification = true,
  badgeCount = 0,
  onNotificationPress,
  onAccount,
  userName = "",
  userStatus = "",
  userImage,
  showUserImage = false,
  rightIcons = [],
}: HeaderProps) => {
  const navigation = useNavigation<any>();
  const { logo_black, person } = assets;

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
              onPress={onNotificationPress}
              className="h-11 w-11 rounded-full border bg-white border-gray-300 items-center justify-center"
            >
              <Octicons name="bell" size={22} />
              {showNotification && badgeCount > 0 && (
                <View className="absolute -top-1 -right-1 bg-red-600 h-5 w-5 rounded-full items-center justify-center">
                  <Text className="text-white text-xs font-bold">{badgeCount}</Text>
                </View>
              )}
            </Pressable>

            <Pressable
              onPress={onAccount}
              className="h-11 w-11 rounded-full border bg-white border-gray-300 items-center justify-center"
            >
              <Image source={person} className="h-8 w-8" />
            </Pressable>
          </View>
        </View>
      </View>
    );
  }

  // -----------------------------
  // CHAT HEADER (Back + optional user image + name + status + right icons)
  // -----------------------------
  if (type === "chat") {
    return (
      <View className="border-b border-gray-300 py-3 px-4">
        <View className="flex-row items-center justify-between">
          {/* LEFT: BACK + optional USER IMAGE + DETAILS */}
          <View className="flex-row items-center gap-3">
            {/* BACK BUTTON */}
            <Pressable
              onPress={() => navigation.goBack()}
              className="h-12 w-12 rounded-full border border-gray-300 items-center justify-center"
            >
              <Octicons name="chevron-left" size={26} />
            </Pressable>

            {/* USER IMAGE + NAME + optional STATUS */}
            {showUserImage && (
              <View className="flex-row items-center gap-2">
                <Image
                  source={userImage || person}
                  className="h-12 w-12 rounded-full"
                />

                {/* USER DETAILS */}
                <View className={userStatus ? "" : "justify-center"}>
                  <Text className="text-lg font-bold">{userName}</Text>
                  {userStatus && (
                    <Text className="text-sm text-gray-500">{userStatus}</Text>
                  )}
                </View>
              </View>
            )}
          </View>


          {/* RIGHT SIDE ICONS */}
          <View className="flex-row items-center gap-4">
            {rightIcons.map((item, index) => (
              <Pressable
                key={index}
                onPress={item.onPress}
                className="h-11 w-11 rounded-full border bg-white border-gray-300 items-center justify-center"
              >
                <Octicons name={item.name} size={22} />
              </Pressable>
            ))}
          </View>
        </View>
      </View>
    );
  }

  // -----------------------------
  // DEFAULT BACK HEADER
  // -----------------------------
  return (
    <View className="border-b border-gray-300 py-3 px-4">
      <View className="flex-row items-center justify-between relative">
        {/* BACK BUTTON */}
        <Pressable
          onPress={() => navigation.goBack()}
          className="border h-14 w-14 flex items-center justify-center border-gray-300 rounded-full"
        >
          <Octicons name="chevron-left" size={28} />
        </Pressable>

        {/* CENTERED TITLE */}
        <Text
          className={`${
            centerTitle ? "absolute left-0 right-0 text-center" : "ml-4"
          } text-xl font-bold`}
        >
          {title}
        </Text>

        {/* RIGHT ICON */}
        {showRightIcon ? (
          <Pressable className="border h-14 w-14 flex items-center justify-center border-gray-300 rounded-full">
            <Octicons name="kebab-horizontal" size={24} />
          </Pressable>
        ) : (
          <View className="w-6" />
        )}
      </View>
    </View>
  );
};

export default Header;
