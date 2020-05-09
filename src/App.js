import React from 'react';
import './App.css';
import ItemForm from './ItemForm'
import ListItems from './ListItems';

class App extends React.Component {

 
  state ={
    items : [
    {item:"Wake up" ,id : 1},
    {item:"Eat BreakFast",id:2}
  ]}
  addItem = (item) =>{
    item.id = Math.floor(Math.random()*10001)
    const itemslist = [...this.state.items,item];
    this.setState({items:itemslist});
  }
  deleteItem = (id) =>{
    const itemlist = this.state.items.filter(item => {
      return id!==item.id
    });
    this.setState({items:itemlist});
  }
render(){
  return (
    <div className="App">
    <h2 className="blue-text center">TODO List</h2>
    <div style={{marginTop:"80px"}}></div>
     <ItemForm additem ={this.addItem}/>
     <br></br><br></br>
     <ListItems deleteitem={this.deleteItem} itemslist={this.state.items}/>
    </div>
  );
  }
  
  }
export default App;
