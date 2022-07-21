import React from 'react';
import {View, Image} from 'react-native';

import BtOptions from '../BtOptions/BtOptions';
import BtXbox from '../BtXbox/BtXbox';

import styles from './CntBtOptions_style';

import logo from '../../../static/img/Logo.png';

export default function BtSpecials() {
  return(
    <View style={styles.container}>
      <View style={styles.principal_container}>
        <BtXbox />
      </View>
      <View style={styles.principal_container}>
        <View style={styles.j_start} ><BtOptions icon='select1' /></View>
        <View style={styles.j_end} ><BtOptions icon='upload' /></View>
        <View style={styles.j_start} ><BtOptions icon='menu-fold' /></View>
      </View>
      <Image source={logo} />
    </View>
  );
}