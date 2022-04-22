// containers/Home.js	
import React from 'react';
import Header from '../../components/Header';
const Home = () => {
  return (
      <div>
        <Header />home
        <button onClick={() => { alert('click'); }}>按钮</button>
      </div>
  )
} 

export default Home
