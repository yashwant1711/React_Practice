import React from 'react'

function Result({userAnswer, questions, resetQuiz=()=>{}}) {
    const score = userAnswer.filter((answer) => answer).length
    const another = userAnswer.filter((answer) => answer).length
    console.log(another)
    console.log(userAnswer)
  return (
    <div className='results'>
      <h2>Results</h2>
      <p>you ansered {score} out of {questions.length}</p>
      <span onClick={resetQuiz} className='reset'>Click here</span>
      <ul>
        { questions.map((question, index) => (
          <li key={index} data-correct={userAnswer[index]}>
            Q{index + 1}. {question.question}
            {userAnswer[index] ?  <span className='correct'> Correct</span> :  <span className='wrong'> Wrong</span>}
          </li>
          
        ))}
      </ul>
    </div>
  )
}

export default Result
