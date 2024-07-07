import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import TextInputComponent from '../../commanComponent/TextInputComponent'
import ButtonComponent from '../../commanComponent/ButtonComponent'
import SquliteFunation from '../../comanFunction/SquliteFunation'
const ContactFormScreen = ({ navigation }) => {
  const { registerUser } = SquliteFunation(user)

  const [user, setUser] = useState({
    name: null,
    content: null,
    address: null
  })

  // Name Input Text
  const nameInput = useCallback((text) => {
    setUser((priv) => ({ ...priv, name: text }))
  }, [])

  // Cotect Input Text
  const contectInput = useCallback((text) => {
    setUser((priv) => ({ ...priv, content: text }))
  }, [])

  // Addres Input Text
  const addresstInput = useCallback((text) => {
    setUser((priv) => ({ ...priv, address: text }))
  }, [])

  const buttonHandel = useCallback(() => {
    if (!user.name || !user.content || !user.address) {
      return;
    }
    registerUser(user)
  }, [user.name, user.content, user.address])

  return (
    <View style={styles.contener}>
      <Text style={styles.textStyle}>Contact Form</Text>

      <View style={{ alignItems: 'center', marginTop: 10 }}>
        <TextInputComponent
          tittel={'Name'}
          textHandel={nameInput}
          value={user?.name}
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <TextInputComponent
          tittel={'Mobile No'}
          textHandel={contectInput}
          value={user?.content}
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <TextInputComponent
          tittel={'Addres'}
          textHandel={addresstInput}
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