import { View, Text, TouchableOpacity } from "react-native";
import React, { memo } from 'react'

const UserListComonent = ({ data, childCall }) => {
    console.log("f-------------------", data)
    return (
        <TouchableOpacity onPress={() => childCall(data.userId)}>
            <View style={{
                alignContent: 'center',
                alignSelf: 'center',
                flex: 1,
                borderWidth: 1,
                backgroundColor: "#aaaaaa",
                width: '85%',
                paddingHorizontal: 10,
                paddingVertical: 10,
                margin: 10
            }}>
                <Text style={{ color: '#000', fontSize: 14, fontWeight: '500', marginTop: 10 }}>{data?.user_name}</Text>
                <Text style={{ color: '#000', fontSize: 16, fontWeight: '500' }}>{data?.user_contact}</Text>
                <Text style={{ color: '#000', fontSize: 14, fontWeight: '500', marginTop: 10 }}>{data?.user_address}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default memo(UserListComonent)
