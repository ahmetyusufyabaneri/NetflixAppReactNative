import {View, Text} from "react-native";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getTrendingMoviesAction} from "../app/actions/movieAction";

const TrendingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTrendingMoviesAction());
  }, []);

  const {trending} = useSelector(state => state.movie);
  console.log("state:", trending);

  return (
    <View>
      <Text>TrendingMovies</Text>
    </View>
  );
};

export default TrendingMovies;
