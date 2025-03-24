import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {screenNames} from "../types";
import Home from "../screens/Home";
import Movie from "../screens/Movie";
import Person from "../screens/Person";
import Search from "../screens/Search";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={screenNames.Home}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={screenNames.Home} component={Home} />
      <Stack.Screen name={screenNames.Movie} component={Movie} />
      <Stack.Screen name={screenNames.Person} component={Person} />
      <Stack.Screen name={screenNames.Search} component={Search} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
