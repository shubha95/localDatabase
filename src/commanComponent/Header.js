import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import { headerColer, textColer } from '../utils/ColerCode'

const Header = ({ headerTitel }) => {
    console.log("headerTitel")
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', borderWidth: 1, flex: 0.05, backgroundColor: headerColer }}>
            <Text style={{ color: textColer }}>{headerTitel}</Text>
        </View>
    )
}

export default memo(Header)

const styles = StyleSheet.create({})