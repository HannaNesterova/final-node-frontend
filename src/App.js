import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './App.css';
import MainPage from './MainPage';

function App() {

  const [yesCount, setYesCount] = useState(false);
  const [voted, setVoted] = useState(false);

  const handleVote = (vote) => {
    if (!voted) {
      if (vote === 'yes') {
        setYesCount(true);
      } else {
        Swal.fire({
          icon: "success",
          title: "I'm sorry...",
          text: "It's your choose and we accept this. Good luck!",
        }).then(() => {
          setVoted(false);
        });
      }
      setVoted(true);
    }
  }


  return (
    <div className="App">
      {!voted && (
        <div className='main_box'>
          <h2>Do you want to change your life? </h2>
          <button onClick={() => handleVote('yes')}>yes</button>
          <button onClick={handleVote}>no</button>
        </div>
      )}
      {voted && yesCount && <MainPage />}
    </div>
  );
}

export default App;
