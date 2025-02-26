import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { memo } from 'react'

const ButtonComponent = ({ tittel, buttonHandel }) => {
   console.log('button---comp')
  return (
    <TouchableOpacity
      onPress={buttonHandel}
      style={styles.button}
    >
      <Text style={styles.buttonText}>{tittel}</Text>
    </TouchableOpacity>

  )
}

export default memo(ButtonComponent)

const styles = StyleSheet.create({
  button: {
    width: '90%',
    height: 50,
    backgroundColor: '#007BFF',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    alignSelf:'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

}
)