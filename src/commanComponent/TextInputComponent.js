import { StyleSheet, Text, TextInput } from 'react-native'
import React, { memo } from 'react'

const TextInputComponent = ({ tittel, textHandel, value, ...props }) => {
    // console.log('text Component --')
    return (
        <>
            <TextInput
                style={styles.input}
                placeholder={tittel}
                placeholderTextColor="#aaaaaa"
                onChangeText={(text) => textHandel(text)}
                value={value}
                {...props}
            />
      

        </>
    )
}

export default memo(TextInputComponent)

const styles = StyleSheet.create({
    input: {
        width: '90%',
        height: 50,
        backgroundColor: '#f1f1f1',
        borderRadius: 8,
        paddingHorizontal: 16,
        fontSize: 16,
        marginBottom: 16,
        borderWidth: 1,
    },
    errorText:{
        color:'red',
        marginBottom:10,
        fontWeight:'400',
        fontSize:18
    }
})