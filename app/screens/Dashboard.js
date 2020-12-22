import React from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Dimensions,
  StatusBar,
} from 'react-native';
import {ScrollContainer, MyCard} from '../components';
import {
  Appbar,
  Avatar,
  Text,
  Title,
  Headline,
  Chip,
  withTheme,
} from 'react-native-paper';
import {LineChart} from 'react-native-chart-kit';

const Dashboard = ({theme, navigation}) => {
  const screenWidth = Dimensions.get('window').width - 60;
  const {colors} = theme;
  const dataValue = {
    labels: ['Week-1', 'Week-2', 'Week-3', 'Week-4', 'Week-5'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
      },
    ],
  };
  const chartConfig = {
    backgroundColor: '#ffffff',
    backgroundGradientFrom: 'white',
    backgroundGradientTo: 'white',
    color: (opacity = 1) => `black`,
    labelColor: (opacity = 1) => 'black',
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: colors.secondary,
    },
  };
  return (
    <>
      <StatusBar
        backgroundColor={theme.colors.primary}
        barStyle="light-content"
      />

      <Appbar.Header>
        <Avatar.Image
          size={50}
          source={require('../assets/images/avatar.png')}
        />
        <Appbar.Content
          title="Hi, John Doe"
          subtitle="Have a wonderful day..."
        />
        <Appbar.Action
          icon="bell-outline"
          onPress={() => navigation.toggleDrawer()}
        />
      </Appbar.Header>
      <ScrollContainer>
        <ImageBackground
          source={require('../assets/images/card.png')}
          style={styles.creditCard}>
          <Text
            style={{
              color: 'white',
              fontSize: 18,
              position: 'absolute',
              top: 160,
              left: 10,
              // bottom: 0,
            }}>
            John Doe Gbadamosi
          </Text>
        </ImageBackground>
        <MyCard customStyle={styles.activityCard}>
          <Headline style={{fontSize: 25}}>Activity</Headline>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}>
            <Chip
              onPress={() => console.log('Pressed')}
              selectedColor={colors.primary}
              selected={false}>
              Weekly
            </Chip>
            <Chip onPress={() => console.log('Pressed')}>Monthly</Chip>
            <Chip onPress={() => console.log('Pressed')}>Quarterly</Chip>
          </View>
          <View style={{marginTop: 30}}>
            <LineChart
              data={dataValue}
              width={screenWidth}
              height={256}
              verticalLabelRotation={30}
              chartConfig={chartConfig}
              bezier
            />
          </View>
          <View
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              // width: '50%',
              flexDirection: 'row',
              marginTop: 10,
            }}>
            <Chip
              onPress={() => console.log('Pressed')}
              style={{backgroundColor: colors.accent}}>
              From jan 1 to Feb 19
            </Chip>
          </View>
        </MyCard>
        <MyCard customStyle={{height: 150}}>
          <View style={styles.cardHeader}>
            <Title>Loan Balance</Title>
            <Text>Limits: ₦1,000,000.00</Text>
          </View>
          <View style={styles.cardBody}>
            <View style={styles.cardBodyFlex}>
              <Text style={{color: '#8A8A8A'}}>Repayment month</Text>
              <Text style={{fontWeight: 'bold'}}>₦11,000</Text>
            </View>
            <Text>Fixed 30day</Text>
          </View>
        </MyCard>
        <MyCard customStyle={{height: 200, marginBottom: 40}}>
          <View style={styles.cardHeader}>
            <Title>Total Balance</Title>
            <Text>Limits: ₦1,000,000.00</Text>
          </View>
          <View style={styles.cardBody}>
            <View style={styles.cardBodyFlex}>
              <Text style={{color: '#8A8A8A'}}>Total Loan</Text>
              <Text style={{fontWeight: 'bold'}}>₦10,000.00</Text>
            </View>
            <View style={styles.cardBodyFlex}>
              <Text style={{color: '#8A8A8A'}}>Gross Interest</Text>
              <Text style={{fontWeight: 'bold'}}>₦950.00</Text>
            </View>
            <View style={styles.cardBodyFlex}>
              <Text style={{color: '#8A8A8A'}}>Due Date</Text>
              <Text style={{fontWeight: 'bold'}}>30 days</Text>
            </View>
          </View>
        </MyCard>
      </ScrollContainer>
    </>
  );
};

export default withTheme(Dashboard);

const styles = StyleSheet.create({
  creditCard: {
    marginTop: 10,
    // width: '100%',
    height: 200,
    resizeMode: 'cover',
    position: 'relative',
  },
  activityCard: {
    height: 450,
  },
  loanBal: {},
  totalBal: {},
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
});
