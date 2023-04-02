import { useState } from "react";

function MovieSeats({ ticketCount }) {
  const [seats, setSeats] = useState([]);
  const [isActive, setIsActive] = useState(true);

  const handleSeat = (seatNum) => {
    if (!seats.includes(seatNum)) {
      setSeats([...seats, seatNum]);
      setIsActive((isActive) => !isActive);
      console.log(seats);
    } else {
      const filteredSeats = seats.filter((word) => word !== seatNum);
      setSeats(filteredSeats);
      console.log(seats);
    }
    ticketCount(seats.length);
  };

  return (
    <div className="seats">
      <div className="row">
        <div
          onClick={() => handleSeat("A1")}
          className="seat"
          style={{ backgroundColor: isActive ? "grey" : "red" }}
        ></div>
        <div
          onClick={() => handleSeat("A2")}
          className="seat"
          style={{ backgroundColor: isActive ? "grey" : "red" }}
        ></div>
        <div
          onClick={() => handleSeat("A3")}
          className="seat"
          style={{ backgroundColor: isActive ? "grey" : "red" }}
        ></div>
        <div
          onClick={() => handleSeat("A4")}
          className="seat"
          style={{ backgroundColor: isActive ? "grey" : "red" }}
        ></div>
        <div
          onClick={() => handleSeat("A5")}
          className="seat"
          style={{ backgroundColor: isActive ? "grey" : "red" }}
        ></div>
        <div
          onClick={() => handleSeat("A6")}
          className="seat"
          style={{ backgroundColor: isActive ? "grey" : "red" }}
        ></div>
        <div
          onClick={() => handleSeat("A7")}
          className="seat"
          style={{ backgroundColor: isActive ? "grey" : "red" }}
        ></div>
        <div
          onClick={() => handleSeat("A8")}
          className="seat"
          style={{ backgroundColor: isActive ? "grey" : "red" }}
        ></div>
      </div>
      <div className="row">
        <div onClick={() => handleSeat("B1")} className="seat"></div>
        <div onClick={() => handleSeat("B2")} className="seat"></div>
        <div onClick={() => handleSeat("B3")} className="seat"></div>
        <div onClick={() => handleSeat("B4")} className="seat"></div>
        <div onClick={() => handleSeat("B5")} className="seat"></div>
        <div onClick={() => handleSeat("B6")} className="seat"></div>
        <div onClick={() => handleSeat("B7")} className="seat"></div>
        <div onClick={() => handleSeat("B8")} className="seat"></div>
      </div>
      <div className="row">
        <div onClick={() => handleSeat("C1")} className="seat"></div>
        <div onClick={() => handleSeat("C2")} className="seat"></div>
        <div onClick={() => handleSeat("C3")} className="seat"></div>
        <div onClick={() => handleSeat("C4")} className="seat"></div>
        <div onClick={() => handleSeat("C5")} className="seat"></div>
        <div onClick={() => handleSeat("C6")} className="seat"></div>
        <div onClick={() => handleSeat("C7")} className="seat"></div>
        <div onClick={() => handleSeat("C8")} className="seat"></div>
      </div>
      <div className="row">
        <div onClick={() => handleSeat("D1")} className="seat"></div>
        <div onClick={() => handleSeat("D2")} className="seat"></div>
        <div onClick={() => handleSeat("D3")} className="seat"></div>
        <div onClick={() => handleSeat("D4")} className="seat"></div>
        <div onClick={() => handleSeat("D5")} className="seat"></div>
        <div onClick={() => handleSeat("D6")} className="seat"></div>
        <div onClick={() => handleSeat("D7")} className="seat"></div>
        <div onClick={() => handleSeat("D8")} className="seat"></div>
      </div>
      <div className="row">
        <div onClick={() => handleSeat("E1")} className="seat"></div>
        <div onClick={() => handleSeat("E2")} className="seat"></div>
        <div onClick={() => handleSeat("E3")} className="seat"></div>
        <div onClick={() => handleSeat("E4")} className="seat"></div>
        <div onClick={() => handleSeat("E5")} className="seat"></div>
        <div onClick={() => handleSeat("E6")} className="seat"></div>
        <div onClick={() => handleSeat("E7")} className="seat"></div>
        <div onClick={() => handleSeat("E8")} className="seat"></div>
      </div>
    </div>
  );
}

export default MovieSeats;
