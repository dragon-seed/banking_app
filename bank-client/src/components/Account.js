import MainScreen from "./MainScreen";
import { useState, useEffect } from 'react'
import axios from "axios";

const Account = () => {

    const [userBalance, setUserBalance] = useState(0)

    useEffect( () => {

        getBalance()
        
    }, [])

    const getUser = () => {
        const userData = localStorage.getItem('userInfo')
        const parseData = JSON.parse(userData)
        return parseData
    }

    const getBalance = async () => {
        const email = getUser()['email']
        const data = await axios('/api/users/currentbalance', {params: {email: email}})
        console.log(data)
        //Set user balance with data
        setUserBalance(data.data['balance'])
    }

    return (
        <MainScreen title="Your Account Summary">
            <div>
                Your current balance is ${userBalance.toFixed(2)} 
            </div>
        </MainScreen>
    )


    
}

export default Account;