import Header from './header';
import Hero from './Hero';
import Footer from './Footer';
import { useState, useEffect } from 'react';
import Menu from './components/Menu';
import NewsGrid from './components/NewsGrid';

function App() {
  const [items, setItems] = useState([]);
  const [active, setActive] = useState(1);
  const [category, setCategory] = useState('general');

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=f91c0efa500e4f159e1af0d13dac3196`,
    )
      .then((res) => res.json())
      .then((data) => setItems(data.articles));
  }, [category]);

  return (
    <>
      <Header />
      <Hero />
      <div className="App">
        <h1 className="title">News</h1>
        <Menu active={active} setActive={setActive} setCategory={setCategory} />
        <NewsGrid items={items} />
        <h1 className="title">ABOUT</h1>
      </div>
      <Footer />
    </>
  );
}

export default App;
