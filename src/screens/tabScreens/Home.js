import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useMemo, useState } from 'react';
const ApiUrl = "https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10"
import FetchingApi from '../../comanFunction/FetchingApi';
import LoaderComponent from '../../commanComponent/LoderComponent';
import ListComponent from '../../commanComponent/ListComponent';
const Home = () => {
    const [count, setCount] = useState(0)
    const [user, setUser] = useState(null)
    const [isActive, setIsActive] = useState(false)
    const [childActive, setChildActive] = useState(false)
    const [childData, setChildData] = useState(null)


    // Increment Handel 
    const increment = () => {
        console.log('increment')
        setCount(priv => priv + 1)
    }

    // Decriment Handel
    const decrement = () => {
        console.log('derimemnt')
        setCount(priv => priv - 1)
    }

    // Api Call Methid On Lode 
    const fetchingApi = async (ApiUrl) => {
        console.log('Loding .......')
        setIsActive(!isActive)
        const res = await FetchingApi(ApiUrl)
        setUser(res)
        setIsActive(false)
        alert('FETCHING DATA COMPLETE.')

    }

    // Use Effecr Data
    useEffect(() => {
        if (!user) {
            fetchingApi(ApiUrl)
        }
    }, [])

    const componentHandel = async (id) => {
        const apiUrl = `https://jsonplaceholder.typicode.com/posts/${id}`
        setIsActive(!isActive)
        const res = await FetchingApi(apiUrl)
        setChildData(res)
        setChildActive(true)
        setIsActive(false)
        alert('FETCHING DATA COMPLETE.')

    }


    // Memo List component
    const listData = useMemo(() => (<ListComponent data={user} childHandelCall={componentHandel} />), [user]);


    return (
        <View style={{ flex: 1 }}>
            <LoaderComponent loading={isActive} title={'FETCHING DATA'} />
            <View style={{ paddingHorizontal: 30, marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 50 }}>
                <TouchableOpacity onPress={increment}><Text style={{ borderWidth: 1, fontSize: 18, fontWeight: 'bold', color: '#FFF', alignSelf: 'center', backgroundColor: 'green' }}> + </Text></TouchableOpacity>
                <Text>{count}</Text>
                <TouchableOpacity onPress={decrement}><Text style={{ borderWidth: 1, fontSize: 18, fontWeight: 'bold', color: '#FFF', alignSelf: 'center', backgroundColor: 'green' }}> - </Text></TouchableOpacity>
            </View>

            {!childActive && listData}
            {childActive &&
                <View>
                    <Text style={{ fontSize: 14, fontWeight: '500', color: '#000000', alignSelf: 'center', padding: 5 }}>Title:{childData?.title}</Text>
                    <Text style={{ fontSize: 14, fontWeight: '500', color: '#000000', alignSelf: 'center', padding: 5 }}>Data:{childData?.body}</Text>
                    <TouchableOpacity onPress={() => setChildActive(!childActive)}>
                        <Text style={{ fontSize: 14, fontWeight: '500', color: '#000000', alignSelf: 'center', backgroundColor: 'green', padding: 5 }}>Back </Text>
                    </TouchableOpacity>
                </View>
            }

        </View >
    );
}

export default Home;

const styles = StyleSheet.create({});
