import React from 'react';
import HouseCard from './components/HouseCard';
import cardData from './data/houseCardsData.json';

function App() {
  return (
    <>
      <header className="nav">
        <div className="company-logo">
          <p>Housify</p>
        </div>
      </header>
      <section className="search-engine-section">
        <div className="search-container">
          <div className="background-img"></div>
          <div className="image-overlay">
            <form>
              <input className="search-engine-input"></input>
            </form>
          </div>
        </div>
      </section>
      <section className="house-card-section">
        {cardData.Cards.map((data) => (
          <HouseCard data={data}/>
        ))}
      </section>
    </>
  )
}

export default App