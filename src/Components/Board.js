import React from 'react'
import Square from './Square'
// import { Container, Row , Col} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'

const Board = ({ squares , onClick }) =>(
    <div className='board'>
        {/* {squares.map((square, i) => (
      <Square key={i} value={square} onClick={() => onClick(i)} />
    ))} */}
    
      <table>
          <div className='ss'>
            {squares.map((row, i) => (
                <tr key={row[0]}>
                    {row.map((square , j) => (
                    <Square key={j} value={square} onClick={() => onClick(i,j)}/>
                    ))}
                </tr>
            ))}
          </div>
        
      </table>
    </div>
)
export default Board