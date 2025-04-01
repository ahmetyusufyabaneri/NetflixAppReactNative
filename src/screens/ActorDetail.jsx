import {ScrollView} from "react-native";
import BackAndFavourite from "../components/BackAndFavourite";
import {useRoute} from "@react-navigation/native";
import {useEffect} from "react";
import {
  getActorDetailsAction,
  getActorMovieCreditsAction,
} from "../app/actions/movieAction";
import {useDispatch, useSelector} from "react-redux";
import ActorDetailCard from "../components/ActorDetailCard";
import MovieList from "../components/MovieList";

const ActorDetail = () => {
  const {id} = useRoute().params;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActorDetailsAction(id));
    dispatch(getActorMovieCreditsAction(id));
  }, [id]);

  const {actorDetails, actorMovieCredits} = useSelector(state => state.movie);

  return (
    <ScrollView className="flex-1 bg-neutral-900">
      <BackAndFavourite />
      <ActorDetailCard actor={actorDetails} />
      <MovieList data={actorMovieCredits} title="Movies" isHidden />
    </ScrollView>
  );
};

export default ActorDetail;
