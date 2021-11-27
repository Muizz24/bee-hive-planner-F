import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarComponent from './components/NavbarComponent'
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="mainContainer">
      <Helmet>
        <title>Bee Better</title>
        <link rel="icon" type="image/png" href="favicon.ico" sizes="16x16" />
      </Helmet>
      <div className="NavBarContainer">
        <NavbarComponent/>
      </div>
      <div className="App">
        <Main />
      </div>
    </div>
  );
}

export default App;
