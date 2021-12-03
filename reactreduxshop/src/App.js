import React from 'react'
import Container  from './Components/Container';
import { Provider } from 'react-redux'
import store from './Redux/item/store';
import HooksitemContainer from './Components/HooksitemContainer';
function App() {
  return (
    <Provider store={store}>
    <div >
      <Container />
      <HooksitemContainer></HooksitemContainer>
    </div>
    </Provider>
  );
}

export default App;
