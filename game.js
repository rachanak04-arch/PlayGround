import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.161.0/build/three.module.js';
const canvas=document.querySelector('#game'),minimap=document.querySelector('#minimap');
const renderer=new THREE.WebGLRenderer({canvas,antialias:false});renderer.setPixelRatio(Math.min(devicePixelRatio,1.25));renderer.setSize(innerWidth,innerHeight,false);renderer.shadowMap.enabled=false;renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.12;
const scene=new THREE.Scene();scene.background=new THREE.Color(0x91abb3);scene.fog=new THREE.FogExp2(0x849da4,.0036);
const camera=new THREE.PerspectiveCamera(54,innerWidth/innerHeight,.1,1100);camera.position.set(0,7,13);
scene.add(new THREE.HemisphereLight(0xb7e6ed,0x26373e,1.3));const moon=new THREE.DirectionalLight(0xffe6c1,2.1);moon.position.set(-80,120,40);moon.castShadow=true;moon.shadow.mapSize.set(1024,1024);moon.shadow.camera.left=-55;moon.shadow.camera.right=55;moon.shadow.camera.top=75;moon.shadow.camera.bottom=-50;scene.add(moon);
const mat=(color,rough=.8,metal=0)=>new THREE.MeshStandardMaterial({color,roughness:rough,metalness:metal});
const mats={asphalt:mat(0x202c31),concrete:mat(0x596062),dark:mat(0x11191c),white:mat(0xb5c3c0),yellow:mat(0xd19c45),glass:new THREE.MeshStandardMaterial({color:0x264955,metalness:.65,roughness:.22}),car:mat(0xc4322f,.32,.5),rubber:mat(0x101416),lamp:new THREE.MeshStandardMaterial({color:0x76ffff,emissive:0x30dce8,emissiveIntensity:2.4}),warm:new THREE.MeshStandardMaterial({color:0xffb95c,emissive:0xff861f,emissiveIntensity:1.6})};
const boxGeo=new THREE.BoxGeometry(1,1,1);function cube(parent,name,pos,scale,material,cast=false){const o=new THREE.Mesh(boxGeo,material);o.name=name;o.position.set(...pos);o.scale.set(...scale);o.castShadow=cast;o.receiveShadow=true;parent.add(o);return o}
cube(scene,'boulevard',[0,-.17,-250],[30,.34,620],mats.asphalt);cube(scene,'left sidewalk',[-16,.02,-250],[2,.45,620],mats.concrete);cube(scene,'right sidewalk',[16,.02,-250],[2,.45,620],mats.concrete);
for(const x of [-14.75,14.75])cube(scene,'curb',[x,.16,-250],[.28,.35,620],mat(0xabb1a8));for(let z=-555;z<80;z+=12)cube(scene,'lane dash',[0,.012,z],[.16,.025,6],mats.yellow);for(const x of [-8.7,8.7])cube(scene,'lane line',[x,.012,-250],[.1,.025,620],mat(0x76807d));
for(const z of [-45,-125,-210,-300,-390,-480]){cube(scene,'cross street',[0,-.08,z],[175,.25,15],mats.asphalt);for(let i=-5;i<=5;i++)cube(scene,'crosswalk',[i*1.35,.055,z-6.1],[.63,.045,2.2],mats.white);for(const x of [-13.4,13.4])cube(scene,'cross curb',[x,.05,z],[1,.3,15],mats.concrete)}
let seed=1892;const rand=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296};const buildingMats=[0x35434a,0x42484a,0x3e4e53,0x4c4a48,0x33474e,0x454d50].map(c=>mat(c,.75));const winMats=[new THREE.MeshStandardMaterial({color:0x31464b,emissive:0x152b30,emissiveIntensity:.3}),new THREE.MeshStandardMaterial({color:0xffc475,emissive:0xf29343,emissiveIntensity:.65}),new THREE.MeshStandardMaterial({color:0x7ae7e6,emissive:0x29b9c3,emissiveIntensity:.55})];const buildings=[];
const windowInstances=winMats.map(material=>{const mesh=new THREE.InstancedMesh(boxGeo,material,14000);mesh.count=0;mesh.instanceMatrix.setUsage(THREE.StaticDrawUsage);mesh.frustumCulled=false;scene.add(mesh);return mesh});const windowCounts=[0,0,0],windowTransform=new THREE.Object3D();
for(const side of [-1,1])for(let row=0;row<17;row++){const z=-row*34-2+(rand()-.5)*8,x=side*(21+rand()*5),w=11+rand()*12,d=19+rand()*12,h=14+rand()*54,g=new THREE.Group();g.position.set(x,0,z);scene.add(g);buildings.push(g);cube(g,'building',[0,h/2,0],[w,h,d],buildingMats[Math.floor(rand()*buildingMats.length)]);cube(g,'roofline',[0,h+.25,0],[w+.35,.5,d+.35],mat(0x222e32));const fx=-side*(w/2+.03),rows=Math.floor(h/3.3),cols=Math.max(2,Math.floor(d/3.4));for(let r=1;r<rows;r++)for(let c=0;c<cols;c++){const wz=-d/2+1.6+c*(d-3.2)/Math.max(1,cols-1),type=rand()<.12?1:rand()<.16?2:0,index=windowCounts[type]++;windowTransform.position.set(x+fx,r*3.1-h/2,z+wz);windowTransform.scale.set(.08,1.15,1.45);windowTransform.updateMatrix();windowInstances[type].setMatrixAt(index,windowTransform.matrix)}if(row%3===0)cube(g,'awning',[fx+side*.35,2.6,0],[.85,.22,d*.72],row%2?mats.warm:mats.lamp)}
windowInstances.forEach((mesh,index)=>{mesh.count=windowCounts[index];mesh.instanceMatrix.needsUpdate=true});
for(let z=-560;z<35;z+=28)for(const side of [-1,1]){const x=side*12.7;cube(scene,'lamp post',[x,3,z],[.13,6,.13],mats.dark);cube(scene,'neon lamp',[x-side*.45,6.1,z],[.8,.18,.28],mats.lamp);if(z%56===0){cube(scene,'tree trunk',[side*18,.9,z-7],[.45,1.8,.45],mat(0x40342c));const crown=new THREE.Mesh(new THREE.IcosahedronGeometry(1.7,1),mat(0x27483e));crown.position.set(side*18,2.8,z-7);crown.castShadow=true;scene.add(crown)}}
for(const side of [-1,1])for(let i=0;i<9;i++){const h=35+rand()*80,x=side*(70+rand()*90),z=-230-rand()*350;cube(scene,'distant tower',[x,h/2,z],[12+rand()*15,h,15+rand()*18],mat(0x34464b))}
const sign=new THREE.Group();sign.position.set(0,12,-92);scene.add(sign);cube(sign,'sign board',[0,0,0],[22,4,.65],mat(0x13292e));cube(sign,'sign glow',[0,0,.38],[20,.12,.08],mats.lamp);const signLight=new THREE.PointLight(0x32dce5,16,48);signLight.position.set(0,12,-88);scene.add(signLight);
// Hand-built player coupe: layered body, cabin, glass, wheels, lamps and spoilers.
const car=new THREE.Group();car.position.set(0,0,0);scene.add(car);
const body=new THREE.Group();body.position.y=.2;car.add(body);
cube(body,'coupe chassis',[0,.48,0],[2.05,.55,4.35],mats.car,true);
cube(body,'hood',[0,.83,-1.25],[1.92,.22,1.55],mats.car,true);
cube(body,'front splitter',[0,.24,-2.14],[2.1,.13,.34],mats.dark);
cube(body,'roof',[0,1.36,.1],[1.62,.65,1.82],mats.car,true);
cube(body,'windshield',[0,1.34,-.81],[1.53,.47,.12],mats.glass);
cube(body,'rear glass',[0,1.34,1.04],[1.51,.42,.12],mats.glass);
for(const x of [-.79,.79])cube(body,'side window',[x,1.34,.1],[.08,.42,1.5],mats.glass);
cube(body,'rear wing',[0,1.35,1.86],[2.15,.09,.3],mats.dark);
cube(body,'rear wing support',[0,1.14,1.78],[.12,.4,.12],mats.dark);
for(const x of [-.74,.74]){
 cube(body,'headlight',[x,.73,-2.2],[.46,.19,.09],mats.lamp);
 cube(body,'tail light',[x,.72,2.2],[.53,.16,.08],mats.warm);
 const wheel=new THREE.Mesh(new THREE.CylinderGeometry(.42,.42,.28,18),mats.rubber);wheel.rotation.z=Math.PI/2;wheel.position.set(x*1.17,.37,[-1.42,1.42][x>0?1:0]);wheel.castShadow=true;body.add(wheel);
 const hub=new THREE.Mesh(new THREE.CylinderGeometry(.19,.19,.3,12),mat(0x788589,.3,.8));hub.rotation.z=Math.PI/2;hub.position.copy(wheel.position);body.add(hub);
}
// Headlights stay emissive for a bright look without per-pixel spotlight cost on phones.
// Orange glowing dragon egg pickup and floating waypoint ring.
const goalZ=-315;const goal=new THREE.Group();goal.position.set(0,0,goalZ);scene.add(goal);
const ring=new THREE.Mesh(new THREE.TorusGeometry(2.35,.11,10,48),new THREE.MeshBasicMaterial({color:0xffc266}));ring.position.y=1.35;goal.add(ring);
const egg=new THREE.Mesh(new THREE.SphereGeometry(.65,22,18),new THREE.MeshStandardMaterial({color:0xffa43a,emissive:0x9b3d0a,emissiveIntensity:1.15,roughness:.24,metalness:.2}));egg.scale.set(.73,1.1,.72);egg.position.set(0,1.3,0);egg.castShadow=true;goal.add(egg);

