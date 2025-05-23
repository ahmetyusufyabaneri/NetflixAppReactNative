import {useNavigation} from "@react-navigation/native";
import {Dimensions, Image, Text, TouchableOpacity, View} from "react-native";
import {screenNames} from "../types";

const MovieItem = ({movie, searchScreen}) => {
  const navigation = useNavigation();

  const {width, height} = Dimensions.get("window");

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(screenNames.MovieDetail, {id: movie.id})
      }>
      <View className={`space-y-2 ${searchScreen && ""}`}>
        <Image
          source={{uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`}}
          width={width * 0.33}
          height={height * 0.22}
          className="rounded-xl"
        />
        <Text className="text-white text-center ml-1">
          {movie.original_title?.length > 15
            ? movie.original_title.slice(0, 15) + "..."
            : movie.original_title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default MovieItem;
