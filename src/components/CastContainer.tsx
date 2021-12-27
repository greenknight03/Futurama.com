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
      <h2>{name}</h2>
    
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
      
    </main>
  )
}
