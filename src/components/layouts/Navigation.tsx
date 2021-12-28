import Link from "next/link";
import styled from "@emotion/styled";
import { MEDIA_QUERY_END_POINT } from "../../constants";

export const Navigation = () => {
  return (

      <Header>
        <div>
          <h1><Link href="/">
            <a>Futurama</a>
          </Link></h1>
          <nav>
            <ul>
              <li>
                <Link href="info">
                  <a>Info</a>
                </Link>
              </li>
              <li>
                <Link href="characters">
                  <a>Characters</a>
                </Link>
              </li>
              <li>
                <Link href="cast">
                  <a>Cast</a>
                </Link>
              </li>
  
              <li>
                <Link href="episodes">
                  <a>Episodes</a>
                </Link>
              </li>
              <li>
                <Link href="questions">
                  <a>Questions</a>
                </Link>
              </li>
              <li>
                <Link href="inventory">
                  <a>Inventory</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Header>
    
  )
}

const Header = styled.header`
  background: #593AE0;
  color: #fff;
  box-shadow:0 2px 30px rgba(0,0,0,0.2);

  div{
    max-width:1280px; margin:0 auto;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:1em 0;
    flex-direction:column;
  }
  h1{ 
    text-transform: uppercase;
    a{ 
      font-size: 5rem; color:#FF6856;
      font-style: italic;
    }
  }
  a{
    display:block;
    padding:0.5rem 2rem;
    font-weight:bold;
    font-size:2rem;
  }
  ul{
    display:grid;
    grid-template-columns: repeat(3,1fr);
    text-align:center; 
    gap:0.8rem; 
    margin:1rem auto 0;
  }

`