import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [com, setCom] = useState("");

  function handleNameChange(event: any) {
    setName(event?.target.value);
  }
  function handleComChange(event: any) {
    setCom(event?.target.value);
  }
  return (
    <div>
      <input value={name} onChange={handleNameChange} />
      <p>Name:{name}</p>
      <select value={com} onChange={handleComChange}>
        <option value="">select an option</option>
        <option value="visa">visa</option>
        <option value="mastercard">mastercard</option>
        <option value="country">country</option>
      </select>
      <p>Name:{com}</p>
    </div>
  );
}

export default App;
