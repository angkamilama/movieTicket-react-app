import { useEffect, useRef, useState } from "react";

function SeatSelect({ setTicketCount, rowList, columnList }) {
  const [seats, setSeats] = useState([]);

  const handleSeat = (seatNum) => {
    if (seats.includes(seatNum)) {
      const newSeats = seats.filter((word) => word !== seatNum);
      setSeats(newSeats);
      setTicketCount(newSeats.length);
    } else {
      const newSeats = [...seats, seatNum];
      setSeats(newSeats);
      setTicketCount(newSeats.length);
    }
  };

  useEffect(() => console.log(), [seats]);

  return (
    <div className="seats">
      {columnList.map((letter) => {
        return (
          <div className="row" key={letter}>
            {rowList.map((number) => {
              const seatNumber = `${letter}${number}`;
              const isSelected = seats.includes(seatNumber);

              return (
                <div
                  key={seatNumber}
                  onClick={() => handleSeat(seatNumber)}
                  className="seat"
                  style={{ backgroundColor: isSelected ? "red" : "grey" }}
                >
                  {" "}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default SeatSelect;
