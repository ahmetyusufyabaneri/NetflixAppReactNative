import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import {useNavigation} from "@react-navigation/native";

const BackAndFavourite = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-row items-center justify-between mx-4 mt-2 z-50">
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="bg-yellow-500 items-center justify-center p-1 rounded-xl">
        <Icon name="left" size={32} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="heart" size={32} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default BackAndFavourite;

const styles = StyleSheet.create({});
