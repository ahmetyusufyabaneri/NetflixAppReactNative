import {FlatList, SafeAreaView, Text, View} from "react-native";
import {useSelector} from "react-redux";
import FavouriteCard from "../components/FavouriteCard";
import EmptyList from "../components/EmptyList";

const Favourites = () => {
  const {favouriteMovies} = useSelector(state => state.favourite);

  return (
    <SafeAreaView className="flex-1 bg-neutral-800">
      <Text className="text-white text-2xl text-center font-bold my-4">
        Favourites
      </Text>
      <FlatList
        data={favouriteMovies}
        renderItem={({item}) => <FavouriteCard item={item} />}
        key={item => item.id.toString()}
        ListEmptyComponent={() => <EmptyList />}
      />
    </SafeAreaView>
  );
};

export default Favourites;
