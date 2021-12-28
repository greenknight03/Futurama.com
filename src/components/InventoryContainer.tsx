import { Error, Loading } from '.';
import { useData } from '../hooks/FuturamaData';
import styled from '@emotion/styled';
import { MEDIA_QUERY_END_POINT } from "../constants";

import { Inventory } from '../types/Inventory';

export const InventoryContainer = () => {
  const name = 'inventory';
  const { data, error } = useData(name);

  if (error) return <Error />
  if (!data) return <Loading />



  return (
    <main>
      {/* <h2>{name}</h2> */}
        <Container>
          {data.map((inventoryData: Inventory) => {
            const { title, category, description, slogan, price, stock, id } = inventoryData;
            return (
              <li key={`futurama-cast-${id}`}>
                {/* <span>{category}</span> */}
                <h3>{title}</h3>
                <h4>{slogan}</h4>  
                <p>{description}</p>
                <dl>
                  <div>
                    <dt>price</dt>
                    <dd>{price} </dd>
                  </div>
                  <div>
                    <dt>stock</dt>
                    <dd>{stock} </dd>
                  </div>
                </dl>
              </li>
            )
          })}
        </Container>
    </main >
  )
}

const Container = styled.li`
  
  li {
    magin : 20px;
    font-weight : bold;
    span {
      magin : 5px;
    }
    h3 {
      font-size : 2.5em;
      color:#FF6856;
    }
    h4 {
      color:#593AE0;
    }
    p {
      font-size : 1.5em;
    }
  }

`