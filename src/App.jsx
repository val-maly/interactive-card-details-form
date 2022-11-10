import React from 'react';
import cardLogo from './Images/card-logo.svg';

function App() {
  return (
    <div className='App'>
      <header>
        <div className='credit-card-back'>
            <span className='credit-card-cvv'>000</span>
        </div>
        <div className='credit-card-front'>
            <div className='credit-card-top'>
              <img className='card-logo' src={cardLogo} alt='card-logo'/>
            </div>
            <div className='credit-card-middle'>
              <span className='credit-card-number'>0000 0000 0000 0000</span>
            </div>
            <div class='credit-card-bottom'>
              <span className='credit-card-name'>JANE APPLESEED</span>
              <span className='credit-card-expiry'>09/00</span>
            </div>
        </div>
      </header>
      <main>
      </main>
    </div>
  );
}

export default App;
