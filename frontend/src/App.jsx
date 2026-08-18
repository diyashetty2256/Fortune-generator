import { useState } from 'react';
import FortuneSelection from './FortuneSelection';
import CookieOpening from './CookieOpening';
import EventReveal from './EventReveal';

function App() {
  const [currentScreen, setCurrentScreen] = useState('selection'); // 'selection', 'opening', 'reveal'
  const [selectedCookie, setSelectedCookie] = useState(null);
  const [fortune, setFortune] = useState(null);

  const fortunes = [
    {
      id: 1,
      design: 'etch-a-jam',
      quote: "Somewhere between the pages, your fortune is waiting at....",
      date: "22 August 2026",
      time: "9:00 am - 12 pm",
      venue: "NC 13"
    },
    {
      id: 2,
      design: 'tamagotchi',
      quote: "A character is waiting to meet you at....",
      date: "22 August 2026",
      time: "9:00 am - 12:00 pm",
      venue: "NC 13"
    },
    {
      id: 3,
      design: 'gameboy',
      quote: "Your next great idea is closer than you think at....",
      date: "22 August 2026",
      time: "9:00 am - 12:00 pm",
      venue: "NC 13"
    },
    {
      id: 4,
      design: 'walkman',
      quote: "Listen to the stories waiting to be told at....",
      date: "22 August 2026",
      time: "9:00 am - 12:00 pm",
      venue: "NC 13"
    },
    {
      id: 5,
      design: 'polaroid',
      quote: "Picture yourself in a world of words at....",
      date: "22 August 2026",
      time: "9:00 am - 12:00 pm",
      venue: "NC 13"
    },
    {
      id: 6,
      design: 'typewriter',
      quote: "A story worth remembering is about to begin at....",
      date: "22 August 2026",
      time: "9:00 am - 12:00 pm",
      venue: "NC 13"
    }
  ];

  const handleSelectCookie = (cookieId) => {
    setSelectedCookie(cookieId);
    // Pick randomly from the 6 fortunes on every cookie click
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    setFortune(randomFortune);
    setCurrentScreen('opening');
  };

  const handleContinue = () => {
    setCurrentScreen('reveal');
  };

  const handleReset = () => {
    setSelectedCookie(null);
    setFortune(null);
    setCurrentScreen('selection');
  };

  return (
    <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#fdf6f0' }}>
      {currentScreen === 'selection' && (
        <FortuneSelection onSelect={handleSelectCookie} />
      )}
      {currentScreen === 'opening' && (
        <CookieOpening fortune={fortune} onContinue={handleContinue} />
      )}
      {currentScreen === 'reveal' && (
        <EventReveal fortune={fortune} onReset={handleReset} />
      )}
    </div>
  );
}

export default App;
