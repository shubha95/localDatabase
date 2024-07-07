import React from 'react'
const FetchingApi = async (url) => {
     console.log("Update Url===================",url)
    try {
        const response = await fetch(url)
        if(!response.ok){
            // throw new Error(`Response status: ${response.status}`);
            const response = `Response status: ${response.status}`
            return response
        }
        const result  = await response.json()
        return result

    } catch (error) {
       console.log('Error : -', error)
       return error
    }
}

export default FetchingApi

