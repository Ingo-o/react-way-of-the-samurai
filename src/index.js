import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 1, message: 'Aboard!', likesCount: 12},
    {id: 2, message: 'I am not fat i\'m big boned!', likesCount: 2},
    {id: 2, message: 'Stay away from my gold!', likesCount: 0},
    {id: 2, message: 'LFM Tank to Deadmines last slot', likesCount: 8},
]

let dialogs = [
    {id: 1, name: 'Captain Cartman'},
    {id: 2, name: 'Peter Blood'},
    {id: 3, name: 'Fleet Master Seahorn'},
    {id: 4, name: 'Red Beard'},
    {id: 5, name: 'Rock’n’Rolf'},
    {id: 6, name: 'Pirate burb'},
]

let messages = [
    {id: 1, message: 'Who\'s there?! Oo'},
    {id: 2, message: 'Yarrrrr!'},
    {id: 3, message: 'Fifteen men on the dead man\'s chest! Yo-ho-ho, and a bottle of rum!'},
    {id: 4, message: 'Red Beard is oaf :P'},
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} messages={messages} dialogs={dialogs}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
