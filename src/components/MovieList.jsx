import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import MovieItem from "./MovieItem";

const MovieList = ({data, title}) => {
  return (
    <View className="my-8 space-y-6">
      <View className="flex-row justify-between mx-4">
        <Text className="text-white text-xl">{title}</Text>
        <TouchableOpacity>
          <Text className={`text-yellow-400 text-lg`}>See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        renderItem={({item}) => <MovieItem movie={item} />}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{padding: 12}}
      />
    </View>
  );
};

export default MovieList;

const styles = StyleSheet.create({});
