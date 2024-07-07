import { StyleSheet, Text, View, Modal, FlatList } from 'react-native'
import React, { useCallback, useState } from 'react'
import SquliteFunation from '../../comanFunction/SquliteFunation'
import ModuleComponent from '../../commanComponent/ModuleComponent'
import UserListComponent from './contect/UserListComponent'
const ProfileScreen = () => {
  const { useList, updateUser, deleteUser } = SquliteFunation(userdetails)
  const [userdetails, setUser] = useState(null)
  const [isActive, setIsActive] = useState(false)

  //
  const handleUpdate = async (id) => {
    console.log("userDetails =================", id)
    let userDetails = await useList.filter((item) => item.user_id == id);
    setUser(userDetails[0])
    console.log("userDetails =================", userDetails)
    setIsActive((priv) => !priv)
  }

  //
  const buttonHandel = (name, contect, address, id) => {
    console.log("Details ---", name, contect, address, id)
    let data = { name, contect, address, id }
    setIsActive((priv) => !priv)
    updateUser(data)
    setUser(useList)
  }


  //
  const buttonDelete = (id) => {
    console.log("Delete", id)
    deleteUser(id)
    setUser(null)
  }

  const renderItem = useCallback(({ item }) => (
    <UserListComponent
      data={item}
      childCall={handleUpdate}
      handeldelet={buttonDelete}
      page={'profile'} />
  ), [useList])

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={useList}
        renderItem={renderItem} 
        keyExtractor={item => item.user_id.toString()}
        initialNumToRender={5}
      />
      {isActive &&
        <ModuleComponent modalVisible={isActive} handelModel={() => setIsActive(!isActive)} user={userdetails} buttonHandel={buttonHandel} />
      }
    </View>

  )
}

export default ProfileScreen

const styles = StyleSheet.create({})