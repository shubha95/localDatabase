import { StyleSheet, Text, View, Modal } from 'react-native'
import React, { useState } from 'react'
import SquliteFunation from '../../comanFunction/SquliteFunation'
import ListComponent from '../../commanComponent/ListComponent'
import ModuleComponent from '../../commanComponent/ModuleComponent'
const ProfileScreen = () => {
  const { useList, updateUser, deleteUser } = SquliteFunation(userdetails)
  const [userdetails, setUser] = useState(null)
  const [isActive, setIsActive] = useState(false)
  const handleUpdate = async (id) => {
    let userDetails = await useList.filter((item) => item.user_id == id);
    setUser(userDetails[0])
    setIsActive((priv) => !priv)
  }
  const buttonHandel = (name, contect, address, id) => {
    console.log("Details ---", name, contect, address, id)
    let data = { name, contect, address, id }
    setIsActive((priv) => !priv)
    updateUser(data)
    setUser(useList)
  }

  const buttonDelete = (id) => {
    console.log("Delete", id)
    deleteUser(id)
    setUser(null)
  }
  return (
    <View style={{ flex: 1 }}>
      <ListComponent data={useList} page={'profile'} handleUpdate={handleUpdate} handeldeletw={buttonDelete} />
      {isActive &&
        <ModuleComponent modalVisible={isActive} handelModel={() => setIsActive(!isActive)} user={userdetails} buttonHandel={buttonHandel} />}
    </View>

  )
}

export default ProfileScreen

const styles = StyleSheet.create({})