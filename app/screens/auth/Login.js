import React, {useState} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {
  Text,
  Title,
  Button,
  withTheme,
  TextInput,
  TouchableRipple,
} from 'react-native-paper';
import {Container, Welcome} from '../../components';
const Login = ({navigation, theme}) => {
  const {colors} = theme;
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(true);
  
  return (
    <Container customStyle={{paddingLeft: 0, paddingRight: 0}}>
      <Welcome title="Welcome back!" subtitle="Login." />
      <Container customStyle={styles.form}>
        <TextInput
          label="Email"
          value={email}
          onChangeText={(email) => setEmail(email)}
          style={styles.input}
        />
        <TextInput
          label="Password"
          value={password}
          onChangeText={(password) => setPassword(password)}
          secureTextEntry={showPassword}
          style={styles.input}
          right={
            <TextInput.Icon
              name={showPassword ? 'eye-outline' : 'eye-off-outline'}
              onPress={() => setShowPassword(!showPassword)}
              color={colors.grey}
            />
          }
        />
        <TouchableRipple
          onPress={() => navigation.navigate('register')}
          style={styles.textBtn}>
          <Text
            style={{
              textAlign: 'left',
              textTransform: 'capitalize',
              color: colors.primary,
            }}>
            Forgot Password ?
          </Text>
        </TouchableRipple>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('register')}
          style={styles.myBtn}>
          Login
        </Button>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: '30%',
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
          <Text style={{textAlign: 'center'}}>Don't Have an account </Text>
          <TouchableRipple onPress={() => navigation.navigate('register')}>
            <Text
              style={{
                textAlign: 'left',
                textTransform: 'capitalize',
                color: colors.primary,
              }}>
              Register.
            </Text>
          </TouchableRipple>
        </View>
      </Container>
    </Container>
  );
};

export default withTheme(Login);

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
    marginTop: '7%',
  },
  input: {
    backgroundColor: 'white',
    marginBottom: '7%',
  },
  textBtn: {
    marginBottom: '5%',
    width: '50%',
    paddingTop: 10,
    paddingBottom: 10,
  },
});
