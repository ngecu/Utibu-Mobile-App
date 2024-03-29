import { Provider } from 'mobx-react';
import Login from './Screens/Login';
import Store from './store';
export default function App() {
  
  return (
    <Provider Store={Store}>
   <Login/>
   </Provider>
  );
}
