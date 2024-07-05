import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import TextInputComponent from '../../commanComponent/TextInputComponent'
import ButtonComponent from '../../commanComponent/ButtonComponent'
import SquliteFunation from '../../comanFunction/SquliteFunation'
const ContactFormScreen = ({navigation}) => {

  const [user, setUser] = useState({
    name: null,
    content: null,
    address: null
  })
  const { registerUser } = SquliteFunation(user)
  const buttonHandel = async () => {
    if(!user.name || !user.content || !user.address) return;
    registerUser(user)
  }
  
  return (
    <View style={styles.contener}>
      <Text style={styles.textStyle}>Contact Form</Text>

      <View style={{ alignItems: 'center', marginTop: 10 }}>
        <TextInputComponent
          tittel={'Name'}
          textHandel={(text) => setUser({ ...user, name: text })}
          value={user?.name}
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <TextInputComponent
          tittel={'Mobile No'}
          textHandel={(text) => setUser({ ...user, content: text })}
          value={user?.content}
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <TextInputComponent
          tittel={'Addres'}
          textHandel={(text) => setUser({ ...user, address: text })}
          value={user?.address}
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <ButtonComponent tittel={'Add New user'} buttonHandel={buttonHandel} />
      </View>

    </View>
  )
}

export default ContactFormScreen

const styles = StyleSheet.create({
  contener: { alignContent: 'center', alignContent: 'center' },
  textStyle: { fontSize: 24, color: 'green', fontWeight: 'bold', marginTop: 20, alignSelf: 'center', }
})