const beam=new THREE.Mesh(new THREE.CylinderGeometry(.14,.55,17,18,1,true),new THREE.MeshBasicMaterial({color:0xffb959,transparent:true,opacity:.08,side:THREE.DoubleSide,depthWrite:false}));beam.position.y=10;goal.add(beam);

// Buildings frame a readable, walled street space.
// State + input
const keys=new Set(),pressed={left:false,right:false,gas:false,brake:false,boost:false};let speed=0,velocity=0,steer=0,boost=100,rep=8,paused=false,complete=false,hasPickup=false,last=performance.now(),worldTime=0,toastTimer=0,collisionCooldown=0;
const player={x:0,z:0};const goalScreen={x:0,y:0};
function showToast(text){const el=document.querySelector('#toast');el.textContent=text;el.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('show'),2100)}
function setPaused(value){paused=value;document.querySelector('#paused').classList.toggle('show',value)}
function resetRide(){player.x=0;player.z=0;speed=0;velocity=0;steer=0;camera.position.set(0,7,13);showToast('RIDE RESET · STAY ON THE AVENUE')}
function startMission(){complete=false;hasPickup=false;player.x=0;player.z=0;speed=0;boost=100;goal.position.z=goalZ;goal.visible=true;document.querySelector('#complete').classList.remove('show');document.querySelector('#mission-title').textContent='THE NIGHT COURIER';document.querySelector('#mission-copy').textContent='Pick up the dragon egg. The city is yours.';document.querySelector('#target-name').textContent='EMBER MARKET';document.querySelector('#district-label').textContent='NIGHT DRIVE';showToast('NEW CONTRACT · THE NIGHT COURIER')}
function bindButton(button,control){const down=e=>{e.preventDefault();pressed[control]=true;button.classList.add('active');try{button.setPointerCapture(e.pointerId)}catch{}};const up=e=>{e.preventDefault();pressed[control]=false;button.classList.remove('active')};button.addEventListener('pointerdown',down);button.addEventListener('pointerup',up);button.addEventListener('pointercancel',up);button.addEventListener('lostpointercapture',up)}
document.querySelectorAll('[data-control]').forEach(button=>bindButton(button,button.dataset.control));
window.addEventListener('keydown',e=>{const key=e.key.toLowerCase();keys.add(key);if(['arrowup','arrowdown','arrowleft','arrowright',' '].includes(key))e.preventDefault();if(key==='escape')setPaused(!paused);if(key==='r')resetRide()});window.addEventListener('keyup',e=>keys.delete(e.key.toLowerCase()));
document.querySelector('#pause-btn').onclick=()=>setPaused(true);document.querySelector('#resume-btn').onclick=()=>setPaused(false);document.querySelector('#continue-btn').onclick=()=>startMission();
let soundOn=true,ac=null;document.querySelector('#sound-btn').onclick=()=>{soundOn=!soundOn;document.querySelector('#sound-icon').textContent=soundOn?'♪':'×';if(soundOn)showToast('AUDIO ON');else showToast('AUDIO OFF')};
function sound(freq,dur,type='sine',vol=.025){if(!soundOn)return;try{ac??=new AudioContext();const o=ac.createOscillator(),g=ac.createGain();o.type=type;o.frequency.value=freq;g.gain.setValueAtTime(vol,ac.currentTime);g.gain.exponentialRampToValueAtTime(.001,ac.currentTime+dur);o.connect(g);g.connect(ac.destination);o.start();o.stop(ac.currentTime+dur)}catch{}}
// Screen sizing: scene stays landscape-aware while controls remain touch friendly.
function resize(){const w=innerWidth,h=innerHeight,pixelRatio=Math.min(devicePixelRatio,w<650?1:1.1);renderer.setPixelRatio(pixelRatio);renderer.setSize(w,h,false);camera.aspect=w/h;camera.fov=w<650?62:54;camera.updateProjectionMatrix()}addEventListener('resize',resize);resize();
function clamp(v,a,b){return Math.max(a,Math.min(b,v))}
const arc=document.querySelector('#speed-arc');
function updateMinimap(){const ctx=minimap.getContext('2d'),w=minimap.width,h=minimap.height;ctx.clearRect(0,0,w,h);ctx.fillStyle='#0a1c24';ctx.fillRect(0,0,w,h);
 // street grid
 ctx.strokeStyle='rgba(123,171,178,.21)';ctx.lineWidth=7;ctx.beginPath();ctx.moveTo(w*.5,0);ctx.lineTo(w*.5,h);ctx.stroke();
 for(let i=0;i<7;i++){const y=(i*34-worldTime*.05)%(h+20);ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(w,y);ctx.stroke()}
 ctx.strokeStyle='rgba(190,205,192,.28)';ctx.lineWidth=1;for(let x=14;x<w;x+=23){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,h);ctx.stroke()}
 const goalY=clamp(h*.5+(goalZ-player.z)*.18,13,h-13),px=w*.5+player.x*2.7,py=h*.73;
 ctx.beginPath();ctx.setLineDash([3,5]);ctx.strokeStyle='rgba(255,191,98,.72)';ctx.moveTo(px,py);ctx.lineTo(w*.5,goalY);ctx.stroke();ctx.setLineDash([]);
 ctx.beginPath();ctx.fillStyle='#ffbf62';ctx.shadowColor='#ffbf62';ctx.shadowBlur=14;ctx.arc(w*.5,goalY,4.3,0,Math.PI*2);ctx.fill();ctx.shadowBlur=0;
 ctx.save();ctx.translate(px,py);ctx.rotate(steer*.35);ctx.fillStyle='#51e6ed';ctx.shadowColor='#51e6ed';ctx.shadowBlur=10;ctx.beginPath();ctx.moveTo(0,-7);ctx.lineTo(5,6);ctx.lineTo(0,3);ctx.lineTo(-5,6);ctx.closePath();ctx.fill();ctx.restore();
}
let renderT=0;
function frame(now){requestAnimationFrame(frame);const dt=Math.min(.12,(now-last)/1000||.016);last=now;worldTime+=dt*60;
 if(!paused){
  const left=pressed.left||keys.has('a')||keys.has('arrowleft'),right=pressed.right||keys.has('d')||keys.has('arrowright'),gas=pressed.gas||keys.has('w')||keys.has('arrowup'),brake=pressed.brake||keys.has('s')||keys.has('arrowdown'),nitro=pressed.boost||keys.has(' ');
  if(gas)velocity+=17*dt;else velocity-=3.4*dt;if(brake)velocity-=23*dt;
  const boosting=nitro&&boost>0&&velocity>2;if(boosting){velocity+=27*dt;boost=Math.max(0,boost-23*dt);if(Math.random()<.12)sound(115,.08,'sawtooth',.012)}else boost=Math.min(100,boost+8*dt);
  velocity=clamp(velocity,-8,39);if(Math.abs(velocity)<.15)velocity=0;
  const steerInput=(right?1:0)-(left?1:0);steer+=(steerInput-steer)*Math.min(1,dt*7);player.x+=steer*velocity*dt*.29;player.x=clamp(player.x,-11.2,11.2);const previousZ=player.z;player.z-=velocity*dt*.28;
  car.position.set(player.x,0,player.z);car.rotation.y=-steer*clamp(Math.abs(velocity)/22,0,1)*.19;body.rotation.z=-steer*clamp(Math.abs(velocity)/20,0,1)*.065;
  if(Math.abs(player.x)>9.7&&velocity>0){velocity*=.985;if(collisionCooldown<=0){collisionCooldown=.55;showToast('CURB HIT · KEEP IT CLEAN');document.querySelector('#flash').classList.remove('hit');void document.querySelector('#flash').offsetWidth;document.querySelector('#flash').classList.add('hit');sound(90,.12,'square',.04)}}collisionCooldown-=dt;
  // camera tracking and natural chase lag
  const desiredX=player.x*.54,desiredZ=player.z+13.8,desiredY=6.2+Math.min(velocity,32)*.055;
  camera.position.x+=(desiredX-camera.position.x)*Math.min(1,dt*3.1);camera.position.z+=(desiredZ-camera.position.z)*Math.min(1,dt*3.4);camera.position.y+=(desiredY-camera.position.y)*Math.min(1,dt*2.5);camera.lookAt(player.x*.48,1.5,player.z-13.5-Math.max(0,velocity)*.12);
  // city recedes; repeat the designed street in a seamless loop
  if(player.z<-570){player.z=0;car.position.z=0;camera.position.z=13;for(const b of buildings){if(b.position.z<player.z-540)b.position.z+=578}showToast('DISTRICT LOOP · KEEP RUNNING')}
  // Contract pickup: drive within the glowing market marker.
  const remaining=Math.max(0,Math.abs(goalZ-player.z));document.querySelector('#distance').textContent=`${Math.round(remaining)} m`;document.querySelector('#hint-distance').textContent=`${Math.round(remaining)} m`;
  document.querySelector('#progress-fill').style.width=`${hasPickup?100:clamp((1-remaining/Math.abs(goalZ))*100,0,100)}%`;
  const hint=document.querySelector('#direction-hint');hint.classList.toggle('visible',remaining<155&&remaining>14&&!hasPickup);
  goal.rotation.y+=dt*.55;egg.position.y=1.3+Math.sin(worldTime*.06)*.14;ring.rotation.z=Math.sin(worldTime*.02)*.12;
  if(!hasPickup&&(remaining<4.4||(previousZ>goalZ&&player.z<=goalZ))){hasPickup=true;goal.visible=false;rep+=250;document.querySelector('#rep').textContent=String(rep).padStart(3,'0');document.querySelector('#mission-title').textContent='DELIVERY SECURED';document.querySelector('#mission-copy').textContent='A dragon egg. One very interested buyer.';document.querySelector('#target-name').textContent='NIGHT MARKET';document.querySelector('#district-label').textContent='CONTRACT COMPLETE';document.querySelector('#complete-copy').textContent=`Courier run delivered in style · ${Math.round((now-renderT)/1000)} sec`;document.querySelector('#complete').classList.add('show');complete=true;sound(660,.22,'sine',.06);setTimeout(()=>sound(880,.3,'sine',.05),150)}
  document.querySelector('#speed').textContent=String(Math.round(Math.abs(velocity)*4.2)).padStart(3,'0');document.querySelector('#gear').textContent=velocity<0?'R':String(clamp(Math.floor(velocity/8)+1,1,5));arc.style.strokeDashoffset=String(203-(Math.abs(velocity)/39)*203);document.querySelector('#boost-fill').style.width=`${boost}%`;document.querySelector('#boost-label').textContent=boosting?'BURNING':boost<12?'RECHARGING':'READY';document.querySelector('#rep-fill').style.width=`${Math.min(100,22+(rep-8)*.16)}%`;
  const intensity=.6+Math.abs(velocity)/70;renderer.toneMappingExposure=1.04+Math.min(.2,Math.abs(velocity)/170);
 }
 updateMinimap();renderer.render(scene,camera);
}
renderT=performance.now();showToast('NEW CONTRACT · THE NIGHT COURIER');requestAnimationFrame(frame);
