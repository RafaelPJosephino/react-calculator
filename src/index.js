import React from 'react';
import ReactDOM from 'react-dom/client';
import Calculator from './components/Calculator'

function App() {
    return (
        <div>
            <h1>Calculator</h1>
            <Calculator />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
