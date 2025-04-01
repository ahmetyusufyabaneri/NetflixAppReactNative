import {FlatList, Text, TouchableOpacity, View} from "react-native";
import MovieItem from "./MovieItem";

const MovieList = ({data, title, isHidden}) => {
  return (
    <View className="my-4 space-y-2">
      <View className="flex-row justify-between mx-4">
        <Text className="text-white text-xl font-semibold">{title}</Text>
        {!isHidden && (
          <TouchableOpacity>
            <Text className={`text-yellow-400 text-lg font-semibold`}>
              See All
            </Text>
          </TouchableOpacity>
        )}
      </View>
      <FlatList
        data={data}
        renderItem={({item}) => <MovieItem movie={item} />}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{padding: 12, gap: 24}}
      />
    </View>
  );
};

export default MovieList;
