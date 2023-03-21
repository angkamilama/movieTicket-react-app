import { useState} from "react";


function MovieSelect({finalTicketPrice}) {
  const [moviePrice, setMoviePrice] = useState(0);
  
  const movieArray = [
      {name: '-- Select --'
      },
      { name: 'Titanic',
        price: 15
      },
      { name: 'Avatar',
        price: 10
      },
      { name: 'No mercy',
        price: 17
      },
      { name: 'Games of throne',
        price: 14
      }
  ];

    const chooseMovie =(e) => {
      setMoviePrice(e.target.value);
    }
    
    finalTicketPrice(moviePrice);   
    
    return (
        <div className="title">
            <div className="movie_label">
                <h4>Movies:</h4>
            </div>
            <label>
              <select  onChange={chooseMovie} id="movie_list">
              <option value={movieArray[0].price}>{movieArray[0].name}</option>
                <option value={movieArray[1].price}>{movieArray[1].name}</option>
                <option value={movieArray[2].price}>{movieArray[2].name}</option>
                <option value={movieArray[3].price}>{movieArray[3].name}</option>
                <option value={movieArray[4].price}>{movieArray[4].name}</option>
              </select>
            </label>
        </div> 
    )
};

export default MovieSelect;



