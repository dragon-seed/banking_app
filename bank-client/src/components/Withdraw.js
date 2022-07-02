import MainScreen from "./MainScreen";
import { Form } from "react-bootstrap";

const Withdraw = () => {
  return (
    <MainScreen title="Make a Withdrawal">
      <div>
        <Form>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Enter an amount</Form.Label>
            <Form.Control
              type="amount"
              placeholder="$0.00"
            />
          </Form.Group>
        </Form>
        <h3>Your balance is</h3>
      </div>
    </MainScreen>
  );
};

export default Withdraw;