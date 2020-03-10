import React, { useState } from "react"
import Form from "./Form"
import List from "./List"

function App() {

  const [toDos, setToDos] = useState([
    {
      item: "アンパン",
      id: 0
    },
    {
      item: "メロンパン",
      id: 1
    }
  ])

  return (
    <div>
      <Form setToDos={setToDos} toDos={toDos} />
      <List toDos={toDos} setToDos={setToDos} />
    </div>
  )

}

export default App;
