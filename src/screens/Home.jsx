import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import {themes} from "../themes";
import Icon from "react-native-vector-icons/AntDesign";
import {useNavigation} from "@react-navigation/native";
import {screenNames} from "../types";
import Logo from "../components/Logo";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {
  getTopRatedMoviesAction,
  getUpcomingMoviesAction,
} from "../app/actions/movieAction";
import TrendingMovies from "../components/TrendingMovies";
import MovieList from "../components/MovieList";

const Home = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopRatedMoviesAction());
    dispatch(getUpcomingMoviesAction());
  }, []);

  const {topRated} = useSelector(state => state.movie);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View className="flex-row items-center justify-between mt-2 px-4">
          <TouchableOpacity>
            <Icon name="menuunfold" size={28} color={"#fff"} />
          </TouchableOpacity>
          <Logo />
          <TouchableOpacity
            onPress={() => navigation.navigate(screenNames.Search)}>
            <Icon name="search1" size={28} color={"#fff"} />
          </TouchableOpacity>
        </View>
        <ScrollView>
          <TrendingMovies />
          <MovieList title={"Trending"} />
          <MovieList data={topRated} title={"Top Rated"} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.home.background,
  },
});
