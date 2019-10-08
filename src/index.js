/** NPM IMPORT */
import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
/** LOCAL IMPORT */
import App from 'src/app/components/App';


document.addEventListener('DOMContentLoaded', () => {
    render(<App />, document.getElementById('root'));
});
