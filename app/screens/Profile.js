import React from 'react';
import {StyleSheet, View, StatusBar, Image} from 'react-native';
import {ScrollContainer, MyCard} from '../components';
import {
  Avatar,
  Text,
  Title,
  Headline,
  withTheme,
  Caption,
} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Profile = ({theme, navigation}) => {
  const {colors} = theme;
  return (
    <>
      <StatusBar backgroundColor={theme.colors.light} barStyle="dark-content" />
      <View style={styles.avatarHeader}>
        <View style={styles.flex}>
          <Avatar.Image source={require('../assets/images/avatar_2.png')} />
          <View style={{marginLeft: 10}}>
            <Headline>John Doe</Headline>
            <Caption>Getting loans made easier...</Caption>
          </View>
        </View>
        <Image source={require('../assets/images/mail.png')} />
      </View>
      <ScrollContainer>
        <MyCard customStyle={styles.list}>
          <View style={styles.flex}>
            <Image source={require('../assets/images/user.png')} />
            <Text style={styles.listText}>Change Profile </Text>
          </View>
          <MaterialIcons name="chevron-right" color={colors.grey} size={30} />
        </MyCard>
        <MyCard
          customStyle={styles.list}
          onPress={() => navigation.navigate('my_cards')}>
          <View style={styles.flex}>
            <Image source={require('../assets/images/credit_card.png')} />
            <Text style={styles.listText}>My Cards </Text>
          </View>
          <MaterialIcons name="chevron-right" color={colors.grey} size={30} />
        </MyCard>
        <MyCard customStyle={styles.list}>
          <View style={styles.flex}>
            <Image source={require('../assets/images/clipboard.png')} />
            <Text style={styles.listText}>Transaction History </Text>
          </View>
          <MaterialIcons name="chevron-right" color={colors.grey} size={30} />
        </MyCard>
        <MyCard customStyle={styles.list}>
          <View style={styles.flex}>
            <Image source={require('../assets/images/shield.png')} />
            <Text style={styles.listText}>Change Security Code </Text>
          </View>
          <MaterialIcons name="chevron-right" color={colors.grey} size={30} />
        </MyCard>
        <MyCard customStyle={styles.list}>
          <View style={styles.flex}>
            <Image source={require('../assets/images/accepted.png')} />
            <Text style={styles.listText}>Terms of Services </Text>
          </View>
          <MaterialIcons name="chevron-right" color={colors.grey} size={30} />
        </MyCard>
        <MyCard customStyle={styles.list}>
          <View style={styles.flex}>
            <Image source={require('../assets/images/logout.png')} />
            <Text style={styles.listText}>Sign Out </Text>
          </View>
          <MaterialIcons name="chevron-right" color={colors.grey} size={30} />
        </MyCard>
      </ScrollContainer>
    </>
  );
};

export default withTheme(Profile);

const styles = StyleSheet.create({
  avatarHeader: {
    height: 130,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
  },
  list: {
    height: 70,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listText: {
    marginLeft: 10,
    fontSize: 18,
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
  },
});
