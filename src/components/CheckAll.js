import React from 'react'

const CheckAll = (props) =>  {
  const {allCompleted} = props

  const handleChange = () => {
    const {onChange, allCompleted} = props
    onChange(!allCompleted)
  }

  return (
    <label>
      <input type="checkbox" checked={allCompleted} onChange={handleChange} />
      全て{allCompleted ? '未完了' : "完了"}にする
      </label>

  )   
}

export default CheckAll
