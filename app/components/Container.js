import React from 'react';
import {StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';

const Container = ({children, customStyle}) => {
  const style = {...styles.container, customStyle};

  return <View style={style}>{children}</View>;
};

Container.prototype = {
  children: PropTypes.element.isRequired,
  customStyle: PropTypes.object,
};

export default Container;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: '4%',
    justifyContent: 'flex-start',
    height: '100%',
    width: '100%',
  },
});
