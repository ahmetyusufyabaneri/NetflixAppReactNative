import {useRoute} from "@react-navigation/native";
import {useEffect} from "react";
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {
  getMovieCreditsAction,
  getMovieDetailsAction,
  getMovieSimilarAction,
} from "../app/actions/movieAction";

const Movie = () => {
  const {id} = useRoute().params;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieDetailsAction(id));
    dispatch(getMovieCreditsAction(id));
    dispatch(getMovieSimilarAction(id));
  }, [id]);

  const {movieDetails, movieCredits, movieSimilar} = useSelector(
    state => state.movie,
  );

  return (
    <ScrollView className="flex-1 bg-neutral-900">
      <SafeAreaView>
        <View>
          <Text>Movie</Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Movie;

const styles = StyleSheet.create({});
