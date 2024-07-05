import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import SquliteFunation from '../../comanFunction/SquliteFunation'
import ListComponent from '../../commanComponent/ListComponent'
const UserList = () => {
  const { useList } = SquliteFunation()
 
 
  return (
    <View style={{ flex: 1 }}>
      <ListComponent data={useList} page={'userList'} />
    </View>
  )
}

export default UserList

const styles = StyleSheet.create({})