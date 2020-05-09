import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// const firebaseConfig = {
//   apiKey: "AIzaSyDRJ3xKquk9hN7QuqPl_Xc_KJWoCMLt5xU",
//   authDomain: "todolistforreact.firebaseapp.com",
//   databaseURL: "https://todolistforreact.firebaseio.com",
//   projectId: "todolistforreact",
//   storageBucket: "todolistforreact.appspot.com",
//   messagingSenderId: "442861307046",
//   appId: "1:442861307046:web:414afa8ba52fe1e787e067",
//   measurementId: "G-0GYC6C7S33"
// };

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
