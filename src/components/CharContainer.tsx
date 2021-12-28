import { Error, Loading } from '.';
import { useData } from '../hooks/FuturamaData';
import { Characters } from '../types/Characters';
import styled from '@emotion/styled';
import { MEDIA_QUERY_END_POINT } from "../constants";

export const CharContainer = () => {
  const name = 'characters'
  const { data, error } = useData(name); 

  if (error) return <Error />
  if (!data) return <Loading />

  return (
    <main>
      {/* <h2>{name}</h2> */}

        <Container>
          {data.map((charData: Characters) => {
            const { images, name, sayings, gender, species, age, id } = charData;
            return (
              <li key={`futurama-character-${id}`}>
                <h3>{name.first} {name.middle} {name.last}</h3>
                
                  <img src={images.main} alt={name.first} />
                  <strong>{sayings[0]}</strong>
                
                <dl>
                  <div>
                    <dt>gender</dt>
                    <dd>{gender}</dd>
                  </div>
                  <div>
                    <dt>species</dt>
                    <dd>{species}</dd>
                  </div>
                  <div>
                    <dt>age</dt>
                    <dd>{age}</dd>
                  </div>
                </dl>
              </li>
            )
          })}
        </Container>
      
    </main>
  )
}


const Container = styled.li`
  li {
    display:flex;
    justify-content:center;
    align-items:center;
    margin: 30px;
    h3 {
      font-size: 3rem;
      color:#FF6856;
      font-weight: bold;
      font-style: italic;
      
    }
  }
    div {
      margin: 30px;
      dt {
      font-size: 1.5rem; 
      /* color:#FF6856; */
      /* font-style: italic; */
      font-weight: bold;
      }
    }
`