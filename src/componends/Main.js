import React,{useState , useEffect} from 'react';
import firebase from '../Database/firebase';
import { Link  , Redirect } from 'react-router-dom';

export default function Main() {
    
    const [checkLogin , setChecklogin] = useState(false);
    const [idlist , setIdlist] = useState();

    const [loginID , setLoginID] = useState();
    const [loginPassword , setLoginPassword] = useState();

    useEffect(() =>{
        //components มีการ Renderครั้งแรกจะดึงข้อมูลมาจาก Firebase
        const ID = firebase.database().ref('ID');

        // listen every time data change in todo ref
        
        ID.on('value', (snapshot)=>{
            const IDs = snapshot.val();
            const idlist = [];
            //loop เอาข้อมูล
            for (let id in IDs){
                idlist.push({id,...IDs[id]})
            }
            
            //เอาค่าที่ดึงมาเก็บไว้ในตัวแปร
            setIdlist(idlist)
        })
        
    },[]) // [] รันครั้งแรก เท่านั้นไม่ใส่จะรันตลอด
    const ChangeloginID = (e) => {
        setLoginID(e.target.value);  
    }
    const ChangeloginPassword= (e) => {
        setLoginPassword(e.target.value);  
    }

    const onLogin = (e) => {
        e.preventDefault();

        idlist.map(function(data){
                if (data.username === loginID && data.password === loginPassword){
                    console.log("มีข้อมูลผ่าน");
                    setChecklogin(true)
                }
            }
        );
        
        //setChecklogin(true)
    }
    if (checkLogin){
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
                    <form>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="username">
                        Username:
                        </label>
                        <input
                        type="text"
                        className="form-control"
                        placeholder="Enter username"
                        onChange={ChangeloginID} 
                        value={loginID}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="password">
                        Password:
                        </label>
                        <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        onChange={ChangeloginPassword} 
                        value={loginPassword}
                        />
                    </div>
                    <button onClick={onLogin} style={{width:"100%"}}  class="btn btn-danger">
                        Login
                    </button>
                    <Link to="/signup" style={{width:"100%"}}  class="btn btn-primary">Register</Link>
                    </form>
                    
                </div>
            </div>

        </div>
        </div>
    )
}
