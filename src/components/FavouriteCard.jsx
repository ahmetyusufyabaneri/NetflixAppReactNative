import {View, Text, TouchableOpacity, Image} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import {themes} from "../themes";
import {useDispatch} from "react-redux";
import {removeFavourite} from "../app/slices/favouriteSlice";

const FavouriteCard = ({item}) => {
  console.log("item:", item);
  const dispatch = useDispatch();
  return (
    <View className="flex-row justify-between mx-4 items-center my-5">
      <Image
        source={{uri: `https://image.tmdb.org/t/p/w500${item?.poster_path}`}}
        className="w-20 h-24 rounded-md"
      />
      <View>
        <Text className="text-white text-center text-base font-semibold">
          {item?.title}
        </Text>
        <Text className="text-neutral-400 text-center font-semibold text-base">
          {item?.status} | {item?.release_date?.split("-")[0]} | {item?.runtime}{" "}
          min
        </Text>
      </View>
      <TouchableOpacity onPress={() => dispatch(removeFavourite(item))}>
        <Icon name="heart" size={28} color={themes.red} />
      </TouchableOpacity>
    </View>
  );
};

export default FavouriteCard;
