import React,{Component} from 'react';
import './styles/App.css';
import Stories from './Containers/Stories';

class App extends Component {

  render(){
    return (
      <div className="App">
        <Stories/>
      </div>
    );
  }
  
}
export default App;
