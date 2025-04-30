import { useState } from "react"


const Statistics = ({good, neutral, bad, all, average, positive}) => {

  if (all === 0){

    return(
      <>
       <p>No feedback given</p>
      </>
    )
  }

  return(
    <>
      <StatisticLine text = {"good"} value={good}/>
      <StatisticLine text = {"neutral"} value={neutral}/>
      <StatisticLine text = {"bad"} value={bad}/>
      <StatisticLine text = {"total"} value={all}/>
      <StatisticLine text = {"average"} value={average}/>
      <StatisticLine text = {"positive"} value={positive+'%'}/>
    </>
  )
}


const StatisticLine = ({text,value}) => {

  return(
    <>
      <table>
        <tbody>
          <tr>
            <td>{text}</td>
            <td>{value}</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

const Button = (props) => {

  return(
    <>
      <button onClick={props.handleClick[0].click}>{props.handleClick[0].text}</button>
      <button onClick={props.handleClick[1].click}>{props.handleClick[1].text}</button>
      <button onClick={props.handleClick[2].click}>{props.handleClick[2].text}</button>
    </>
  )

}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);

   
  const handleGoodClick = () => {
    setGood(good + 1);
    setTotal(total + 1);
    setAverage((((good+1)*1)+(neutral*0)+(bad*-1))/(total+1));
    setPositive(((good+1)*100)/(total+1));
  }
  const handleNeutralClick = () => {
    setNeutral(neutral  + 1);
    setTotal(total + 1);
    setAverage(((good*1)+((neutral+1)*0)+(bad*-1))/(total+1));
    setPositive(((good)*100)/(total+1));
  }
  const handleBadClick = () => {
    setBad(bad + 1);
    setTotal(total + 1);
    setAverage(((good*1)+(neutral*0)+((bad+1)*-1))/(total+1));
    setPositive(((good)*100)/(total+1));
  }

  return (
    <>
      <h1>give feedback</h1>

      <Button handleClick={[{click:handleGoodClick, text:"good"},{click:handleNeutralClick,text:"neutral"},{click:handleBadClick, text:"bad"}]}/>

      <h1>statistics</h1>

      <Statistics good={good} neutral={neutral} bad={bad} all = {total} average={average} positive={positive}/>
    </>
  )
}

export default App