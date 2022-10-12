import { Provider } from 'react-redux';
import { store } from '../state';
import ItemsList from './ItemsList/ItemsList';
import Search from './Search/Search';

import '../styles/main.scss';

const App = () => {
  return (
    <Provider store={store}>
      <div className='app'>
        <h1>npm Package Search</h1>
        <Search />
        <ItemsList />
      </div>
    </Provider>
  );
};

export default App;
