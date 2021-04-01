import React,{useState} from 'react';
import firebase from '../Database/firebase';

export default function Form({username}) {

    const [daryMessages , setDaryMessages] = useState('');


    const [inputTopic, setInputTopic] = useState("");
    const [inputDetail, setInputDetail] = useState("");
    const [inputWriter, setInputWriter] = useState(username);

    const ChangeTopic = (e) => {
        setInputTopic(e.target.value);  
    }
    const ChangeDetail = (e) => {
        setInputDetail(e.target.value);  
    }


    const onSubmit =() =>{
        if (inputTopic !=="" && inputDetail !=="" && inputWriter !== ""){
            if (inputWriter === username){
                const DataDiary= firebase.database().ref('Diary');
                //เก็บข้อมูล
                const Data = {
                    topic : inputTopic,
                    detail : inputDetail,
                    writer : inputWriter
                }
                //ข้อมูลบันทึกลงไปใน Firebase
                DataDiary.push(Data) 
                clearData();
            }
        }
        else{
            setDaryMessages("กรุณากรอกข้อมูลให้ครบครับ");
        }

    }
    const clearData = () =>{
        setInputTopic('');
        setInputDetail('');
        setDaryMessages('');
    }



    return (
        <div className="Input">
            <div className="Input__header">Create Diary</div>
            <div style={{textAlign:"center", color:"red"}} >{daryMessages}</div>
            <div className="">
                    <label className="Input__text" htmlFor="topic">
                    Diary Topic
                    </label>
                    <input
                    type="text"
                    className="form-control"
                    placeholder="Enter topic"
                    onChange={ChangeTopic} 
                    value={inputTopic}
                    />
            </div>
            <div className="">
                    <label className="Input__text" htmlFor="detail">
                    Diary Detail
                    </label>
                    <textarea 
                    className="form-control" 
                    placeholder="Enter detail"
                    rows="4" 
                    cols="50" 
                    onChange={ChangeDetail} 
                    value={inputDetail}
                    />
            </div>
            <div className="">
                    <label className="Input__text" htmlFor="writer">
                    Writer
                    </label>
                    <input
                    type="text"
                    className="form-control"
                    value={username}
                    readOnly
                    />
            </div>
            <button  onClick={onSubmit} style={{width:"100%"}}  class="btn btn-primary mt-3">
                Submit
            </button>
        </div>
    )
}
