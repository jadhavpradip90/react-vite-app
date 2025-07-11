import React from "react";
import type { RootState } from "../../store/store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counterSlice";
import { Button } from "@fluentui/react-components";

export const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <Button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </Button>
        <span>{count}</span>
        <Button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </Button>
      </div>
    </div>
  );
};

export default Counter;
