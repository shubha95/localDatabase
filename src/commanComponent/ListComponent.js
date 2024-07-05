import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { memo, useCallback } from 'react'
import CardComponent from './CardComponent';

const ListComponent = ({ data, page, handleUpdate, handeldelete }) => {
    const renderItem = useCallback(({ item }) => (<CardComponent data={item} page={page}  handleUpdate={handleUpdate} handeldelete={handeldelete} />), [data])
    return (
        <View style={{ flex: 0.95 }}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                initialNumToRender={5}
            />
        </View>


    )
}

export default memo(ListComponent)

const styles = StyleSheet.create({})