import { Component } from 'react';
import { MenuProvider } from './context/themecontext';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import Task2 from './components/Task2';
import Task3 from './components/Task3';
import MetaMaskIntegration from './components/Task4';

class App extends Component {

  render() {
    return (

      <BrowserRouter>
        <MenuProvider>
          <Routes>
            <Route exact path='/' Component={Home} />
            <Route exact path='/graph' Component={Task2} />
            <Route exact path='/task3' Component={Task3} />
            <Route exact path='/task4' Component={MetaMaskIntegration} />
          </Routes>
        </MenuProvider>
      </BrowserRouter>

    )
  }
}
export default App;