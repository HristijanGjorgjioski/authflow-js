import React from 'react'
import { Author } from 'authflow-js'

const App = () => {
    const name = 'Kiko'
  return (
    <div>
        <Author name={name} />
        {/* <MyCounter /> */}
    </div>
  )
}

export default App