const Header = (props) => {

  return (
    <>
      <div>

        <h1>{props.title}</h1>

      </div>
    </>
  )
}

const Content = (props) => {

  return(
    <>
      <div>

        <Part part={props.info[0].part} exercise={props.info[0].exercises}/>
        <Part part={props.info[1].part} exercise={props.info[1].exercises}/>
        <Part part={props.info[2].part} exercise={props.info[2].exercises}/>

      </div>
    </>
  )
}

const Total = (props) => {

  return(
    <>
    <div>

      <p>Number of exercises {props.numbers[0] + props.numbers[1] + props.numbers[2]}</p>

    </div>
    </>
  )
}

// Secondary component
const Part = (props) => {

  return(
    <>
    <div>

      <p>{props.part} {props.exercise}</p>

    </div>
    </>
  )
}

const App = () => {

  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const data = [
  {part:part1, exercises:exercises1},
  {part:part2, exercises:exercises2},
  {part:part3, exercises:exercises3}
  ]

  return (
    <>
      <div>
      <Header title = {course}/>

      <Content info = {data}/>

      <Total numbers={[exercises1, exercises2, exercises3]}/>

      </div>
    </>
  )
}

export default App
