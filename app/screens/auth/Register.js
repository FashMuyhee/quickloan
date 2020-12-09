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
const Register = ({navigation, theme}) => {
  const {colors} = theme;
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [c_password, setCPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(true);

  return (
    <Container customStyle={{paddingLeft: 0, paddingRight: 0}}>
      <Welcome title="Welcome!" subtitle="Sign Up." />
      <Container customStyle={styles.form}>
        <TextInput
          label="Email"
          value={email}
          onChangeText={(email) => setEmail(email)}
          style={styles.input}
        />
        <TextInput
          label="Create Password"
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
        <TextInput
          label="Confirm Password"
          value={c_password}
          onChangeText={(c_password) => setCPassword(c_password)}
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

        <Button
          mode="contained"
          onPress={() => navigation.navigate('verification')}
          style={styles.myBtn}>
          SIGN UP
        </Button>

        <Text
          style={{
            textAlign: 'center',
            fontSize: 15,
            marginTop: '5%',
            marginBottom: '5%',
          }}>
          OR
        </Text>
        <Button
          mode="outlined"
          style={{
            ...styles.myBtn,
            borderColor: 'black',
          }}>
          <Image
            source={require('../../assets/images/google-icon.png')}
            style={{marginRight: 30}}
          />
          <Text> SIGN UP USING GOOGLE</Text>
        </Button>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: '8%',
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
          <Text style={{textAlign: 'center'}}>Already Have an account </Text>
          <TouchableRipple onPress={() => navigation.navigate('login')}>
            <Text
              style={{
                textAlign: 'left',
                textTransform: 'capitalize',
                color: colors.primary,
              }}>
              Login.
            </Text>
          </TouchableRipple>
        </View>
      </Container>
    </Container>
  );
};

export default withTheme(Register);

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
