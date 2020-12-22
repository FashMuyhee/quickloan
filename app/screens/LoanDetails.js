import React from 'react';
import {StyleSheet, View, Image, StatusBar} from 'react-native';
import {ScrollContainer, MyCard, TextButton} from '../components';
import {
  Avatar,
  Text,
  Title,
  Headline,
  withTheme,
  IconButton,
  TouchableRipple,
  Caption,
} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const LoanDetails = ({theme, navigation}) => {
  const {colors} = theme;

  return (
    <>
      <View style={{height: '35%', position: 'relative'}}>
        <StatusBar
          backgroundColor="transparent"
          barStyle="dark-content"
          translucent
        />
        <View style={styles.iconBtn}>
          <IconButton
            icon="chevron-left"
            color={colors.primary}
            size={20}
            onPress={() => navigation.goBack()}
          />
        </View>
        <Image
          source={require('../assets/images/bg_1.png')}
          style={{backgroundColor: '#fafafa', width: '100%', height: '100%'}}
        />
        <Avatar.Image
          source={require('../assets/images/palm_credit.png')}
          size={70}
          style={{position: 'absolute', left: '40%', top: '85%', zIndex: 100}}
        />
      </View>
      <ScrollContainer>
        <View style={{alignItems: 'center', marginTop: 30}}>
          <Headline style={{color: colors.primary}}>Palm Credit</Headline>
          <Caption>Lorem Ipsum</Caption>
        </View>
        <MyCard customStyle={styles.cardFlex}>
          <View
            style={{
              borderRightColor: colors.grey,
              borderRightWidth: 0.6,
              paddingRight: 30,
            }}>
            <View style={styles.flex}>
              <Avatar.Icon
                name="arrow-left"
                size={30}
                color={colors.primary}
                style={{backgroundColor: colors.accent, marginRight: 10}}
              />
              <Text style={{color: colors.primary}}>Fixed 20days</Text>
            </View>
            <Title style={{color: colors.primary, textAlign: 'center'}}>
              10.0%
            </Title>
          </View>
          <View>
            <View style={styles.flex}>
              <Avatar.Icon
                name="menu"
                size={30}
                color={colors.primary}
                style={{backgroundColor: colors.accent, marginRight: 10}}
              />
              <Text style={{color: colors.primary}}>Interest</Text>
            </View>
            <Title style={{color: colors.primary, textAlign: 'center'}}>
              10.0%
            </Title>
          </View>
        </MyCard>

        <MyCard customStyle={{height: 170, marginBottom: 40}}>
          <View style={styles.cardBody}>
            <Text style={{color: colors.grey, fontSize: 17}}>Down Payment</Text>
            <Text style={{color: colors.primary}}>₦10,000</Text>
          </View>
          <View style={styles.cardBody}>
            <Text style={{color: colors.grey, fontSize: 17}}>
              Gross Interest
            </Text>
            <Text style={{color: colors.primary}}>₦12,000</Text>
          </View>
          <View style={{...styles.cardBody, borderBottomWidth: 0}}>
            <Text style={{color: colors.grey, fontSize: 17}}>Due Date</Text>
            <Text style={{color: colors.primary}}>30days</Text>
          </View>
        </MyCard>

        <TouchableRipple
          style={styles.button}
          onPress={() => navigation.navigate('get_loan')}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{marginLeft: '40%'}}>
              <Text style={{color: 'white', fontSize: 20}}>Pay Back </Text>
            </View>
            <View>
              <Text style={{color: 'white'}}>₦12,000</Text>
            </View>
          </View>
        </TouchableRipple>
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

export default withTheme(LoanDetails);

const styles = StyleSheet.create({
  cardBody: {
    borderBottomColor: '#8A8A8A',
    borderBottomWidth: 0.8,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 5,
    paddingTop: 15,
  },
  cardFlex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingBottom: 10,
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#8f00bf',
    height: 50,
    borderRadius: 5,
    paddingBottom: 10,
    paddingRight: 15,
    paddingLeft: 15,
    paddingTop: 10,
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
