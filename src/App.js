import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Widgets from './components/Widgets';
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
<<<<<<< HEAD
          <>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Feed />
              heeey
              <Widgets />
            </div>
          </>
        )}
=======
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
    heeeeeey
          </div>
        </>
      )}
>>>>>>> 958457b74a0d2baaf882c78daa2eb777dbc105dd
    </div>
  );
}

export default App;
