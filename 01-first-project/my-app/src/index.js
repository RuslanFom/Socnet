import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: 'It\'s my first post', likesCount: 11},
    {id: 3, message: 'I wanna have another post', likesCount: 10},
    {id: 4, message: 'And another one', likesCount: 5}

]

let dialogs = [
    {id: 1, name: 'Ruslan'},
    {id: 2, name: 'OlgaMish'},
    {id: 3, name: 'Oleg'},
    {id: 4, name: 'Dimitri'},
    {id: 5, name: 'Alexandr'},
    {id: 6, name: 'Tatiana'}
]

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your dog'},
    {id: 3, message: 'HAIUHAI'},
    {id: 4, message: 'Where is my peni'},
    {id: 5, message: 'Mikelandgelo is failed'},
    {id: 6, message: 'kak Bozenka molvil'}
]


ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
