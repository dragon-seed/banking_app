import MainScreen from "./MainScreen";
import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from 'react'
import axios from "axios";

const Withdraw = () => {

    const [withdrawAmount, setWithdrawAmount] = useState(0)
    const [userBalance, setUserBalance] = useState(0)
    // useEffect(() => {console.log(depositAmount)}, [depositAmount])

    useEffect( () => {

        getBalance()

    }, [])

    const withdrawMoney = async () => {
        const email = getUser()['email']
        console.log(email)
        const data = await axios.post('/api/users/withdraw', {email: email, amount: withdrawAmount})
        console.log(data)
        setUserBalance(data.data['balance'])
    }

    const getUser = () => {
        const userData = localStorage.getItem('userInfo')
        console.log('userData', userData)
        const parseData = JSON.parse(userData)
        console.log('parse data', parseData)
        return parseData
    }

    const getBalance = async () => {
        const email = getUser()['email']
        const data = await axios('/api/users/currentbalance', {params: {email: email}})
        console.log('data', data)
        //Set user balance with data
        setUserBalance(data.data['balance'])
    }

  return (
    <MainScreen title="Make a Withdrawal">
      <div>
        <Form>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Enter an amount</Form.Label>
            <Form.Control
              type="amount"
              placeholder="$0.00"
              onChange ={(e) => setWithdrawAmount(e.target.value) }
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={withdrawMoney}>
            Withdraw
          </Button>
        </Form>
        <h3>Your balance is ${userBalance.toFixed(2)}</h3>
      </div>
    </MainScreen>
  );
};

export default Withdraw;