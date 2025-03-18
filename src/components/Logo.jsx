import {Image, StyleSheet, Text, View} from 'react-native';

const Logo = () => {
  return (
    <Image
      source={{
        uri: 'https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png',
      }}
      width={200}
      height={50}
    />
  );
};

export default Logo;

const styles = StyleSheet.create({});
