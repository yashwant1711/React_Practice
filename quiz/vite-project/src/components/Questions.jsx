import React from 'react'

const  Questions =({question, handelAnswer=()=>{}}) => {

  return (
    <div className='question'>
      <h2>{question.question}</h2>
      <ul className='options'>
        {question.answerOptions.map((answerOption) => (
          <li key={answerOption.text}>
            <button onClick={() => handelAnswer(answerOption.isCorrect)}>{answerOption.text}</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Questions
