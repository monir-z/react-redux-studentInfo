import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import StudentList from './components/StudentList'
import store from './store'

const App = (
  <Provider store={store}>
    <StudentList />
  </Provider>
) 

ReactDOM.render(App, document.getElementById('root'));