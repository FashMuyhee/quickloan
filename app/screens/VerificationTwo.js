import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Text,
  Button,
  withTheme,
  TextInput,
  TouchableRipple,
  Paragraph,
} from 'react-native-paper';
import {Container, Welcome} from '../components';
import {MaskedTextInput, CustomMask} from 'rn-masked-text-input';

const VerificationTwo = ({navigation, theme}) => {
  const {colors} = theme;
  const [bvn, setBvn] = React.useState('');
  const myCustomMask = new CustomMask({
    name: 'myCustomMask',
    mask: '0 0 0 0 0 0 0 0 0 0',
    validator: (value) => value === '1234567890',
  });
  return (
    <Container customStyle={{paddingLeft: 0, paddingRight: 0}}>
      <Welcome title="Verification" />
      <Container customStyle={styles.form}>
        <View style={styles.pagination}>
          <View style={{...styles.dot, backgroundColor: colors.grey}} />
          <View style={{...styles.dot, backgroundColor: colors.primary}} />
        </View>
        <View style={{marginTop: '25%'}}>
          <Paragraph
            style={{
              color: colors.grey,

              fontSize: 20,
              marginLeft: '6%',
              marginTop: '5%',
              marginBottom: '-3%',
            }}>
            Input Bank Verification Number
          </Paragraph>
          <MaskedTextInput
            customMask={myCustomMask}
            keyboardType="numeric"
            style={styles.input}
            autoFocus
          />
          <Button
            mode="contained"
            onPress={() => navigation.navigate('dashboard')}
            style={styles.myBtn}>
            Done
          </Button>
        </View>
        <View style={{marginTop: '50%', padding: '12%'}}>
          <Paragraph style={styles.footer}>
            By inputing your BVN, you agree with our
            <Text> Terms & Conditions</Text> and <Text> Privacy Policy.</Text>
          </Paragraph>
        </View>
      </Container>
    </Container>
  );
};

export default withTheme(VerificationTwo);

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
  form: {
    // marginTop: '1%',
  },
  input: {
    backgroundColor: 'white',
    marginBottom: '7%',
    marginTop: '3%',
    width: '100%',
    fontSize: 45,
    textAlign: 'center',
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
});
