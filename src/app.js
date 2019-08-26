import React from 'react'


import i18n from './i18n'

import { useTranslation } from "react-i18next";


export function App() {
    const { t } = useTranslation('common')
    return <div>
        <h2>{t('key')}</h2>
        <select onChange={ e => i18n.changeLanguage(e.target.value) }>
            <option value='en'>ingles</option>
            <option value='es'>español</option>
            <option value='fr'>frances</option>
        </select>
        </div>;
  }
  
  