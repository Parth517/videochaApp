const socket =io('/')

const myPeer=new Peer(undefined,{
    host:'/',
    port:'3001'
})
//use peer js
socket.emit('join-room',Room_Id,10)

socket.on('user-connected',userId=>{
    console.log('User Connected'+ userId);
})