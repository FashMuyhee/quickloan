import React from 'react';
import {StyleSheet, View, Image, StatusBar} from 'react-native';
import {ScrollContainer, MyCard} from '../components';
import {
  Appbar,
  Avatar,
  Text,
  Title,
  Headline,
  withTheme,
  Caption,
} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Loan = ({theme, navigation}) => {
  const {colors} = theme;

  return (
    <>
      <StatusBar
        backgroundColor={theme.colors.primary}
        barStyle="light-content"
      />

      <Appbar.Header style={{height: 90, justifyContent: 'space-between'}}>
        <View style={{marginLeft: 20}}>
          <Image source={require('../assets/images/quickloan.png')} />
          <Caption style={{color: 'white'}}>
            Getting loans made easier...
          </Caption>
        </View>
        <></>
        <Appbar.Action icon="menu" onPress={() => navigation.toggleDrawer()} />
      </Appbar.Header>
      <ScrollContainer>
        <MyCard
          customStyle={{height: 150}}
          onPress={() => navigation.navigate('loan_details')}>
          <View style={styles.cardHeader}>
            <View style={styles.flex}>
              <Image
                source={require('../assets/images/palm_credit.png')}
                style={{marginRight: 10}}
              />
              <Title>Palm Credit</Title>
            </View>
            <MaterialIcons
              name="chevron-right"
              color={colors.secondary}
              size={30}
            />
          </View>
          <View style={styles.cardBody}>
            <View style={styles.cardBodyFlex}>
              <Headline style={{color: colors.secondary}}>10.0%</Headline>
              <Text style={{fontWeight: 'bold'}}>₦10,000.00</Text>
            </View>
            <View style={styles.cardBodyFlex}>
              <Text style={{color: colors.grey}}>Fixed 30days</Text>
              <Text style={{color: colors.grey}}>interest ₦1,000</Text>
            </View>
          </View>
        </MyCard>
        <MyCard customStyle={{height: 150}}>
          <View style={styles.cardHeader}>
            <View style={styles.flex}>
              <Image
                source={require('../assets/images/kwick_cash.png')}
                style={{marginRight: 10}}
              />
              <Title>Kwick Cash</Title>
            </View>
            <MaterialIcons
              name="chevron-right"
              color={colors.secondary}
              size={30}
            />
          </View>
          <View style={styles.cardBody}>
            <View style={styles.cardBodyFlex}>
              <Headline style={{color: colors.secondary}}>8.99%</Headline>
              <Text style={{fontWeight: 'bold'}}>₦10,000.00</Text>
            </View>
            <View style={styles.cardBodyFlex}>
              <Text style={{color: colors.grey}}>Fixed 20days</Text>
              <Text style={{color: colors.grey}}>interest ₦700</Text>
            </View>
          </View>
        </MyCard>
        <MyCard customStyle={{height: 150}}>
          <View style={styles.cardHeader}>
            <View style={styles.flex}>
              <Image
                source={require('../assets/images/money_pal.png')}
                style={{marginRight: 10}}
              />
              <Title>Money Pal</Title>
            </View>
            <MaterialIcons
              name="chevron-right"
              color={colors.secondary}
              size={30}
            />
          </View>
          <View style={styles.cardBody}>
            <View style={styles.cardBodyFlex}>
              <Headline style={{color: colors.secondary}}>9.5%</Headline>
              <Text style={{fontWeight: 'bold'}}>₦10,000.00</Text>
            </View>
            <View style={styles.cardBodyFlex}>
              <Text style={{color: colors.grey}}>Fixed 25days</Text>
              <Text style={{color: colors.grey}}>interest ₦950</Text>
            </View>
          </View>
        </MyCard>
        <MyCard customStyle={{height: 150, marginBottom: 40}}>
          <View style={styles.cardHeader}>
            <View style={styles.flex}>
              <Image
                source={require('../assets/images/palm_credit.png')}
                style={{marginRight: 10}}
              />
              <Title>Palm Credit</Title>
            </View>
            <MaterialIcons
              name="chevron-right"
              color={colors.secondary}
              size={30}
            />
          </View>
          <View style={styles.cardBody}>
            <View style={styles.cardBodyFlex}>
              <Headline style={{color: colors.secondary}}>10.0%</Headline>
              <Text style={{fontWeight: 'bold'}}>₦10,000.00</Text>
            </View>
            <View style={styles.cardBodyFlex}>
              <Text style={{color: colors.grey}}>Fixed 30days</Text>
              <Text style={{color: colors.grey}}>interest ₦1,000</Text>
            </View>
          </View>
        </MyCard>
      </ScrollContainer>
    </>
  );
};

export default withTheme(Loan);

const styles = StyleSheet.create({
  cardHeader: {
    borderBottomColor: '#8A8A8A',
    borderBottomWidth: 0.8,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
  },
  cardBody: {
    paddingBottom: 10,
    paddingTop: 10,
  },
  cardBodyFlex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
