import {SafeAreaView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {themes} from '../themes';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {screenNames} from '../types';
import Logo from '../components/Logo';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {getTopRatedMoviesAction} from '../app/actions/movieAction';

const Home = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopRatedMoviesAction());
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View className="flex-row items-center justify-between mt-2 px-4">
          <TouchableOpacity>
            <Icon name="menuunfold" size={28} color={'#fff'} />
          </TouchableOpacity>
          <Logo />
          <TouchableOpacity
            onPress={() => navigation.navigate(screenNames.Search)}>
            <Icon name="search1" size={28} color={'#fff'} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.home.background,
  },
});
