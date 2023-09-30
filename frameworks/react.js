// import { createRoot } from 'react-dom/client';
// const React = require('react');
const { createRoot } = require('react-dom/client');

function App() {
  console.log('pass here');
  return <h1>A simple handle with react</h1>;
}

// class Greeting extends React.Component {
//   render() {
//     return <h1>Hello</h1>;
//   }
// }

const domNode = document.getElementById('app');
const root = createRoot(domNode);
root.render(<App />);