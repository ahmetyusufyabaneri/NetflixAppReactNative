import {useNavigation} from "@react-navigation/native";
import {View, Text, TouchableOpacity, Image} from "react-native";
import {screenNames} from "../types";

const Actor = ({actor}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(screenNames.ActorDetail, {id: actor.id})
      }
      className="items-center gap-y-1">
      <View>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${actor?.profile_path}`,
          }}
          className="w-20 h-20 rounded-full"
        />
      </View>
      <View className="items-center gap-y-1">
        <Text className="text-white text-sm font-semibold">
          {actor?.original_name}
        </Text>
        <Text className="text-gray-300 text-xs">{actor?.character}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Actor;
