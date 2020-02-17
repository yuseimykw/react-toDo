import React, { useState } from "react"
import Form from "./Form"
import List from "./List"

function App() {

  const [toDos, setToDos] = useState([
    {
      key: "アンパン",
    },
    {
      key: "メロンパン"
    }
    // "オーバメヤン", "ラカゼット"
  ])

  return (
    <div>
      <Form setToDos={setToDos} toDos={toDos} />
      <List toDos={toDos} />
    </div>
  )

}

export default App;
