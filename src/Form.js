import React, { useState } from 'react'

const Form = ({ toDos, setToDos }) => {
  const [newNote, setNewNote] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    setToDos(toDos.concat({ key: newNote }))
    //todos配列に入力した値を保持したnewNoteが追加されて新しい配列に更新される
    //配列.pushは駄目
    setNewNote("")
  }

  const handleChange = (e) => {
    setNewNote(e.target.value)
    // eは発火したイベント（click等）の動作が入る（今回はchange）＋発火した要素の参照はe.target
  }

  return (
    <>
      <form action="#" onSubmit={(e) => handleSubmit(e)}>
        {/* 引数を渡したいけど（）は関数の実行しちゃう＝アロー関数は一文の時｛｝を省略できる＋関数定義｛｝で囲む */}
        {/* action属性はデータの送信先 */}
        <input type="text" onChange={handleChange} value={newNote}></input>
        <button type="submit">push me!</button>
      </form >
    </>
  )
}

export default Form