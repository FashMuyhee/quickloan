import React, {useContext} from 'react';
import {Image, StyleSheet, View, StatusBar} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {Text} from 'react-native-paper';
import {AppContext} from './app/store/AppContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const slides = [
  {
    key: 'one',
    title: 'ease of use',
    text:
      'It is a long established fact that a reader will be distracted by readable content of a page when looking at it layout',
    image: require('./app/assets/images/1.png'),
  },
  {
    key: 'two',
    title: 'trustworthy loan source',
    text:
      'It is a long established fact that a reader will be distracted by readable content of a page when looking at it layout',
    image: require('./app/assets/images/2.png'),
  },
  {
    key: 'three',
    title: 'managing loans',
    text:
      'It is a long established fact that a reader will be distracted by readable content of a page when looking at it layout',
    image: require('./app/assets/images/3.png'),
  },
];

const AppIntro = ({navigation}) => {
  const [app_state, setAppState] = useContext(AppContext);

  const _renderItem = ({item}) => {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Image source={item.image} style={styles.intro_image} />
        <Text style={styles.intro_title}>{item.title}</Text>

        <Text style={styles.intro_text}>{item.text}</Text>
      </View>
    );
  };

  const _renderSkipButton = () => {
    return <Text>Skip</Text>;
  };

  const _handleAppIntroFinish = () => {
    setAppState(true);
  };

  return (
    <>
      <StatusBar backgroundColor="#f0f0f0" barStyle="dark-content" />
      <AppIntroSlider
        renderItem={_renderItem}
        data={slides}
        activeDotStyle={{
          backgroundColor: '#8F00BF',
          width: 70,
        }}
        dotStyle={{
          width: 70,
          backgroundColor: '#f0f0f0',
        }}
        bottomButton
        skipLabel="Skip"
        showSkipButton
        doneLabel="Let's Go !"
        showNextButton={false}
        _renderSkipButton={_renderSkipButton}
        onDone={_handleAppIntroFinish}
      />
    </>
  );
};

export default AppIntro;

const styles = StyleSheet.create({
  intro_title: {
    paddingTop: 25,
    paddingBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center',
    textTransform: 'capitalize',
  },
  intro_text: {
    textAlign: 'center',
    color: '#5e5c5e',
    fontSize: 15,
    paddingHorizontal: 30,
  },
  intro_image: {
    resizeMode: 'cover',
    height: '70%',
    width: '100%',
    /* borderWidth:1,
    borderColor:'red' */
  },
  done: {
    position: 'absolute',
    left: '0%',
    top: '100%',
  },
});
