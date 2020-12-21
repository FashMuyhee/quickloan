import React from 'react';
import {StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';

const Card = ({children, customStyle}) => {
  const style = {...styles.container, ...customStyle};

  return <View style={style}>{children}</View>;
};

Card.prototype = {
  children: PropTypes.element.isRequired,
  customStyle: PropTypes.object,
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
    elevation: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    elevation: 3,
  },
});
