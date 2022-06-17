import React from 'react'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Header  from './components/Header/Header'
import Contact from './components/Contact/Contact'
 import Portfolio from './components/Portfolio/Portfolio'
import Services from './components/Services/Services'
import Footer from './components/Footer/Footer'
import { Component } from 'react';
class App extends Component {
  render() {
    return (
      <div>
        <Header/>
     <Nav/>
     <About/>
     <Experience/>
     <Portfolio/>
     <Services/>
     <Contact/>
    <Footer/>
      </div>
    );
  }
}
 
export default App;
// function App() {
//   return (
//     <div>
//     <Header/>
//     <Nav/>
//     <About/>
//     <Experience/>
//     <Portfolio/>
//     <Services/>
//     <Contact/>
//     <Footer/>
//     </div>
//   )
// }

// export default App