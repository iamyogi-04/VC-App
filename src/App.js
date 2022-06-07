import './App.css';
import Join from './components/Join';
import { selectIsConnectedToRoom, useHMSActions, useHMSStore } from '@100mslive/react-sdk';
import Room from './components/Room';
const endPoint =
  "https://prod-in.100ms.live/hmsapi/workshop9jul.app.100ms.live/";

const getToken = async (user_id) => {
  const response = await fetch(`${endPoint}api/token`, {
    method: "POST",
    body: JSON.stringify({
      user_id,
      role: "host", 
      type: "app",
      room_id: "629deeeb2630221c75a3d516"
    })
  });
  const { token } = await response.json();
  return token;
};

function App() {
  const hmsActions= useHMSActions()
  const connected= useHMSStore(selectIsConnectedToRoom)
  const handleSubmit= async (userName)=>{
    const token = await getToken(userName)
    hmsActions.join({authToken: token,userName})
}
  return (
    <>
      {connected?<Room/>:<Join handleSubmit={handleSubmit}/>}
    </>
  );
}

export default App;
