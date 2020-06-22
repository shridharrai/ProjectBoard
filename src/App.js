import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProjectBoard from './components/ProjectBoard';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AddProjectTask from './components/projectTask/AddProjectTask';
import { Provider } from 'react-redux';
import store from './store';
import UpdateProjectTask from './components/projectTask/UpdateProjectTask';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className='App'>
            <Navbar />
            <Route exact path='/' component={ProjectBoard} />
            <Route exact path='/addProjectTask' component={AddProjectTask} />
            <Route
              exact
              path='/updateProjectTask/:pt_id'
              component={UpdateProjectTask}
            ></Route>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
