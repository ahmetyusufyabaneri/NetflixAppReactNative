import {useRoute} from "@react-navigation/native";
import {useEffect} from "react";
import {Dimensions, Image, ScrollView, Text, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {
  getMovieCreditsAction,
  getMovieDetailsAction,
  getSimilarMoviesAction,
} from "../app/actions/movieAction";
import BackAndFavourite from "../components/BackAndFavourite";
import LinearGradient from "react-native-linear-gradient";
import MovieCast from "../components/MovieCast";
import Button from "../components/Button";
import MovieList from "../components/MovieList";

const MovieDetail = () => {
  const {id} = useRoute().params;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieDetailsAction(id));
    dispatch(getMovieCreditsAction(id));
    dispatch(getSimilarMoviesAction(id));
  }, [id]);

  const {movieDetails, movieCredits, similarMovies} = useSelector(
    state => state.movie,
  );

  const {width, height} = Dimensions.get("window");

  return (
    <ScrollView className="flex-1 bg-neutral-900">
      <BackAndFavourite movie={movieDetails} isAbsolute />
      <View>
        <View>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`,
            }}
            width={width}
            height={height * 0.6}
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
          style={{width, height: height * 0.25}}
          className="absolute bottom-0"
        />
        <View className="absolute bottom-4 left-0 right-0 gap-2">
          <Text className="text-white text-xl font-bold text-center tracking-wider">
            {movieDetails?.title}
          </Text>
          <Text className="text-neutral-300 text-center">
            {movieDetails?.status} | {movieDetails?.release_date?.split("-", 1)}{" "}
            | {""}
            {movieDetails?.runtime} min
          </Text>
          <View className="flex-row items-center justify-center gap-4 my-2">
            {movieDetails?.genres?.map(genre => (
              <Text
                key={genre.id}
                className="text-neutral-300 text-base font-semibold">
                {genre.name}
              </Text>
            ))}
          </View>
        </View>
      </View>
      <View className="px-3">
        <Text className="text-neutral-500 font-semibold">
          {movieDetails?.overview}
        </Text>
        <View className="flex-row mt-6 justify-center" style={{gap: 12}}>
          <Button bgColor="#fff" iconName="play" color="#000" text="Play" />
          <Button
            bgColor="#4c585b"
            iconName="add"
            color="#fff"
            text="My List"
          />
        </View>
        <MovieCast data={movieCredits} />
        <MovieList data={similarMovies} title={"Similar Movies"} isHidden />
      </View>
    </ScrollView>
  );
};

export default MovieDetail;
