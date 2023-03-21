import React, { useState } from "react";
import style from './style.css';
import MovieSelect from './components/MovieSelect';
import ScreenContainer from './components/ScreenContainer';
import MovieSeats from "./components/MovieSeats";
import MoviePrice from "./components/MoviePrice";

function App() {
  const [totalTicket, setTotalTicket] = useState(0);
  const [receivedTicketPrice, setReceivedTicketPrice] = useState(0);

  const ticketCount = (ticketNumData) => {
      setTotalTicket(ticketNumData);
  }
  
  const finalTicketPrice = (TicketPriceData) => {
    setReceivedTicketPrice(TicketPriceData);
  }



  return (
    <div className="main_container">
      <div className="movie_container">
        <MovieSelect finalTicketPrice={finalTicketPrice}/>
        <ScreenContainer/>
        <MovieSeats ticketCount = {ticketCount}/>
        <MoviePrice totalTicket = {totalTicket} receivedTicketPrice={receivedTicketPrice}/>
      </div>
    </div>
  )
}


export default App;
