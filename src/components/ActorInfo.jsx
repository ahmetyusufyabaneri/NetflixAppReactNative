import {Text, View} from "react-native";

const ActorInfo = ({actor}) => {
  return (
    <View
      className="bg-neutral-700 flex-row rounded-full p-5 mt-8"
      style={{gap: 12}}>
      <View className="items-center border-r border-white pr-2">
        <Text className="text-white mb-0.5">Gender</Text>
        <Text className="text-gray-300">
          {actor?.gender == 1 ? "Female" : "Male"}
        </Text>
      </View>
      <View className="items-center border-r border-white pr-2">
        <Text className="text-white mb-0.5">Birthday</Text>
        <Text className="text-gray-300">{actor?.birthday?.split("-", 1)}</Text>
      </View>
      <View className="items-center border-r border-white pr-2">
        <Text className="text-white mb-0.5">Known For</Text>
        <Text className="text-gray-300">{actor?.known_for_department}</Text>
      </View>
      <View className="items-center">
        <Text className="text-white mb-0.5">Popularity</Text>
        <Text className="text-gray-300">%{actor?.popularity?.toFixed(2)}</Text>
      </View>
    </View>
  );
};

export default ActorInfo;
