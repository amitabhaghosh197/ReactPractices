import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import './Header.css';
class Header extends Component {
    
    render(){
        
        return(
            <div className ="App header">
                <h1> Hello, React !</h1>
            </div>
        )
    }
   }
   //ReactDOM.render(<Header />, document.getElementById('root'));
   export default Header;