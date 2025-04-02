import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {themes} from "../themes";
import {useEffect, useState} from "react";
import SearchInput from "../components/SearchInput";
import {getSearchedMoviesAction} from "../app/actions/movieAction";
import {useDispatch, useSelector} from "react-redux";
import {useNavigation} from "@react-navigation/native";
import MovieItem from "../components/MovieItem";

const Search = () => {
  const [searchedQuery, setSearchedQuery] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSearchedMoviesAction(searchedQuery));
  }, [searchedQuery]);

  const {searchedMovies} = useSelector(state => state.movie);

  return (
    <View style={styles.container}>
      <SafeAreaView className="mx-4">
        <SearchInput setSearchedQuery={setSearchedQuery} />
        {searchedMovies.length > 0 ? (
          <ScrollView
            contentContainerStyle={{paddingHorizontal: 8, paddingVertical: 12}}
            showsVerticalScrollIndicator={false}>
            <Text className="text-white text-sm font-semibold mb-4">
              Result Length: {searchedMovies?.length}
            </Text>
            <View
              className="flex-row flex-wrap justify-between px-4"
              style={{rowGap: 32}}>
              {searchedMovies.map((movie, index) => (
                <MovieItem key={index} movie={movie} searchScreen />
              ))}
            </View>
          </ScrollView>
        ) : (
          <View className="items-center justify-center">
            <Image
              source={require("../assets/movieTime.png")}
              className="w-96 h-96"
            />
          </View>
        )}
      </SafeAreaView>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.home.background,
  },
});
