import {FlatList, Text, View} from "react-native";
import React from "react";
import Actor from "./Actor";

const MovieCast = ({data}) => {
  return (
    <View className="mt-2">
      <Text className="text-white text-xl font-bold mb-2">MovieCast</Text>
      <FlatList
        data={data}
        renderItem={({item}) => <Actor actor={item} />}
        horizontal
      />
    </View>
  );
};

export default MovieCast;
