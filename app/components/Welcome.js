import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import PropTypes from 'prop-types';
import {Text, Title, withTheme} from 'react-native-paper';

const Welcome = ({title, subtitle, customStyle, theme}) => {
  const style = {...styles.hero, ...customStyle};
  const {colors} = theme;
  return (
    <View style={style}>
      <View style={styles.heroText}>
        <Title style={{fontSize: 23}}>{title}</Title>
        <Text style={{fontSize: 23, color: colors.secondary}}>{subtitle}</Text>
      </View>

      <Image
        style={styles.heroImg}
        source={require('../assets/images/ellipse.png')}
      />
    </View>
  );
};

Welcome.prototype = {
  customStyle: PropTypes.object,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default withTheme(Welcome);

const styles = StyleSheet.create({
  hero: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    height: '23%',
  },
  heroImg: {
    resizeMode: 'contain',
    width: '55%',
  },
  heroText: {
    paddingLeft: '7%',
  },
});
