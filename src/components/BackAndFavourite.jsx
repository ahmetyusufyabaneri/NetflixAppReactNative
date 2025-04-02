import {SafeAreaView, TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import {useNavigation} from "@react-navigation/native";
import {useDispatch, useSelector} from "react-redux";
import {addFavourite, removeFavourite} from "../app/slices/favouriteSlice";
import {themes} from "../themes";

const BackAndFavourite = ({isAbsolute, movie}) => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const {favouriteMovies} = useSelector(state => state.favourite);

  const isFavourite = favouriteMovies.some(
    favourite => favourite.id === movie.id,
  );

  const handlePress = () => {
    if (!isFavourite) {
      dispatch(addFavourite(movie));
    } else {
      dispatch(removeFavourite(movie));
    }
  };

  return (
    <SafeAreaView
      className={`flex-row items-center justify-between mx-4 mt-2 z-50 ${
        isAbsolute && "absolute left-0 right-0 top-0"
      }`}>
      <TouchableOpacity onPress={() => navigation.goBack()} className="p-1">
        <Icon name="left" size={32} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress()} className="p-1">
        <Icon
          name="heart"
          size={32}
          color={isFavourite ? themes.red : "#fff"}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default BackAndFavourite;
