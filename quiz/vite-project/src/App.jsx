import { useState } from 'react'
import './App.css'
import questions from "./contacts/questions.json"
import Questions from './components/Questions'
import Result from './components/Result'


function App() {
  const [curruentQuestion, setCurrentQuestion] = useState(0)
  const[userAnswer, setUserAnswer] = useState([])

  const handelAnswer = (isCorrect) => {
    console.log("i am connected")
    setCurrentQuestion(curruentQuestion + 1)
    setUserAnswer([...userAnswer, isCorrect])
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setUserAnswer([])
  }
  return (
    <div className='App'>
      <h1>World quizz</h1>
      {/* question Components */}
      {curruentQuestion < questions.length &&
      <Questions question={questions[curruentQuestion]} handelAnswer={handelAnswer}/>}
      {/* Result Component */}
      {curruentQuestion === questions.length &&
      <Result userAnswer={userAnswer} questions={questions} resetQuiz={resetQuiz}/>}
    </div>
  )
}

export default App
