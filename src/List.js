import React from 'react'
import Item from "./Item"

const List = ({ toDos, setToDos }) => {
  const toDoItems = toDos.map((toDo) => {
    //map関数は配列に対して使う、引数には関数、その関数の引数には配列の要素が入る。
    // 結果は配列にして返す。

    return (
      <Item toDos={toDos} setToDos={setToDos} toDo={toDo} key={toDo.id} />
    )
  })

  return (
    <ul>
      {toDoItems}
      {/* JSXでは配列が展開される */}
    </ul>
  )
}


export default List