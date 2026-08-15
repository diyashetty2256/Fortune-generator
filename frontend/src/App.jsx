import { useState } from 'react';
import FortuneSelection from './FortuneSelection';
import CookieOpening from './CookieOpening';
import EventReveal from './EventReveal';

function App() {
  const [currentScreen, setCurrentScreen] = useState('selection'); // 'selection', 'opening', 'reveal'
  const [selectedCookie, setSelectedCookie] = useState(null);
  const [fortune, setFortune] = useState(null);

  const fortunes = [
    "A story waiting to be written will soon find you.",
    "Your next great idea is closer than you think.",
    "A character is waiting to meet you.",
    "Somewhere between the pages, your fortune is waiting.",
    "A story worth remembering is about to begin."
  ];

  const handleSelectCookie = (cookieId) => {
    setSelectedCookie(cookieId);
    setFortune(fortunes[Math.floor(Math.random() * fortunes.length)]);
    setCurrentScreen('opening');
  };

  const handleContinue = () => {
    setCurrentScreen('reveal');
  };

  return (
    <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {currentScreen === 'selection' && (
        <FortuneSelection onSelect={handleSelectCookie} />
      )}
      {currentScreen === 'opening' && (
        <CookieOpening fortune={fortune} onContinue={handleContinue} />
      )}
      {currentScreen === 'reveal' && (
        <EventReveal />
      )}
    </div>
  );
}

export default App;
