import {View, ScrollView} from "react-native";
import BackAndFavourite from "../components/BackAndFavourite";
import {useRoute} from "@react-navigation/native";
import {useEffect} from "react";
import {getActorDetailsAction} from "../app/actions/movieAction";
import {useDispatch, useSelector} from "react-redux";

const ActorDetail = () => {
  const {id} = useRoute().params;

  const dispatch = useDispatch();

  const {actorDetails} = useSelector(state => state.movie);
  console.log("state:", actorDetails);

  useEffect(() => {
    dispatch(getActorDetailsAction(id));
  }, []);

  return (
    <ScrollView className="flex-1 bg-neutral-900">
      <BackAndFavourite />
      <View></View>
    </ScrollView>
  );
};

export default ActorDetail;
