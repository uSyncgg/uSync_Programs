// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import {useNavigate} from 'react-router-dom';
// import {useSelector} from 'react-redux';

// async function CodTourneys() {
    // const navigate = useNavigate();

    // const {tournament} = useSelector((state) => state.auth);

    // useEffect(() => {
    //     navigate('/tournaments')
    // }, [tournament, navigate]);

    // return (
    //     <div>CodTourneys</div>
    // );

  //  try {
 //       const tourneys = await axios.get('/tournaments');
  //      console.log(tourneys);
  //  } catch (error) {
   //     console.log(error);
  //  }
// }

// const CodTourneys = () => {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             const result = await axios('/api/data');
//             setData(result.data);
//         };
//         fetchData();
//     }, []);

//     return (
//         <div>
//             {data.map((item) => (
//                 <div key={item._id}>
//                     <p>Date: {item.date}</p>
//                     <p>Time: {item.time}</p>
//                     <p>Title: {item.title}</p>
//                     <p>Entry: {item.entry}</p>
//                     <p>Size: {item.size}</p>
//                     <p>Platforms: {item.platforms}</p>
//                     <p>Gamemode: {item.gamemode}</p>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default CodTourneys;