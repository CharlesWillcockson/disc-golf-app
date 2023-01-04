import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './contexts/user.context';
import { CourseProvider } from './contexts/courses.context';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <CourseProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </CourseProvider>
    </BrowserRouter>
  </React.StrictMode>,
rootElement
);

