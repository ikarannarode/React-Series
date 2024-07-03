import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


const txt = " By karan"

const Element = React.createElement(
  "a",
  {
    href: "https://google.com",
    target: "_blank"
  },
  "click me to visit google",
  txt
)


ReactDOM.createRoot(document.getElementById('root')).render(
  Element
)
