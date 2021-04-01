import React,{useState} from 'react';
import { Link  , Redirect } from 'react-router-dom';
import firebase from '../Database/firebase';

export default function SignUp() {

    const [messages , setMessage] = useState('');

    const [username , setUsername] = useState('');
    const [password , setPassword] = useState('');
    const [copassword , setCopassword] = useState('');

    const [checkReg , setCheckReg] = useState(false)


    const ChangeUsername = (e) => {
        setUsername(e.target.value);  
    }
    const ChangePassword = (e) => {
        setPassword(e.target.value);  
    }
    const ChangeCopassword = (e) => {
        setCopassword(e.target.value);  
    }

    const onRegister = () => {
        if (username !=="" & password !=="" & copassword !== ""){
            if (password === copassword){
                const DataReg= firebase.database().ref('ID');
                //เก็บข้อมูล
                const Data = {
                    username,
                    password,
                    copassword
                }
                //ข้อมูลบันทึกลงไปใน Firebase
                DataReg.push(Data)
                setCheckReg(true)
            }
            else{
                setMessage("กรุณากรอก Password และ CO-Password ให้ตรงกันครับ");
            }
        }
        else{
            setMessage("กรุณากรอกข้อมูลให้ครบครับ");
        }
        
    }

    if (checkReg){
        return <Redirect to="/" />
    }




    return (
    <div>
        <div className="container">
            <h1 style={{textAlign:"center"}}>Register</h1>
            <div className="information">
                <form>
                <p style={{textAlign:"center", color:"red"}} >{messages}</p>
                <div className="mb">
                    <label className="form-label" htmlFor="username">Username:</label>
                    <input type="text" className="form-control" placeholder="Enter username" onChange={ChangeUsername} value={username} />
                </div>
                <div className="mb">
                    <label className="form-label" htmlFor="password">Password:</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={ChangePassword}  value={password} />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="co-password">CO-Password:</label>
                    <input type="password" className="form-control" placeholder="Enter co-password" onChange={ChangeCopassword}  value={copassword} />
                </div>
                </form>
                <button onClick={onRegister} style={{width:"100%"}}  class="btn btn-danger"> Submit </button>
                <Link to="/" style={{width:"100%"}}  className="btn btn-primary">Back</Link>
            </div>
        </div>
    </div>
    )
}
