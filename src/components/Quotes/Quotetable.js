import React from 'react';
import './Quotes.css'
import APIURL from '../../helpers/enviroment';
import Catbox from '../../assets/ccj.png'
import './Quotetable.css'
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';



const Quotetable = (props) => {

        const deleteQuote=()=>{
            fetch(`${APIURL}/quotes/${props.testData.id}`, {
                method: 'DELETE',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': props.token
                })
            })
            .then(()=>{props.fetchQuotes()})
        }


    return(

    <div className="post-card">
        <img className="pic" src={Catbox} alt="a cat"/>
        <div className="card-content">
          <p className="pt"> "{props.testData.quote}"</p>
          <p className="pt">-{props.testData.author}</p>
            <UpdateIcon className="icon" onClick={()=> {props.editUpdateQuote(props.testData); props.updateOn()}}/>
            <DeleteIcon className="icon" onClick={deleteQuote}/>
        </div>   
</div>      
            
    )
}

export default Quotetable;