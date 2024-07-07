import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { memo, useCallback} from 'react'
 import UserListComponent from './contect/UserListComponent';
import SquliteFunation from '../../comanFunction/SquliteFunation';



const UserList = () => {
  const { useList } = SquliteFunation()
  const renderItem = useCallback(({ item }) => (<UserListComponent data={item} childCall={(id) => childHandelCall(id)} />), [useList])
 
  return (
    <View style={{ flex: 1 }}>
           <FlatList
                data={useList}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                initialNumToRender={5}
            />
    </View>
  )
}

export default memo(UserList)



  