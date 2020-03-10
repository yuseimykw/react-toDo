import React, { useState } from 'react'

const Item = ({ toDo, toDos, setToDos }) => {

  const [isDone, setIsDone] = useState(false)

  const deleteBtn = (e) => {
    // const list = e.target.previousElementSibling
    // list.remove()
    // e.target.remove()

    const newToDos = toDos.slice()
    newToDos.splice(toDo.id, 1)

    newToDos.map((toDo, i) => {
      return (
        toDo.id = i,
        toDos.item = toDos.item
      )
    })
    setToDos(newToDos)
    // debugger
  }

  let text = isDone ? "完了" : "未完了"
  // let text
  // if (isDone) {
  //   text = "未完了"
  // } else if (!isDone) {
  //   text = "完了"
  // }
  //if文の短縮形 isDone ? "完了" : "未完了"
  ///参考演算子
  const toggleIsDone = () => {
    setIsDone(!isDone)
  }

  return (
    <li>
      {toDo.item}
      <button onClick={deleteBtn}>Delete!</button>
      <button onClick={toggleIsDone}>{text}</button>
    </li>
  )
}

export default Item