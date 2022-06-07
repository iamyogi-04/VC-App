import React from 'react'
import {useHMSStore,selectLocalPeer,selectPeers} from "@100mslive/hms-video-react";
import VideoTile from './VideoTile';

const Room = () => {
    const localPeer= useHMSStore(selectLocalPeer)
  return (
    <>
    <div className="conatiner fluid">
        {localPeer && <VideoTile peer={localPeer} isLocal={true} />}
    </div>
    </>
  )
}

export default Room