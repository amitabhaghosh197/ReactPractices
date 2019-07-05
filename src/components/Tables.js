import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const TableHeader = () =>{
    const tHeadClass = "skill";
    
 return( 
    <thead className={ tHeadClass }>
        <tr>
            <th>First Name</th>
            <th>Surname</th>
            <th>Age</th>
            <th>Occupation</th>
            
        </tr>

    </thead>
 );
}

const TableBody = (props) => {
   const rows = props.characterData.map((rows, index) =>{
       return(
           <tr key={index}>
               <td>{rows.firstName}</td>
               <td>{rows.surName}</td>
               <td>{rows.age}</td>
               <td>{rows.occupation}</td>
               

           </tr>
       );
   });
    return <tbody>{rows}</tbody>;
}
// function Table(props){
//  const { characterData } = props;
//  return(
//     <div className ="container">
//                   <div className="row">
//                   <table className="table"      >
//                           <TableHeader />
//                        <TableBody characterData ={ characterData } />
    
//                    </table>
//                   </div>
//            </div>
//  )
// }
class Table extends Component{
    render(){
         const { characterData } = this.props;
       
        

        
       return(
           <div className ="container">
               <div className="row">
                   <table className="table"      >
                       <TableHeader />
                       <TableBody characterData ={ characterData } />

                   </table>
               </div>
           </div>
       )
    }
}


class Maintable extends Component{
    render(){
        const characters = [
            {
                firstName  :'John',
                surName    : 'Paul',
                age        : 25,
                occupation : 'Web Developer'
            },
            {
                firstName  :'Sally',
                surName    : 'Huggs',
                age        : 23,
                occupation : 'Junior Web Developer'
            },
            {
              firstName  :'Hugo',
              surName    : 'Denoid',
              age        : 26,
              occupation : 'Junior Web Developer'
          }
        ]

        return(
            <Table characterData={characters} />
        )
    }
}

//ReactDOM.render(<Table/>, document.getElementById('table'));
export default Maintable;