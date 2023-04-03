import React, { useState } from "react";
import style from "./style.css";
import MovieSelect from "./components/MovieSelect";
import ScreenContainer from "./components/ScreenContainer";
import MovieSeats from "./components/MovieSeats";
import MoviePrice from "./components/MoviePrice";

function App() {
  const [totalTicket, setTotalTicket] = useState(0);
  const [price, setPrice] = useState(0);

  const setTicketCount = (ticketNumData) => {
    setTotalTicket(ticketNumData);
  };

  return (
    <div className="main_container">
      <div className="movie_container">
        <MovieSelect setTicketPrice={(price) => setPrice(price)} />
        <ScreenContainer />
        <MovieSeats setTicketCount={setTicketCount} />
        <MoviePrice totalTicket={totalTicket} receivedTicketPrice={price} />
      </div>
    </div>
  );
}

export default App;
