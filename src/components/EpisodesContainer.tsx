import { Error, Loading } from '.';
import { useData } from '../hooks/FuturamaData';
import styled from '@emotion/styled';
import { MEDIA_QUERY_END_POINT } from "../constants";

import { Episodes } from '../types/Episodes';

export const EpisodesContainer = () => {
  const name = 'episodes';
  const { data, error } = useData(name);

  if (error) return <Error />
  if (!data) return <Loading />

  return (
    <main>
      <h2>{name}</h2>
      
        {data.map((EpisodesData: Episodes) => {
          const { number, title, writers, originalAirDate, desc, id } = EpisodesData;
          return (
            <li key={`futurama-cast-${id}`}>
              EP.{number}
              <h3>{title}</h3>
              <dl>
                <div>
                  <dt>writers:</dt>
                  <dd>{writers}</dd>
                </div>
                <div>
                  <dt>originalAirDate:</dt>
                  <dd>{originalAirDate}</dd>
                </div>
              </dl>
              <p>{desc}</p>
            </li>
          )
        })}
      
    </main>
  )
}