import { useState } from "react";

const columns = ["A", "B", "C", "D", "E", "F", "G"];
const rows = ["1", "2", "3", "4", "5"];

function MovieSeats({ setTicketCount }) {
  const [seats, setSeats] = useState([]);

  const handleSeat = (seatNum) => {
    if (seats.includes(seatNum)) {
      // if the current is already selected then remove it
      const filteredSeats = seats.filter((word) => word !== seatNum);
      setSeats(filteredSeats);
    } else {
      // otherwise add it
      setSeats([...seats, seatNum]);
    }
    setTicketCount(seats.length);
  };

  return (
    <div className="seats">
      {columns.map((letter) => {
        return (
          <div className="row" key={letter}>
            {rows.map((number) => {
              const seatNumber = `${letter}${number}`;
              const isSelected = seats.includes(seatNumber);

              return (
                <div
                  key={seatNumber}
                  onClick={() => handleSeat(seatNumber)}
                  className="seat"
                  style={{ backgroundColor: isSelected ? "red" : "grey" }}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default MovieSeats;
