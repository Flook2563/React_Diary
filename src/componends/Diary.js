import React from 'react';
import Navbar from '../componends/Navbar';
import Form from '../componends/Form';
import DataList from './DataList';


export default function Diary(props) {
    return (
        <div>
            <Navbar />
            <Form username={props.location.state.username} />
            <DataList username={props.location.state.username} />
        </div>
    )
}
