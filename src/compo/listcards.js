import React, { useEffect  } from 'react';
import axios from "axios"
import Itemcard from './Itemcard';
import {useDispatch,useSelector} from 'react-redux'
import { fillData } from '../redux/actions';

function Listcards() {
    const dispatch=useDispatch()
    const url='https://jsonplaceholder.typicode.com/users'
    useEffect(() => {
        axios.get(url).then((response) => {
            dispatch(fillData(response.data));
        }).catch((err)=>console.log(err));
        },[]);
        const userslist = useSelector(state => state.userdata)

    return (
    <div>
        {console.log(userslist)}
        {userslist.map((fakedata)=>{
                return(
                    <Itemcard key={fakedata.id} fakedata={fakedata}/>
                )})}
    </div>);
}

export default Listcards;
