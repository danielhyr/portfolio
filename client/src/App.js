import logo from './logo.svg';
import './App.scss';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import MainPage from './components/MainPage/MainPage'
import PortfolioPage from './components/PortfolioPage/PortfolioPage';
import AboutPage from './components/AboutPage/AboutPage';
import ContactPage from './components/ContactPage/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path = "/" component = {MainPage}/>
        <Route exact path = "/portfolio" component = {PortfolioPage}/>
        <Route exact path = "/about" component = {AboutPage}/>
        <Route exact path = "/contact" component = {ContactPage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
