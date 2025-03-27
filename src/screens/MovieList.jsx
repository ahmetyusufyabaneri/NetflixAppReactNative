import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import MovieItem from "../components/MovieItem";

const MovieList = ({data, title}) => {
  return (
    <View>
      <View>
        <Text className="text-white text-xl">{title}</Text>
        <TouchableOpacity>
          <Text className={`text-yellow-400 text-lg`}>See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        renderItem={({item}) => <MovieItem movie={item} />}
      />
    </View>
  );
};

export default MovieList;

const styles = StyleSheet.create({});
