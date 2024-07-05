import { StyleSheet, Text, View } from 'react-native'
import React, { useMemo, useState } from 'react'
import TextInputComponent from '../../commanComponent/TextInputComponent'
import ButtonComponent from '../../commanComponent/ButtonComponent'
import { SingUpUser } from '../../comanFunction/FirebaseAuth'
import LoaderComponent from '../../commanComponent/LoderComponent'
const SingUpScreen = ({ navigation }) => {
    const [loading, setLoding] = useState(false)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)


    // Button Handel Sing In
    const buttonHandel = useMemo(() => {
        if (email === null) return
        if (password === null) return
        setLoding((priv) => !priv)
        SingUpUser(email, password, updateDate, errorCallBack)
    },[])
 

    // CallBack Success
    const updateDate = useMemo((data) => {
        console.log(data)
        setLoding((priv) => !priv)
        navigation.navigate('Home')
    },[])

    // CallBack Error
    const errorCallBack = useMemo((error) => {
        setLoding((priv) => !priv)
        alert(error)
    },[])
    return (
        <View style={styles.container}>
            <LoaderComponent loading={loading} />
            <View style={styles.textContener}>
                <Text style={styles.title}>Sign UP</Text>
            </View>
            <View style={{ flex: 0.6, alignItems: "center" }}>
                <TextInputComponent
                    tittel={'Enter Email ID'}
                    textHandel={(text) => setEmail(text)}
                    value={email}
                    autoCapitalize="none"
                    keyboardType="email-address"
                    textContentType="emailAddress"
                />
                <TextInputComponent
                    tittel={'Enter Password'}
                    textHandel={(text) => setPassword(text)}
                    value={password}
                    autoCapitalize="none"
                    keyboardType="email-address"
                    secureTextEntry
                    textContentType="password"
                />
                <ButtonComponent tittel={'Sing Up'} buttonHandel={() => { buttonHandel() }} />
                <ButtonComponent tittel={'Sign In'} buttonHandel={() => navigation.navigate('login')} />

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