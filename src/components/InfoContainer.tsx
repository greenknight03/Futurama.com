import { Error, Loading } from '.';
import { useData } from '../hooks/FuturamaData';
import styled from '@emotion/styled';
import { MEDIA_QUERY_END_POINT } from "../constants";

import { Info } from '../types/Info';
import Link from 'next/link';

export const InfoContainer = () => {
  const name = 'info'
  const { data, error } = useData(name);
  console.log(data);
  if (error) return <Error />
  if (!data) return <Loading />

  return (
    <main>
      {/* <h2>{name}</h2> */}
      <Container>
        {data.map((infoData: Info) => {
          const { synopsis, yearsAired, creators, id } = infoData;
          return (
            <li key={`futurama-info-${id}`}>
              <dl>
                <div>
                  <dt>synopsis</dt>
                  <dd>{synopsis}</dd>
                </div>
                <div>
                  <dt>yearsAired</dt>
                  <dd>{yearsAired}</dd>
                </div>
                <div>
                  <dt>creators</dt>
                  <dd>
                    <Link href={creators[0].url}>
                      <a>{creators[0].name}</a>
                    </Link>
                  </dd>
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
  
  div {

      dt {
      font-size: 2rem; color:#FF6856;
      font-style: italic;
      font-weight: bold;
      text-transform: uppercase;
      margin : 35px
    
      }

      dd {
          font-size: 1.5rem; 
          letter-spacing: 0.03em;
          /* line-height : 2-px */
      }
  }
`