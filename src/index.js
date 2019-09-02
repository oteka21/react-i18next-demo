import React, { Suspense } from 'react'

import { render } from 'react-dom'

import { App } from './app'


//the Suspense Component has a fallback prop that receives a component like a loading message while translations load

render(< Suspense fallback='loading...'>
    <App />
    </Suspense>
    , document.getElementById('app'))