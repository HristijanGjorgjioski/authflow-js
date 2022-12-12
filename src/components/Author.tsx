import React from 'react'

interface Props {
  name: string
}

const Author: React.FC<Props> = ({ name }) => {
  console.log(name, '<<<=======name')
  return (
    <div>
      <h2>{name}</h2>
    </div>
  )
}

export default Author
