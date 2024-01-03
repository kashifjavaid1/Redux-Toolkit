
import { Provider } from 'react-redux';
import Add from './components/Add/Add'
import ListTodo from './components/ListTodo/ListTodo'
import { store } from './App/store';
function App() {
  return (
<Provider store={store}>
<Add/>
<ListTodo/>

</Provider>
  );
}

export default App;
 