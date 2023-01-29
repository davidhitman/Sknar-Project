
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const snap = document.getElementById('snap');

const constraints = {
    video:true
};

async function init(){
    try{
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        handleSuccess(stream);
    } catch(err){
        alert("Camera error:" + err)
    }
}

function handleSuccess(stream){
    //window.stream = stream;
    video.srcObject = stream;
    video.play()
}

init();

var context = canvas.getContext('2d');
snap.addEventListener("click", function(){
    context.drawImage(video,0,0,300,150);
});