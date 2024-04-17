import { useEffect, useState } from "react"



export default function useAPI(path){

    console.group(path)

    const BASE = `http://localhost:7000/${path}`

    const [data,setData] = useState([])
    console.log(data)

    const getConfig = (method) => {
        return {
            method: method,
        }
    }

    const get = async () => {
        const URL = `${BASE}/get`
        const config = getConfig('GET')

        const response = await fetch(URL,config)
        if(response.status==200){
            return response.json()
        }
        
        return null


    }

    const getAll = async () => {
        const URL = `${BASE}/getAll`
        const config = {
            method: 'GET',
        }

        const response = await fetch(URL,config)
        if(response.status==200){
            const responseJSon = await response.json()
            console.log(responseJSon)
            return responseJSon
        }
        
        return []


    }
    
    const add = async (item) => {
        console.log(item)
        console.log(data)
        const URL = `${BASE}/add`
        var formBody = [];
        if(!item.name) return null
        for (var property in item) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(item[property]);
        formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");

        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body: formBody
        }

        const response = await fetch(URL,config)

        console.log(response)
        if(response.status==200){
            setData([...data,item])
            return response.json()
        }
        return null
            
    }

    const remove = async (removeList) => {
        const URL = `${BASE}/remove`
        var formBody = [];
        for (var property in removeList) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(removeList[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");
    
        const config = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body: formBody
        }

        console.log(config)
        const response = await fetch(URL,config)
        console.log(response)
        if(response.status==200){
            setData(data => data.filter(item => item.name != removeList.name))
            return response.json()
        }
        
        return null
    }

    const update = async (updateList) => {
        const URL = `${BASE}/update`

        var formBody = [];
        for (var property in updateList) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(updateList[property]);
        formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");

        const config = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body: formBody
        }

        const response = await fetch(URL,config)
        console.log(response)
        console.log(data)
        if(response.status==200){
            setData(data.map(item => (item.name === updateList.name ? { ...item, ...updateList } : item)));
            return response.json()
        }
        
        return null

    }

    



    useEffect( ()=>{
        getAll()
        .then(data => setData(data || []))
        .catch(error => console.log(error))
    },[])

    console.groupEnd()
    
    return {
        get,
        getAll,
        update,
        remove,
        add,
        data
    }

    
}