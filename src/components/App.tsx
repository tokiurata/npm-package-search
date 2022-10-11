import { Provider } from 'react-redux';
import { store } from '../state';
import ItemsList from './ItemsList';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Search For a Package</h1>
        <ItemsList />
      </div>
    </Provider>
  );
};

export default App;
