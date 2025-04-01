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

const Search = () => {
  const navigation = useNavigation();

  const [searchedQuery, setSearchedQuery] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSearchedMoviesAction(searchedQuery));
  }, [searchedQuery]);

  const {searchedMovies} = useSelector(state => state.movie);

  console.log(searchedMovies);

  return (
    <View style={styles.container}>
      <SafeAreaView className="mx-4">
        <SearchInput setSearchedQuery={setSearchedQuery} />
        {searchedMovies.length > 0 ? (
          <ScrollView>
            <Text>Result Length: 20</Text>
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
