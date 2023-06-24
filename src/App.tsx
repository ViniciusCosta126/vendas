import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';

import Loguin from './modules/login';
import GlobalModal from './shared/components/modal/globalModal/globalModal';
import store from './store';
export default function App() {
  return (
    <Provider store={store}>
      <GlobalModal />
      <SafeAreaView>
        <Loguin />
      </SafeAreaView>
    </Provider>
  );
}
