import {TextInput, TouchableOpacity, View} from "react-native";
import {screenNames} from "../types";
import Icon from "react-native-vector-icons/AntDesign";
import {useNavigation} from "@react-navigation/native";

const SearchInput = ({setSearchedQuery}) => {
  const navigation = useNavigation();

  return (
    <View className="flex-row justify-between items-center border border-neutral-400 rounded-full mt-1 pl-2 pr-1">
      <TextInput
        onChangeText={text => setSearchedQuery(text)}
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
  );
};

export default SearchInput;
