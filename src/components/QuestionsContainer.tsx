import { Error, Loading } from '.';
import { useData } from '../hooks/FuturamaData';
import styled from '@emotion/styled';
import { MEDIA_QUERY_END_POINT } from "../constants";
import { useState } from 'react';
import { Questions } from '../types/Questions';

export const QuestionsContainer = () => {
  const name = 'questions';
  const { data, error } = useData(name);


  if (error) return <Error />
  if (!data) return <Loading />

  return (
    <main>
      <Container>
      <h2><i>The answer is given in advance so you don't get annoying!</i></h2>

        
          {data.map((questionsData: Questions) => {
            const { question, possibleAnswers, correctAnswer, id } = questionsData;
            return (
              <li key={`futurama-cast-${id}`}>
                <p>
                  <span>Q</span>
                  <span>{id}. {question}</span>
                </p>
                  {possibleAnswers.map((questionList: string, index: number) => {
                    return (
                      <>
                        <li>
                          <input type="radio" name={question} id={questionList} />
                          <label htmlFor={questionList}><span>{index + 1}</span> {questionList}</label>
                        </li>
                      </>
                    )
                  })
                  }
            
                <p className="answer">
                  <span>A</span>
                  <span className="drag">{correctAnswer}</span>
                </p>
              </li>
            )
          })}
        </Container>
    </main >
  )
}


const Container = styled.li`
  margin : 30px;
  
  li {
    font-weight : bold;
    
  }
h2 {
      color:#FF6856;
    }
`