import React, { useState } from "react";
import style from "./style.css";
import MovieSelect from "./components/MovieSelect";
import ScreenContainer from "./components/ScreenContainer";
import SeatSelect from "./components/SeatSelect";
import PriceSelect from "./components/PriceSelect";

function App() {
  const [totalTicket, setTotalTicket] = useState(0);
  const [ticketPrice, setTicketPrice] = useState(0);
  const columns = ["A", "B", "C", "D", "E", "F"];
  const rows = [1, 2, 3, 4, 5, 6];

  const setTicketCount = (ticketNumData) => {
    setTotalTicket(ticketNumData);
  };

  const finalTicketPrice = (TicketPriceData) => {
    setTicketPrice(TicketPriceData);
  };

  const clearSeats = (value) => {
    setTotalTicket((totalTicket) => totalTicket * value);
  };

  return (
    <div className="main_container">
      <div className="movie_container">
        <MovieSelect
          finalTicketPrice={finalTicketPrice}
          clearSeats={clearSeats}
        />
        <ScreenContainer />
        <SeatSelect
          setTicketCount={setTicketCount}
          rowList={rows}
          columnList={columns}
        />
        <PriceSelect totalTicket={totalTicket} ticketPrice={ticketPrice} />
      </div>
    </div>
  );
}

export default App;
