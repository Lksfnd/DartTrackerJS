import React from 'react';
import ReactDOM from 'react-dom';
import { VirtualDartboard } from './components/VirtualDartboard';


ReactDOM.render(
    <div>
        <VirtualDartboard size={ 500 }/>
    </div>,
    document.getElementById('app')
);

module.hot.accept();