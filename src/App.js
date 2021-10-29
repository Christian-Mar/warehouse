import Header from './components/Header';
import Warehouse from './components/Warehouse';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Warehouse />
    </div>
  );
}

export default App;
