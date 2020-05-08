import React from 'react';
import './App.css';
import Contact from './components/Contact';

class App extends React.Component {
  handleSave = () => {
    
  }

  render() {
    return (
      <div>
        <Contact onSave={this.handleSave} />
      </div>
    );
  }
}

export default App;
