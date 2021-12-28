import { Error, Loading } from '.';
import { useData } from '../hooks/FuturamaData';
import styled from '@emotion/styled';
import { MEDIA_QUERY_END_POINT } from "../constants";
import Link from 'next/link';
import { Cast } from '../types/Cast';

export const CastContainer = () => {
  const name = 'cast' 
  const { data, error } = useData(name);
  console.log(data);
  if (error) return <Error />
  if (!data) return <Loading />

  return (
    <main>
      {/* <h2>{name}</h2> */}
    
        <Container>
          {data.map((castData: Cast) => {
            const { name, born, bio, id } = castData;
            return (
              <li key={`futurama-cast-${id}`}>
                <h3>{name}</h3>
                <p><span>Birth</span> {born}</p>
                <Link href={bio.url}><a>More</a></Link>
              </li>
            )
          })}
        </Container>
      
    </main>
  )
}


const Container = styled.li`


li{
  text-align:center;
  /* color:#FF6856; */
}
h3 {
  color:#FF6856;
  font-size : 2em;
}
  p {
    display:flex;
    justify-content:center;
    align-items:center;
    font-weight : bold;
  }


`