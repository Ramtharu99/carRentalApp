import { View, Text, FlatList, Animated, Dimensions, Image, StyleSheet } from 'react-native';
import React, { useRef, useState } from 'react';
import Favorite from './Favorite';

const { width } = Dimensions.get('window');

const ImageSlider = ({ images }: { images: string[] }) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList | null>(null);

  const handleScroll = (event: any) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  return (
    <View>
      {/* IMAGE SLIDER */}
      <FlatList
        ref={flatListRef}
        data={images}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ width: width }}>
            <Favorite />
            <Image
              source={{ uri: item }}
              className="h-72"
              resizeMode="cover"
            />
          </View>
        )}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false, listener: handleScroll }
        )}
      />

      {/* DOT INDICATOR */}
      <View className="flex-row justify-center mt-3">
        {images.map((_, index) => {
          const opacity = scrollX.interpolate({
            inputRange: [
              (index - 1) * width,
              index * width,
              (index + 1) * width
            ],
            outputRange: [0.3, 1, 0.3],
            extrapolate: "clamp",
          });

          const scale = scrollX.interpolate({
            inputRange: [
              (index - 1) * width,
              index * width,
              (index + 1) * width
            ],
            outputRange: [0.7, 1.2, 0.7],
            extrapolate: "clamp",
          });

          return (
            <Animated.View
              key={index}
              style={{
                opacity,
                transform: [{ scale }],
              }}
              className="w-3 h-3 rounded-full bg-black mx-1"
            />
          );
        })}
      </View>
    </View>
  );
};

export default ImageSlider;
