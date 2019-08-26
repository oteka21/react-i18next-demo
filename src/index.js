import React, { Suspense } from 'react';

import { render } from 'react-dom'

import { App } from './app'

render(< Suspense fallback='loading...'>
    <App />
    </Suspense>
    , document.getElementById('app'))