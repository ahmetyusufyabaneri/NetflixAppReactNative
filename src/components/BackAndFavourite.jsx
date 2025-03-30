import {SafeAreaView, TouchableOpacity} from "react-native";
import React, {useState} from "react";
import Icon from "react-native-vector-icons/AntDesign";
import {useNavigation} from "@react-navigation/native";

const BackAndFavourite = ({isAbsolute}) => {
  const navigation = useNavigation();

  const [isFavourite, setFavourite] = useState(false);

  return (
    <SafeAreaView
      className={`flex-row items-center justify-between mx-4 mt-2 z-50 ${
        isAbsolute && "absolute left-0 right-0 top-0"
      }`}>
      <TouchableOpacity onPress={() => navigation.goBack()} className="p-1">
        <Icon name="left" size={32} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setFavourite(!isFavourite)}
        className="p-1">
        <Icon name="heart" size={32} color={isFavourite ? "#e50914" : "#fff"} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default BackAndFavourite;
