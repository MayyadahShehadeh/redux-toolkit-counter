import { useDispatch } from "react-redux";
import {increment, decrement} from "./counterSlice";
import Button from 'react-bootstrap/Button';

const Counter = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <hr />
      <Button
        aria-label="Increment value"
        onClick={() => { dispatch(increment()); }}
        variant="success"
        className="mx-2"
      >
        Increase
      </Button>

      <Button
        className="button"
        aria-label="Decrement value"
        onClick={() => { dispatch(decrement());}}
        variant="danger"
      >
        Decrease
      </Button>
    </div>
  );
};
export default Counter;