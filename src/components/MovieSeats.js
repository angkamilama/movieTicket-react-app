import { useState } from "react";


function MovieSeats({ticketCount}) {
    const [occupiedSeats, setOccupiedSeats] = useState(0);
    
  
    const chooseSeat = (e) => {
        const reserved = e.target.classList.contains('reserved');

        if (!reserved) {
            e.target.classList.toggle('reserved');

            const nextOccupiedSeats =  occupiedSeats + 1;
            setOccupiedSeats(nextOccupiedSeats);
            ticketCount(nextOccupiedSeats);   
             
        }  else if (reserved && occupiedSeats > 0) {
            e.target.classList.toggle('unreserved');
            const nextOccupiedSeats = occupiedSeats - 1 ;
            setOccupiedSeats(nextOccupiedSeats); 
            ticketCount(nextOccupiedSeats);   
        }

        
    } 


    return(
        <div className = "seats" >
            <div className="row">
                <div onClick = { chooseSeat } className='seat'></div>
                <div onClick = { chooseSeat } className='seat'></div>
                <div onClick = { chooseSeat } className='seat'></div>
                <div onClick = { chooseSeat } className='seat'></div>
                <div onClick = { chooseSeat } className='seat'></div>
                <div onClick = { chooseSeat } className='seat'></div>
                <div onClick = { chooseSeat } className='seat'></div>
                <div onClick = { chooseSeat } className='seat'></div>        
            </div>
            <div className="row">
                <div onClick = { chooseSeat } className='seat'></div>
                <div onClick = { chooseSeat } className='seat'></div>
                <div onClick = { chooseSeat } className='seat'></div>
                <div onClick = { chooseSeat } className='seat'></div>
                <div onClick = { chooseSeat } className='seat'></div>
                <div onClick = { chooseSeat } className='seat'></div>
                <div onClick = { chooseSeat } className='seat'></div>
                <div onClick = { chooseSeat } className='seat'></div>        
            </div>
            <div className="row">
                <div onClick = { chooseSeat } className='seat'></div>
                <div onClick = { chooseSeat } className='seat'></div>
                <div onClick = { chooseSeat } className='seat'></div>
                <div onClick = { chooseSeat } className='seat'></div>
                <div onClick = { chooseSeat } className='seat'></div>
                <div onClick = { chooseSeat } className='seat'></div>
                <div onClick = { chooseSeat } className='seat'></div>
                <div onClick = { chooseSeat } className='seat'></div>        
            </div>
            <div className="row">
                <div onClick = { chooseSeat } className='seat'></div>
                <div onClick = { chooseSeat } className='seat'></div>
                <div onClick = { chooseSeat } className='seat'></div>
                <div onClick = { chooseSeat } className='seat'></div>
                <div onClick = { chooseSeat } className='seat'></div>
                <div onClick = { chooseSeat } className='seat'></div>
                <div onClick = { chooseSeat } className='seat'></div>
                <div onClick = { chooseSeat } className='seat'></div>        
            </div>
            <div className="row">
                <div onClick = { chooseSeat } className='seat'></div>
                <div onClick = { chooseSeat } className='seat'></div>
                <div onClick = { chooseSeat } className='seat'></div>
                <div onClick = { chooseSeat } className='seat'></div>
                <div onClick = { chooseSeat } className='seat'></div>
                <div onClick = { chooseSeat } className='seat'></div>
                <div onClick = { chooseSeat } className='seat'></div>
                <div onClick = { chooseSeat } className='seat'></div>        
            </div>
        </div>
    )
};

export default MovieSeats;


