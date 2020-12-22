import React from 'react';
import {StyleSheet, View, Image, StatusBar} from 'react-native';
import {ScrollContainer, MyCard, TextButton} from '../components';
import {
  Avatar,
  Text,
  Title,
  Headline,
  withTheme,
  TouchableRipple,
  Caption,
  Paragraph,
  IconButton,
} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const GetLoan = ({theme, navigation}) => {
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
          style={{position: 'absolute', left: '40%', top: '85%', zIndex: 10}}
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

        <MyCard customStyle={{height: 190, marginBottom: 40}}>
          <View style={styles.cardHeader}>
            <View style={styles.cardHeaderFlex}>
              <Headline>Loan Rates</Headline>
              <MaterialIcons
                name="chevron-right"
                color={colors.secondary}
                size={30}
              />
            </View>
            <View style={styles.cardHeaderFlex}>
              <Text style={{color: colors.grey}}>Total Value</Text>
              <Title style={{fontWeight: 'bold'}}>₦10,000.00</Title>
            </View>
          </View>
          <View style={styles.cardBody}>
            <Paragraph style={{color: colors.grey}}>
              <Paragraph style={{fontWeight: 'bold', color: colors.grey}}>
                This will contain description of the loan to be taken and
                charges,
              </Paragraph>
              consectetur adipiscing elit ut aliquam, purus sit amet luctus
              venenatis, lectus magna fringilla urna, porttitor
            </Paragraph>
          </View>
        </MyCard>

        <TouchableRipple
          style={styles.button}
          onPress={() => navigation.navigate('apply_loan')}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{marginLeft: '40%'}}>
              <Text style={{color: 'white', fontSize: 20}}>Get Loan </Text>
            </View>
            <View>
              <Text style={{color: 'white'}}>₦10,000</Text>
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

export default withTheme(GetLoan);

const styles = StyleSheet.create({
  cardHeader: {
    borderBottomColor: '#8A8A8A',
    borderBottomWidth: 0.8,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  cardHeaderFlex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 5,
    alignItems: 'center',
  },
  cardBody: {
    paddingBottom: 10,
    paddingTop: 10,
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
