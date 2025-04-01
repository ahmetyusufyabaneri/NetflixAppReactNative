import {FlatList, Text, View} from "react-native";
import Actor from "./Actor";

const MovieCast = ({data}) => {
  return (
    <View className="mt-4 mb-12">
      <Text className="text-white text-xl font-bold my-4">MovieCast</Text>
      <FlatList
        data={data}
        renderItem={({item}) => <Actor actor={item} />}
        keyExtractor={item => item.id.toString()}
        horizontal
        contentContainerStyle={{gap: 16}}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default MovieCast;
