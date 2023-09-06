import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StyleProvider,ThemePicker } from 'vcc-ui';

import { links } from '@volvo-cars/css/links';



const fragment = document.createDocumentFragment();
for (const link of links()) {
  fragment.append(Object.assign(document.createElement('link'), link));
}
document.head.append(fragment);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StyleProvider>
    <ThemePicker variant="dark">
      <App />
    </ThemePicker>
  </StyleProvider>
    
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
