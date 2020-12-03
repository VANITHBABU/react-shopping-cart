import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import {  BrowserRouter as Router,Switch,Route} from 'react-router-dom';

import routes from './routes/Routes';
import HomeContainer from './containers/home/HomeContainer';
function App() {
  return (
   <>
  
      <Router>
      <Header />
      <Switch>
       
           {routes.map((route,index)=> {
           const {path,component}= route;

                return <Route exact path={path} key={index} component={component} />
                 

})}
      </Switch>
      <Footer />
      </Router>
   
    </>
  );
}

export default App;
