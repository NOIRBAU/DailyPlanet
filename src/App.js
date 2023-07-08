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

  const fullName = document.getElementById('fullName');
  const email = document.getElementById('email');
  const phoneNumber = document.getElementById('phoneNumber');
  const subject = document.getElementById('subject');
  const message = document.getElementById('message');
  const form = document.getElementById('form');
  const readyInputs = document.querySelectorAll('.input-box');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let condicion = validacionForm();
    if (condicion == true) {
      sendForm();
    }
  });

  function validacionForm() {
    form.lastElementChild.innerHTML = '';
    let condicion = true;
    readyInputs.forEach((element) => {
      element.lastElementChild.innerHTML = '';
    });

    if (fullName.value.length < 1 || fullName.value.trim() == '') {
      showErrorMessage('fullName', 'Invalid name*');
      condicion = false;
    }
    if (email.value.length < 1 || email.value.trim() == '') {
      showErrorMessage('email', 'Invalid mail*');
      condicion = false;
    }
    if (
      phoneNumber.value.length != 9 ||
      phoneNumber.value.trim() == '' ||
      isNaN(phoneNumber.value)
    ) {
      showErrorMessage('phoneNumber', 'Invalid phone number*');
      condicion = false;
    }
    if (subject.value.length < 1 || subject.value.trim() == '') {
      showErrorMessage('subject', 'Invalid subject');
      condicion = false;
    }
    if (message.value.length < 1 || message.value.trim() == '') {
      showErrorMessage('message', 'Invalid message');
      condicion = false;
    }
    return condicion;
  }

  function showErrorMessage(claseInput, message) {
    let element = document.querySelector(`.${claseInput}`);
    element.lastElementChild.innerHTML = message;
  }

  function sendForm() {
    form.reset();
    form.lastElementChild.innerHTML = 'Checked !!';
  }

  return (
    <>
      <Header />
      <Hero />
      <div className="App">
        <h1 className="title" id="home">
          News
        </h1>
        <Menu active={active} setActive={setActive} setCategory={setCategory} />
        <NewsGrid items={items} />
        <h1 className="title" id="about">
          ABOUT
        </h1>
        <section className="about">
          <div className="about__foto"></div>
          <div className="about__text">
            <p>
              We are an online source for the latest world news stories and current events, ensuring
              our readers up to date with any breaking news developments.
            </p>
            <p>Get the news you want and discover the best trending articles with us.</p>
          </div>
        </section>
        <h1 className="title" id="contact">
          CONTACT
        </h1>
        <section className="contact__form border--black">
          <h2 id="contactUs">Contact Us!</h2>
          <div className="contact" id="contact">
            <form action="" className="form" id="form" autoComplete="off">
              <div className="input-box fullName">
                <input
                  name="fullName"
                  id="fullName"
                  type="text"
                  placeholder="Full name"
                  className="input__element"
                />
                <p className="messageError"></p>
              </div>
              <div className="input-box email">
                <input
                  name="email"
                  id="email"
                  type="email"
                  placeholder="E-mail adress"
                  className="input__element"
                />
                <p className="messageError"></p>
              </div>
              <div className="input-box phoneNumber">
                <input
                  name="phoneNumber"
                  id="phoneNumber"
                  type="tel"
                  placeholder="Mobile number"
                  className="input__element"
                />
                <p className="messageError"></p>
              </div>
              <div className="input-box subject">
                <input
                  name="subject"
                  id="subject"
                  type="text"
                  placeholder="Subject"
                  className="input__element"
                />
                <p className="messageError"></p>
              </div>
              <div className="input-box message">
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  placeholder="Type your message here."
                  maxLength="200"
                  className="input__box textarea__element"
                ></textarea>
                <p className="messageError"></p>
              </div>
              <input type="submit" value="SEND" className="btn"></input>
              <p className="messageChecked"></p>
            </form>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default App;
