import { createContext } from 'react';

const context: any = {
  language: '',
};

const LanguageContext = createContext(context);

export default LanguageContext;
