import {View, Text, TouchableOpacity, Image} from "react-native";

const Actor = ({actor}) => {
  console.log("actor:", actor);
  return (
    <TouchableOpacity>
      <View>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${actor?.profile_path}`,
          }}
          className="w-20 h-20 rounded-full"
        />
      </View>
      <Text className="text-white">{actor?.name}</Text>
    </TouchableOpacity>
  );
};

export default Actor;
