import {View, Text, Image, Dimensions} from "react-native";
import ActorInfo from "./ActorInfo";
import ActorBiography from "./ActorBiography";

const ActorDetailCard = ({actor}) => {
  return (
    <View>
      <View className="items-center mt-8">
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${actor.profile_path}`,
          }}
          className="w-72 h-72 rounded-full border border-white"
        />
        <Text className="text-white font-bold text-2xl mt-6">
          {actor?.name}
        </Text>
        <Text className="text-gray-500 font-semibold text-base">
          {actor?.place_of_birth
            ? actor.place_of_birth
            : "Place of birth not found"}
        </Text>
        <ActorInfo actor={actor} />
        <ActorBiography actor={actor} />
      </View>
    </View>
  );
};

export default ActorDetailCard;
