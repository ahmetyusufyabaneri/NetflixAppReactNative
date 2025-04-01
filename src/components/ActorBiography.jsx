import {View, Text} from "react-native";

const ActorBiography = ({actor}) => {
  return (
    <View className="mt-4">
      <Text className="text-white text-xl font-semibold text-center mb-2">
        Biography
      </Text>
      <Text className="text-gray-400 text-sm px-2">
        {actor?.biography ? actor?.biography : "Biography not found"}
      </Text>
    </View>
  );
};

export default ActorBiography;
