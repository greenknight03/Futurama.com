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
      <h2>{name}</h2>
        {data.map((inventoryData: Inventory) => {
          const { title, category, description, slogan, price, stock, id } = inventoryData;
          return (
            <li key={`futurama-cast-${id}`}>
              {category}
              <h3>{title}</h3>
                {slogan}
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
    </main >
  )
}