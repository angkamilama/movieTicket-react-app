import { useState } from "react";
import RowA  from './RowA';
import RowB  from './RowB';
import RowC  from './RowC';
import RowD  from './RowD';
import RowE  from './RowE';
import RowF  from './RowF';

function MovieSeats({ticketCount}) {
    const [seat, setSeat] = useState([]);
  
    const chooseSeat = (e) => {
       
        if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied') ) {
            e.target.classList.add('occupied');
            setSeat([...seat, e.target]);

        } else if (e.target.classList.contains('seat') && e.target.classList.contains('occupied') ) {
            e.target.classList.remove('occupied');
            const UpdatedSeat = [...seat].filter(el => {
                return el !== e.target;
            });
            setSeat(UpdatedSeat);
        }             
        ticketCount(seat);
    } 
    

    return(
        <div onClick = { chooseSeat } className = " seats " >
            <RowA/>
            <RowB/>
            <RowC/>
            <RowD/>
            <RowE/>
            <RowF/>
        </div>
    )
};

export default MovieSeats;