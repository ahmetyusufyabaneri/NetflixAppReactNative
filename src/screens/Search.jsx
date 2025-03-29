import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {themes} from "../themes";
import Icon from "react-native-vector-icons/AntDesign";
import {useNavigation} from "@react-navigation/native";
import {useState} from "react";
import {screenNames} from "../types";

const Search = () => {
  const navigation = useNavigation();

  const [searchText, setSearchText] = useState();
  console.log(searchText);

  return (
    <View style={styles.container}>
      <SafeAreaView className="mx-4">
        <View className="flex-row justify-between items-center border border-neutral-400 rounded-full mt-1 pl-2 pr-1">
          <TextInput
            placeholder="Search"
            placeholderTextColor={"#ddd"}
            className="text-white font-semibold tracking-wider py-2 px-4"
          />
          <TouchableOpacity
            onPress={() => navigation.navigate(screenNames.Home)}
            className="bg-neutral-700 rounded-full my-1 p-2 items-center justify-center">
            <Icon name="close" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
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
