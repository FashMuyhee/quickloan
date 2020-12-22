import React from 'react';
import {StyleSheet, View, ImageBackground, StatusBar} from 'react-native';
import {ScrollContainer, MyCard, TextButton} from '../components';
import {
  Avatar,
  Text,
  Title,
  Headline,
  withTheme,
  Button,
  TouchableRipple,
  Caption,
  TextInput,
  IconButton,
} from 'react-native-paper';
import {MaskedTextInput, CustomMask} from 'rn-masked-text-input';

const GetLoan = ({theme, navigation}) => {
  const {colors} = theme;
  const myCustomMask = new CustomMask({
    name: 'myCustomMask',
    mask: '0 0 0 0   0 0 0 0   0 0 0 0   0 0 0 0',
    validator: (value) => value === '1234567890',
  });
  const expiryDate = new CustomMask({
    name: 'myCustomMask',
    mask: '0 0',
    validator: (value) => value === '1234567890',
  });

  return (
    <>
      <View>
        <StatusBar
          backgroundColor="transparent"
          barStyle="light-content"
          translucent
        />
        <ImageBackground
          source={require('../assets/images/bg_2.png')}
          style={{
            backgroundColor: 'teal',
            // width: '100%',
            height: 200,
            resizeMode: 'cover',
          }}>
          <View style={styles.iconBtn}>
            <IconButton
              icon="chevron-left"
              color={colors.primary}
              size={20}
              onPress={() => navigation.goBack()}
            />
          </View>
          <View style={{alignItems: 'center', marginTop: '30%'}}>
            <Headline style={{color: 'white'}}>Amount to be loaned:</Headline>
            <Headline
              style={{
                color: 'white',
                fontSize: 34,
                fontWeight: '700',
                marginTop: 5,
                letterSpacing: 3,
              }}>
              ₦10,000
            </Headline>
          </View>
        </ImageBackground>
      </View>
      <ScrollContainer>
        <View style={{marginBottom: 25}}>
          <Text style={{color: colors.grey, fontSize: 20}}>To:</Text>
          <View style={styles.flex}>
            <Avatar.Image
              source={require('../assets/images/avatar_3.png')}
              style={{backgroundColor: 'white'}}
            />
            <Text style={{fontSize: 20, fontWeight: 'bold',marginLeft:8}}>John Doe</Text>
          </View>
        </View>
        <Caption style={{fontSize: 14}}>
          Fill your details on the card below:
        </Caption>
        <MyCard customStyle={styles.creditCard}>
          <Text style={{...styles.creditCardText, fontSize: 18}}>
            Your Card
          </Text>
          <MaskedTextInput
            customMask={myCustomMask}
            keyboardType="numeric"
            style={styles.input}
          />
          <View
            style={{
              ...styles.flex,
              width: 280,
              marginLeft: 40,
            }}>
            <Caption style={{...styles.creditCardText, fontSize: 10}}>
              VALID TILL
            </Caption>
            <MaskedTextInput
              customMask={expiryDate}
              keyboardType="numeric"
              style={styles.expiryDate}
              placeholder="MM"
            />
            <Text style={styles.creditCardText}>:</Text>
            <MaskedTextInput
              customMask={expiryDate}
              keyboardType="numeric"
              style={styles.expiryDate}
              placeholder="YY"
            />
          </View>
          <Text style={{...styles.creditCardText, fontSize: 18}}>
            Enter your name
          </Text>
        </MyCard>

        <Button style={styles.button} mode="contained">
          Send Now
        </Button>
        <TextButton
          style={{marginTop: 10, alignSelf: 'center', marginBottom: 30}}>
          <Text style={{color: colors.grey, fontSize: 17}}>
            Do you need some help ?
          </Text>
        </TextButton>
      </ScrollContainer>
    </>
  );
};

export default withTheme(GetLoan);

const styles = StyleSheet.create({
  creditCard: {
    backgroundColor: '#8f00bf',
    height: 220,
  },
  creditCardText: {color: 'white'},
  flex: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    paddingBottom: 15,
    paddingTop: 15,
  },
  input: {
    color: 'white',
    width: '100%',
    fontSize: 25,
    textAlign: 'center',
  },
  expiryDate: {
    color: 'white',
    width: '10%',
    fontSize: 14,
    textAlign: 'center',
    backgroundColor: '#af00ea',
    borderRadius: 2,
    paddingTop: 2,
    paddingBottom: 2,
    marginLeft: 10,
    marginRight: 10,
  },
  iconBtn: {
    position: 'absolute',
    zIndex: 140,
    backgroundColor: 'white',
    top: 40,
    left: 20,
    borderRadius: 5,
  },
});
