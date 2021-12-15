import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import {GoFileCode} from "react-icons/go";
import './assets/css/home.css';
import './assets/js/home.js';

class Region1 extends React.Component {
  render() {
    return (
      <div id="region1">
        <div id="introText">Hello I'm Colin.</div>
        <div id="firstText">Hello I am Colin Teahn, a **1** year old software developer
          <p></p>
          <div id="prefLanguages">Preffered Languages: <span id="cSharpBubble">C#</span> <span id="htmlBubble">Html</span> <span id="cssBubble">Css</span> <span id="jsBubble">Js</span> <span id="javaBubble">Java</span> <span id="pythonBubble">Python</span> </div>
        </div>
        <img id="img1" width="850.53901" height="740.82953" src="https://raw.githubusercontent.com/clnteahan/portfolio/main/assets/images/undraw_developer_activity_re_39tg.svg" alt="error: not found"></img>
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Region1 />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
