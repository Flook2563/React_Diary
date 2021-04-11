import React,{useState , useContext} from 'react';
import Navbar from '../componends/Navbar';
import Form from '../componends/Form';
import DataList from './DataList';
import { AuthContext } from '../Database/Auth';
import { Link  , Redirect } from 'react-router-dom';
import firebase from '../Database/firebase';





export default function Diary(props) {
    const { currentUser } = useContext(AuthContext);

    if (!currentUser) {
        return <Redirect to="/" />;
    }

    return (
        <div>
            <Navbar />
            <Form username={props.location.state.username} />
            <DataList username={props.location.state.username} />
            <button onClick={() => firebase.auth().signOut()} class="btn btn-danger">Sign Out</button>
        </div>
    )
}
