import {useNavigation} from "@react-navigation/native";
import {Dimensions, Image, Text, TouchableOpacity, View} from "react-native";
import {screenNames} from "../types";

const MovieItem = ({movie}) => {
  // console.log(movie);

  const navigation = useNavigation();

  const {width, height} = Dimensions.get("window");

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(screenNames.Movie, {id: movie.id})}>
      <View className="mr-4 space-y-2">
        <Image
          source={{uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`}}
          width={width * 0.33}
          height={height * 0.22}
          className="rounded-xl"
        />
        <Text className="text-white ml-1">
          {movie.title.length > 15
            ? movie.title.slice(0, 15) + "..."
            : movie.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default MovieItem;
