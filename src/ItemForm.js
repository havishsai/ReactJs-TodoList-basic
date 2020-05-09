import React ,{ Component } from 'react';


class ItemForm extends Component{
    state = {
        item : null,
        id  : null
      }
      handleChange = (e) =>{
        this.setState({
          [e.target.id] : e.target.value
        })
      }
      handleSubmit= (e)=>{
        e.preventDefault();
        this.props.additem(this.state);
        this.setState({item:''});
        console.log(this.state);
      }
    render(){
    return(
        <div className="ItemForm">
        <center>
            <form onSubmit={this.handleSubmit}>
      <input value={this.state.item} autoComplete="off" id = "item" type="text" placeholder="Enter Item" onChange={this.handleChange}/>
      <button className="btn waves-effect waves-dark addbutton"><i className="material-icons left">add</i>Add Item</button>
      </form>
      </center>
        </div>
    
    );
}
}
export default ItemForm;