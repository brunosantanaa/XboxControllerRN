import React from 'react';
import { SafeAreaView } from 'react-native';

import Directions from './components/Direction/direction';
import CntBtAcivity from './components/CntBtActivity/CntBtAcivity';
import CntBtOptions from './components/CntBtOptions/CntBtOptions';

export default function Main() {
  return (
    <SafeAreaView style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', flex: 1}}>
      <Directions /> 
      <CntBtOptions />
      <CntBtAcivity />
    </SafeAreaView>
  )
}