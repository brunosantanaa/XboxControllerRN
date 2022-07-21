import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './BtActivity_style';

export default function BtActivity(props) {
  return(
    <TouchableOpacity style={styles.bt}>
      <Text style={[styles.text_button, {color: props.color}]}>{props.name}</Text>
    </TouchableOpacity>
  );
}