import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {screenNames} from "../types";
import StackNavigation from "./StackNavigation";
import Favourites from "../screens/Favourites";
import Icon from "react-native-vector-icons/FontAwesome";
import {themes} from "../themes";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: themes.tabBar.background,
        },
        tabBarActiveTintColor: themes.tabBar.active,
        tabBarInactiveTintColor: themes.tabBar.inActive,
      }}>
      <Tab.Screen
        name={screenNames.Home}
        component={StackNavigation}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={screenNames.Favourites}
        component={Favourites}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="heart" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
