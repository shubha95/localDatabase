import React, { useState } from 'react';
import { StyleSheet, View, Text, Modal, Button, TouchableOpacity } from 'react-native';
import TextInputComponent from './TextInputComponent';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ButtonComponent from './ButtonComponent';
const ModuleComponent = ({ modalVisible, handelModel, user, buttonHandel }) => {
    const [name, setName] = useState(String(user?.user_name))
    const [contect, setContect] = useState(String(user?.user_contact))
    const [address, setAddress] = useState(String(user?.user_address))


    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                console.warn("closed");
            }}
        >
            <View style={styles.container}>
                <TouchableOpacity onPress={() => handelModel()}>
                    <View style={{ alignItems: 'flex-end', padding: 20 }}><AntDesign name={'closecircleo'} size={22} color={'#000000'} /></View>
                </TouchableOpacity>
                <View style={{ marginLeft: 20 }}>
                    <TextInputComponent
                        tittel={'Enter Name'}
                        textHandel={(text) => setName(text)}
                        value={name}
                        autoCapitalize="none"
                        keyboardType="email-address"
                        textContentType="emailAddress"
                    />
                    <TextInputComponent
                        tittel={'Address'}
                        textHandel={(text) => setContect(text)}
                        value={contect}
                        autoCapitalize="none"

                    />
                    <TextInputComponent
                        tittel={'Address'}
                        textHandel={(text) => setAddress(text)}
                        value={address}
                        autoCapitalize="none"
                        keyboardType="email-address"
                        textContentType="emailAddress"
                    />
                </View>
                <ButtonComponent tittel={'Sign In'} buttonHandel={()=>buttonHandel(name, contect, address, user.user_id)} />



            </View>
        </Modal>
    );
}
export default ModuleComponent;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",

    },
    View: {
        backgroundColor: "white",
        height: 140,
        width: 250,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        borderColor: "black",
        borderWidth: 2,
    },
    text: {
        fontSize: 20,
        color: "green",
        marginBottom: 20
    },
    button: {
        margin: 20,
        width: 200,
    }
}); 