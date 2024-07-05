import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LandingNavigation from './src/navigation/LandingNavigation'
import SquliteFunation from './src/comanFunction/SquliteFunation'
const App = () => {
  SquliteFunation();
  return (
    <LandingNavigation />
  )
}

export default App

const styles = StyleSheet.create({})