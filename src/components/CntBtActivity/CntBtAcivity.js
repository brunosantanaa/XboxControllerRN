import React from 'react';
import { View } from 'react-native';

import BtActivity from '../BtActivity/BtActivity';

import styles from './CntBtActivity_style';

export default function BtXYAB() {
  return(
    <View style={styles.container}>
      <View style={styles.container_hor}>
        <View style={styles.hor}>
          <BtActivity color='blue' name='X' />
        </View>
        <View style={styles.vert}>
        <BtActivity color='yellow' name='Y' />
          <View style={styles.space}></View>
          <BtActivity color='green' name='A' />
        </View>
        <View style={styles.hor}>
        <BtActivity color='red' name='B' />
        </View>
      </View>
    </View>
  );
}