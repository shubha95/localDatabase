import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useMemo, useState } from 'react'
import TextInputComponent from '../../commanComponent/TextInputComponent'
import ButtonComponent from '../../commanComponent/ButtonComponent'
import { SingInUser } from '../../comanFunction/FirebaseAuth'
import LoaderComponent from '../../commanComponent/LoderComponent'
const LoginScreen = ({ navigation }) => {
  const [loading, setLoding] = useState(false)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)


  // Button Handel Sing In
  const buttonHandel = useCallback(() => {
    if (!email || !password){
      Alert.alert('Error', 'Please enter both email and password.');
      return;
    } 
    setLoding((priv) => !priv)
    SingInUser(email, password, updateDate, errorCallBack)
  }, [email, password]);

 
// Button Handel Sing Up
  const buttonHAndelSingIn = useCallback(() => {
    navigation.navigate('singUp')
  }, [navigation])

  // Button Handel in Sign Up
  const emailHandel = useCallback((text) => {
    setEmail(text)
  }, [])


  //Button Handel in Sign Up
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
    Alert.alert('Error', error.message);
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
          textHandel={emailHandel}
          value={email}
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
        />

        <TextInputComponent
          tittel={'Enter Password'}
          textHandel={passowdHandel}
          value={password}
          autoCapitalize="none"
          secureTextEntry
          textContentType="password"
        />


        <ButtonComponent tittel={'Sign In'} buttonHandel={buttonHandel} />
        <ButtonComponent tittel={'Sing Up'} buttonHandel={buttonHAndelSingIn} />


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