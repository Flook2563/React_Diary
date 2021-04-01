import React from 'react';
import firebase from '../Database/firebase';


export default function Data({data,username}) {

    const deleteData = () => {
        const Dataref = firebase.database().ref('Diary').child(data.id);
        Dataref.remove();
    }



    return (
        <>
        
        <div className="Input" style={{userSelect:'none'}}>
            <div className="">
                    <label className="Input__text" >Diary Topic</label>
                    <input type="text"className="form-control" value={data.topic} readOnly/>
            </div>
            <div className="">
                    <label className="Input__text" h>Diary Detail</label>
                    <textarea className="form-control" rows="4" cols="50" value={data.detail} readOnly/>
            </div>
            <div className="mb-3">
                <label className="Input__text"> Writer </label>
                <input type="text" className="form-control" value={data.writer} readOnly/>
            </div>
            {username === data.writer 
                ? <button className="delete-btn" onClick={deleteData} style={{width:"100%"}}>Delete</button>
                : <button className="nondelete-btn" style={{width:"100%"}} disabled>Delete</button>
            }
        </div>
        </>
    )
}
