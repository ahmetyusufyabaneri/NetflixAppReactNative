import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {screenNames} from "../types";
import Home from "../screens/Home";
import MovieDetail from "../screens/MovieDetail";
import Search from "../screens/Search";
import ActorDetail from "../screens/ActorDetail";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={screenNames.Home}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={screenNames.Home} component={Home} />
      <Stack.Screen name={screenNames.MovieDetail} component={MovieDetail} />
      <Stack.Screen name={screenNames.ActorDetail} component={ActorDetail} />
      <Stack.Screen name={screenNames.Search} component={Search} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
