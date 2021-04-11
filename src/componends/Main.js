import React,{useState , useContext} from 'react';
import firebase from '../Database/firebase';
import { AuthContext } from '../Database/Auth';
import { Link  , Redirect } from 'react-router-dom';

export default function Main() {
    
    const [loginID , setLoginID] = useState();
    const [loginPassword , setLoginPassword] = useState();

    const ChangeloginID = (e) => {
        setLoginID(e.target.value);  
    }
    const ChangeloginPassword= (e) => {
        setLoginPassword(e.target.value);  
    }

    const onLogin = (e) => {
        e.preventDefault();

        const { email, password } = e.target.elements;

        try {

            firebase.auth().signInWithEmailAndPassword(email.value, password.value);

        } catch(error) {
            alert(error);
        }  
    }
    //รับสถานะปัจจุบัน
    const { currentUser } = useContext(AuthContext);

    //เมื่อ Login เข้ามา
    if (currentUser) {
        return <Redirect to={{
            pathname: '/diary',
            state: { username : loginID , password : loginPassword }
            }}
        />
    }


    return (
        <div>
            <div className="setcenter">
            <div className="App container border">
                <h1 style={{textAlign:"center"}}>My Diary</h1>
                <img src="https://sv1.picz.in.th/images/2021/04/04/DFRpGg.png" alt="Girl in a jacket" className="centerImage"></img>
                <div className="information">
                    <form onSubmit={onLogin}>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input 
                            type="email" 
                            name="email" 
                            className="form-control" 
                            id="exampleInputEmail1" 
                            placeholder="Enter email"
                            aria-describedby="emailHelp"
                            onChange={ChangeloginID} 
                            value={loginID}
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
                            onChange={ChangeloginPassword} 
                            value={loginPassword}
                            />
                        </div>
                        <button type="submit" style={{width:"100%"}}  class="btn btn-danger">Login</button>
                        <Link to="/signup" style={{width:"100%"}}  class="btn btn-primary">Register</Link>
                    </form>
                </div>
            </div>

        </div>
        </div>
    )
}
