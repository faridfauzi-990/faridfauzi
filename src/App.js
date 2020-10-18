import React, {Component } from 'react';
// import logo from './logo.svg';
import './App.css'; 
import MainComponent from './components/main-page'
 


class App extends Component {
   
  render() {
     
    // const { path } = this.props.match;
  return ( 
      // <div className="App">
      //   <header className="App-header">          
      //       <MainComponent/>  
      //   </header>       
      // </div> 

      <React.Fragment> 
      {/* <div className="App">         */}
        {/* <header className="App-header">                       */}
                <main className = "container">
                  <MainComponent/>  
                </main>
        {/* </header>       
      </div>  */}
      </React.Fragment>

      // <React.Fragment>       
      //     <main className = "container">
      //       <MainComponent/>  
      //     </main>
      // </React.Fragment>
      );
}
}
export default App;
