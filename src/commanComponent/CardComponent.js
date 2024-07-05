import React, { memo } from "react";
import { View, Text, TouchableOpacity } from "react-native";


const CardComponent = ({ data, page, handleUpdate }) => {
    return (
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
            <Text>Name :{data.user_name}</Text>
            <Text> Address : {data.user_address}</Text>
            <Text> Contact No :{data.user_contact}</Text>
            {page != 'userList' &&
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 30, marginTop: 5 }}>
                    <TouchableOpacity onPress={() => handleUpdate(data.user_id)}><Text style={{ color: 'green' }}> Update </Text></TouchableOpacity>
                    {/* <TouchableOpacity onPress={() => handeldeletw(data.user_id)}><Text style={{ color: 'red' }}> Delete </Text></TouchableOpacity> */}
                </View>

            }
        </View>
    );

}


export default memo(CardComponent);