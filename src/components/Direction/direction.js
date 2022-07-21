import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import styles from "./dicrection_style";

export default function DirectionSetting() {
  return(
    <View style={styles.container}>
      <View style={styles.container_hor}>
        <View style={styles.hor}>
          <TouchableOpacity style={styles.bt}><Icon name='caretleft' size={20} color='#2F2F2F' /></TouchableOpacity>
        </View>
        <View style={styles.vert}>
          <TouchableOpacity style={styles.bt}><Icon name='caretup' size={20} color='#2F2F2F' /></TouchableOpacity>
          <View style={styles.bt}></View>
          <TouchableOpacity style={styles.bt}><Icon name='caretdown' size={20} color='#2F2F2F' /></TouchableOpacity>
        </View>
        <View style={styles.hor}>
          <TouchableOpacity style={styles.bt}><Icon name='caretright' size={20} color='#2F2F2F' /></TouchableOpacity>
        </View>
      </View>
    </View>
  );
}