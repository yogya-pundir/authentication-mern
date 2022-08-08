import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
const Welcome = () => {
    const params = useParams();

    const id = params.id
    // const [username,setUsername] = useState("");
    const userName = useSelector((state) => state.auth.username);
    console.log('username',userName);
    // useEffect( () =>{
    //     fetch("http://localhost:8000/user/" +id).then(result => {
    //         if (result.status == 200) {
    //             const data = result.json();
          
    //             data.then((resp) => {
    //               console.log(resp);
    //               setUsername(resp.username);
    //             });
    //           }
    //     });
      
          
    // },[id])

   
    
    return (
        <div>
            <h3>welcome {userName}</h3>
        </div>
    )
}

export default Welcome