import React,{useState} from 'react';
import { Link  , Redirect } from 'react-router-dom';
import firebase from '../Database/firebase';

export default function SignUp() {


    const [messages , setMessage] = useState('');
    const [emailCheck , setEmailCheck] = useState('');
    const [passwordCheck , setPasswordCheck] = useState('');

    const [currentUser, setCurrentUser] = useState(null);

    const ChangeEmail = (e) => {
        setEmailCheck(e.target.value);  
    }
    const ChangePassword = (e) => {
        setPasswordCheck(e.target.value);  
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (emailCheck !=="" & passwordCheck !==""){
            if (passwordCheck.length >= 6){
                const { email, password } = e.target.elements;

                try {

                    firebase.auth().createUserWithEmailAndPassword(email.value, password.value);
                    setCurrentUser(true);

                } catch(error) {
                    alert(error);
                }

            }else{
                setMessage("กรุณากรอกรหัสผ่านมากกว่า 6 ตัวอักษร");
            }       
        }else{
            setMessage("กรุณากรอกข้อมูลให้ครบครับ");
        }
    }

    if (currentUser) {
        return <Redirect to="/" />
    }


    return (
        <div>
            <div className="setcenter">
            <div className="App container border-signup">
                <h1 style={{textAlign:"center"}}>Register</h1>
                <div className="information">
                    <form onSubmit={handleSubmit}>
                    <p style={{textAlign:"center", color:"red"}} >{messages}</p>
                    <div className="mb">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input 
                        type="email" 
                        name="email" 
                        className="form-control" 
                        id="exampleInputEmail1" 
                        placeholder="Enter Email address" 
                        aria-describedby="emailHelp" 
                        onChange={ChangeEmail}  
                        value={emailCheck}
                        />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input 
                        type="password" 
                        name="password" 
                        className="form-control" 
                        id="exampleInputPassword1" 
                        placeholder="Enter password" 
                        onChange={ChangePassword}  
                        value={passwordCheck}
                        />
                    </div>
                    <button type="submit" style={{width:"100%"}} class="btn btn-danger" >Submit</button>
                    </form>
                    <Link to="/" style={{width:"100%"}}  className="btn btn-primary">Back</Link>
                </div>
            </div>
        </div>
        </div>
    )
}
