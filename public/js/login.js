import axios from "axios"
import { showAlert } from "./alert"


export const login = async(email, password)=> {
    try {
        const res = await axios({
            method: "POST",
            url: "/api/v1/users/login",
            data: {
                email,
                password
            }
        })
        if(res.data.status === 'Success'){
            showAlert('Success', "Logged in Successfully")
            console.log("Logged in successfully")
            window.setTimeout(()=> {
                location.assign('')
            }, 5000)
        }
    } catch (error) {
        console.log(error.response.data)
        showAlert("Error", error.response.data.message)
    }   
}

export const logout  =async ()=> {
    try {
        const res = await axios({
            method: "GET",
            url:"/api/v1/users/logout",
        });
        if((res.data.status === "Success")) location.assign("/")
    } catch (error) {
        console.log(error.response)
    }
}