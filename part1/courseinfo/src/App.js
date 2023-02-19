const Header = (props) => (
  <h1>{props.course.name}</h1>
)

const Part = (props) => (
  <p>part={props.part} exercise={props.exercise}</p>
)

const Content = (props) => {
  return (
    <div>
      <Part part={props.course.parts[0].name} exercise={props.course.parts[0].exercises}/>
      <Part part={props.course.parts[1].name} exercise={props.course.parts[1].exercises}/>
      <Part part={props.course.parts[2].name} exercise={props.course.parts[2].exercises}/>
    </div>
  )
}

const Total = (props) => {
  let tot = 0
  props.course.parts.forEach(part => tot=tot+part.exercises)
  return(
  <p>Number of exercises {tot}</p>
  )
} 


const App = () => {
  const part1 = {name: 'Fundamentals of React', exercises: 10}
  const part2 = {name: 'Using props to pass data', exercises: 7}
  const part3 = {name: 'State of a component', exercises: 14}
  const parts = [part1, part2, part3]

  const course = {
    name: 'Half Stack application development',
    parts: parts
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course}/>
      <Total course={course} />
    </div>
  )
}

export default App