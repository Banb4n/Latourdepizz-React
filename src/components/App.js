import React, { Component } from 'react';
// Global css
import '../assets/App.css';
// Component
import Header from './sections/Header';
import Footer from './sections/Footer';
import NavbarApp from './styleguide/Navbar';
import Intro from './sections/Intro';
import AboutUs from "./sections/AboutUs";
import Specialities from "./sections/Specialities";
import OurCards from "./sections/OurCards";
import Modal from "./parts/modals"
import TheOpinions from "./sections/TheOpinions";

class App extends Component {
  render() {
    return (
      <div className="App">
          <NavbarApp />
          <Header />
          <Intro />
          <TheOpinions />
          <AboutUs />
          <Specialities />
          <OurCards />
          <Footer />
          <Modal />
      </div>
    );
  }
}

export default App;
