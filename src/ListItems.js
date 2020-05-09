import React from 'react';

class ListItems extends React.Component{
 render(){
    const {itemslist} = this.props;
    const len = itemslist.length;
    const listitems=len?(itemslist.map(items =>{
        return(<div key={items.id}>
        <center><ul className = "ullist">
            <li className = "lilist">
            <span className="itemtext">{items.item}</span><span onClick={()=>{this.props.deleteitem(items.id)}} className="removebutton"><span className="removetext"><i class="material-icons">delete_outline</i></span></span>
            </li>
            
        </ul>
        </center>
        </div>)
    })):(
    <center>
    <h4 className="blue-text">No Items! Enter Items Below.</h4>
    </center>
    ) 
    return(
        <div>
            {listitems}
        </div>
    );
}
}
export default ListItems;