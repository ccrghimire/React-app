import React from 'react'
import Form from "./components/contact-form"
import Header from './components/header'
import Services from './components/services'
import './App.css'

function App(){
  return(
    <div>
      <Header />
      <Services />
      <Form />
    </div>
  );
}
export default App;