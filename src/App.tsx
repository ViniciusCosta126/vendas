import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';

import Loguin from './modules/login';
import store from './store';
export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <Loguin />
      </SafeAreaView>
    </Provider>
  );
}
