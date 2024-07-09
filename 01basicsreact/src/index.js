import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

function MyApp(){
  return (
    <div>
      <h1>Hello from Sourav</h1>
    </div>

  )
}

const reactElement = {
  type: 'a',
  props:{
     href: 'https://gogle.com',
     target: '_blank'
  },
  children: 'Clck on me to visit google'
}

const anotherElement = (
  <a href='http://google.com' target='_blank'>click on me</a>
)

const anotheruser = 'Soumya';

const reactsElement = React.createElement(
  'a',
  {'href': 'https://Youtube.com', 'target': '_blank'},
  'Click to me for visit',
  anotheruser
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    // <MyApp />
    // <App />
    reactsElement
    // anotherElement
  // </React.StrictMode>
);
