import React, {useRef} from 'react';
import './App.css'
//import logo from '../public/logo.png'
import Header from './Header'
import About from './About'
import Hours from './Hours'
import Contact from './Contact'
import Menu from './Menu';

const App = () => {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth"});
  };

  return (
    <>
    <div className="bento-layout">
      <div className="header-app"><Header scrollToContact={scrollToContact}/></div>
      <div className="menu"><Menu /></div>
      <div className="hours"><Hours /></div>
      <div className="about"><About /></div>
    </div>
        <div>
      <div className="contact"><Contact ref={contactRef} /></div>
    </div>
    </>
  )
}

export default App
