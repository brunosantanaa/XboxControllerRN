import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import styles from './BtOptions_style';

export default function BtOptions(props) {
  return(
    <TouchableOpacity style={styles.container}><Icon name={props.icon} size={20} color='#2F2F2F'/></TouchableOpacity>
  );
}