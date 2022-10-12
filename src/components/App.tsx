import { Provider } from 'react-redux';
import { store } from '../state';
import Header from './Header/Header';
import Search from './Search/Search';
import ItemsList from './ItemsList/ItemsList';

import '../styles/main.scss';

const App = () => {
  return (
    <Provider store={store}>
      <div className='app'>
        <Header />
        <main>
          <Search />
          <ItemsList />
        </main>
      </div>
    </Provider>
  );
};

export default App;
