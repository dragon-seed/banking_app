import MainScreen from "./MainScreen";
import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from 'react'
import axios from "axios";

const Deposit = () => {

    const [depositAmount, setDepositAmount] = useState(0)
    const [userBalance, setUserBalance] = useState(0)
    // useEffect(() => {console.log(depositAmount)}, [depositAmount])

    useEffect( () => {

        const user = getUser();
        setUserBalance(user.balance);
      console.log('this is called')
    }, [])

    const depositMoney = async () => {
        const user = getUser()
        console.log(user)
        const data = await axios.post('/api/users/deposit', {email: user.email, amount: depositAmount})
        console.log(data.data)
        const updatedUser = user
        updatedUser.balance = data.data.balance
        localStorage.setItem("userInfo", JSON.stringify(updatedUser));
        console.log('test console', updatedUser)
        setUserBalance(data.data.balance)
    }

    const getUser = () => {
        const userData = localStorage.getItem('userInfo')
        const parseData = JSON.parse(userData)
        return parseData
    }

    const getBalance = async () => {
        const user = getUser()
        try {
          const data = await axios.post('/api/users/currentbalance', {email: user.email})
          console.log('new data', data)
        console.log('this is user', user)
        //Set user balance with data
        setUserBalance(user.balance)
        } catch (error) {
          console.log(error)
        }
        
        
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
