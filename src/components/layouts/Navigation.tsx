import Link from "next/link";
import styled from "@emotion/styled";
import { MEDIA_QUERY_END_POINT } from "../../constants";

export const Navigation = () => {
  return (

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
    
  )
}