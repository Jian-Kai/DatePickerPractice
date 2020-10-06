import React from "react";
import "./styles.scss";

import DatePicker from "./DatePicker";

export default function App() {
  return (
    <div className="App">
      <DatePicker pickDate="2020-10-10" onPick={(d) => console.log(d)} />
    </div>
  );
}
