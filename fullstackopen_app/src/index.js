import React from 'react'
import ReactDOM from 'react-dom'

const Title = ({course}) => <h1>{course}</h1>

const Part  = (props) => <p>{props.part.name} {props.part.exercises}</p>


const Content  = (props) => {
  return (
    <div>
      <Part part={props.part1}/>
      <Part part={props.part2} />
      <Part part={props.part3} />
      {/* <Part part={props.part3} exercises={props.exercises3}/> */}

      
    </div>
  )
}

const Total = (props) => <p>Number of exercises {props.total}</p>


const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
   const part3 = {
     name: 'State of a component',
     exercises: 14
   }

  return (
    <div>
      <Title course={course}/>     
      <Content 
      part1={part1} 
      part2={part2}  
      part3={part3}  
      />
      {/* <Content part1={part2.name} exercises2={part2.exercises2}  />
      <Content part1={part3.name} exercises1={part3.exercises3}  /> */}
      <Total total={part1.exercises+part2.exercises+part3.exercises} />     
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))