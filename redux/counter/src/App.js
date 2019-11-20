import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { plus, minus } from "./store/modules/counter";
import { changeTheme } from "./store/modules/theme";

export default function App() {
  const [color, setColor] = useState("");
  const { number } = useSelector(state => state.counter);
  const { theme } = useSelector(state => state.theme);
  const dispatch = useDispatch();
  return (
    <div>
      <div
        style={{
          width: 500,
          height: 500,
          backgroundColor: theme,
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <h1>{number}</h1>
      </div>
      <button onClick={() => dispatch(plus())}>Plus</button>
      <button onClick={() => dispatch(minus())}>Minus</button>
      <input
        type="text"
        value={color}
        onChange={e => setColor(e.target.value)}
        onKeyUp={e => {
          if (e.keyCode === 13) {
            dispatch(changeTheme(color));
          }
        }}
      />
      <button onClick={() => dispatch(changeTheme(color))}>Change Theme</button>
    </div>
  );
}
