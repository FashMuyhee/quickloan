import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Text,
  Button,
  withTheme,
  Paragraph,
  TextInput,
} from 'react-native-paper';
import {Container, Welcome} from '../components';
import {Picker} from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome';

const Verification = ({navigation, theme}) => {
  const {colors} = theme;
  const [bvn, setBvn] = React.useState('');
  const [picker, setPicker] = React.useState('');

  return (
    <Container customStyle={{paddingLeft: 0, paddingRight: 0}}>
      <Welcome title="Verification" />
      <Container customStyle={styles.form}>
        <View style={styles.pagination}>
          <View style={{...styles.dot, backgroundColor: colors.primary}} />
          <View style={{...styles.dot, backgroundColor: colors.grey}} />
        </View>
        <View style={{marginTop: '20%'}}>
          <Picker
            mode="dropdown"
            selectedValue={picker}
            style={styles.picker}
            onValueChange={(itemValue) => setPicker(itemValue)}>
            <Picker.Item label="Select Bank" value="Select Bank" />
            <Picker.Item label="Ecobank" value="ecobank" />
            <Picker.Item label="UBA" value="uba" />
            <Picker.Item label="GTB" value="gtb" />
            <Picker.Item label="First Bank" value="first_bank" />
            <Picker.Item label="Wema Bank" value="wema_bank" />
          </Picker>
          <TextInput
            label="Account Number"
            style={styles.input}
            keyboardType="numeric"
            maxLength={11}
          />
          <Button
            mode="contained"
            onPress={() => navigation.navigate('verification_two')}
            style={styles.myBtn}>
            Procced
          </Button>
        </View>
        <View style={{marginTop: '50%', padding: '12%'}}>
          <Paragraph style={styles.footer}>
            By inputing your Bank Details, you agree with our
            <Text> Terms & Conditions</Text> and <Text> Privacy Policy.</Text>
          </Paragraph>
        </View>
      </Container>
    </Container>
  );
};

export default withTheme(Verification);

const styles = StyleSheet.create({
  myBtn: {
    paddingTop: 15,
    paddingBottom: 15,
  },
  hero: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    height: '30%',
  },
  heroImg: {
    resizeMode: 'contain',
    width: '55%',
  },
  heroText: {
    paddingLeft: '7%',
  },
  input: {
    backgroundColor: 'white',
    marginBottom: '7%',
    fontSize: 25,
  },
  textBtn: {
    marginBottom: '5%',
    width: '50%',
    paddingTop: 10,
    paddingBottom: 10,
  },
  pagination: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '15%',
    alignSelf: 'center',
  },
  dot: {
    height: 15,
    width: 15,
    borderRadius: 20,
  },
  footer: {
    textAlign: 'center',
    color: 'grey',
  },
  picker: {
    marginBottom: '5%',
    marginTop: '5%',
    height: 60,
    borderBottomWidth: 4,
    borderBottomColor: 'yellow',
    fontSize: 20,
  },
});
