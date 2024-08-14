import { createContext } from 'react';

const context: { [key: string]: any } = {
  language: '',
};

const LanguageContext = createContext(context);

export default LanguageContext;
