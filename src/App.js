import React from 'react';
import './App.css';
import Contact from './components/Contact';
import Button from './components/Button';
import Search from './components/Search';

class App extends React.Component {
  state = {
    list: [],
    listCopy: [],
    searchText: ""
  }

  handleSave = contact => {
    const list = Object.assign([], this.state.list);
    list.push(contact);
    this.setState({ 
      list,
      listCopy: list
    });
  }

  handleDelete = index => {
    const list = Object.assign([], this.state.list);
    list.splice(index, 1);
    this.setState({ 
      list,
      listCopy: list
    });
  }

  handleSearch = e => {
    const value = e.target.value;
    if (value !== '') {
      const listFiltered = this.state.list.filter(contact => contact.nombre.includes(value));
      
      this.setState({
        [e.target.id]: value,
        list: listFiltered
      });
    } else {
      this.setState({
        [e.target.id]: value,
        list: this.state.listCopy
      });
    }
  }

  render() {
    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-7">
            <Search searchText={this.state.searchText} onSearch={this.handleSearch} />
            <div className="mt-2">
              {this.state.list.map((contact, index) => (
                <p key={index}>
                  {contact.nombre} - {contact.numero}
                  <Button type="button" className="ml-2 btn btn-danger" onClick={
                    () => this.handleDelete(index)
                  }>
                    Borrar
                  </Button>
                </p>
              ))}
            </div>
          </div>
          <div className="col-md-5">
            <Contact onSave={this.handleSave}  />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
