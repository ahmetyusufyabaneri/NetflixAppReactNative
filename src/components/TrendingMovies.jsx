import {View, Text} from "react-native";
import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getTrendingMoviesAction} from "../app/actions/movieAction";

const TrendingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTrendingMoviesAction());
  }, []);

  return (
    <View>
      <Text>TrendingMovies1</Text>
    </View>
  );
};

export default TrendingMovies;
