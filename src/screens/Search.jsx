import {Image, SafeAreaView, StyleSheet, View} from "react-native";
import {themes} from "../themes";
import {useState} from "react";
import SearchInput from "../components/SearchInput";

const Search = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <View style={styles.container}>
      <SafeAreaView className="mx-4">
        <SearchInput setSearchText={setSearchText} />
        {/* <View className="items-center justify-center">
          <Image
            source={require("../assets/movieTime.png")}
            className="w-96 h-96"
          />
        </View> */}
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
