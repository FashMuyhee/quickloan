import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';

const Loan = ({navigation}) => {
  return (
    <View>
      <Text>Loan</Text>
      <Button mode="contained" onPress={() => navigation.navigate('login')}>
        Login
      </Button>
    </View>
  );
};

export default Loan;

const styles = StyleSheet.create({});
