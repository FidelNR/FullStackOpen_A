import { useState } from "react"

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  
  const handleGoodClick = () => setGood(good + 1);
  
  return (
    <>
      <h1>give feedback</h1>

      <button onClick={handleGoodClick}>good</button>
      <button>neutral</button>
      <button>bad</button>


      <h1>statistics</h1>
      
      <p>good: {good}</p>
      <p>neutral: </p>
      <p>bad: </p>
    </>
  )
}

export default App