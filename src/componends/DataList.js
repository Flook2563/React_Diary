import React,{useState , useEffect} from 'react';
import Data from '../componends/Data';
import firebase from '../Database/firebase';

export default function DataList({username}) {

    const [dataList , setDataList] = useState();
    const [showData , setShowData] = useState(false);
    const [displayShow , setDisplayShow ] = useState("block");
    const [displayClose , setDisplayClose ] = useState("none");

    useEffect(() =>{
        //components มีการ Renderครั้งแรกจะดึงข้อมูลมาจาก Firebase
        const dataRef = firebase.database().ref('Diary');

        // listen every time data change in todo ref
        
        dataRef.on('value', (snapshot)=>{
            const datas = snapshot.val();
            const dataList = [];
            //loop เอาข้อมูล
            for (let id in datas){
                dataList.push({id,...datas[id]})
            }
            
            //เอาค่าที่ดึงมาเก็บไว้ในตัวแปร
            setDataList(dataList)
        })
        
    },[]) // [] รันครั้งแรก เท่านั้นไม่ใส่จะรันตลอด

    const onShowData = () => {
        setShowData(true);

        setDisplayShow("none")
        setDisplayClose("block")
    }
    const onCloseData = () => {
        setShowData(false);

        setDisplayShow("block")
        setDisplayClose("none")
    }



    return (
        <div>
            <div className="Input">
                <button className="show-btn"style={{width:"100%" , display:displayShow }} onClick={onShowData}>Show Diary</button>
                <button className="show-btn"style={{width:"100%" , display:displayClose}} onClick={onCloseData}>Close Diary</button>
            </div>
            {showData ? dataList
                ? dataList.map((data, index)=> <Data data={data} key={index} username={username} />  )
                : ""
            : ""}
        </div>
    )
}
