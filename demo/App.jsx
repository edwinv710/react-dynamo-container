import React from 'react';
import { render } from 'react-dom';
import data from './data.json';
import Quiz from '../lib/Quiz';
import './quiz.scss';

function complete() {
  alert("all answered");
}

function App (props) {
  return (
    <div>
      <Quiz {...data.quiz} onComplete={ complete } />
      <Quiz type='sequential' {...data.quiz} onComplete={ complete } />
    </div>
  );
}

export default App;
