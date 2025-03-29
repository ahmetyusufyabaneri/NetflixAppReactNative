import {useRoute} from "@react-navigation/native";
import {useEffect} from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {
  getMovieCreditsAction,
  getMovieDetailsAction,
  getSimilarMoviesAction,
} from "../app/actions/movieAction";
import BackAndFavourite from "../components/BackAndFavourite";
import LinearGradient from "react-native-linear-gradient";

const Movie = () => {
  const {id} = useRoute().params;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieDetailsAction(id));
    dispatch(getMovieCreditsAction(id));
    dispatch(getSimilarMoviesAction(id));
  }, [id]);

  const {movieDetails, movieCredits, movieSimilar} = useSelector(
    state => state.movie,
  );

  console.log(movieDetails);

  const {width, height} = Dimensions.get("window");

  return (
    <ScrollView className="flex-1 bg-neutral-900">
      <SafeAreaView>
        <BackAndFavourite />
        <View>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`,
            }}
            width={width}
            height={height * 0.5}
          />
        </View>
        <LinearGradient
          colors={[
            "transparent",
            "rgba(23, 23, 23, 0.8)",
            "rgba(23, 23, 23, 1)",
          ]}
          start={{x: 0.5, y: 0}}
          end={{x: 0.5, y: 1}}
          style={{width, height: height * 0.2}}
          className="absolute bottom-0"
        />
      </SafeAreaView>
    </ScrollView>
  );
};

export default Movie;

const styles = StyleSheet.create({});
