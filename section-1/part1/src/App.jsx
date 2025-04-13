const Header = (props) => {

  return (
    <>
      <div>

        <h1>{props.title.name}</h1>

      </div>
    </>
  )
}

const Content = (props) => {

  return(
    <>
      <div>

        <Part part={props.info.parts[0].name} exercise={props.info.parts[0].exercises}/>
        <Part part={props.info.parts[1].name} exercise={props.info.parts[1].exercises}/>
        <Part part={props.info.parts[2].name} exercise={props.info.parts[2].exercises}/>

      </div>
    </>
  )
}

const Total = (props) => {

  return(
    <>
    <div>

      <p>Number of exercises {props.numbers.parts[0].exercises + props.numbers.parts[1].exercises + props.numbers.parts[2].exercises}</p>

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

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <>
      <div>
      <Header title = {course}/>

      <Content info = {course}/>

      <Total numbers={course}/>

      </div>
    </>
  )
}

export default App
