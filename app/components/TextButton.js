import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TouchableRipple} from 'react-native-paper';
import PropTypes from 'prop-types';

const TextButton = (props) => {
  return (
    <TouchableRipple {...props}>
      <View style={styles.container}>{props.children}</View>
    </TouchableRipple>
  );
};

TextButton.prototype = {
  children: PropTypes.element.isRequired,
  customStyle: PropTypes.object,
};

export default TextButton;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 5,
    paddingBottom: 5,
  },
});
