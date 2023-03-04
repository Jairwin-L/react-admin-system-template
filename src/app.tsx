import { BrowserRouter } from 'react-router-dom';
import Router from '@/routers/index';

const App = (): JSX.Element => (
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);

export default App;
