import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import PropTypes from 'prop-types';

const ScrollContainer = ({children, customStyle}) => {
  const style = {...styles.container, ...customStyle};

  return <ScrollView style={style}>{children}</ScrollView>;
};

ScrollContainer.prototype = {
  children: PropTypes.element.isRequired,
  customStyle: PropTypes.object,
};

export default ScrollContainer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafafa',
    // backgroundColor: '#E5E5E5',
    paddingLeft: 15,
    paddingRight: 15,
    // height: '100%',
    width: '100%',
    paddingBottom: 20,
    paddingTop: 20,
  },
});
