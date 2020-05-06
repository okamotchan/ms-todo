import React from 'react';
import ReactDOM from 'react-dom';
import { TodoApp } from './components/TodoApp';
import './index.css'
import { initializeIcons } from '@uifabric/icons';

initializeIcons();

ReactDOM.render(<TodoApp />, document.getElementById('root'));
