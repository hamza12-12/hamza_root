// Typing Animation
const text="Ultimate Cyber Developer AI • Python • Bots • Security";
let i=0;
function type(){
  if(i<text.length){
    document.getElementById("typing").innerHTML+=text.charAt(i);
    i++;
    setTimeout(type,40);
  }
}
type();

// Terminal
const input=document.getElementById("terminalInput");
const output=document.getElementById("terminalOutput");
input.addEventListener("keydown",function(e){
  if(e.key==="Enter"){
    const cmd=input.value.trim();
    output.innerHTML+="<br>root@hamza:$ "+cmd;
    if(cmd==="help") output.innerHTML+="<br>Commands: about, links, clear";
    else if(cmd==="about") output.innerHTML+="<br>Hamza Root — Developer & AI";
    else if(cmd==="links") output.innerHTML+="<br>Telegram: @Flix1211";
    else if(cmd==="clear") output.innerHTML="";
    else output.innerHTML+="<br>Command not found";
    input.value="";
    output.scrollTop=output.scrollHeight;
  }
});

// Particles background
particlesJS("three-background",{
  particles:{number:{value:120},size:{value:3},move:{speed:3},line_linked:{enable:true}}
});

// Three.js 3D Background
const scene=new THREE.Scene();
const camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
const renderer=new THREE.WebGLRenderer({alpha:true});
renderer.setSize(window.innerWidth,window.innerHeight);
document.getElementById("three-background").appendChild(renderer.domElement);
const geometry=new THREE.BoxGeometry();
const material=new THREE.MeshBasicMaterial({color:0x00ffcc,wireframe:true});
const cube=new THREE.Mesh(geometry,material);
scene.add(cube);
camera.position.z=5;
function animate(){requestAnimationFrame(animate);cube.rotation.x+=0.01;cube.rotation.y+=0.01;renderer.render(scene,camera);}
animate();

// AI Chat
const chatInput=document.getElementById("chatInput");
const chatBox=document.getElementById("chat");
chatInput.addEventListener("keydown",function(e){
  if(e.key==="Enter"){
    const msg=chatInput.value.trim(); if(msg==="") return;
    chatBox.innerHTML+="<br><b>You:</b> "+msg;
    let response="AI: Let me think... 🤖";
    if(msg.toLowerCase().includes("hello")) response="AI: Hello Hamza! How can I assist you today?";
    else if(msg.toLowerCase().includes("github")) response="AI: Your GitHub stats are ready above!";
    else if(msg.toLowerCase().includes("help")) response="AI: Ask me about projects, links, or coding tips!";
    chatBox.innerHTML+="<br>"+response;
    chatInput.value="";
    chatBox.scrollTop=chatBox.scrollHeight;
  }
});