import React, {useEffect, useState} from "react";
import QuestionItem from "./QuestionItem";



function QuestionList() {
  const [questionToDisplay, setQuestionToDisplay] = useState([])

  function handleDelete(deletedQuestion) {
    const updatedQuestion = questionToDisplay.filter((question) => question.id !== deletedQuestion.id)
    setQuestionToDisplay(updatedQuestion)
  }

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then((r) => r.json())
    .then((questionArray) => {
      setQuestionToDisplay(questionArray)
    })
  }, [])


  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questionToDisplay.map((question) => ( 
          <QuestionItem 
           key={question.id} 
           question={question} 
           onDelete={handleDelete}/>
        ))}

      </ul>
    </section>
  );
}

export default QuestionList;
