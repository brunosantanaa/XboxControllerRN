import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

import styles from './BtXbox_style';
import xbox_img from '../../../static/img/xbox.png'

export default function BtXbox() {
  return(
    <TouchableOpacity style={styles.container}>
      <Image source={xbox_img} />
    </TouchableOpacity>
  );
}