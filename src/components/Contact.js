import React from 'react';
import Button from './Button';

class Contact extends React.Component {
   state = {
      nombre: '',
      numero: ''
   }

   handleChange = (event) => {
      this.setState({
         [event.target.id]: event.target.value
      });
   }

   handleSave = (event) => {
      event.preventDefault();
      
      if (this.state.nombre.trim() !== '' &&
         this.state.numero.trim() !== '') {
         this.props.onSave(this.state);

         this.setState({
            numero: '',
            nombre: ''
         });
      }
   }

   render() {
      return (
         <form onSubmit={this.handleSave}>
            <div className="form-group">
               <label htmlFor="nombre">Nombre:</label>
               <input id="nombre" type="text" className="form-control" 
                  placeholder="Ingrese el nombre" value={this.state.nombre} 
                  onChange={this.handleChange} />
            </div>
            <div className="form-group">
               <label htmlFor="numero">Número:</label>
               <input id="numero" type="text" className="form-control" 
                  placeholder="Ingrese el número" value={this.state.numero} 
                  onChange={this.handleChange} />
            </div>

            <Button type="submit" className="btn btn-primary btn-block">Guardar</Button>
         </form>
      );
   }
}

export default Contact;