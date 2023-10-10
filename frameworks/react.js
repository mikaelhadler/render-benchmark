const { createRoot } = require('react-dom/client');

function App() {
  return <h1>A simple handle with react</h1>;
}
const domNode = document.getElementById('app');
const root = createRoot(domNode);
root.render(<App />);