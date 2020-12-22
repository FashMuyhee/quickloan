import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TouchableRipple} from 'react-native-paper';

import PropTypes from 'prop-types';

const Card = ({children, customStyle, onPress}) => {
  const style = {...styles.container, ...customStyle};

  return (
    <TouchableRipple onPress={onPress}>
      <View style={style}>{children}</View>
    </TouchableRipple>
  );
};

Card.prototype = {
  children: PropTypes.element.isRequired,
  customStyle: PropTypes.object,
  onPress: PropTypes.func,
};

export default Card;

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    height: 100,
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 10,
    padding: 20,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 2,
    borderColor: '#f2f2f2',
    borderWidth: 2,
  },
});
