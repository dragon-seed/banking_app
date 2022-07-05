import MainScreen from "./MainScreen";
import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from 'react'
import axios from "axios";

const Deposit = () => {

    const [depositAmount, setDepositAmount] = useState(0)
    const [userBalance, setUserBalance] = useState(0)
    // useEffect(() => {console.log(depositAmount)}, [depositAmount])

    useEffect( () => {

        getBalance()

    }, [])

    const depositMoney = async () => {
        const email = getUser()['email']
        console.log(email)
        const data = await axios.post('/api/users/deposit', {email: email, amount: depositAmount})
        console.log(data)
        setUserBalance(data.data['balance'])
    }

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
    <MainScreen title="Make a Deposit">
      <div>
        <Form>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Enter an amount</Form.Label>
            <Form.Control
              type="amount"
              placeholder="$0.00"
              onChange ={(e) => setDepositAmount(e.target.value) }
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={depositMoney}>
            Deposit
          </Button>
          {/* <Button variant="primary" onClick={getUser}>
            Check User
          </Button> */}
        </Form>
        <h3>Your balance is ${userBalance.toFixed(2)}</h3>
      </div>
    </MainScreen>
  );
};

export default Deposit;
