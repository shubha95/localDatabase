import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { memo } from 'react'


const ChildComponent = ({ handelButton, data }) => {
    console.log('child Component', data)
    return (
        <View>

            <View style={{ borderWidth: 1, width: 50, alignSelf: 'center', backgroundColor: 'green' }}>
                <TouchableOpacity onPress={handelButton}>
                    <Text style={{ fontSize: 14, fontWeight: '500', color: '#000000', alignSelf: 'center' }}>Back </Text>
                </TouchableOpacity>
            </View>

        </View>

    )
}

export default memo(ChildComponent)

const styles = StyleSheet.create({})