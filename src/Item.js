import React from 'react'

const Item = ({ toDo }) => {

  const deleteBtn = (e) => {
    const list = e.target.previousElementSibling
    list.remove()
    e.target.remove()
  }

  return (
    <>
      <li>{toDo.key}</li>
      <button onClick={deleteBtn}>Delete!</button>
    </>
  )
}

export default Item