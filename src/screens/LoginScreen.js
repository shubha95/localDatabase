import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useMemo, useState } from 'react'
import TextInputComponent from '../commanComponent/TextInputComponent'
import ButtonComponent from '../commanComponent/ButtonComponent'
import { SingInUser } from '../comanFunction/FirebaseAuth'
import LoaderComponent from '../commanComponent/LoderComponent'
const LoginScreen = ({ navigation }) => {
  const [loading, setLoding] = useState(false)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)


  // Button Handel Sing In
  const buttonHandel = () => {
    if (!email || !password) return
    setLoding((priv) => !priv)
    SingInUser(email, password, updateDate, errorCallBack)
  }


  // Button Handel in Sign Up
  const emailHandel = useCallback((text) => {
    setEmail(text)
  }, [])


  // Button Handel in Sign Up
  const passowdHandel = useCallback((text) => {
    setPassword(text)
  }, [])
  
  // CallBack 
  const updateDate = () => {
    setLoding((priv) => !priv)
    navigation.navigate('tabLanding')
  }

  const errorCallBack = (error) => {
    setLoding((priv) => !priv)
    alert(error)
  }



  return (
    <View style={styles.container}>
      <LoaderComponent loading={loading} />
      <View style={styles.textContener}>
        <Text style={styles.title}>Sign In</Text>
      </View>
      <View style={{ flex: 0.6, alignItems: "center" }}>
        <TextInputComponent
          tittel={'Enter Email ID'}
          textHandel={(text) => emailHandel(text)}
          value={email}
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
        />

        <TextInputComponent
          tittel={'Enter Password'}
          textHandel={(text) => passowdHandel(text)}
          value={password}
          autoCapitalize="none"
          keyboardType="email-address"
          secureTextEntry
          textContentType="password"
        />
        <ButtonComponent tittel={'Sign In'} buttonHandel={buttonHandel} />
        <ButtonComponent tittel={'Sing Up'} buttonHandel={() => navigation.navigate('singUp')} />


      </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  textContener: {
    flex: 0.3,
    alignItems: "center"
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 32,
  },
})