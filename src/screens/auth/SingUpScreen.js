import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import TextInputComponent from '../../commanComponent/TextInputComponent'
import ButtonComponent from '../../commanComponent/ButtonComponent'
import { SingUpUser } from '../../comanFunction/FirebaseAuth'
import LoaderComponent from '../../commanComponent/LoderComponent'
const SingUpScreen = ({ navigation }) => {
    const [loading, setLoding] = useState(false)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)


    // Button Handel in Sign Up
    const emailHandel = useCallback((text) => {
        setEmail(text)
    }, [])


    //Button Handel in Sign Up
    const passowdHandel = useCallback((text) => {
        setPassword(text)
    }, [])

    // Button Handel Sing In
    const buttonHandel = useCallback(() => {
        if (!email || !password) {
            Alert.alert('Error', 'Please enter both email and password.');
            return;
        }
        setLoding((priv) => !priv)
        SingUpUser(email, password, updateDate, errorCallBack)
    }, [email, password])


    // Sing In Button
    const updateDate = useCallback(() => {
        navigation.navigate('login')
    }, [navigation])


    // Error Handel 
    const errorCallBack = useCallback(() => {
        setLoding((priv) => !priv)
        Alert.alert(error);
    }, [])




    return (
        <View style={styles.container}>
            <LoaderComponent title={'Loding'} loading={loading} />
            <View style={styles.textContener}>
                <Text style={styles.title}>Sign UP</Text>
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
                <ButtonComponent tittel={'Sing Up'} buttonHandel={buttonHandel} />
                <ButtonComponent tittel={'Sign In'} buttonHandel={updateDate} />

            </View>
        </View>
    )
}

export default SingUpScreen

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