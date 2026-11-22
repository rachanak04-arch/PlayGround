(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const ba="187",_c=0,oo=1,xc=2,_i=1,vc=2,Bi=3,Jn=0,Ot=1,nn=2,xi=0,ki=1,lo=2,co=3,ho=4,Mc=5,gi=100,Sc=101,yc=102,Ec=103,bc=104,Tc=200,wc=201,Ac=202,Rc=203,pl=204,ml=205,Cc=206,Pc=207,Lc=208,Dc=209,Ic=210,Nc=211,Uc=212,Fc=213,Oc=214,Nr=0,Ur=1,Fr=2,Xi=3,Or=4,Br=5,zr=6,kr=7,Ta=0,Bc=1,zc=2,dn=0,gl=1,_l=2,xl=3,vl=4,Ml=5,Sl=6,yl=7,El=300,Mi=301,qi=302,ir=303,sr=304,Yi=1e3,Sn=1001,Gr=1002,bt=1003,kc=1004,ss=1005,kt=1006,rr=1007,Nn=1008,Vt=1009,bl=1010,Tl=1011,Ki=1012,wa=1013,fn=1014,cn=1015,pn=1016,Aa=1017,Ra=1018,Si=1020,wl=35902,Al=35899,Rl=1021,Cl=1022,hn=1023,Bn=1026,Un=1027,Pl=1028,Ca=1029,Qn=1030,Pa=1031,La=1033,Ps=33776,Ls=33777,Ds=33778,Is=33779,Hr=35840,Vr=35841,Wr=35842,Xr=35843,qr=36196,Yr=37492,Kr=37496,$r=37488,Zr=37489,zs=37490,Jr=37491,Qr=37808,jr=37809,ea=37810,ta=37811,na=37812,ia=37813,sa=37814,ra=37815,aa=37816,oa=37817,la=37818,ca=37819,ha=37820,da=37821,ua=36492,fa=36494,pa=36495,ma=36283,ga=36284,ks=36285,_a=36286,Gc=3200,xa=0,Hc=1,In="",Rt="srgb",Gs="srgb-linear",Hs="linear",Je="srgb",ar=7680,Vc=519,Wc=512,Xc=513,qc=514,Ll=515,Yc=516,Kc=517,Dl=518,Il=519,Nl=35044,uo="300 es",sn=2e3,$i=2001;function $c(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Vs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Zc(){const i=Vs("canvas");return i.style.display="block",i}const fo={};function Ws(...i){const e="THREE."+i.shift();console.log(e,...i)}function Ul(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Le(...i){i=Ul(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ye(...i){i=Ul(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ns(...i){const e=i.join(" ");e in fo||(fo[e]=!0,Le(...i))}function Jc(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Qc={[Nr]:Nr,[Fr]:zr,[Or]:Or,[Xi]:Br,[Ur]:Ur,[zr]:Fr,[kr]:kr,[Br]:Xi};class jn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let po=1234567;const Gi=Math.PI/180,Zi=180/Math.PI;function Gn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Lt[i&255]+Lt[i>>8&255]+Lt[i>>16&255]+Lt[i>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[t&63|128]+Lt[t>>8&255]+"-"+Lt[t>>16&255]+Lt[t>>24&255]+Lt[n&255]+Lt[n>>8&255]+Lt[n>>16&255]+Lt[n>>24&255]).toLowerCase()}function We(i,e,t){return Math.max(e,Math.min(t,i))}function Da(i,e){return(i%e+e)%e}function jc(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function eh(i,e,t){return i!==e?(t-i)/(e-i):0}function Hi(i,e,t){return(1-t)*i+t*e}function th(i,e,t,n){return Hi(i,e,1-Math.exp(-t*n))}function nh(i,e=1){return e-Math.abs(Da(i,e*2)-e)}function ih(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function sh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function rh(i,e){return i+Math.floor(Math.random()*(e-i+1))}function ah(i,e){return i+Math.random()*(e-i)}function oh(i){return i*(.5-Math.random())}function lh(i){i!==void 0&&(po=i);let e=po+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ch(i){return i*Gi}function hh(i){return i*Zi}function dh(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function uh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Fl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function fh(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),g=r((e-n)/2),p=a((e-n)/2),m=r((n-e)/2),_=a((n-e)/2);switch(s){case"XYX":i.set(o*u,l*g,l*p,o*c);break;case"YZY":i.set(l*p,o*u,l*g,o*c);break;case"ZXZ":i.set(l*g,l*p,o*u,o*c);break;case"XZX":i.set(o*u,l*_,l*m,o*c);break;case"YXY":i.set(l*m,o*u,l*_,o*c);break;case"ZYZ":i.set(l*_,l*m,o*u,o*c);break;default:Le("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ks(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Ia(i,e){if(e.constructor===Float32Array)return i;const t=Ks(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function Na(i,e){if(e.constructor===Float32Array)return i;const t=Ks(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}const mo={DEG2RAD:Gi,RAD2DEG:Zi,generateUUID:Gn,clamp:We,euclideanModulo:Da,mapLinear:jc,inverseLerp:eh,lerp:Hi,damp:th,pingpong:nh,smoothstep:ih,smootherstep:sh,randInt:rh,randFloat:ah,randFloatSpread:oh,seededRandom:lh,degToRad:ch,radToDeg:hh,isPowerOfTwo:dh,ceilPowerOfTwo:uh,floorPowerOfTwo:Fl,setQuaternionFromProperEuler:fh,normalize:Na,denormalize:Ia},qa=class qa{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};qa.prototype.isVector2=!0;let Fe=qa;class bi{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],g=n[s+3],p=r[a+0],m=r[a+1],_=r[a+2],E=r[a+3];if(g!==E||l!==p||c!==m||u!==_){let h=l*p+c*m+u*_+g*E;h<0&&(p=-p,m=-m,_=-_,E=-E,h=-h);let d=1-o;if(h<.9995){const S=Math.acos(h),A=Math.sin(S);d=Math.sin(d*S)/A,o=Math.sin(o*S)/A,l=l*d+p*o,c=c*d+m*o,u=u*d+_*o,g=g*d+E*o}else{l=l*d+p*o,c=c*d+m*o,u=u*d+_*o,g=g*d+E*o;const S=1/Math.sqrt(l*l+c*c+u*u+g*g);l*=S,c*=S,u*=S,g*=S}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=g}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],g=r[a],p=r[a+1],m=r[a+2],_=r[a+3];return e[t]=o*_+u*g+l*m-c*p,e[t+1]=l*_+u*p+c*g-o*m,e[t+2]=c*_+u*m+o*p-l*g,e[t+3]=u*_-o*g-l*p-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),g=o(r/2),p=l(n/2),m=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=p*u*g+c*m*_,this._y=c*m*g-p*u*_,this._z=c*u*_+p*m*g,this._w=c*u*g-p*m*_;break;case"YXZ":this._x=p*u*g+c*m*_,this._y=c*m*g-p*u*_,this._z=c*u*_-p*m*g,this._w=c*u*g+p*m*_;break;case"ZXY":this._x=p*u*g-c*m*_,this._y=c*m*g+p*u*_,this._z=c*u*_+p*m*g,this._w=c*u*g-p*m*_;break;case"ZYX":this._x=p*u*g-c*m*_,this._y=c*m*g+p*u*_,this._z=c*u*_-p*m*g,this._w=c*u*g+p*m*_;break;case"YZX":this._x=p*u*g+c*m*_,this._y=c*m*g+p*u*_,this._z=c*u*_-p*m*g,this._w=c*u*g-p*m*_;break;case"XZY":this._x=p*u*g-c*m*_,this._y=c*m*g-p*u*_,this._z=c*u*_+p*m*g,this._w=c*u*g+p*m*_;break;default:Le("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],g=t[10],p=n+o+g;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>g){const m=2*Math.sqrt(1+n-o-g);this._w=(u-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>g){const m=2*Math.sqrt(1+o-n-g);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+g-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Ya=class Ya{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(go.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(go.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),g=2*(r*n-a*t);return this.x=t+l*c+a*g-o*u,this.y=n+l*u+o*c-r*g,this.z=s+l*g+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return or.copy(this).projectOnVector(e),this.sub(or)}reflect(e){return this.sub(or.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ya.prototype.isVector3=!0;let D=Ya;const or=new D,go=new bi,Ka=class Ka{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],g=n[7],p=n[2],m=n[5],_=n[8],E=s[0],h=s[3],d=s[6],S=s[1],A=s[4],T=s[7],b=s[2],y=s[5],f=s[8];return r[0]=a*E+o*S+l*b,r[3]=a*h+o*A+l*y,r[6]=a*d+o*T+l*f,r[1]=c*E+u*S+g*b,r[4]=c*h+u*A+g*y,r[7]=c*d+u*T+g*f,r[2]=p*E+m*S+_*b,r[5]=p*h+m*A+_*y,r[8]=p*d+m*T+_*f,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],g=u*a-o*c,p=o*l-u*r,m=c*r-a*l,_=t*g+n*p+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/_;return e[0]=g*E,e[1]=(s*c-u*n)*E,e[2]=(o*n-s*a)*E,e[3]=p*E,e[4]=(u*t-s*l)*E,e[5]=(s*r-o*t)*E,e[6]=m*E,e[7]=(n*l-c*t)*E,e[8]=(a*t-n*r)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Ns("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(lr.makeScale(e,t)),this}rotate(e){return Ns("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(lr.makeRotation(-e)),this}translate(e,t){return Ns("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(lr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ka.prototype.isMatrix3=!0;let Ie=Ka;const lr=new Ie,_o=new Ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xo=new Ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ph(){const i={enabled:!0,workingColorSpace:Gs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Je&&(s.r=yn(s.r),s.g=yn(s.g),s.b=yn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Je&&(s.r=vi(s.r),s.g=vi(s.g),s.b=vi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===In?Hs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Gs]:{primaries:e,whitePoint:n,transfer:Hs,toXYZ:_o,fromXYZ:xo,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Rt},outputColorSpaceConfig:{drawingBufferColorSpace:Rt}},[Rt]:{primaries:e,whitePoint:n,transfer:Je,toXYZ:_o,fromXYZ:xo,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Rt}}}),i}const Xe=ph();function yn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function vi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ei;class mh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ei===void 0&&(ei=Vs("canvas")),ei.width=e.width,ei.height=e.height;const s=ei.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=ei}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Vs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=yn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(yn(t[n]/255)*255):t[n]=yn(t[n]);return{data:t,width:e.width,height:e.height}}else return Le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let gh=0;class Ua{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:gh++}),this.uuid=Gn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(cr(s[a].image)):r.push(cr(s[a]))}else r=cr(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function cr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?mh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Le("Texture: Unable to serialize Texture."),{})}let _h=0;const hr=new D;class It extends jn{constructor(e=It.DEFAULT_IMAGE,t=It.DEFAULT_MAPPING,n=Sn,s=Sn,r=kt,a=Nn,o=hn,l=Vt,c=It.DEFAULT_ANISOTROPY,u=In){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_h++}),this.uuid=Gn(),this.name="",this.source=new Ua(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(hr).x}get height(){return this.source.getSize(hr).y}get depth(){return this.source.getSize(hr).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Le(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Le(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==El)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yi:e.x=e.x-Math.floor(e.x);break;case Sn:e.x=e.x<0?0:1;break;case Gr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yi:e.y=e.y-Math.floor(e.y);break;case Sn:e.y=e.y<0?0:1;break;case Gr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=El;It.DEFAULT_ANISOTROPY=1;const $a=class $a{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],g=l[8],p=l[1],m=l[5],_=l[9],E=l[2],h=l[6],d=l[10];if(Math.abs(u-p)<.01&&Math.abs(g-E)<.01&&Math.abs(_-h)<.01){if(Math.abs(u+p)<.1&&Math.abs(g+E)<.1&&Math.abs(_+h)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(c+1)/2,T=(m+1)/2,b=(d+1)/2,y=(u+p)/4,f=(g+E)/4,M=(_+h)/4;return A>T&&A>b?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=y/n,r=f/n):T>b?T<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),n=y/s,r=M/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=f/r,s=M/r),this.set(n,s,r,t),this}let S=Math.sqrt((h-_)*(h-_)+(g-E)*(g-E)+(p-u)*(p-u));return Math.abs(S)<.001&&(S=1),this.x=(h-_)/S,this.y=(g-E)/S,this.z=(p-u)/S,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this.w=We(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this.w=We(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};$a.prototype.isVector4=!0;let ct=$a;class xh extends jn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t),this.textures=[];const s=n.count;for(let r=0;r<s;r++)this.textures[r]=new It({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ua(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class un extends xh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ol extends It{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=bt,this.minFilter=bt,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class vh extends It{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=bt,this.minFilter=bt,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Ys=class Ys{constructor(e,t,n,s,r,a,o,l,c,u,g,p,m,_,E,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,g,p,m,_,E,h)}set(e,t,n,s,r,a,o,l,c,u,g,p,m,_,E,h){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=g,d[14]=p,d[3]=m,d[7]=_,d[11]=E,d[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ys().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/ti.setFromMatrixColumn(e,0).length(),r=1/ti.setFromMatrixColumn(e,1).length(),a=1/ti.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),g=Math.sin(r);if(e.order==="XYZ"){const p=a*u,m=a*g,_=o*u,E=o*g;t[0]=l*u,t[4]=-l*g,t[8]=c,t[1]=m+_*c,t[5]=p-E*c,t[9]=-o*l,t[2]=E-p*c,t[6]=_+m*c,t[10]=a*l}else if(e.order==="YXZ"){const p=l*u,m=l*g,_=c*u,E=c*g;t[0]=p+E*o,t[4]=_*o-m,t[8]=a*c,t[1]=a*g,t[5]=a*u,t[9]=-o,t[2]=m*o-_,t[6]=E+p*o,t[10]=a*l}else if(e.order==="ZXY"){const p=l*u,m=l*g,_=c*u,E=c*g;t[0]=p-E*o,t[4]=-a*g,t[8]=_+m*o,t[1]=m+_*o,t[5]=a*u,t[9]=E-p*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const p=a*u,m=a*g,_=o*u,E=o*g;t[0]=l*u,t[4]=_*c-m,t[8]=p*c+E,t[1]=l*g,t[5]=E*c+p,t[9]=m*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const p=a*l,m=a*c,_=o*l,E=o*c;t[0]=l*u,t[4]=E-p*g,t[8]=_*g+m,t[1]=g,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*g+_,t[10]=p-E*g}else if(e.order==="XZY"){const p=a*l,m=a*c,_=o*l,E=o*c;t[0]=l*u,t[4]=-g,t[8]=c*u,t[1]=p*g+E,t[5]=a*u,t[9]=m*g-_,t[2]=_*g-m,t[6]=o*u,t[10]=E*g+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mh,e,Sh)}lookAt(e,t,n){const s=this.elements;return Gt.subVectors(e,t),Gt.lengthSq()===0&&(Gt.z=1),Gt.normalize(),wn.crossVectors(n,Gt),wn.lengthSq()===0&&(Math.abs(n.z)===1?Gt.x+=1e-4:Gt.z+=1e-4,Gt.normalize(),wn.crossVectors(n,Gt)),wn.normalize(),rs.crossVectors(Gt,wn),s[0]=wn.x,s[4]=rs.x,s[8]=Gt.x,s[1]=wn.y,s[5]=rs.y,s[9]=Gt.y,s[2]=wn.z,s[6]=rs.z,s[10]=Gt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],g=n[5],p=n[9],m=n[13],_=n[2],E=n[6],h=n[10],d=n[14],S=n[3],A=n[7],T=n[11],b=n[15],y=s[0],f=s[4],M=s[8],I=s[12],C=s[1],N=s[5],F=s[9],V=s[13],P=s[2],G=s[6],Y=s[10],k=s[14],ee=s[3],W=s[7],Q=s[11],j=s[15];return r[0]=a*y+o*C+l*P+c*ee,r[4]=a*f+o*N+l*G+c*W,r[8]=a*M+o*F+l*Y+c*Q,r[12]=a*I+o*V+l*k+c*j,r[1]=u*y+g*C+p*P+m*ee,r[5]=u*f+g*N+p*G+m*W,r[9]=u*M+g*F+p*Y+m*Q,r[13]=u*I+g*V+p*k+m*j,r[2]=_*y+E*C+h*P+d*ee,r[6]=_*f+E*N+h*G+d*W,r[10]=_*M+E*F+h*Y+d*Q,r[14]=_*I+E*V+h*k+d*j,r[3]=S*y+A*C+T*P+b*ee,r[7]=S*f+A*N+T*G+b*W,r[11]=S*M+A*F+T*Y+b*Q,r[15]=S*I+A*V+T*k+b*j,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],g=e[6],p=e[10],m=e[14],_=e[3],E=e[7],h=e[11],d=e[15],S=l*m-c*p,A=o*m-c*g,T=o*p-l*g,b=a*m-c*u,y=a*p-l*u,f=a*g-o*u;return t*(E*S-h*A+d*T)-n*(_*S-h*b+d*y)+s*(_*A-E*b+d*f)-r*(_*T-E*y+h*f)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],g=e[9],p=e[10],m=e[11],_=e[12],E=e[13],h=e[14],d=e[15],S=t*o-n*a,A=t*l-s*a,T=t*c-r*a,b=n*l-s*o,y=n*c-r*o,f=s*c-r*l,M=u*E-g*_,I=u*h-p*_,C=u*d-m*_,N=g*h-p*E,F=g*d-m*E,V=p*d-m*h,P=S*V-A*F+T*N+b*C-y*I+f*M;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/P;return e[0]=(o*V-l*F+c*N)*G,e[1]=(s*F-n*V-r*N)*G,e[2]=(E*f-h*y+d*b)*G,e[3]=(p*y-g*f-m*b)*G,e[4]=(l*C-a*V-c*I)*G,e[5]=(t*V-s*C+r*I)*G,e[6]=(h*T-_*f-d*A)*G,e[7]=(u*f-p*T+m*A)*G,e[8]=(a*F-o*C+c*M)*G,e[9]=(n*C-t*F-r*M)*G,e[10]=(_*y-E*T+d*S)*G,e[11]=(g*T-u*y-m*S)*G,e[12]=(o*I-a*N-l*M)*G,e[13]=(t*N-n*I+s*M)*G,e[14]=(E*A-_*b-h*S)*G,e[15]=(u*b-g*A+p*S)*G,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,g=o+o,p=r*c,m=r*u,_=r*g,E=a*u,h=a*g,d=o*g,S=l*c,A=l*u,T=l*g,b=n.x,y=n.y,f=n.z;return s[0]=(1-(E+d))*b,s[1]=(m+T)*b,s[2]=(_-A)*b,s[3]=0,s[4]=(m-T)*y,s[5]=(1-(p+d))*y,s[6]=(h+S)*y,s[7]=0,s[8]=(_+A)*f,s[9]=(h-S)*f,s[10]=(1-(p+E))*f,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=ti.set(s[0],s[1],s[2]).length();const o=ti.set(s[4],s[5],s[6]).length(),l=ti.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Qt.copy(this);const c=1/a,u=1/o,g=1/l;return Qt.elements[0]*=c,Qt.elements[1]*=c,Qt.elements[2]*=c,Qt.elements[4]*=u,Qt.elements[5]*=u,Qt.elements[6]*=u,Qt.elements[8]*=g,Qt.elements[9]*=g,Qt.elements[10]*=g,t.setFromRotationMatrix(Qt),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=sn,l=!1){const c=this.elements,u=2*r/(t-e),g=2*r/(n-s),p=(t+e)/(t-e),m=(n+s)/(n-s);let _,E;if(l)_=r/(a-r),E=a*r/(a-r);else if(o===sn)_=-(a+r)/(a-r),E=-2*a*r/(a-r);else if(o===$i)_=-a/(a-r),E=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=g,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=E,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=sn,l=!1){const c=this.elements,u=2/(t-e),g=2/(n-s),p=-(t+e)/(t-e),m=-(n+s)/(n-s);let _,E;if(l)_=1/(a-r),E=a/(a-r);else if(o===sn)_=-2/(a-r),E=-(a+r)/(a-r);else if(o===$i)_=-1/(a-r),E=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=p,c[1]=0,c[5]=g,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=_,c[14]=E,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Ys.prototype.isMatrix4=!0;let it=Ys;const ti=new D,Qt=new it,Mh=new D(0,0,0),Sh=new D(1,1,1),wn=new D,rs=new D,Gt=new D,vo=new it,Mo=new bi;class zn{constructor(e=0,t=0,n=0,s=zn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],g=s[2],p=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-We(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-g,r),this._z=0);break;case"ZXY":this._x=Math.asin(We(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-g,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-We(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-g,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:Le("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return vo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Mo.setFromEuler(this),this.setFromQuaternion(Mo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zn.DEFAULT_ORDER="XYZ";class Fa{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let yh=0;const So=new D,ni=new bi,gn=new it,as=new D,Ci=new D,Eh=new D,bh=new bi,yo=new D(1,0,0),Eo=new D(0,1,0),bo=new D(0,0,1),To={type:"added"},Th={type:"removed"},ii={type:"childadded",child:null},dr={type:"childremoved",child:null};class Tt extends jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yh++}),this.uuid=Gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DEFAULT_UP.clone();const e=new D,t=new zn,n=new bi,s=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new it},normalMatrix:{value:new Ie}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=Tt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ni.setFromAxisAngle(e,t),this.quaternion.multiply(ni),this}rotateOnWorldAxis(e,t){return ni.setFromAxisAngle(e,t),this.quaternion.premultiply(ni),this}rotateX(e){return this.rotateOnAxis(yo,e)}rotateY(e){return this.rotateOnAxis(Eo,e)}rotateZ(e){return this.rotateOnAxis(bo,e)}translateOnAxis(e,t){return So.copy(e).applyQuaternion(this.quaternion),this.position.add(So.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(yo,e)}translateY(e){return this.translateOnAxis(Eo,e)}translateZ(e){return this.translateOnAxis(bo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?as.copy(e):as.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ci.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(Ci,as,this.up):gn.lookAt(as,Ci,this.up),this.quaternion.setFromRotationMatrix(gn),s&&(gn.extractRotation(s.matrixWorld),ni.setFromRotationMatrix(gn),this.quaternion.premultiply(ni.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ye("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(To),ii.child=e,this.dispatchEvent(ii),ii.child=null):Ye("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Th),dr.child=e,this.dispatchEvent(dr),dr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(gn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(To),ii.child=e,this.dispatchEvent(ii),ii.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ci,e,Eh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ci,bh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const g=l[c];r(e.shapes,g)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),g=a(e.shapes),p=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),g.length>0&&(n.shapes=g),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Tt.DEFAULT_UP=new D(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class dt extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wh={type:"move"};class ur{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const E of e.hand.values()){const h=t.getJointPose(E,n),d=this._getHandJoint(c,E);h!==null&&(d.matrix.fromArray(h.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=h.radius),d.visible=h!==null}const u=c.joints["index-finger-tip"],g=c.joints["thumb-tip"],p=u.position.distanceTo(g.position),m=.02,_=.005;c.inputState.pinching&&p>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(wh)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new dt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Bl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},An={h:0,s:0,l:0},os={h:0,s:0,l:0};function fr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Be{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xe.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Xe.workingColorSpace){if(e=Da(e,1),t=We(t,0,1),n=We(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=fr(a,r,e+1/3),this.g=fr(a,r,e),this.b=fr(a,r,e-1/3)}return Xe.colorSpaceToWorking(this,s),this}setStyle(e,t=Rt){function n(r){r!==void 0&&parseFloat(r)<1&&Le("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Le("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Le("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rt){const n=Bl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Le("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yn(e.r),this.g=yn(e.g),this.b=yn(e.b),this}copyLinearToSRGB(e){return this.r=vi(e.r),this.g=vi(e.g),this.b=vi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return Xe.workingToColorSpace(Dt.copy(this),e),Math.round(We(Dt.r*255,0,255))*65536+Math.round(We(Dt.g*255,0,255))*256+Math.round(We(Dt.b*255,0,255))}getHexString(e=Rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.workingToColorSpace(Dt.copy(this),t);const n=Dt.r,s=Dt.g,r=Dt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const g=a-o;switch(c=u<=.5?g/(a+o):g/(2-a-o),a){case n:l=(s-r)/g+(s<r?6:0);break;case s:l=(r-n)/g+2;break;case r:l=(n-s)/g+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Xe.workingColorSpace){return Xe.workingToColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=Rt){Xe.workingToColorSpace(Dt.copy(this),e);const t=Dt.r,n=Dt.g,s=Dt.b;return e!==Rt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(An),this.setHSL(An.h+e,An.s+t,An.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(An),e.getHSL(os);const n=Hi(An.h,os.h,t),s=Hi(An.s,os.s,t),r=Hi(An.l,os.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dt=new Be;Be.NAMES=Bl;class $s{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Be(e),this.near=t,this.far=n}clone(){return new $s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Oa extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const jt=new D,_n=new D,pr=new D,xn=new D,si=new D,ri=new D,wo=new D,mr=new D,gr=new D,_r=new D,xr=new ct,vr=new ct,Mr=new ct;class $t{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),jt.subVectors(e,t),s.cross(jt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){jt.subVectors(s,t),_n.subVectors(n,t),pr.subVectors(e,t);const a=jt.dot(jt),o=jt.dot(_n),l=jt.dot(pr),c=_n.dot(_n),u=_n.dot(pr),g=a*c-o*o;if(g===0)return r.set(0,0,0),null;const p=1/g,m=(c*l-o*u)*p,_=(a*u-o*l)*p;return r.set(1-m-_,_,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,xn)===null?!1:xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,xn.x),l.addScaledVector(a,xn.y),l.addScaledVector(o,xn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return xr.setScalar(0),vr.setScalar(0),Mr.setScalar(0),xr.fromBufferAttribute(e,t),vr.fromBufferAttribute(e,n),Mr.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(xr,r.x),a.addScaledVector(vr,r.y),a.addScaledVector(Mr,r.z),a}static isFrontFacing(e,t,n,s){return jt.subVectors(n,t),_n.subVectors(e,t),jt.cross(_n).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jt.subVectors(this.c,this.b),_n.subVectors(this.a,this.b),jt.cross(_n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return $t.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return $t.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return $t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;si.subVectors(s,n),ri.subVectors(r,n),mr.subVectors(e,n);const l=si.dot(mr),c=ri.dot(mr);if(l<=0&&c<=0)return t.copy(n);gr.subVectors(e,s);const u=si.dot(gr),g=ri.dot(gr);if(u>=0&&g<=u)return t.copy(s);const p=l*g-u*c;if(p<=0&&l>=0&&u<=0&&l-u>0)return a=l/(l-u),t.copy(n).addScaledVector(si,a);_r.subVectors(e,r);const m=si.dot(_r),_=ri.dot(_r);if(_>=0&&m<=_)return t.copy(r);const E=m*c-l*_;if(E<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(ri,o);const h=u*_-m*g;if(h<=0&&g-u>=0&&m-_>=0)return wo.subVectors(r,s),o=(g-u)/(g-u+(m-_)),t.copy(s).addScaledVector(wo,o);const d=1/(h+E+p);return a=E*d,o=p*d,t.copy(n).addScaledVector(si,a).addScaledVector(ri,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ti{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(en.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(en.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=en.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,en):en.fromBufferAttribute(r,a),en.applyMatrix4(e.matrixWorld),this.expandByPoint(en);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ls.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ls.copy(n.boundingBox)),ls.applyMatrix4(e.matrixWorld),this.union(ls)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,en),en.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Pi),cs.subVectors(this.max,Pi),ai.subVectors(e.a,Pi),oi.subVectors(e.b,Pi),li.subVectors(e.c,Pi),Rn.subVectors(oi,ai),Cn.subVectors(li,oi),Xn.subVectors(ai,li);let t=[0,-Rn.z,Rn.y,0,-Cn.z,Cn.y,0,-Xn.z,Xn.y,Rn.z,0,-Rn.x,Cn.z,0,-Cn.x,Xn.z,0,-Xn.x,-Rn.y,Rn.x,0,-Cn.y,Cn.x,0,-Xn.y,Xn.x,0];return!Sr(t,ai,oi,li,cs)||(t=[1,0,0,0,1,0,0,0,1],!Sr(t,ai,oi,li,cs))?!1:(hs.crossVectors(Rn,Cn),t=[hs.x,hs.y,hs.z],Sr(t,ai,oi,li,cs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,en).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(en).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const vn=[new D,new D,new D,new D,new D,new D,new D,new D],en=new D,ls=new Ti,ai=new D,oi=new D,li=new D,Rn=new D,Cn=new D,Xn=new D,Pi=new D,cs=new D,hs=new D,qn=new D;function Sr(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){qn.fromArray(i,r);const o=s.x*Math.abs(qn.x)+s.y*Math.abs(qn.y)+s.z*Math.abs(qn.z),l=e.dot(qn),c=t.dot(qn),u=n.dot(qn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const mt=new D,ds=new Fe;let Ah=0;class On extends jn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ah++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Nl,this.updateRanges=[],this.gpuType=cn,this.version=0,this._normalizationScale=e!==void 0?Ks(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ds.fromBufferAttribute(this,t),ds.applyMatrix3(e),this.setXY(t,ds.x,ds.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix3(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Ia(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Na(e,this.array)}}class zl extends On{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class kl extends On{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ut extends On{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Rh=new Ti,Li=new D,yr=new D;class Ba{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Rh.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Li.subVectors(e,this.center);const t=Li.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Li,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Li.copy(e.center).add(yr)),this.expandByPoint(Li.copy(e.center).sub(yr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Ch=0;const Kt=new it,Er=new Tt,ci=new D,Ht=new Ti,Di=new Ti,Et=new D;class Zt extends jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ch++}),this.uuid=Gn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($c(e)?kl:zl)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ie().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Kt.makeRotationFromQuaternion(e),this.applyMatrix4(Kt),this}rotateX(e){return Kt.makeRotationX(e),this.applyMatrix4(Kt),this}rotateY(e){return Kt.makeRotationY(e),this.applyMatrix4(Kt),this}rotateZ(e){return Kt.makeRotationZ(e),this.applyMatrix4(Kt),this}translate(e,t,n){return Kt.makeTranslation(e,t,n),this.applyMatrix4(Kt),this}scale(e,t,n){return Kt.makeScale(e,t,n),this.applyMatrix4(Kt),this}lookAt(e){return Er.lookAt(e),Er.updateMatrix(),this.applyMatrix4(Er.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ci).negate(),this.translate(ci.x,ci.y,ci.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ut(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ti);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Ht.setFromBufferAttribute(r),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,Ht.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,Ht.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(Ht.min),this.boundingBox.expandByPoint(Ht.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ye('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ba);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(Ht.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Di.setFromBufferAttribute(o),this.morphTargetsRelative?(Et.addVectors(Ht.min,Di.min),Ht.expandByPoint(Et),Et.addVectors(Ht.max,Di.max),Ht.expandByPoint(Et)):(Ht.expandByPoint(Di.min),Ht.expandByPoint(Di.max))}Ht.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Et.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Et));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Et.fromBufferAttribute(o,c),l&&(ci.fromBufferAttribute(e,c),Et.add(ci)),s=Math.max(s,n.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ye('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ye("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new On(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(n.count);for(let I=0;I<n.count;I++)o[I]=new D,l[I]=new D;const u=new D,g=new D,p=new D,m=new Fe,_=new Fe,E=new Fe,h=new D,d=new D;function S(I,C,N){c[I]=c[C]=c[N]=1,u.fromBufferAttribute(n,I),g.fromBufferAttribute(n,C),p.fromBufferAttribute(n,N),m.fromBufferAttribute(r,I),_.fromBufferAttribute(r,C),E.fromBufferAttribute(r,N),g.sub(u),p.sub(u),_.sub(m),E.sub(m);const F=1/(_.x*E.y-E.x*_.y);isFinite(F)&&(h.copy(g).multiplyScalar(E.y).addScaledVector(p,-_.y).multiplyScalar(F),d.copy(p).multiplyScalar(_.x).addScaledVector(g,-E.x).multiplyScalar(F),o[I].add(h),o[C].add(h),o[N].add(h),l[I].add(d),l[C].add(d),l[N].add(d))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let I=0,C=A.length;I<C;++I){const N=A[I],F=N.start,V=N.count;for(let P=F,G=F+V;P<G;P+=3)S(e.getX(P+0),e.getX(P+1),e.getX(P+2))}const T=new D,b=new D,y=new D,f=new D;function M(I){y.fromBufferAttribute(s,I),f.copy(y);const C=o[I];T.copy(C),T.sub(y.multiplyScalar(y.dot(C))).normalize(),b.crossVectors(f,C);const F=b.dot(l[I])<0?-1:1;a.setXYZW(I,T.x,T.y,T.z,F)}for(let I=0,C=n.count;I<C;++I)c[I]&&M(I);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new On(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);const s=new D,r=new D,a=new D,o=new D,l=new D,c=new D,u=new D,g=new D;if(e)for(let p=0,m=e.count;p<m;p+=3){const _=e.getX(p+0),E=e.getX(p+1),h=e.getX(p+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,E),a.fromBufferAttribute(t,h),u.subVectors(a,r),g.subVectors(s,r),u.cross(g),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,E),c.fromBufferAttribute(n,h),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(E,l.x,l.y,l.z),n.setXYZ(h,c.x,c.y,c.z)}else for(let p=0,m=t.count;p<m;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),u.subVectors(a,r),g.subVectors(s,r),u.cross(g),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,g=o.normalized,p=new c.constructor(l.length*u);let m=0,_=0;for(let E=0,h=l.length;E<h;E++){o.isInterleavedBufferAttribute?m=l[E]*o.data.stride+o.offset:m=l[E]*u;for(let d=0;d<u;d++)p[_++]=c[m++]}return new On(p,u,g)}if(this.index===null)return Le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Zt,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,g=c.length;u<g;u++){const p=c[u],m=e(p,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let g=0,p=c.length;g<p;g++){const m=c[g];u.push(m.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],g=r[c];for(let p=0,m=g.length;p<m;p++)u.push(g[p].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const g=a[c];this.addGroup(g.start,g.count,g.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ph{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Nl,this.updateRanges=[],this.version=0,this.uuid=Gn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=Ao(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=Ao(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}}function Ao(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=Gn()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}const Ut=new D;class Xs{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?Ks(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ws("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new On(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Xs(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ws("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Ia(e,this.data.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Na(e,this.data.array)}}const br=new D,Lh=new D,Dh=new Ie;class Dn{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=br.subVectors(n,t).cross(Lh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(br),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Dh.getNormalMatrix(e),s=this.coplanarPoint(br).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Ih=0;class wi extends jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ih++}),this.uuid=Gn(),this.name="",this.type="Material",this.blending=ki,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pl,this.blendDst=ml,this.blendEquation=gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=Xi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ar,this.stencilZFail=ar,this.stencilZPass=ar,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Le(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Le(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Be().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Dn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Fe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Fe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class za extends wi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let hi;const Ii=new D,di=new D,ui=new D,fi=new Fe,Ni=new Fe,Gl=new it,us=new D,Ui=new D,fs=new D,Ro=new Fe,Tr=new Fe,Co=new Fe;class Hl extends Tt{constructor(e=new za){if(super(),this.isSprite=!0,this.type="Sprite",hi===void 0){hi=new Zt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ph(t,5);hi.setIndex([0,1,2,0,2,3]),hi.setAttribute("position",new Xs(n,3,0,!1)),hi.setAttribute("uv",new Xs(n,2,3,!1))}this.geometry=hi,this.material=e,this.center=new Fe(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ye('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),di.setFromMatrixScale(this.matrixWorld),Gl.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ui.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&di.multiplyScalar(-ui.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;ps(us.set(-.5,-.5,0),ui,a,di,s,r),ps(Ui.set(.5,-.5,0),ui,a,di,s,r),ps(fs.set(.5,.5,0),ui,a,di,s,r),Ro.set(0,0),Tr.set(1,0),Co.set(1,1);let o=e.ray.intersectTriangle(us,Ui,fs,!1,Ii);if(o===null&&(ps(Ui.set(-.5,.5,0),ui,a,di,s,r),Tr.set(0,1),o=e.ray.intersectTriangle(us,fs,Ui,!1,Ii),o===null))return;const l=e.ray.origin.distanceTo(Ii);l<e.near||l>e.far||t.push({distance:l,point:Ii.clone(),uv:$t.getInterpolation(Ii,us,Ui,fs,Ro,Tr,Co,new Fe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){const t=super.toJSON(e);return t.object.center=this.center.toArray(),t}}function ps(i,e,t,n,s,r){fi.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Ni.x=r*fi.x-s*fi.y,Ni.y=s*fi.x+r*fi.y):Ni.copy(fi),i.copy(e),i.x+=Ni.x,i.y+=Ni.y,i.applyMatrix4(Gl)}const Mn=new D,wr=new D,ms=new D,gs=new D;class Vl{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Mn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mn.copy(this.origin).addScaledVector(this.direction,t),Mn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){wr.copy(e).add(t).multiplyScalar(.5),ms.copy(t).sub(e).normalize(),gs.copy(this.origin).sub(wr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(ms),o=gs.dot(this.direction),l=-gs.dot(ms),c=gs.lengthSq(),u=Math.abs(1-a*a);let g,p,m,_;if(u>0)if(g=a*l-o,p=a*o-l,_=r*u,g>=0)if(p>=-_)if(p<=_){const E=1/u;g*=E,p*=E,m=g*(g+a*p+2*o)+p*(a*g+p+2*l)+c}else p=r,g=Math.max(0,-(a*p+o)),m=-g*g+p*(p+2*l)+c;else p=-r,g=Math.max(0,-(a*p+o)),m=-g*g+p*(p+2*l)+c;else p<=-_?(g=Math.max(0,-(-a*r+o)),p=g>0?-r:Math.min(Math.max(-r,-l),r),m=-g*g+p*(p+2*l)+c):p<=_?(g=0,p=Math.min(Math.max(-r,-l),r),m=p*(p+2*l)+c):(g=Math.max(0,-(a*r+o)),p=g>0?r:Math.min(Math.max(-r,-l),r),m=-g*g+p*(p+2*l)+c);else p=a>0?-r:r,g=Math.max(0,-(a*p+o)),m=-g*g+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(wr).addScaledVector(ms,p),m}intersectSphere(e,t){if(e.radius<0)return null;Mn.subVectors(e.center,this.origin);const n=Mn.dot(this.direction),s=Mn.dot(Mn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,g=1/this.direction.z,p=this.origin;return c>=0?(n=(e.min.x-p.x)*c,s=(e.max.x-p.x)*c):(n=(e.max.x-p.x)*c,s=(e.min.x-p.x)*c),u>=0?(r=(e.min.y-p.y)*u,a=(e.max.y-p.y)*u):(r=(e.max.y-p.y)*u,a=(e.min.y-p.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),g>=0?(o=(e.min.z-p.z)*g,l=(e.max.z-p.z)*g):(o=(e.max.z-p.z)*g,l=(e.min.z-p.z)*g),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Mn)!==null}intersectTriangle(e,t,n,s,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,g=e.x-a.x,p=e.y-a.y,m=e.z-a.z,_=t.x-a.x,E=t.y-a.y,h=t.z-a.z,d=n.x-a.x,S=n.y-a.y,A=n.z-a.z,T=Math.abs(l),b=Math.abs(c),y=Math.abs(u);let f,M,I,C,N,F,V,P,G,Y,k,ee;if(T>=b&&T>=y?(I=l,F=g,G=_,ee=d,l>=0?(f=c,M=u,C=p,N=m,V=E,P=h,Y=S,k=A):(f=u,M=c,C=m,N=p,V=h,P=E,Y=A,k=S)):b>=y?(I=c,F=p,G=E,ee=S,c>=0?(f=u,M=l,C=m,N=g,V=h,P=_,Y=A,k=d):(f=l,M=u,C=g,N=m,V=_,P=h,Y=d,k=A)):(I=u,F=m,G=h,ee=A,u>=0?(f=l,M=c,C=g,N=p,V=_,P=E,Y=d,k=S):(f=c,M=l,C=p,N=g,V=E,P=_,Y=S,k=d)),I===0)return null;const W=f/I,Q=M/I,j=1/I,ve=C-W*F,Pe=N-Q*F,$=V-W*G,pe=P-Q*G,Me=Y-W*ee,Ae=k-Q*ee,me=Me*pe-Ae*$,Ue=ve*Ae-Pe*Me,ft=$*Pe-pe*ve;if(s){if(me<0||Ue<0||ft<0)return null}else if((me<0||Ue<0||ft<0)&&(me>0||Ue>0||ft>0))return null;const Ce=me+Ue+ft;if(Ce===0)return null;const $e=j*(me*F+Ue*G+ft*ee);return(Ce>0?$e<0:$e>0)?null:this.at($e/Ce,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $n extends wi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=Ta,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Po=new it,Yn=new Vl,_s=new Ba,Lo=new D,xs=new D,vs=new D,Ms=new D,Ar=new D,Ss=new D,Do=new D,ys=new D;class nt extends Tt{constructor(e=new Zt,t=new $n){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Ss.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],g=r[l];u!==0&&(Ar.fromBufferAttribute(g,e),a?Ss.addScaledVector(Ar,u):Ss.addScaledVector(Ar.sub(t),u))}t.add(Ss)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_s.copy(n.boundingSphere),_s.applyMatrix4(r),Yn.copy(e.ray).recast(e.near),!(_s.containsPoint(Yn.origin)===!1&&(Yn.intersectSphere(_s,Lo)===null||Yn.origin.distanceToSquared(Lo)>(e.far-e.near)**2))&&(Po.copy(r).invert(),Yn.copy(e.ray).applyMatrix4(Po),!(n.boundingBox!==null&&Yn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Yn)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,g=r.attributes.normal,p=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,E=p.length;_<E;_++){const h=p[_],d=a[h.materialIndex],S=Math.max(h.start,m.start),A=Math.min(o.count,Math.min(h.start+h.count,m.start+m.count));for(let T=S,b=A;T<b;T+=3){const y=o.getX(T),f=o.getX(T+1),M=o.getX(T+2);s=Es(this,d,e,n,c,u,g,y,f,M),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=h.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),E=Math.min(o.count,m.start+m.count);for(let h=_,d=E;h<d;h+=3){const S=o.getX(h),A=o.getX(h+1),T=o.getX(h+2);s=Es(this,a,e,n,c,u,g,S,A,T),s&&(s.faceIndex=Math.floor(h/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,E=p.length;_<E;_++){const h=p[_],d=a[h.materialIndex],S=Math.max(h.start,m.start),A=Math.min(l.count,Math.min(h.start+h.count,m.start+m.count));for(let T=S,b=A;T<b;T+=3){const y=T,f=T+1,M=T+2;s=Es(this,d,e,n,c,u,g,y,f,M),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=h.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),E=Math.min(l.count,m.start+m.count);for(let h=_,d=E;h<d;h+=3){const S=h,A=h+1,T=h+2;s=Es(this,a,e,n,c,u,g,S,A,T),s&&(s.faceIndex=Math.floor(h/3),t.push(s))}}}}function Nh(i,e,t,n,s,r,a,o){let l;if(e.side===Ot?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Jn,o),l===null)return null;ys.copy(o),ys.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ys);return c<t.near||c>t.far?null:{distance:c,point:ys.clone(),object:i}}function Es(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,xs),i.getVertexPosition(l,vs),i.getVertexPosition(c,Ms);const u=Nh(i,e,t,n,xs,vs,Ms,Do);if(u){const g=new D;$t.getBarycoord(Do,xs,vs,Ms,g),s&&(u.uv=$t.getInterpolatedAttribute(s,o,l,c,g,new Fe)),r&&(u.uv1=$t.getInterpolatedAttribute(r,o,l,c,g,new Fe)),a&&(u.normal=$t.getInterpolatedAttribute(a,o,l,c,g,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const p={a:o,b:l,c,normal:new D,materialIndex:0};$t.getNormal(xs,vs,Ms,p.normal),u.face=p,u.barycoord=g}return u}class Uh extends It{constructor(e=null,t=1,n=1,s,r,a,o,l,c=bt,u=bt,g,p){super(null,a,o,l,c,u,s,r,g,p),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Kn=new Ba,Fh=new Fe(.5,.5),bs=new D;class Ji{constructor(e=new Dn,t=new Dn,n=new Dn,s=new Dn,r=new Dn,a=new Dn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=sn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],g=r[5],p=r[6],m=r[7],_=r[8],E=r[9],h=r[10],d=r[11],S=r[12],A=r[13],T=r[14],b=r[15];if(s[0].setComponents(c-a,m-u,d-_,b-S).normalize(),s[1].setComponents(c+a,m+u,d+_,b+S).normalize(),s[2].setComponents(c+o,m+g,d+E,b+A).normalize(),s[3].setComponents(c-o,m-g,d-E,b-A).normalize(),n)s[4].setComponents(l,p,h,T).normalize(),s[5].setComponents(c-l,m-p,d-h,b-T).normalize();else if(s[4].setComponents(c-l,m-p,d-h,b-T).normalize(),t===sn)s[5].setComponents(c+l,m+p,d+h,b+T).normalize();else if(t===$i)s[5].setComponents(l,p,h,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Kn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Kn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Kn)}intersectsSprite(e){Kn.center.set(0,0,0);const t=Fh.distanceTo(e.center);return Kn.radius=.7071067811865476+t,Kn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Kn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(bs.x=s.normal.x>0?e.max.x:e.min.x,bs.y=s.normal.y>0?e.max.y:e.min.y,bs.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(bs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Io=new it;class ka{constructor(){this.coordinateSystem=sn,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){const r=t[s];Io.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Ji),n[s].setFromProjectionMatrix(Io,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Ji),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new ka().copy(this)}}class Wl extends It{constructor(e=[],t=Mi,n,s,r,a,o,l,c,u){super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Zs extends It{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class yi extends It{constructor(e,t,n=fn,s,r,a,o=bt,l=bt,c,u=Bn,g=1){if(u!==Bn&&u!==Un)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:e,height:t,depth:g};super(p,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ua(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Xl extends yi{constructor(e,t=fn,n=Mi,s,r,a=bt,o=bt,l,c=Bn){const u={width:e,height:e,depth:1},g=[u,u,u,u,u,u];super(e,e,t,n,s,r,a,o,l,c),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ql extends It{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class En extends Zt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],g=[];let p=0,m=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,s,a,2),_("x","z","y",1,-1,e,n,-t,s,a,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ut(c,3)),this.setAttribute("normal",new ut(u,3)),this.setAttribute("uv",new ut(g,2));function _(E,h,d,S,A,T,b,y,f,M,I){const C=T/f,N=b/M,F=T/2,V=b/2,P=y/2,G=f+1,Y=M+1;let k=0,ee=0;const W=new D;for(let Q=0;Q<Y;Q++){const j=Q*N-V;for(let ve=0;ve<G;ve++){const Pe=ve*C-F;W[E]=Pe*S,W[h]=j*A,W[d]=P,c.push(W.x,W.y,W.z),W[E]=0,W[h]=0,W[d]=y>0?1:-1,u.push(W.x,W.y,W.z),g.push(ve/f),g.push(1-Q/M),k+=1}}for(let Q=0;Q<M;Q++)for(let j=0;j<f;j++){const ve=p+j+G*Q,Pe=p+j+G*(Q+1),$=p+(j+1)+G*(Q+1),pe=p+(j+1)+G*Q;l.push(ve,Pe,pe),l.push(Pe,$,pe),ee+=6}o.addGroup(m,ee,I),m+=ee,p+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new En(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Js extends Zt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],g=[],p=[],m=[];let _=0;const E=[],h=n/2;let d=0;S(),a===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(u),this.setAttribute("position",new ut(g,3)),this.setAttribute("normal",new ut(p,3)),this.setAttribute("uv",new ut(m,2));function S(){const T=new D,b=new D;let y=0;const f=(t-e)/n;for(let M=0;M<=r;M++){const I=[],C=M/r,N=C*(t-e)+e;for(let F=0;F<=s;F++){const V=F/s,P=V*l+o,G=Math.sin(P),Y=Math.cos(P);b.x=N*G,b.y=-C*n+h,b.z=N*Y,g.push(b.x,b.y,b.z),T.set(G,f,Y).normalize(),p.push(T.x,T.y,T.z),m.push(V,1-C),I.push(_++)}E.push(I)}for(let M=0;M<s;M++)for(let I=0;I<r;I++){const C=E[I][M],N=E[I+1][M],F=E[I+1][M+1],V=E[I][M+1];(e>0||I!==0)&&(u.push(C,N,V),y+=3),(t>0||I!==r-1)&&(u.push(N,F,V),y+=3)}c.addGroup(d,y,0),d+=y}function A(T){const b=_,y=new Fe,f=new D;let M=0;const I=T===!0?e:t,C=T===!0?1:-1;for(let F=1;F<=s;F++)g.push(0,h*C,0),p.push(0,C,0),m.push(.5,.5),_++;const N=_;for(let F=0;F<=s;F++){const P=F/s*l+o,G=Math.cos(P),Y=Math.sin(P);f.x=I*Y,f.y=h*C,f.z=I*G,g.push(f.x,f.y,f.z),p.push(0,C,0),y.x=G*.5+.5,y.y=Y*.5*C+.5,m.push(y.x,y.y),_++}for(let F=0;F<s;F++){const V=b+F,P=N+F;T===!0?u.push(P,P+1,V):u.push(P+1,P,V),M+=3}c.addGroup(d,M,T===!0?1:2),d+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Js(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Qi extends Zt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,g=e/o,p=t/l,m=[],_=[],E=[],h=[];for(let d=0;d<u;d++){const S=d*p-a;for(let A=0;A<c;A++){const T=A*g-r;_.push(T,-S,0),E.push(0,0,1),h.push(A/o),h.push(1-d/l)}}for(let d=0;d<l;d++)for(let S=0;S<o;S++){const A=S+c*d,T=S+c*(d+1),b=S+1+c*(d+1),y=S+1+c*d;m.push(A,T,y),m.push(T,b,y)}this.setIndex(m),this.setAttribute("position",new ut(_,3)),this.setAttribute("normal",new ut(E,3)),this.setAttribute("uv",new ut(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qi(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ga extends Zt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],u=[];let g=e;const p=(t-e)/s,m=new D,_=new Fe;for(let E=0;E<=s;E++){for(let h=0;h<=n;h++){const d=r+h/n*a;m.x=g*Math.cos(d),m.y=g*Math.sin(d),l.push(m.x,m.y,m.z),c.push(0,0,1),_.x=(m.x/t+1)/2,_.y=(m.y/t+1)/2,u.push(_.x,_.y)}g+=p}for(let E=0;E<s;E++){const h=E*(n+1);for(let d=0;d<n;d++){const S=d+h,A=S,T=S+n+1,b=S+n+2,y=S+1;o.push(A,T,y),o.push(T,b,y)}}this.setIndex(o),this.setAttribute("position",new ut(l,3)),this.setAttribute("normal",new ut(c,3)),this.setAttribute("uv",new ut(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ga(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ji extends Zt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],g=new D,p=new D,m=[],_=[],E=[],h=[];for(let d=0;d<=n;d++){const S=[],A=d/n,T=a+A*o,b=e*Math.cos(T),y=Math.sqrt(e*e-b*b);let f=0;d===0&&a===0?f=.5/t:d===n&&l===Math.PI&&(f=-.5/t);for(let M=0;M<=t;M++){const I=M/t,C=s+I*r;g.x=-y*Math.cos(C),g.y=b,g.z=y*Math.sin(C),_.push(g.x,g.y,g.z),p.copy(g).normalize(),E.push(p.x,p.y,p.z),h.push(I+f,1-A),S.push(c++)}u.push(S)}for(let d=0;d<n;d++)for(let S=0;S<t;S++){const A=u[d][S+1],T=u[d][S],b=u[d+1][S],y=u[d+1][S+1];(d!==0||a>0)&&m.push(A,T,y),(d!==n-1||l<Math.PI)&&m.push(T,b,y)}this.setIndex(m),this.setAttribute("position",new ut(_,3)),this.setAttribute("normal",new ut(E,3)),this.setAttribute("uv",new ut(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ji(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class es extends Zt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);const l=[],c=[],u=[],g=[],p=new D,m=new D,_=new D;for(let E=0;E<=n;E++){const h=a+E/n*o;for(let d=0;d<=s;d++){const S=d/s*r;m.x=(e+t*Math.cos(h))*Math.cos(S),m.y=(e+t*Math.cos(h))*Math.sin(S),m.z=t*Math.sin(h),c.push(m.x,m.y,m.z),p.x=e*Math.cos(S),p.y=e*Math.sin(S),_.subVectors(m,p).normalize(),u.push(_.x,_.y,_.z),g.push(d/s),g.push(E/n)}}for(let E=1;E<=n;E++)for(let h=1;h<=s;h++){const d=(s+1)*E+h-1,S=(s+1)*(E-1)+h-1,A=(s+1)*(E-1)+h,T=(s+1)*E+h;l.push(d,S,T),l.push(S,A,T)}this.setIndex(l),this.setAttribute("position",new ut(c,3)),this.setAttribute("normal",new ut(u,3)),this.setAttribute("uv",new ut(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new es(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function Ei(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(No(s))s.isRenderTargetTexture?(Le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(No(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Ft(i){const e={};for(let t=0;t<i.length;t++){const n=Ei(i[t]);for(const s in n)e[s]=n[s]}return e}function No(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Oh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Yl(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const Bh={clone:Ei,merge:Ft};var zh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kn extends wi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zh,this.fragmentShader=kh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ei(e.uniforms),this.uniformsGroups=Oh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Be().setHex(s.value);break;case"v2":this.uniforms[n].value=new Fe().fromArray(s.value);break;case"v3":this.uniforms[n].value=new D().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ct().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ie().fromArray(s.value);break;case"m4":this.uniforms[n].value=new it().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Gh extends kn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ha extends wi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xa,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=Ta,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Hh extends wi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Vh extends wi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Qs extends Tt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Va extends Qs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Rr=new it,Uo=new D,Fo=new D;class Kl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.mapType=Vt,this.map=null,this.mapPass=null,this.matrix=new it,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ji,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Uo.setFromMatrixPosition(e.matrixWorld),t.position.copy(Uo),Fo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fo),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Rr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Rr,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===$i||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Rr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ts=new D,ws=new bi,an=new D;class $l extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it,this.coordinateSystem=sn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ts,ws,an),an.x===1&&an.y===1&&an.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ts,ws,an.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ts,ws,an),an.x===1&&an.y===1&&an.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ts,ws,an.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Pn=new D,Oo=new Fe,Bo=new Fe;class zt extends $l{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Zi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Gi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zi*2*Math.atan(Math.tan(Gi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Pn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Pn.x,Pn.y).multiplyScalar(-e/Pn.z),Pn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pn.x,Pn.y).multiplyScalar(-e/Pn.z)}getViewSize(e,t){return this.getViewBounds(e,Oo,Bo),t.subVectors(Bo,Oo)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Gi*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Wh extends Kl{constructor(){super(new zt(90,1,.5,500)),this.isPointLightShadow=!0}}class Us extends Qs{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Wh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Zl extends $l{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Xh extends Kl{constructor(){super(new Zl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Wa extends Qs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.shadow=new Xh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class qh extends Qs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const pi=-90,mi=1;class va extends Tt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new zt(pi,mi,e,t);s.layers=this.layers,this.add(s);const r=new zt(pi,mi,e,t);r.layers=this.layers,this.add(r);const a=new zt(pi,mi,e,t);a.layers=this.layers,this.add(a);const o=new zt(pi,mi,e,t);o.layers=this.layers,this.add(o);const l=new zt(pi,mi,e,t);l.layers=this.layers,this.add(l);const c=new zt(pi,mi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===sn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===$i)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,g=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const E=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let h=!1;e.isWebGLRenderer===!0?h=e.state.buffers.depth.getReversed():h=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=E,e.setRenderTarget(n,5,s),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(g,p,m),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Yh extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}const zo=new it;class Kh{constructor(e,t,n=0,s=1/0){this.ray=new Vl(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Fa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ye("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return zo.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zo),this}intersectObject(e,t=!0,n=[]){return Ma(e,this,n,t),n.sort(ko),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Ma(e[s],this,n,t);return n.sort(ko),n}}function ko(i,e){return i.distance-e.distance}function Ma(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)Ma(r[a],e,t,!0)}}function Go(i,e,t,n){const s=$h(n);switch(t){case Rl:return i*e;case Pl:return i*e/s.components*s.byteLength;case Ca:return i*e/s.components*s.byteLength;case Qn:return i*e*2/s.components*s.byteLength;case Pa:return i*e*2/s.components*s.byteLength;case Cl:return i*e*3/s.components*s.byteLength;case hn:return i*e*4/s.components*s.byteLength;case La:return i*e*4/s.components*s.byteLength;case Ps:case Ls:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ds:case Is:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Vr:case Xr:return Math.max(i,16)*Math.max(e,8)/4;case Hr:case Wr:return Math.max(i,8)*Math.max(e,8)/2;case qr:case Yr:case $r:case Zr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Kr:case zs:case Jr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Qr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case jr:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ea:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ta:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case na:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ia:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case sa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ra:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case aa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case oa:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case la:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ca:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ha:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case da:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ua:case fa:case pa:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ma:case ga:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ks:case _a:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function $h(i){switch(i){case Vt:case bl:return{byteLength:1,components:1};case Ki:case Tl:case pn:return{byteLength:2,components:1};case Aa:case Ra:return{byteLength:2,components:4};case fn:case wa:case cn:return{byteLength:4,components:1};case wl:case Al:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ba}}));typeof window<"u"&&(window.__THREE__?Le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ba);function Jl(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Zh(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,g=c.byteLength,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:g}}function n(o,l,c){const u=l.array,g=l.updateRanges;if(i.bindBuffer(c,o),g.length===0)i.bufferSubData(c,0,u);else{g.sort((m,_)=>m.start-_.start);let p=0;for(let m=1;m<g.length;m++){const _=g[p],E=g[m];E.start<=_.start+_.count+1?_.count=Math.max(_.count,E.start+E.count-_.start):(++p,g[p]=E)}g.length=p+1;for(let m=0,_=g.length;m<_;m++){const E=g[m];i.bufferSubData(c,E.start*u.BYTES_PER_ELEMENT,u,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Jh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,jh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ed=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,td=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,id=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,sd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,ad=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,od=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ld=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,hd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,dd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ud=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,fd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,md=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,_d=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,xd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,vd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Md=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Sd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,yd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ed=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Td=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ad=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Cd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Pd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ld=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Id=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ud=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Od=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Bd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Hd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Vd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Kd=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$d=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Zd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Jd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qd=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,jd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,eu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,iu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,su=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ru=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,au=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ou=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hu=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,du=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uu=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,fu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,mu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_u=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,vu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Mu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Su=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Eu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,wu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Au=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ru=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Du=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Iu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Nu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Uu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Fu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ou=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Bu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ku=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Xu=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,qu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Yu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ku=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$u=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Zu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ju=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ju=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ef=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,sf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,rf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,af=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,of=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,df=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,uf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ff=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,gf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_f=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,yf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ef=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,wf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Af=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Pf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ke={alphahash_fragment:Jh,alphahash_pars_fragment:Qh,alphamap_fragment:jh,alphamap_pars_fragment:ed,alphatest_fragment:td,alphatest_pars_fragment:nd,aomap_fragment:id,aomap_pars_fragment:sd,batching_pars_vertex:rd,batching_vertex:ad,begin_vertex:od,beginnormal_vertex:ld,bsdfs:cd,iridescence_fragment:hd,bumpmap_pars_fragment:dd,clipping_planes_fragment:ud,clipping_planes_pars_fragment:fd,clipping_planes_pars_vertex:pd,clipping_planes_vertex:md,color_fragment:gd,color_pars_fragment:_d,color_pars_vertex:xd,color_vertex:vd,common:Md,defaultnormal_vertex:Sd,displacementmap_pars_vertex:yd,displacementmap_vertex:Ed,emissivemap_fragment:bd,emissivemap_pars_fragment:Td,colorspace_fragment:wd,colorspace_pars_fragment:Ad,envmap_fragment:Rd,envmap_common_pars_fragment:Cd,envmap_pars_fragment:Pd,envmap_pars_vertex:Ld,envmap_physical_pars_fragment:Hd,envmap_vertex:Dd,fog_vertex:Id,fog_pars_vertex:Nd,fog_fragment:Ud,fog_pars_fragment:Fd,gradientmap_pars_fragment:Od,lightmap_pars_fragment:Bd,lights_lambert_fragment:zd,lights_lambert_pars_fragment:kd,lights_pars_begin:Gd,lights_toon_fragment:Vd,lights_toon_pars_fragment:Wd,lights_phong_fragment:Xd,lights_phong_pars_fragment:qd,lights_physical_fragment:Yd,lights_physical_pars_fragment:Kd,lights_fragment_begin:$d,lights_fragment_maps:Zd,lights_fragment_end:Jd,lightprobes_pars_fragment:Qd,logdepthbuf_fragment:jd,logdepthbuf_pars_fragment:eu,logdepthbuf_pars_vertex:tu,logdepthbuf_vertex:nu,map_fragment:iu,map_pars_fragment:su,map_particle_fragment:ru,map_particle_pars_fragment:au,metalnessmap_fragment:ou,metalnessmap_pars_fragment:lu,morphinstance_vertex:cu,morphcolor_vertex:hu,morphnormal_vertex:du,morphtarget_pars_vertex:uu,morphtarget_vertex:fu,normal_fragment_begin:pu,normal_fragment_maps:mu,normal_pars_fragment:gu,normal_pars_vertex:_u,normal_vertex:xu,normalmap_pars_fragment:vu,clearcoat_normal_fragment_begin:Mu,clearcoat_normal_fragment_maps:Su,clearcoat_pars_fragment:yu,iridescence_pars_fragment:Eu,opaque_fragment:bu,packing:Tu,premultiplied_alpha_fragment:wu,project_vertex:Au,dithering_fragment:Ru,dithering_pars_fragment:Cu,roughnessmap_fragment:Pu,roughnessmap_pars_fragment:Lu,shadowmap_pars_fragment:Du,shadowmap_pars_vertex:Iu,shadowmap_vertex:Nu,shadowmask_pars_fragment:Uu,skinbase_vertex:Fu,skinning_pars_vertex:Ou,skinning_vertex:Bu,skinnormal_vertex:zu,specularmap_fragment:ku,specularmap_pars_fragment:Gu,tonemapping_fragment:Hu,tonemapping_pars_fragment:Vu,transmission_fragment:Wu,transmission_pars_fragment:Xu,uv_pars_fragment:qu,uv_pars_vertex:Yu,uv_vertex:Ku,worldpos_vertex:$u,background_vert:Zu,background_frag:Ju,backgroundCube_vert:Qu,backgroundCube_frag:ju,cube_vert:ef,cube_frag:tf,depth_vert:nf,depth_frag:sf,distance_vert:rf,distance_frag:af,equirect_vert:of,equirect_frag:lf,linedashed_vert:cf,linedashed_frag:hf,meshbasic_vert:df,meshbasic_frag:uf,meshlambert_vert:ff,meshlambert_frag:pf,meshmatcap_vert:mf,meshmatcap_frag:gf,meshnormal_vert:_f,meshnormal_frag:xf,meshphong_vert:vf,meshphong_frag:Mf,meshphysical_vert:Sf,meshphysical_frag:yf,meshtoon_vert:Ef,meshtoon_frag:bf,points_vert:Tf,points_frag:wf,shadow_vert:Af,shadow_frag:Rf,sprite_vert:Cf,sprite_frag:Pf},fe={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},ln={basic:{uniforms:Ft([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Ft([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Be(0)},envMapIntensity:{value:1}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Ft([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Ft([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Ft([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Be(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Ft([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Ft([fe.points,fe.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Ft([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Ft([fe.common,fe.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Ft([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Ft([fe.sprite,fe.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distance:{uniforms:Ft([fe.common,fe.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distance_vert,fragmentShader:ke.distance_frag},shadow:{uniforms:Ft([fe.lights,fe.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};ln.physical={uniforms:Ft([ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ie},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const As={r:0,b:0,g:0},Lf=new it,Ql=new Ie;Ql.set(-1,0,0,0,1,0,0,0,1);function Df(i,e,t,n,s,r){const a=new Be(0);let o=s===!0?0:1,l,c,u=null,g=0,p=null;function m(S){let A=S.isScene===!0?S.background:null;if(A&&A.isTexture){const T=S.backgroundBlurriness>0;A=e.get(A,T)}return A}function _(S){let A=!1;const T=m(S);T===null?h(a,o):T&&T.isColor&&(h(T,1),A=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function E(S,A){const T=m(A);T&&T.isCubeTexture?(c===void 0&&(c=new nt(new En(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:Ei(ln.backgroundCube.uniforms),vertexShader:ln.backgroundCube.vertexShader,fragmentShader:ln.backgroundCube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,y,f){this.matrixWorld.copyPosition(f.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=T,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Lf.makeRotationFromEuler(A.backgroundRotation)).transpose(),T.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ql),c.material.toneMapped=Xe.getTransfer(T.colorSpace)!==Je,(u!==T||g!==T.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=T,g=T.version,p=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new nt(new Qi(2,2),new kn({name:"BackgroundMaterial",uniforms:Ei(ln.background.uniforms),vertexShader:ln.background.vertexShader,fragmentShader:ln.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=Xe.getTransfer(T.colorSpace)!==Je,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||g!==T.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=T,g=T.version,p=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function h(S,A){S.getRGB(As,Yl(i)),t.buffers.color.setClear(As.r,As.g,As.b,A,r)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,A=1){a.set(S),o=A,h(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,h(a,o)},render:_,addToRenderList:E,dispose:d}}function If(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null);let r=s,a=!1;function o(N,F,V,P,G){let Y=!1;const k=g(N,P,V,F);r!==k&&(r=k,c(r.object)),Y=m(N,P,V,G),Y&&_(N,P,V,G),G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,T(N,F,V,P),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return i.createVertexArray()}function c(N){return i.bindVertexArray(N)}function u(N){return i.deleteVertexArray(N)}function g(N,F,V,P){const G=P.wireframe===!0;let Y=n[F.id];Y===void 0&&(Y={},n[F.id]=Y);const k=N.isInstancedMesh===!0?N.id:0;let ee=Y[k];ee===void 0&&(ee={},Y[k]=ee);let W=ee[V.id];W===void 0&&(W={},ee[V.id]=W);let Q=W[G];return Q===void 0&&(Q=p(l()),W[G]=Q),Q}function p(N){const F=[],V=[],P=[];for(let G=0;G<t;G++)F[G]=0,V[G]=0,P[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:V,attributeDivisors:P,object:N,attributes:{},index:null}}function m(N,F,V,P){const G=r.attributes,Y=F.attributes;let k=0;const ee=V.getAttributes();for(const W in ee)if(ee[W].location>=0){const j=G[W];let ve=Y[W];if(ve===void 0&&(W==="instanceMatrix"&&N.instanceMatrix&&(ve=N.instanceMatrix),W==="instanceColor"&&N.instanceColor&&(ve=N.instanceColor)),j===void 0||j.attribute!==ve||ve&&j.data!==ve.data)return!0;k++}return r.attributesNum!==k||r.index!==P}function _(N,F,V,P){const G={},Y=F.attributes;let k=0;const ee=V.getAttributes();for(const W in ee)if(ee[W].location>=0){let j=Y[W];j===void 0&&(W==="instanceMatrix"&&N.instanceMatrix&&(j=N.instanceMatrix),W==="instanceColor"&&N.instanceColor&&(j=N.instanceColor));const ve={};ve.attribute=j,j&&j.data&&(ve.data=j.data),G[W]=ve,k++}r.attributes=G,r.attributesNum=k,r.index=P}function E(){const N=r.newAttributes;for(let F=0,V=N.length;F<V;F++)N[F]=0}function h(N){d(N,0)}function d(N,F){const V=r.newAttributes,P=r.enabledAttributes,G=r.attributeDivisors;V[N]=1,P[N]===0&&(i.enableVertexAttribArray(N),P[N]=1),G[N]!==F&&(i.vertexAttribDivisor(N,F),G[N]=F)}function S(){const N=r.newAttributes,F=r.enabledAttributes;for(let V=0,P=F.length;V<P;V++)F[V]!==N[V]&&(i.disableVertexAttribArray(V),F[V]=0)}function A(N,F,V,P,G,Y,k){k===!0?i.vertexAttribIPointer(N,F,V,G,Y):i.vertexAttribPointer(N,F,V,P,G,Y)}function T(N,F,V,P){E();const G=P.attributes,Y=V.getAttributes(),k=F.defaultAttributeValues;for(const ee in Y){const W=Y[ee];if(W.location>=0){let Q=G[ee];if(Q===void 0&&(ee==="instanceMatrix"&&N.instanceMatrix&&(Q=N.instanceMatrix),ee==="instanceColor"&&N.instanceColor&&(Q=N.instanceColor)),Q!==void 0){const j=Q.normalized,ve=Q.itemSize,Pe=e.get(Q);if(Pe===void 0)continue;const $=Pe.buffer,pe=Pe.type,Me=Pe.bytesPerElement,Ae=pe===i.INT||pe===i.UNSIGNED_INT||Q.gpuType===wa;if(Q.isInterleavedBufferAttribute){const me=Q.data,Ue=me.isInterleavedBuffer===!0?me.stride:me.itemSize,ft=Q.offset;if(me.isInstancedInterleavedBuffer||me.isInstancedBufferAttribute){for(let Ce=0;Ce<W.locationSize;Ce++)d(W.location+Ce,me.meshPerAttribute);N.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Ce=0;Ce<W.locationSize;Ce++)h(W.location+Ce);i.bindBuffer(i.ARRAY_BUFFER,$);for(let Ce=0;Ce<W.locationSize;Ce++)A(W.location+Ce,ve/W.locationSize,pe,j,Ue*Me,(ft+ve/W.locationSize*Ce)*Me,Ae)}else{if(Q.isInstancedBufferAttribute){for(let me=0;me<W.locationSize;me++)d(W.location+me,Q.meshPerAttribute);N.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let me=0;me<W.locationSize;me++)h(W.location+me);i.bindBuffer(i.ARRAY_BUFFER,$);for(let me=0;me<W.locationSize;me++)A(W.location+me,ve/W.locationSize,pe,j,ve*Me,ve/W.locationSize*me*Me,Ae)}}else if(k!==void 0){const j=k[ee];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(W.location,j);break;case 3:i.vertexAttrib3fv(W.location,j);break;case 4:i.vertexAttrib4fv(W.location,j);break;default:i.vertexAttrib1fv(W.location,j)}}}}S()}function b(){I();for(const N in n){const F=n[N];for(const V in F){const P=F[V];for(const G in P){const Y=P[G];for(const k in Y)u(Y[k].object),delete Y[k];delete P[G]}}delete n[N]}}function y(N){if(n[N.id]===void 0)return;const F=n[N.id];for(const V in F){const P=F[V];for(const G in P){const Y=P[G];for(const k in Y)u(Y[k].object),delete Y[k];delete P[G]}}delete n[N.id]}function f(N){for(const F in n){const V=n[F];for(const P in V){const G=V[P];if(G[N.id]===void 0)continue;const Y=G[N.id];for(const k in Y)u(Y[k].object),delete Y[k];delete G[N.id]}}}function M(N){for(const F in n){const V=n[F],P=N.isInstancedMesh===!0?N.id:0,G=V[P];if(G!==void 0){for(const Y in G){const k=G[Y];for(const ee in k)u(k[ee].object),delete k[ee];delete G[Y]}delete V[P],Object.keys(V).length===0&&delete n[F]}}}function I(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:C,dispose:b,releaseStatesOfGeometry:y,releaseStatesOfObject:M,releaseStatesOfProgram:f,initAttributes:E,enableAttribute:h,disableUnusedAttributes:S}}function Nf(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let p=0;for(let m=0;m<u;m++)p+=c[m];t.update(p,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Uf(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const f=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(f.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(f){return!(f!==hn&&n.convert(f)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(f){const M=f===pn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(f!==Vt&&f!==cn&&!M&&n.convert(f)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(f){if(f==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";f="mediump"}return f==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Le("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.logarithmicDepthBuffer===!0&&g===!1;t.reversedDepthBuffer===!0&&g===!1&&Le("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&g===!0&&Le("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_TEXTURE_SIZE),h=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),y=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:g,maxTextures:m,maxVertexTextures:_,maxTextureSize:E,maxCubemapSize:h,maxAttributes:d,maxVertexUniforms:S,maxVaryings:A,maxFragmentUniforms:T,maxSamples:b,samples:y}}function Ff(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Dn,o=new Ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(g,p){const m=g.length!==0||p||n!==0||s;return s=p,n=g.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(g,p){t=u(g,p,0)},this.setState=function(g,p,m){const _=g.clippingPlanes,E=g.clipIntersection,h=g.clipShadows,d=i.get(g);if(!s||_===null||_.length===0||r&&!h)r?u(null):c();else{const S=r?0:n,A=S*4;let T=d.clippingState||null;l.value=T,T=u(_,p,A,m);for(let b=0;b!==A;++b)T[b]=t[b];d.clippingState=T,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(g,p,m,_){const E=g!==null?g.length:0;let h=null;if(E!==0){if(h=l.value,_!==!0||h===null){const d=m+E*4,S=p.matrixWorldInverse;o.getNormalMatrix(S),(h===null||h.length<d)&&(h=new Float32Array(d));for(let A=0,T=m;A!==E;++A,T+=4)a.copy(g[A]).applyMatrix4(S,o),a.normal.toArray(h,T),h[T+3]=a.constant}l.value=h,l.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,h}}class Xa extends un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Wl(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new En(5,5,5),r=new kn({name:"CubemapFromEquirect",uniforms:Ei(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ot,blending:xi});r.uniforms.tEquirect.value=t;const a=new nt(s,r),o=t.minFilter;return t.minFilter===Nn&&(t.minFilter=kt),new va(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const Ho=256,Of=3,Bf=20,jl=256,ec=16,zf=3,kf=new D,Gf=new Be;class qs{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new va(1,10,null),this._boxMesh=new nt(new En(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=kf}=r,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);const g=l.autoClear,p=l.autoClearColor,m=l.autoClearDepth,_=l.autoClearStencil,E=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,E===null&&(e.background=l.getClearColor(Gf));const h=new va(n,s,u);return h.position.copy(o),h.update(l,e),l.autoClear=g,l.autoClearColor=p,l.autoClearDepth=m,l.autoClearStencil=_,e.background=E,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Ho,Fl(e))}_fromTexture(e,t){e.mapping===Mi||e.mapping===qi?this._setSize(e.image.length===0?Ho:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){const e=this._cubeSize,t=Vo(e,!1,!1),n=Math.log2(e)-Of;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Vo(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){const s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;const a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Mi||e.mapping===qi?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xo()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Wo()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Hf(),this._integrationMaterial=Vf());const t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/ec);for(let a=0;a<=n;a++){const o=qs.lodToRoughness(a,n);if(a>n-zf)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const l=o>0?Math.log2(t)+.5*Math.log2(6/(jl*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Wf());const n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}}function Vo(i,e,t){return new Xa(i,{minFilter:Nn,generateMipmaps:e,type:pn,colorSpace:Gs,depthBuffer:t})}function ts(i,e,t){return new kn({name:i,uniforms:e,vertexShader:ke.cube_vert,fragmentShader:t,side:Ot,blending:xi,depthTest:!1,depthWrite:!1})}function Hf(){return ts("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${jl}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Vf(){return ts("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:ec}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Wf(){return ts("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Bf}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Wo(){return ts("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Xo(){return ts("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Xf(i){let e=new WeakMap,t=new WeakMap,n=null;function s(p,m=!1){return p==null?null:m?a(p):r(p)}function r(p){if(p&&p.isTexture){const m=p.mapping;if(m===ir||m===sr)if(e.has(p)){const _=e.get(p).texture;return o(_,p.mapping)}else{const _=p.image;if(_&&_.height>0){const E=new Xa(_.height);return E.fromEquirectangularTexture(i,p),e.set(p,E),p.addEventListener("dispose",c),o(E.texture,p.mapping)}else return null}}return p}function a(p){if(p&&p.isTexture&&p.isPMREMTexture!==!0){const m=p.mapping,_=m===ir||m===sr,E=m===Mi||m===qi;if(_||E){let h=t.get(p);const d=h!==void 0?h.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==d)return n===null&&(n=new qs(i)),h=_?n.fromEquirectangular(p,h):n.fromCubemap(p,h),h.texture.pmremVersion=p.pmremVersion,t.set(p,h),h.texture;if(h!==void 0)return h.texture;{const S=p.image;return _&&S&&S.height>0||E&&S&&l(S)?(n===null&&(n=new qs(i)),h=_?n.fromEquirectangular(p):n.fromCubemap(p),h.texture.pmremVersion=p.pmremVersion,t.set(p,h),p.addEventListener("dispose",u),h.texture):null}}}return p}function o(p,m){return m===ir?p.mapping=Mi:m===sr&&(p.mapping=qi),p}function l(p){let m=0;const _=6;for(let E=0;E<_;E++)p[E]!==void 0&&m++;return m===_}function c(p){const m=p.target;m.removeEventListener("dispose",c);const _=e.get(m);_!==void 0&&(e.delete(m),_.dispose())}function u(p){const m=p.target;m.removeEventListener("dispose",u);const _=t.get(m);_!==void 0&&(t.delete(m),_.dispose())}function g(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:g}}function qf(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Ns("WebGLRenderer: "+n+" extension not supported."),s}}}function Yf(i,e,t,n){const s={},r=new WeakMap,a=new FinalizationRegistry(_=>delete s[_]);function o(_){l(_.target)}function l(_){_.index!==null&&e.remove(_.index);for(const h in _.attributes)e.remove(_.attributes[h]);_.removeEventListener("dispose",o),delete s[_.id],a.unregister(_);const E=r.get(_);E&&(e.remove(E),r.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function c(_,E){return s[E.id]!==void 0||(E.addEventListener("dispose",o),s[E.id]=new WeakRef(E),a.register(E,E.id,E),t.memory.geometries++),E}function u(_){const E=_.attributes;for(const h in E)e.update(E[h],i.ARRAY_BUFFER)}function g(_){const E=_.index,h=_.attributes.position;let d=0;if(h===void 0)return;const S=E!==null?E.array.length:h.array.length/3-1,A=h.count>=65535?kl:zl,T=new A(Math.ceil(S/3)*6,1),b=T.array;if(E!==null){const f=E.array;d=E.version;for(let M=0,I=0;M<S;M+=3){const C=f[M+0],N=f[M+1],F=f[M+2];b[I++]=C,b[I++]=N,b[I++]=N,b[I++]=F,b[I++]=F,b[I++]=C}}else{d=h.version;for(let f=0,M=0;f<S;f+=3){const I=f+0,C=f+1,N=f+2;b[M++]=I,b[M++]=C,b[M++]=C,b[M++]=N,b[M++]=N,b[M++]=I}}T.version=d;const y=r.get(_);y&&e.remove(y),r.set(_,T)}function p(_){const E=r.get(_);if(E){const h=_.index;h!==null&&E.version<h.version&&g(_)}else g(_);return r.get(_)}function m(){for(const _ in s){const E=s[_].deref();E!==void 0&&l(E)}}return{get:c,update:u,getWireframeAttribute:p,dispose:m}}function Kf(i,e,t){let n;function s(g){n=g}let r,a;function o(g){r=g.type,a=g.bytesPerElement}function l(g,p){i.drawElements(n,p,r,g*a),t.update(p,n,1)}function c(g,p,m){m!==0&&(i.drawElementsInstanced(n,p,r,g*a,m),t.update(p,n,m))}function u(g,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,g,0,m);let E=0;for(let h=0;h<m;h++)E+=p[h];t.update(E,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function $f(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ye("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Zf(i,e,t){const n=new WeakMap,s=new ct;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,g=u!==void 0?u.length:0;let p=n.get(o);if(p===void 0||p.count!==g){let C=function(){M.dispose(),n.delete(o),o.removeEventListener("dispose",C)};var m=C;p!==void 0&&p.texture.dispose();const _=o.morphAttributes.position!==void 0,E=o.morphAttributes.normal!==void 0,h=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],A=o.morphAttributes.color||[];let T=0;_===!0&&(T=1),E===!0&&(T=2),h===!0&&(T=3);let b=o.attributes.position.count*T,y=1;b>e.maxTextureSize&&(y=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const f=new Float32Array(b*y*4*g),M=new Ol(f,b,y,g);M.type=cn,M.needsUpdate=!0;const I=T*4;for(let N=0;N<g;N++){const F=d[N],V=S[N],P=A[N],G=b*y*4*N;for(let Y=0;Y<F.count;Y++){const k=Y*I;_===!0&&(s.fromBufferAttribute(F,Y),f[G+k+0]=s.x,f[G+k+1]=s.y,f[G+k+2]=s.z,f[G+k+3]=0),E===!0&&(s.fromBufferAttribute(V,Y),f[G+k+4]=s.x,f[G+k+5]=s.y,f[G+k+6]=s.z,f[G+k+7]=0),h===!0&&(s.fromBufferAttribute(P,Y),f[G+k+8]=s.x,f[G+k+9]=s.y,f[G+k+10]=s.z,f[G+k+11]=P.itemSize===4?s.w:1)}}p={count:g,texture:M,size:new Fe(b,y)},n.set(o,p),o.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let _=0;for(let h=0;h<c.length;h++)_+=c[h];const E=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(i,"morphTargetBaseInfluence",E),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function Jf(i,e,t,n,s){let r=new WeakMap;function a(c){const u=s.render.frame,g=c.geometry,p=e.get(c,g);if(r.get(p)!==u&&(e.update(p),r.set(p,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const m=c.skeleton;r.get(m)!==u&&(m.update(),r.set(m,u))}return p}function o(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const Qf={[gl]:"LINEAR_TONE_MAPPING",[_l]:"REINHARD_TONE_MAPPING",[xl]:"CINEON_TONE_MAPPING",[vl]:"ACES_FILMIC_TONE_MAPPING",[Sl]:"AGX_TONE_MAPPING",[yl]:"NEUTRAL_TONE_MAPPING",[Ml]:"CUSTOM_TONE_MAPPING"};function jf(i,e,t,n,s,r){const a=new un(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const u=new Zt;u.setAttribute("position",new ut([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new ut([0,2,0,0,2,0],2));const g=new Gh({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new nt(u,g),m=new Zl(-1,1,1,-1,0,1);let _=null,E=null,h=!1,d,S=null,A=[],T=!1;this.setSize=function(b,y){a.setSize(b,y),o!==null&&o.setSize(b,y),l!==null&&l.setSize(b,y);for(let f=0;f<A.length;f++){const M=A[f];M.setSize&&M.setSize(b,y)}},this.setEffects=function(b){A=b,T=A.length>0&&A[0].isRenderPass===!0;const y=a.width,f=a.height;A.length>0&&o===null&&(o=new un(y,f,{type:pn,depthBuffer:!1,stencilBuffer:!1}),l=new un(y,f,{type:pn,depthBuffer:!1,stencilBuffer:!1}));const M=s===!0&&A.some(I=>I.needsDepthTexture===!0);M!==(a.depthTexture!==null)&&(M===!0&&c===null&&(c=new yi(y,f),r===!0&&(c.format=Un,c.type=Si)),a.dispose(),a.depthTexture=M?c:null,a.resolveDepthBuffer=M,a.storeMultisampledDepthBuffer=M);for(let I=0;I<A.length;I++){const C=A[I];C.setSize&&C.setSize(y,f),M&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(b,y){if(h||b.toneMapping===dn&&A.length===0)return!1;if(S=y,y!==null){const f=y.width,M=y.height;(a.width!==f||a.height!==M)&&this.setSize(f,M)}return T===!1&&b.setRenderTarget(a),d=b.toneMapping,b.toneMapping=dn,!0},this.hasRenderPass=function(){return T},this.end=function(b,y){b.toneMapping=d,h=!0;let f=a,M=o;for(let I=0;I<A.length;I++){const C=A[I];C.enabled!==!1&&(C.render(b,M,f,y),C.needsSwap!==!1&&(f=M,M=M===o?l:o))}if(_!==b.outputColorSpace||E!==b.toneMapping){_=b.outputColorSpace,E=b.toneMapping,g.defines={},Xe.getTransfer(_)===Je&&(g.defines.SRGB_TRANSFER="");const I=Qf[E];I&&(g.defines[I]=""),g.needsUpdate=!0}g.uniforms.tDiffuse.value=f.texture,b.setRenderTarget(S),b.render(p,m),S=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),g.dispose()}}const tc=new It,nc=new yi(1,1),ic=new Xl(1),sc=new Ol,rc=new vh,ac=new Wl,qo=[],Yo=[],Ko=new Float32Array(16),$o=new Float32Array(9),Zo=new Float32Array(4);function Ai(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=qo[s];if(r===void 0&&(r=new Float32Array(s),qo[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function xt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function vt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function js(i,e){let t=Yo[e];t===void 0&&(t=new Int32Array(e),Yo[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function ep(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function tp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2fv(this.addr,e),vt(t,e)}}function np(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;i.uniform3fv(this.addr,e),vt(t,e)}}function ip(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4fv(this.addr,e),vt(t,e)}}function sp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),vt(t,e)}else{if(xt(t,n))return;Zo.set(n),i.uniformMatrix2fv(this.addr,!1,Zo),vt(t,n)}}function rp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),vt(t,e)}else{if(xt(t,n))return;$o.set(n),i.uniformMatrix3fv(this.addr,!1,$o),vt(t,n)}}function ap(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),vt(t,e)}else{if(xt(t,n))return;Ko.set(n),i.uniformMatrix4fv(this.addr,!1,Ko),vt(t,n)}}function op(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function lp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2iv(this.addr,e),vt(t,e)}}function cp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;i.uniform3iv(this.addr,e),vt(t,e)}}function hp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4iv(this.addr,e),vt(t,e)}}function dp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function up(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2uiv(this.addr,e),vt(t,e)}}function fp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;i.uniform3uiv(this.addr,e),vt(t,e)}}function pp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4uiv(this.addr,e),vt(t,e)}}function er(i){return i.version===0&&(i.compareFunction=Il,i.needsUpdate=!0),i}function mp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=er(nc):r=tc,t.setTexture2D(e||r,s)}function gp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||rc,s)}function _p(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=er(ic):r=ac,t.setTextureCube(e||r,s)}function xp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||sc,s)}function vp(i){switch(i){case 5126:return ep;case 35664:return tp;case 35665:return np;case 35666:return ip;case 35674:return sp;case 35675:return rp;case 35676:return ap;case 5124:case 35670:return op;case 35667:case 35671:return lp;case 35668:case 35672:return cp;case 35669:case 35673:return hp;case 5125:return dp;case 36294:return up;case 36295:return fp;case 36296:return pp;case 35678:case 36198:case 36298:case 36306:case 35682:return mp;case 35679:case 36299:case 36307:return gp;case 35680:case 36300:case 36308:case 36293:return _p;case 36289:case 36303:case 36311:case 36292:return xp}}function Mp(i,e){i.uniform1fv(this.addr,e)}function Sp(i,e){const t=Ai(e,this.size,2);i.uniform2fv(this.addr,t)}function yp(i,e){const t=Ai(e,this.size,3);i.uniform3fv(this.addr,t)}function Ep(i,e){const t=Ai(e,this.size,4);i.uniform4fv(this.addr,t)}function bp(i,e){const t=Ai(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Tp(i,e){const t=Ai(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function wp(i,e){const t=Ai(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Ap(i,e){i.uniform1iv(this.addr,e)}function Rp(i,e){i.uniform2iv(this.addr,e)}function Cp(i,e){i.uniform3iv(this.addr,e)}function Pp(i,e){i.uniform4iv(this.addr,e)}function Lp(i,e){i.uniform1uiv(this.addr,e)}function Dp(i,e){i.uniform2uiv(this.addr,e)}function Ip(i,e){i.uniform3uiv(this.addr,e)}function Np(i,e){i.uniform4uiv(this.addr,e)}function Up(i,e,t){const n=this.cache,s=e.length,r=js(t,s);xt(n,r)||(i.uniform1iv(this.addr,r),vt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=er(nc):a=tc;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Fp(i,e,t){const n=this.cache,s=e.length,r=js(t,s);xt(n,r)||(i.uniform1iv(this.addr,r),vt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||rc,r[a])}function Op(i,e,t){const n=this.cache,s=e.length,r=js(t,s);xt(n,r)||(i.uniform1iv(this.addr,r),vt(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=er(ic):a=ac;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function Bp(i,e,t){const n=this.cache,s=e.length,r=js(t,s);xt(n,r)||(i.uniform1iv(this.addr,r),vt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||sc,r[a])}function zp(i){switch(i){case 5126:return Mp;case 35664:return Sp;case 35665:return yp;case 35666:return Ep;case 35674:return bp;case 35675:return Tp;case 35676:return wp;case 5124:case 35670:return Ap;case 35667:case 35671:return Rp;case 35668:case 35672:return Cp;case 35669:case 35673:return Pp;case 5125:return Lp;case 36294:return Dp;case 36295:return Ip;case 36296:return Np;case 35678:case 36198:case 36298:case 36306:case 35682:return Up;case 35679:case 36299:case 36307:return Fp;case 35680:case 36300:case 36308:case 36293:return Op;case 36289:case 36303:case 36311:case 36292:return Bp}}class kp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=vp(t.type)}}class Gp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=zp(t.type)}}class Hp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Cr=/(\w+)(\])?(\[|\.)?/g;function Jo(i,e){i.seq.push(e),i.map[e.id]=e}function Vp(i,e,t){const n=i.name,s=n.length;for(Cr.lastIndex=0;;){const r=Cr.exec(n),a=Cr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Jo(t,c===void 0?new kp(o,i,e):new Gp(o,i,e));break}else{let g=t.map[o];g===void 0&&(g=new Hp(o),Jo(t,g)),t=g}}}class Fs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Vp(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Qo(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Wp=37297;let Xp=0;function qp(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const jo=new Ie;function Yp(i){Xe._getMatrix(jo,Xe.workingColorSpace,i);const e=`mat3( ${jo.elements.map(t=>t.toFixed(4))} )`;switch(Xe.getTransfer(i)){case Hs:return[e,"LinearTransferOETF"];case Je:return[e,"sRGBTransferOETF"];default:return Le("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function el(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+qp(i.getShaderSource(e),o)}else return r}function Kp(i,e){const t=Yp(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const $p={[gl]:"Linear",[_l]:"Reinhard",[xl]:"Cineon",[vl]:"ACESFilmic",[Sl]:"AgX",[yl]:"Neutral",[Ml]:"Custom"};function Zp(i,e){const t=$p[e];return t===void 0?(Le("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Rs=new D;function Jp(){Xe.getLuminanceCoefficients(Rs);const i=Rs.x.toFixed(4),e=Rs.y.toFixed(4),t=Rs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Qp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zi).join(`
`)}function jp(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function em(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function zi(i){return i!==""}function tl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function nl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const tm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sa(i){return i.replace(tm,nm)}function nm(i,e){const t=ke[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Sa(t)}const im=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function il(i){return i.replace(im,sm)}function sm(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function sl(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const rm={[_i]:"SHADOWMAP_TYPE_PCF",[Bi]:"SHADOWMAP_TYPE_VSM"};function am(i){return rm[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const om={[qi]:"ENVMAP_MODE_REFRACTION"};function lm(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":om[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const cm={[Ta]:"ENVMAP_BLENDING_MULTIPLY",[Bc]:"ENVMAP_BLENDING_MIX",[zc]:"ENVMAP_BLENDING_ADD"};function hm(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":cm[i.combine]||"ENVMAP_BLENDING_NONE"}function dm(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=am(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=lm(t),g=hm(t),p=Qp(t),m=jp(r),_=s.createProgram();let E,h,d=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(E=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(zi).join(`
`),E.length>0&&(E+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(zi).join(`
`),h.length>0&&(h+=`
`)):(E=[sl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zi).join(`
`),h=[sl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+g:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==dn?"#define TONE_MAPPING":"",t.toneMapping!==dn?ke.tonemapping_pars_fragment:"",t.toneMapping!==dn?Zp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,Kp("linearToOutputTexel",t.outputColorSpace),Jp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zi).join(`
`)),a=Sa(a),a=tl(a,t),a=nl(a,t),o=Sa(o),o=tl(o,t),o=nl(o,t),a=il(a),o=il(o),t.isRawShaderMaterial!==!0&&(d=`#version 300 es
`,E=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+E,h=["#define varying in",t.glslVersion===uo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===uo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const S=d+E+a,A=d+h+o,T=Qo(s,s.VERTEX_SHADER,S),b=Qo(s,s.FRAGMENT_SHADER,A);s.attachShader(_,T),s.attachShader(_,b),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function y(C){if(i.debug.checkShaderErrors){const N=s.getProgramInfoLog(_)||"",F=s.getShaderInfoLog(T)||"",V=s.getShaderInfoLog(b)||"",P=N.trim(),G=F.trim(),Y=V.trim();let k=!0,ee=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,T,b);else{const W=el(s,T,"vertex"),Q=el(s,b,"fragment");Ye("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+P+`
`+W+`
`+Q)}else P!==""?Le("WebGLProgram: Program Info Log:",P):(G===""||Y==="")&&(ee=!1);ee&&(C.diagnostics={runnable:k,programLog:P,vertexShader:{log:G,prefix:E},fragmentShader:{log:Y,prefix:h}})}s.deleteShader(T),s.deleteShader(b),f=new Fs(s,_),M=em(s,_)}let f;this.getUniforms=function(){return f===void 0&&y(this),f};let M;this.getAttributes=function(){return M===void 0&&y(this),M};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(_,Wp)),I},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Xp++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=b,this}let um=0;class fm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new pm(e),t.set(e,n)),n}}class pm{constructor(e){this.id=um++,this.code=e,this.usedTimes=0}}function mm(i){return i===Qn||i===zs||i===ks}function gm(i,e,t,n,s,r){const a=new Fa,o=new fm,l=new Set,c=[],u=new Map,g=n.logarithmicDepthBuffer,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(f){return l.add(f),f===0?"uv":`uv${f}`}function _(f,M,I,C,N,F){const V=C.fog,P=N.geometry,G=f.isMeshStandardMaterial||f.isMeshLambertMaterial||f.isMeshPhongMaterial?C.environment:null,Y=f.isMeshStandardMaterial||f.isMeshLambertMaterial&&!f.envMap||f.isMeshPhongMaterial&&!f.envMap,k=e.get(f.envMap||G,Y),ee=p[f.type];let W=n.precision;f.precision!==null&&(W=n.getMaxPrecision(f.precision),W!==f.precision&&Le("WebGLProgram.getParameters:",f.precision,"not supported, using",W,"instead."));const Q=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,j=Q!==void 0?Q.length:0;let ve=0;P.morphAttributes.position!==void 0&&(ve=1),P.morphAttributes.normal!==void 0&&(ve=2),P.morphAttributes.color!==void 0&&(ve=3);let Pe,$,pe,Me;if(ee){const ue=ln[ee];Pe=ue.vertexShader,$=ue.fragmentShader}else{Pe=f.vertexShader,$=f.fragmentShader;const ue=o.getVertexShaderStage(f),Ze=o.getFragmentShaderStage(f);o.update(f,ue,Ze),pe=ue.id,Me=Ze.id}const Ae=i.getRenderTarget(),me=i.state.buffers.depth.getReversed(),Ue=N.isInstancedMesh===!0,ft=N.isBatchedMesh===!0,Ce=!!f.map,$e=!!f.matcap,Qe=!!k,Ge=Qe&&k.isPMREMTexture===!0,wt=!!f.aoMap,gt=!!f.lightMap,Bt=!!f.bumpMap&&f.wireframe===!1,at=!!f.normalMap,rn=!!f.displacementMap,Mt=!!f.emissiveMap,Wt=!!f.metalnessMap,Xt=!!f.roughnessMap,qt=f.anisotropy>0,U=f.clearcoat>0,Yt=f.diffuseRoughness>0,st=f.dispersion>0,rt=f.retroreflectivity>0,de=f.iridescence>0,_t=f.sheen>0,Re=f.transmission>0,De=qt&&!!f.anisotropyMap,w=U&&!!f.clearcoatMap,x=U&&!!f.clearcoatNormalMap,B=U&&!!f.clearcoatRoughnessMap,te=Yt&&!!f.diffuseRoughnessMap,J=de&&!!f.iridescenceMap,se=de&&!!f.iridescenceThicknessMap,ce=_t&&!!f.sheenColorMap,q=_t&&!!f.sheenRoughnessMap,K=!!f.specularMap,ae=!!f.specularColorMap,R=!!f.specularIntensityMap,Z=Re&&!!f.transmissionMap,X=Re&&!!f.thicknessMap,oe=!!f.gradientMap,ie=!!f.alphaMap,re=f.alphaTest>0,be=!!f.alphaHash,ze=!!f.extensions;let ne=dn;f.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(ne=i.toneMapping);const we=Ge?k.isCompressedCubeTexture?k.image[0].mipmaps:k.mipmaps:null,Oe={shaderID:ee,shaderType:f.type,shaderName:f.name,vertexShader:Pe,fragmentShader:$,defines:f.defines,customVertexShaderID:pe,customFragmentShaderID:Me,isRawShaderMaterial:f.isRawShaderMaterial===!0,glslVersion:f.glslVersion,precision:W,batching:ft,batchingColor:ft&&N._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&N.instanceColor!==null,instancingMorph:Ue&&N.morphTexture!==null,outputColorSpace:Ae===null?i.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:Xe.workingColorSpace,alphaToCoverage:!!f.alphaToCoverage,map:Ce,matcap:$e,envMap:Qe,envMapMode:Qe&&k.mapping,envMapPMREM:Ge,envMapMaxLod:Ge?we.length-1:null,envMapSize:Ge?we[0].width:null,aoMap:wt,lightMap:gt,bumpMap:Bt,normalMap:at,displacementMap:rn,emissiveMap:Mt,normalMapObjectSpace:at&&f.normalMapType===Hc,normalMapTangentSpace:at&&f.normalMapType===xa,packedNormalMap:at&&f.normalMapType===xa&&mm(f.normalMap.format),metalnessMap:Wt,roughnessMap:Xt,anisotropy:qt,anisotropyMap:De,clearcoat:U,clearcoatMap:w,clearcoatNormalMap:x,clearcoatRoughnessMap:B,diffuseRoughness:Yt,diffuseRoughnessMap:te,dispersion:st,retroreflection:rt,iridescence:de,iridescenceMap:J,iridescenceThicknessMap:se,sheen:_t,sheenColorMap:ce,sheenRoughnessMap:q,specularMap:K,specularColorMap:ae,specularIntensityMap:R,transmission:Re,transmissionMap:Z,thicknessMap:X,gradientMap:oe,opaque:f.transparent===!1&&f.blending===ki&&f.alphaToCoverage===!1,alphaMap:ie,alphaTest:re,alphaHash:be,combine:f.combine,mapUv:Ce&&m(f.map.channel),aoMapUv:wt&&m(f.aoMap.channel),lightMapUv:gt&&m(f.lightMap.channel),bumpMapUv:Bt&&m(f.bumpMap.channel),normalMapUv:at&&m(f.normalMap.channel),displacementMapUv:rn&&m(f.displacementMap.channel),emissiveMapUv:Mt&&m(f.emissiveMap.channel),metalnessMapUv:Wt&&m(f.metalnessMap.channel),roughnessMapUv:Xt&&m(f.roughnessMap.channel),anisotropyMapUv:De&&m(f.anisotropyMap.channel),clearcoatMapUv:w&&m(f.clearcoatMap.channel),clearcoatNormalMapUv:x&&m(f.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&m(f.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:te&&m(f.diffuseRoughnessMap.channel),iridescenceMapUv:J&&m(f.iridescenceMap.channel),iridescenceThicknessMapUv:se&&m(f.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&m(f.sheenColorMap.channel),sheenRoughnessMapUv:q&&m(f.sheenRoughnessMap.channel),specularMapUv:K&&m(f.specularMap.channel),specularColorMapUv:ae&&m(f.specularColorMap.channel),specularIntensityMapUv:R&&m(f.specularIntensityMap.channel),transmissionMapUv:Z&&m(f.transmissionMap.channel),thicknessMapUv:X&&m(f.thicknessMap.channel),alphaMapUv:ie&&m(f.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(at||qt),vertexNormals:!!P.attributes.normal,vertexColors:f.vertexColors,vertexAlphas:f.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!P.attributes.uv&&(Ce||ie),fog:!!V,useFog:f.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:f.wireframe===!1&&(f.flatShading===!0||P.attributes.normal===void 0&&at===!1&&(f.isMeshLambertMaterial||f.isMeshPhongMaterial||f.isMeshStandardMaterial||f.isMeshPhysicalMaterial)),sizeAttenuation:f.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:me,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:ve,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:F.filter(ue=>ue.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:f.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:ne,decodeVideoTexture:Ce&&f.map.isVideoTexture===!0&&Xe.getTransfer(f.map.colorSpace)===Je,decodeVideoTextureEmissive:Mt&&f.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(f.emissiveMap.colorSpace)===Je,premultipliedAlpha:f.premultipliedAlpha,doubleSided:f.side===nn,flipSided:f.side===Ot,useDepthPacking:f.depthPacking>=0,depthPacking:f.depthPacking||0,index0AttributeName:f.index0AttributeName,extensionClipCullDistance:ze&&f.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&f.extensions.multiDraw===!0||ft)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:f.customProgramCacheKey()};return Oe.vertexUv1s=l.has(1),Oe.vertexUv2s=l.has(2),Oe.vertexUv3s=l.has(3),l.clear(),Oe}function E(f){const M=[];if(f.shaderID?M.push(f.shaderID):(M.push(f.customVertexShaderID),M.push(f.customFragmentShaderID)),f.defines!==void 0)for(const I in f.defines)M.push(I),M.push(f.defines[I]);return f.isRawShaderMaterial===!1&&(h(M,f),d(M,f),M.push(i.outputColorSpace)),M.push(f.customProgramCacheKey),M.join()}function h(f,M){f.push(M.precision),f.push(M.outputColorSpace),f.push(M.envMapMode),f.push(M.envMapPMREM),f.push(M.envMapMaxLod),f.push(M.envMapSize),f.push(M.mapUv),f.push(M.alphaMapUv),f.push(M.lightMapUv),f.push(M.aoMapUv),f.push(M.bumpMapUv),f.push(M.normalMapUv),f.push(M.displacementMapUv),f.push(M.emissiveMapUv),f.push(M.metalnessMapUv),f.push(M.roughnessMapUv),f.push(M.anisotropyMapUv),f.push(M.clearcoatMapUv),f.push(M.clearcoatNormalMapUv),f.push(M.clearcoatRoughnessMapUv),f.push(M.diffuseRoughnessMapUv),f.push(M.iridescenceMapUv),f.push(M.iridescenceThicknessMapUv),f.push(M.sheenColorMapUv),f.push(M.sheenRoughnessMapUv),f.push(M.specularMapUv),f.push(M.specularColorMapUv),f.push(M.specularIntensityMapUv),f.push(M.transmissionMapUv),f.push(M.thicknessMapUv),f.push(M.combine),f.push(M.fogExp2),f.push(M.sizeAttenuation),f.push(M.morphTargetsCount),f.push(M.numSunLights),f.push(M.numDirLights),f.push(M.numPointLights),f.push(M.numSpotLights),f.push(M.numSpotLightMaps),f.push(M.numHemiLights),f.push(M.numRectAreaLights),f.push(M.numSunLightShadows),f.push(M.numDirLightShadows),f.push(M.numPointLightShadows),f.push(M.numSpotLightShadows),f.push(M.numSpotLightShadowsWithMaps),f.push(M.numLightProbes),f.push(M.numLightProbeGrids),f.push(M.shadowMapType),f.push(M.toneMapping),f.push(M.numClippingPlanes),f.push(M.numClipIntersection),f.push(M.depthPacking)}function d(f,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.diffuseRoughness&&a.enable(25),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),f.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),f.push(a.mask)}function S(f){const M=p[f.type];let I;if(M){const C=ln[M];I=Bh.clone(C.uniforms)}else I=f.uniforms;return I}function A(f,M){let I=u.get(M);return I!==void 0?++I.usedTimes:(I=new dm(i,M,f,s),c.push(I),u.set(M,I)),I}function T(f){if(--f.usedTimes===0){const M=c.indexOf(f);c[M]=c[c.length-1],c.pop(),u.delete(f.cacheKey),f.destroy()}}function b(f){o.remove(f)}function y(){o.dispose()}return{getParameters:_,getProgramCacheKey:E,getUniforms:S,acquireProgram:A,releaseProgram:T,releaseShaderCache:b,programs:c,dispose:y}}function _m(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function xm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function rl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function al(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(p){let m=0;return p.isInstancedMesh&&(m+=2),p.isSkinnedMesh&&(m+=1),m}function o(p,m,_,E,h,d){let S=i[e];return S===void 0?(S={id:p.id,object:p,geometry:m,material:_,materialVariant:a(p),groupOrder:E,renderOrder:p.renderOrder,z:h,group:d},i[e]=S):(S.id=p.id,S.object=p,S.geometry=m,S.material=_,S.materialVariant=a(p),S.groupOrder=E,S.renderOrder=p.renderOrder,S.z=h,S.group=d),e++,S}function l(p,m,_,E,h,d,S){S.reversedDepth===!0&&(h=-h);const A=o(p,m,_,E,h,d);_.transmission>0?n.push(A):_.transparent===!0?s.push(A):t.push(A)}function c(p,m,_,E,h,d){const S=o(p,m,_,E,h,d);_.transmission>0?n.unshift(S):_.transparent===!0?s.unshift(S):t.unshift(S)}function u(p,m){t.length>1&&t.sort(p||xm),n.length>1&&n.sort(m||rl),s.length>1&&s.sort(m||rl)}function g(){for(let p=e,m=i.length;p<m;p++){const _=i[p];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:g,sort:u}}function vm(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new al,i.set(n,[a])):s>=r.length?(a=new al,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Mm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new D,color:new Be};break;case"SpotLight":t={position:new D,direction:new D,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function Sm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let ym=0;function Em(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function bm(i){const e=new Mm,t=Sm(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const s=new D,r=new it,a=new it;function o(c){let u=0,g=0,p=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let m=0,_=0,E=0,h=0,d=0,S=0,A=0,T=0,b=0,y=0,f=0,M=0,I=0,C=0;c.sort(Em);for(let F=0,V=c.length;F<V;F++){const P=c[F],G=P.color,Y=P.intensity,k=P.distance;let ee=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Qn?ee=P.shadow.map.texture:ee=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=G.r*Y,g+=G.g*Y,p+=G.b*Y;else if(P.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(P.sh.coefficients[W],Y);C++}else if(P.isSunLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Q=P.shadow,j=t.get(P);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[_]=j,n.sunShadowMap[_]=ee;const ve=Q.getViewportCount();for(let Pe=0;Pe<ve;Pe++)n.sunShadowMatrix[E+Pe]=Q.getMatrix(Pe),n.sunShadowCascade[E+Pe]=Q._cascadeData[Pe];E+=ve,_++}n.sun[m]=W,m++}else if(P.isDirectionalLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Q=P.shadow,j=t.get(P);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,n.directionalShadow[h]=j,n.directionalShadowMap[h]=ee,n.directionalShadowMatrix[h]=P.shadow.matrix,b++}n.directional[h]=W,h++}else if(P.isSpotLight){const W=e.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(G).multiplyScalar(Y),W.distance=k,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,n.spot[S]=W;const Q=P.shadow;if(P.map&&(n.spotLightMap[M]=P.map,M++,Q.updateMatrices(P),P.castShadow&&I++),n.spotLightMatrix[S]=Q.matrix,P.castShadow){const j=t.get(P);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,n.spotShadow[S]=j,n.spotShadowMap[S]=ee,f++}S++}else if(P.isRectAreaLight){const W=e.get(P);W.color.copy(G).multiplyScalar(Y),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),n.rectArea[A]=W,A++}else if(P.isPointLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){const Q=P.shadow,j=t.get(P);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,j.shadowCameraNear=Q.camera.near,j.shadowCameraFar=Q.camera.far,n.pointShadow[d]=j,n.pointShadowMap[d]=ee,n.pointShadowMatrix[d]=P.shadow.matrix,y++}n.point[d]=W,d++}else if(P.isHemisphereLight){const W=e.get(P);W.skyColor.copy(P.color).multiplyScalar(Y),W.groundColor.copy(P.groundColor).multiplyScalar(Y),n.hemi[T]=W,T++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=fe.LTC_FLOAT_1,n.rectAreaLTC2=fe.LTC_FLOAT_2):(n.rectAreaLTC1=fe.LTC_HALF_1,n.rectAreaLTC2=fe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=g,n.ambient[2]=p;const N=n.hash;(N.sunLength!==m||N.directionalLength!==h||N.pointLength!==d||N.spotLength!==S||N.rectAreaLength!==A||N.hemiLength!==T||N.numSunShadows!==_||N.numDirectionalShadows!==b||N.numPointShadows!==y||N.numSpotShadows!==f||N.numSpotMaps!==M||N.numLightProbes!==C)&&(n.sun.length=m,n.directional.length=h,n.spot.length=S,n.rectArea.length=A,n.point.length=d,n.hemi.length=T,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=E,n.sunShadowCascade.length=E,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=y,n.pointShadowMap.length=y,n.pointShadowMatrix.length=y,n.spotShadow.length=f,n.spotShadowMap.length=f,n.spotLightMatrix.length=f+M-I,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=C,N.sunLength=m,N.directionalLength=h,N.pointLength=d,N.spotLength=S,N.rectAreaLength=A,N.hemiLength=T,N.numSunShadows=_,N.numDirectionalShadows=b,N.numPointShadows=y,N.numSpotShadows=f,N.numSpotMaps=M,N.numLightProbes=C,n.version=ym++)}function l(c,u){let g=0,p=0,m=0,_=0,E=0,h=0;const d=u.matrixWorldInverse;for(let S=0,A=c.length;S<A;S++){const T=c[S];if(T.isSunLight){const b=n.sun[g];b.direction.setFromMatrixPosition(T.matrixWorld),b.direction.transformDirection(d),g++}else if(T.isDirectionalLight){const b=n.directional[p];b.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(d),p++}else if(T.isSpotLight){const b=n.spot[_];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(d),b.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(d),_++}else if(T.isRectAreaLight){const b=n.rectArea[E];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(d),a.identity(),r.copy(T.matrixWorld),r.premultiply(d),a.extractRotation(r),b.halfWidth.set(T.width*.5,0,0),b.halfHeight.set(0,T.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),E++}else if(T.isPointLight){const b=n.point[m];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(d),m++}else if(T.isHemisphereLight){const b=n.hemi[h];b.direction.setFromMatrixPosition(T.matrixWorld),b.direction.transformDirection(d),h++}}}return{setup:o,setupView:l,state:n}}function ol(i){const e=new bm(i),t=[],n=[],s=[];function r(g){u.camera=g,t.length=0,n.length=0,s.length=0}function a(g){g.isLightProbeGrid?s.push(g):t.push(g)}function o(g){n.push(g)}function l(){e.setup(t),s.sort((g,p)=>g.priority-p.priority||g.id-p.id)}function c(g){e.setupView(t,g)}const u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Tm(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new ol(i),e.set(s,[o])):r>=a.length?(o=new ol(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const wm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Am=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Rm=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],Cm=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],ll=new it,Fi=new D,Pr=new D;function Pm(i,e,t){let n=new Ji;const s=new Fe,r=new Fe,a=new ct,o=new Hh,l=new Vh,c={},u=t.maxTextureSize,g={[Jn]:Ot,[Ot]:Jn,[nn]:nn},p=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:wm,fragmentShader:Am}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const _=new Zt;_.setAttribute("position",new On(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new nt(_,p),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_i;let d=this.type;this.render=function(y,f,M){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||y.length===0)return;this.type===vc&&(Le("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=_i);const I=i.getRenderTarget(),C=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),F=i.state;F.setBlending(xi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const V=d!==this.type;V&&f.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(G=>G.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,G=y.length;P<G;P++){const Y=y[P],k=Y.shadow;if(k===void 0){Le("WebGLShadowMap:",Y,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const ee=k.getFrameExtents();s.multiply(ee),r.copy(k.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ee.x),s.x=r.x*ee.x,k.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ee.y),s.y=r.y*ee.y,k.mapSize.y=r.y));const W=i.state.buffers.depth.getReversed();if(k.camera._reversedDepth=W,k.map===null||V===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Bi){if(Y.isPointLight){Le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new un(s.x,s.y,{format:Qn,type:pn,minFilter:kt,magFilter:kt,generateMipmaps:!1}),k.map.texture.name=Y.name+".shadowMap",k.map.depthTexture=new yi(s.x,s.y,cn),k.map.depthTexture.name=Y.name+".shadowMapDepth",k.map.depthTexture.format=Bn,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=bt,k.map.depthTexture.magFilter=bt}else Y.isPointLight?(k.map=new Xa(s.x),k.map.depthTexture=new Xl(s.x,fn)):(k.map=new un(s.x,s.y),k.map.depthTexture=new yi(s.x,s.y,fn)),k.map.depthTexture.name=Y.name+".shadowMap",k.map.depthTexture.format=Bn,this.type===_i?(k.map.depthTexture.compareFunction=W?Dl:Ll,k.map.depthTexture.minFilter=kt,k.map.depthTexture.magFilter=kt):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=bt,k.map.depthTexture.magFilter=bt);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==s.x||k.map.height!==s.y)&&k.map.setSize(s.x,s.y);const Q=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();Y.isPointLight!==!0&&k.updateMatrices(Y,M);const j=(k.camera.layers.mask&4294967294)!==0?k.camera.layers:M.layers;for(let ve=0;ve<Q;ve++){const Pe=k.getCamera(ve);if(Y.isPointLight){const $=k.camera,pe=k.matrix,Me=Y.distance||$.far;Me!==$.far&&($.far=Me,$.updateProjectionMatrix()),Fi.setFromMatrixPosition(Y.matrixWorld),$.position.copy(Fi),Pr.copy($.position),Pr.add(Rm[ve]),$.up.copy(Cm[ve]),$.lookAt(Pr),$.updateMatrixWorld(),pe.makeTranslation(-Fi.x,-Fi.y,-Fi.z),ll.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),k._frustum.setFromProjectionMatrix(ll,$.coordinateSystem,$.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)i.setRenderTarget(k.map,ve),i.clear();else{ve===0&&(i.setRenderTarget(k.map),i.clear());const $=k.getViewport(ve);a.set(r.x*$.x,r.y*$.y,r.x*$.z,r.y*$.w),F.viewport(a)}n=k.getFrustum(ve),T(f,M,Pe,Y,j,this.type)}k.isPointLightShadow!==!0&&this.type===Bi&&S(k,M),k.needsUpdate=!1}d=this.type,h.needsUpdate=!1,i.setRenderTarget(I,C,N)};function S(y,f){const M=e.update(E);p.defines.VSM_SAMPLES!==y.blurSamples&&(p.defines.VSM_SAMPLES=y.blurSamples,m.defines.VSM_SAMPLES=y.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),y.mapPass===null?y.mapPass=new un(s.x,s.y,{format:Qn,type:pn}):(y.mapPass.width!==y.map.width||y.mapPass.height!==y.map.height)&&y.mapPass.setSize(y.map.width,y.map.height),p.uniforms.shadow_pass.value=y.map.depthTexture,p.uniforms.resolution.value.set(y.map.width,y.map.height),p.uniforms.radius.value=y.radius,i.setRenderTarget(y.mapPass),i.clear(),i.renderBufferDirect(f,null,M,p,E,null),m.uniforms.shadow_pass.value=y.mapPass.texture,m.uniforms.resolution.value.set(y.map.width,y.map.height),m.uniforms.radius.value=y.radius,i.setRenderTarget(y.map),i.clear(),i.renderBufferDirect(f,null,M,m,E,null)}function A(y,f,M,I){let C=null;const N=M.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(N!==void 0)C=N;else if(C=M.isPointLight===!0?l:o,i.localClippingEnabled&&f.clipShadows===!0&&Array.isArray(f.clippingPlanes)&&f.clippingPlanes.length!==0||f.displacementMap&&f.displacementScale!==0||f.alphaMap&&f.alphaTest>0||f.map&&f.alphaTest>0||f.alphaToCoverage===!0){const F=C.uuid,V=f.uuid;let P=c[F];P===void 0&&(P={},c[F]=P);let G=P[V];G===void 0&&(G=C.clone(),P[V]=G,f.addEventListener("dispose",b)),C=G}if(C.visible=f.visible,C.wireframe=f.wireframe,I===Bi?C.side=f.shadowSide!==null?f.shadowSide:f.side:C.side=f.shadowSide!==null?f.shadowSide:g[f.side],C.alphaMap=f.alphaMap,C.alphaTest=f.alphaToCoverage===!0?.5:f.alphaTest,C.map=f.map,C.clipShadows=f.clipShadows,C.clippingPlanes=f.clippingPlanes,C.clipIntersection=f.clipIntersection,C.displacementMap=f.displacementMap,C.displacementScale=f.displacementScale,C.displacementBias=f.displacementBias,C.wireframeLinewidth=f.wireframeLinewidth,C.linewidth=f.linewidth,M.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const F=i.properties.get(C);F.light=M}return C}function T(y,f,M,I,C,N){if(y.visible===!1)return;if(y.layers.test(C)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&N===Bi)&&(!y.frustumCulled||y.intersectsFrustum(n))){y.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,y.matrixWorld);const P=e.update(y),G=y.material;if(Array.isArray(G)){const Y=P.groups;for(let k=0,ee=Y.length;k<ee;k++){const W=Y[k],Q=G[W.materialIndex];if(Q&&Q.visible){const j=A(y,Q,I,N);y.onBeforeShadow(i,y,f,M,P,j,W),i.renderBufferDirect(M,null,P,j,y,W),y.onAfterShadow(i,y,f,M,P,j,W)}}}else if(G.visible){const Y=A(y,G,I,N);y.onBeforeShadow(i,y,f,M,P,Y,null),i.renderBufferDirect(M,null,P,Y,y,null),y.onAfterShadow(i,y,f,M,P,Y,null)}}const V=y.children;for(let P=0,G=V.length;P<G;P++)T(V[P],f,M,I,C,N)}function b(y){y.target.removeEventListener("dispose",b);for(const M in c){const I=c[M],C=y.target.uuid;C in I&&(I[C].dispose(),delete I[C])}}}function Lm(i,e){function t(){let R=!1;const Z=new ct;let X=null;const oe=new ct(0,0,0,0);return{setMask:function(ie){X!==ie&&!R&&(i.colorMask(ie,ie,ie,ie),X=ie)},setLocked:function(ie){R=ie},setClear:function(ie,re,be,ze,ne){ne===!0&&(ie*=ze,re*=ze,be*=ze),Z.set(ie,re,be,ze),oe.equals(Z)===!1&&(i.clearColor(ie,re,be,ze),oe.copy(Z))},reset:function(){R=!1,X=null,oe.set(-1,0,0,0)}}}function n(){let R=!1,Z=!1,X=null,oe=null,ie=null;return{setReversed:function(re){if(Z!==re){const be=e.get("EXT_clip_control");re?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),Z=re;const ze=ie;ie=null,this.setClear(ze)}},getReversed:function(){return Z},setTest:function(re){re?me(i.DEPTH_TEST):Ue(i.DEPTH_TEST)},setMask:function(re){X!==re&&!R&&(i.depthMask(re),X=re)},setFunc:function(re){if(Z&&(re=Qc[re]),oe!==re){switch(re){case Nr:i.depthFunc(i.NEVER);break;case Ur:i.depthFunc(i.ALWAYS);break;case Fr:i.depthFunc(i.LESS);break;case Xi:i.depthFunc(i.LEQUAL);break;case Or:i.depthFunc(i.EQUAL);break;case Br:i.depthFunc(i.GEQUAL);break;case zr:i.depthFunc(i.GREATER);break;case kr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}oe=re}},setLocked:function(re){R=re},setClear:function(re){ie!==re&&(ie=re,Z&&(re=1-re),i.clearDepth(re))},reset:function(){R=!1,X=null,oe=null,ie=null,Z=!1}}}function s(){let R=!1,Z=null,X=null,oe=null,ie=null,re=null,be=null,ze=null,ne=null;return{setTest:function(we){R||(we?me(i.STENCIL_TEST):Ue(i.STENCIL_TEST))},setMask:function(we){Z!==we&&!R&&(i.stencilMask(we),Z=we)},setFunc:function(we,Oe,ue){(X!==we||oe!==Oe||ie!==ue)&&(i.stencilFunc(we,Oe,ue),X=we,oe=Oe,ie=ue)},setOp:function(we,Oe,ue){(re!==we||be!==Oe||ze!==ue)&&(i.stencilOp(we,Oe,ue),re=we,be=Oe,ze=ue)},setLocked:function(we){R=we},setClear:function(we){ne!==we&&(i.clearStencil(we),ne=we)},reset:function(){R=!1,Z=null,X=null,oe=null,ie=null,re=null,be=null,ze=null,ne=null}}}const r=new t,a=new n,o=new s;let l={};const c=new WeakMap;let u={},g={},p={},m=new WeakMap,_=[],E=null,h=!1,d=null,S=null,A=null,T=null,b=null,y=null,f=null,M=new Be(0,0,0),I=0,C=!1,N=null,F=null,V=null,P=null,G=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,ee=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(W)[1]),k=ee>=1):W.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),k=ee>=2);let Q=null,j={};const ve=i.getParameter(i.SCISSOR_BOX),Pe=i.getParameter(i.VIEWPORT),$=new ct().fromArray(ve),pe=new ct().fromArray(Pe);function Me(R,Z,X,oe){const ie=new Uint8Array(4),re=i.createTexture();i.bindTexture(R,re),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let be=0;be<X;be++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D(Z,0,i.RGBA,1,1,oe,0,i.RGBA,i.UNSIGNED_BYTE,ie):i.texImage2D(Z+be,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ie);return re}const Ae={};Ae[i.TEXTURE_2D]=Me(i.TEXTURE_2D,i.TEXTURE_2D,1),Ae[i.TEXTURE_CUBE_MAP]=Me(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ae[i.TEXTURE_2D_ARRAY]=Me(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ae[i.TEXTURE_3D]=Me(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),me(i.DEPTH_TEST),a.setFunc(Xi),Bt(!1),at(oo),me(i.CULL_FACE),wt(xi);function me(R){u[R]!==!0&&(i.enable(R),u[R]=!0)}function Ue(R){u[R]!==!1&&(i.disable(R),u[R]=!1)}function ft(R,Z){return p[R]!==Z?(i.bindFramebuffer(R,Z),p[R]=Z,R===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=Z),R===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=Z),!0):!1}function Ce(R,Z){let X=_,oe=!1;if(R){X=m.get(Z),X===void 0&&(X=[],m.set(Z,X));const ie=R.textures;if(X.length!==ie.length||X[0]!==i.COLOR_ATTACHMENT0){for(let re=0,be=ie.length;re<be;re++)X[re]=i.COLOR_ATTACHMENT0+re;X.length=ie.length,oe=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,oe=!0);oe&&i.drawBuffers(X)}function $e(R){return E!==R?(i.useProgram(R),E=R,!0):!1}const Qe={[gi]:i.FUNC_ADD,[Sc]:i.FUNC_SUBTRACT,[yc]:i.FUNC_REVERSE_SUBTRACT};Qe[Ec]=i.MIN,Qe[bc]=i.MAX;const Ge={[Tc]:i.ZERO,[wc]:i.ONE,[Ac]:i.SRC_COLOR,[pl]:i.SRC_ALPHA,[Ic]:i.SRC_ALPHA_SATURATE,[Lc]:i.DST_COLOR,[Cc]:i.DST_ALPHA,[Rc]:i.ONE_MINUS_SRC_COLOR,[ml]:i.ONE_MINUS_SRC_ALPHA,[Dc]:i.ONE_MINUS_DST_COLOR,[Pc]:i.ONE_MINUS_DST_ALPHA,[Nc]:i.CONSTANT_COLOR,[Uc]:i.ONE_MINUS_CONSTANT_COLOR,[Fc]:i.CONSTANT_ALPHA,[Oc]:i.ONE_MINUS_CONSTANT_ALPHA};function wt(R,Z,X,oe,ie,re,be,ze,ne,we){if(R===xi){h===!0&&(Ue(i.BLEND),h=!1);return}if(h===!1&&(me(i.BLEND),h=!0),R!==Mc){if(R!==d||we!==C){if((S!==gi||b!==gi)&&(i.blendEquation(i.FUNC_ADD),S=gi,b=gi),we)switch(R){case ki:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case lo:i.blendFunc(i.ONE,i.ONE);break;case co:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ho:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ye("WebGLState: Invalid blending: ",R);break}else switch(R){case ki:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case lo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case co:Ye("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ho:Ye("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ye("WebGLState: Invalid blending: ",R);break}A=null,T=null,y=null,f=null,M.set(0,0,0),I=0,d=R,C=we}return}ie=ie||Z,re=re||X,be=be||oe,(Z!==S||ie!==b)&&(i.blendEquationSeparate(Qe[Z],Qe[ie]),S=Z,b=ie),(X!==A||oe!==T||re!==y||be!==f)&&(i.blendFuncSeparate(Ge[X],Ge[oe],Ge[re],Ge[be]),A=X,T=oe,y=re,f=be),(ze.equals(M)===!1||ne!==I)&&(i.blendColor(ze.r,ze.g,ze.b,ne),M.copy(ze),I=ne),d=R,C=!1}function gt(R,Z){R.side===nn?Ue(i.CULL_FACE):me(i.CULL_FACE);let X=R.side===Ot;Z&&(X=!X),Bt(X),R.blending===ki&&R.transparent===!1?wt(xi):wt(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),r.setMask(R.colorWrite);const oe=R.stencilWrite;o.setTest(oe),oe&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Mt(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?me(i.SAMPLE_ALPHA_TO_COVERAGE):Ue(i.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(R){N!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),N=R)}function at(R){R!==_c?(me(i.CULL_FACE),R!==F&&(R===oo?i.cullFace(i.BACK):R===xc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ue(i.CULL_FACE),F=R}function rn(R){R!==V&&(k&&i.lineWidth(R),V=R)}function Mt(R,Z,X){R?(me(i.POLYGON_OFFSET_FILL),(P!==Z||G!==X)&&(P=Z,G=X,a.getReversed()&&(Z=-Z,X=-X),i.polygonOffset(Z,X))):Ue(i.POLYGON_OFFSET_FILL)}function Wt(R){R?me(i.SCISSOR_TEST):Ue(i.SCISSOR_TEST)}function Xt(R){R===void 0&&(R=i.TEXTURE0+Y-1),Q!==R&&(i.activeTexture(R),Q=R)}function qt(R,Z,X){X===void 0&&(Q===null?X=i.TEXTURE0+Y-1:X=Q);let oe=j[X];oe===void 0&&(oe={type:void 0,texture:void 0},j[X]=oe),(oe.type!==R||oe.texture!==Z)&&(Q!==X&&(i.activeTexture(X),Q=X),i.bindTexture(R,Z||Ae[R]),oe.type=R,oe.texture=Z)}function U(){const R=j[Q];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function Yt(){try{i.compressedTexImage2D(...arguments)}catch(R){Ye("WebGLState:",R)}}function st(){try{i.compressedTexImage3D(...arguments)}catch(R){Ye("WebGLState:",R)}}function rt(){try{i.texSubImage2D(...arguments)}catch(R){Ye("WebGLState:",R)}}function de(){try{i.texSubImage3D(...arguments)}catch(R){Ye("WebGLState:",R)}}function _t(){try{i.compressedTexSubImage2D(...arguments)}catch(R){Ye("WebGLState:",R)}}function Re(){try{i.compressedTexSubImage3D(...arguments)}catch(R){Ye("WebGLState:",R)}}function De(){try{i.texStorage2D(...arguments)}catch(R){Ye("WebGLState:",R)}}function w(){try{i.texStorage3D(...arguments)}catch(R){Ye("WebGLState:",R)}}function x(){try{i.texImage2D(...arguments)}catch(R){Ye("WebGLState:",R)}}function B(){try{i.texImage3D(...arguments)}catch(R){Ye("WebGLState:",R)}}function te(R){return g[R]!==void 0?g[R]:i.getParameter(R)}function J(R,Z){g[R]!==Z&&(i.pixelStorei(R,Z),g[R]=Z)}function se(R){$.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),$.copy(R))}function ce(R){pe.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),pe.copy(R))}function q(R,Z){let X=c.get(Z);X===void 0&&(X=new WeakMap,c.set(Z,X));let oe=X.get(R);oe===void 0&&(oe=i.getUniformBlockIndex(Z,R.name),i.uniformBlockBinding(Z,oe,oe),X.set(R,oe))}function K(R,Z,X){const ie=c.get(Z).get(R);l[ie]!==X&&(i.bindBufferBase(i.UNIFORM_BUFFER,ie,X),l[ie]=X)}function ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},g={},Q=null,j={},p={},l={},m=new WeakMap,_=[],E=null,h=!1,d=null,S=null,A=null,T=null,b=null,y=null,f=null,M=new Be(0,0,0),I=0,C=!1,N=null,F=null,V=null,P=null,G=null,$.set(0,0,i.canvas.width,i.canvas.height),pe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:me,disable:Ue,bindFramebuffer:ft,drawBuffers:Ce,useProgram:$e,setBlending:wt,setMaterial:gt,setFlipSided:Bt,setCullFace:at,setLineWidth:rn,setPolygonOffset:Mt,setScissorTest:Wt,activeTexture:Xt,bindTexture:qt,unbindTexture:U,compressedTexImage2D:Yt,compressedTexImage3D:st,texImage2D:x,texImage3D:B,pixelStorei:J,getParameter:te,updateUBOMapping:q,uniformBlockBinding:K,texStorage2D:De,texStorage3D:w,texSubImage2D:rt,texSubImage3D:de,compressedTexSubImage2D:_t,compressedTexSubImage3D:Re,scissor:se,viewport:ce,reset:ae}}function Dm(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Fe,u=new WeakMap,g=new Set;let p;const m=new WeakMap,_=new Set,E=new FinalizationRegistry(w=>_.delete(w));let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(w,x){return h?new OffscreenCanvas(w,x):Vs("canvas")}function S(w,x,B){let te=1;const J=De(w);if((J.width>B||J.height>B)&&(te=B/Math.max(J.width,J.height)),te<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const se=Math.floor(te*J.width),ce=Math.floor(te*J.height);p===void 0&&(p=d(se,ce));const q=x?d(se,ce):p;return q.width=se,q.height=ce,q.getContext("2d").drawImage(w,0,0,se,ce),Le("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+se+"x"+ce+")."),q}else return"data"in w&&Le("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),w;return w}function A(w){return w.generateMipmaps}function T(w){i.generateMipmap(w)}function b(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(w,x,B,te,J,se=!1){if(w!==null){if(i[w]!==void 0)return i[w];Le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ce;te&&(ce=e.get("EXT_texture_norm16"),ce||Le("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=x;if(x===i.RED&&(B===i.FLOAT&&(q=i.R32F),B===i.HALF_FLOAT&&(q=i.R16F),B===i.UNSIGNED_BYTE&&(q=i.R8),B===i.UNSIGNED_SHORT&&ce&&(q=ce.R16_EXT),B===i.SHORT&&ce&&(q=ce.R16_SNORM_EXT)),x===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(q=i.R8UI),B===i.UNSIGNED_SHORT&&(q=i.R16UI),B===i.UNSIGNED_INT&&(q=i.R32UI),B===i.BYTE&&(q=i.R8I),B===i.SHORT&&(q=i.R16I),B===i.INT&&(q=i.R32I)),x===i.RG&&(B===i.FLOAT&&(q=i.RG32F),B===i.HALF_FLOAT&&(q=i.RG16F),B===i.UNSIGNED_BYTE&&(q=i.RG8),B===i.UNSIGNED_SHORT&&ce&&(q=ce.RG16_EXT),B===i.SHORT&&ce&&(q=ce.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(q=i.RG8UI),B===i.UNSIGNED_SHORT&&(q=i.RG16UI),B===i.UNSIGNED_INT&&(q=i.RG32UI),B===i.BYTE&&(q=i.RG8I),B===i.SHORT&&(q=i.RG16I),B===i.INT&&(q=i.RG32I)),x===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(q=i.RGB8UI),B===i.UNSIGNED_SHORT&&(q=i.RGB16UI),B===i.UNSIGNED_INT&&(q=i.RGB32UI),B===i.BYTE&&(q=i.RGB8I),B===i.SHORT&&(q=i.RGB16I),B===i.INT&&(q=i.RGB32I)),x===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),B===i.UNSIGNED_INT&&(q=i.RGBA32UI),B===i.BYTE&&(q=i.RGBA8I),B===i.SHORT&&(q=i.RGBA16I),B===i.INT&&(q=i.RGBA32I)),x===i.RGB&&(B===i.UNSIGNED_SHORT&&ce&&(q=ce.RGB16_EXT),B===i.SHORT&&ce&&(q=ce.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(q=i.R11F_G11F_B10F)),x===i.RGBA){const K=se?Hs:Xe.getTransfer(J);B===i.FLOAT&&(q=i.RGBA32F),B===i.HALF_FLOAT&&(q=i.RGBA16F),B===i.UNSIGNED_BYTE&&(q=K===Je?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&ce&&(q=ce.RGBA16_EXT),B===i.SHORT&&ce&&(q=ce.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function f(w,x){let B;return w?x===null||x===fn||x===Si?B=i.DEPTH24_STENCIL8:x===cn?B=i.DEPTH32F_STENCIL8:x===Ki&&(B=i.DEPTH24_STENCIL8,Le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===fn||x===Si?B=i.DEPTH_COMPONENT24:x===cn?B=i.DEPTH_COMPONENT32F:x===Ki&&(B=i.DEPTH_COMPONENT16),B}function M(w,x){return A(w)===!0||w.isFramebufferTexture&&w.minFilter!==bt&&w.minFilter!==kt?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function I(w){const x=new WeakRef(w);n.get(w).__ref=x,_.add(x),E.register(w,x,x)}function C(w){const x=n.get(w).__ref;x!==void 0&&(_.delete(x),E.unregister(x))}function N(w){V(w.target)}function F(w){P(w.target)}function V(w){w.removeEventListener("dispose",N),C(w),Y(w),w.isVideoTexture&&u.delete(w),w.isHTMLTexture&&g.delete(w)}function P(w){w.removeEventListener("dispose",F),C(w),ee(w)}function G(){for(const w of _){const x=w.deref();x!==void 0&&(x.isRenderTarget===!0?P(x):V(x))}_.clear(),g.clear()}function Y(w){const x=n.get(w);if(x.__webglInit===void 0)return;const B=w.source,te=m.get(B);if(te){const J=te[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&k(w),Object.keys(te).length===0&&m.delete(B)}n.remove(w)}function k(w){const x=n.get(w);i.deleteTexture(x.__webglTexture);const B=w.source,te=m.get(B);delete te[x.__cacheKey],a.memory.textures--}function ee(w){const x=n.get(w);x.__depthDisposeCallback&&x.__depthDisposeCallback();const B=w.depthTexture;if(B&&B.renderTarget===w&&V(B),w.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(x.__webglFramebuffer[J]))for(let se=0;se<x.__webglFramebuffer[J].length;se++)i.deleteFramebuffer(x.__webglFramebuffer[J][se]);else i.deleteFramebuffer(x.__webglFramebuffer[J]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[J])}else{if(Array.isArray(x.__webglFramebuffer))for(let J=0;J<x.__webglFramebuffer.length;J++)i.deleteFramebuffer(x.__webglFramebuffer[J]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let J=0;J<x.__webglColorRenderbuffer.length;J++)x.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[J]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const te=w.textures;for(let J=0,se=te.length;J<se;J++){const ce=n.get(te[J]);ce.__webglTexture&&(i.deleteTexture(ce.__webglTexture),a.memory.textures--),n.remove(te[J])}n.remove(w)}let W=0;function Q(){W=0}function j(){return W}function ve(w){W=w}function Pe(){const w=W;return w>=s.maxTextures&&Le("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+s.maxTextures),W+=1,w}function $(w){const x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.mipmapsAutoUpdate),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function pe(w,x){const B=n.get(w);if(w.isVideoTexture&&_t(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&B.__version!==w.version){const te=w.image;if(te===null)Le("WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)Le("WebGLRenderer: Texture marked for update but image is incomplete");else{gt(B,w,x);return}}else w.isExternalTexture&&(B.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+x)}function Me(w,x){const B=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){gt(B,w,x);return}else w.isExternalTexture&&(B.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+x)}function Ae(w,x){const B=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){gt(B,w,x);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+x)}function me(w,x){const B=n.get(w);if(w.version>0&&B.__version!==w.version){Bt(B,w,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+x)}const Ue={[Yi]:i.REPEAT,[Sn]:i.CLAMP_TO_EDGE,[Gr]:i.MIRRORED_REPEAT},ft={[bt]:i.NEAREST,[kc]:i.NEAREST_MIPMAP_NEAREST,[ss]:i.NEAREST_MIPMAP_LINEAR,[kt]:i.LINEAR,[rr]:i.LINEAR_MIPMAP_NEAREST,[Nn]:i.LINEAR_MIPMAP_LINEAR},Ce={[Wc]:i.NEVER,[Il]:i.ALWAYS,[Xc]:i.LESS,[Ll]:i.LEQUAL,[qc]:i.EQUAL,[Dl]:i.GEQUAL,[Yc]:i.GREATER,[Kc]:i.NOTEQUAL};function $e(w,x){if(x.type===cn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===kt||x.magFilter===rr||x.magFilter===ss||x.magFilter===Nn||x.minFilter===kt||x.minFilter===rr||x.minFilter===ss||x.minFilter===Nn)&&Le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,Ue[x.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,Ue[x.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,Ue[x.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,ft[x.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,ft[x.minFilter]),x.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,Ce[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===bt||x.minFilter!==ss&&x.minFilter!==Nn||x.type===cn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Qe(w,x){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",N),I(x));const te=x.source;let J=m.get(te);J===void 0&&(J={},m.set(te,J));const se=$(x);if(se!==w.__cacheKey){J[se]===void 0&&(J[se]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),J[se].usedTimes++;const ce=J[w.__cacheKey];ce!==void 0&&(J[w.__cacheKey].usedTimes--,ce.usedTimes===0&&k(x)),w.__cacheKey=se,w.__webglTexture=J[se].texture}return B}function Ge(w,x,B){return Math.floor(Math.floor(w/B)/x)}function wt(w,x,B,te){const se=w.updateRanges;if(se.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,B,te,x.data);else{se.sort((R,Z)=>R.start-Z.start);let ce=0;for(let R=1;R<se.length;R++){const Z=se[ce],X=se[R],oe=Z.start+Z.count,ie=Ge(X.start,x.width,4),re=Ge(Z.start,x.width,4);X.start<=oe+1&&ie===re&&Ge(X.start+X.count-1,x.width,4)===ie?Z.count=Math.max(Z.count,X.start+X.count-Z.start):(++ce,se[ce]=X)}se.length=ce+1;const q=t.getParameter(i.UNPACK_ROW_LENGTH),K=t.getParameter(i.UNPACK_SKIP_PIXELS),ae=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let R=0,Z=se.length;R<Z;R++){const X=se[R],oe=Math.floor(X.start/4),ie=Math.ceil(X.count/4),re=oe%x.width,be=Math.floor(oe/x.width),ze=ie,ne=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,re),t.pixelStorei(i.UNPACK_SKIP_ROWS,be),t.texSubImage2D(i.TEXTURE_2D,0,re,be,ze,ne,B,te,x.data)}w.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,q),t.pixelStorei(i.UNPACK_SKIP_PIXELS,K),t.pixelStorei(i.UNPACK_SKIP_ROWS,ae)}}function gt(w,x,B){let te=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(te=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(te=i.TEXTURE_3D);const J=Qe(w,x),se=x.source;t.bindTexture(te,w.__webglTexture,i.TEXTURE0+B);const ce=n.get(se);if(se.version!==ce.__version||J===!0){if(t.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const ne=Xe.getPrimaries(Xe.workingColorSpace),we=x.colorSpace===In?null:Xe.getPrimaries(x.colorSpace),Oe=x.colorSpace===In||ne===we?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe)}t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let K=S(x.image,!1,s.maxTextureSize);K=Re(x,K);const ae=r.convert(x.format,x.colorSpace),R=r.convert(x.type);let Z=y(x.internalFormat,ae,R,x.normalized,x.colorSpace,x.isVideoTexture);$e(te,x);let X;const oe=x.mipmaps,ie=x.isVideoTexture!==!0,re=ce.__version===void 0||J===!0,be=se.dataReady,ze=M(x,K);if(x.isDepthTexture)Z=f(x.format===Un,x.type),re&&(ie?t.texStorage2D(i.TEXTURE_2D,1,Z,K.width,K.height):t.texImage2D(i.TEXTURE_2D,0,Z,K.width,K.height,0,ae,R,null));else if(x.isDataTexture)if(oe.length>0){ie&&re&&t.texStorage2D(i.TEXTURE_2D,ze,Z,oe[0].width,oe[0].height);for(let ne=0,we=oe.length;ne<we;ne++)X=oe[ne],ie?be&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,X.width,X.height,ae,R,X.data):t.texImage2D(i.TEXTURE_2D,ne,Z,X.width,X.height,0,ae,R,X.data);x.generateMipmaps=!1}else ie?(re&&t.texStorage2D(i.TEXTURE_2D,ze,Z,K.width,K.height),be&&wt(x,K,ae,R)):t.texImage2D(i.TEXTURE_2D,0,Z,K.width,K.height,0,ae,R,K.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){ie&&re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ze,Z,oe[0].width,oe[0].height,K.depth);for(let ne=0,we=oe.length;ne<we;ne++)if(X=oe[ne],x.format!==hn)if(ae!==null)if(ie){if(be)if(x.layerUpdates.size>0){const Oe=Go(X.width,X.height,x.format,x.type);for(const ue of x.layerUpdates){const Ze=X.data.subarray(ue*Oe/X.data.BYTES_PER_ELEMENT,(ue+1)*Oe/X.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,ue,X.width,X.height,1,ae,Ze)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,X.width,X.height,K.depth,ae,X.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ne,Z,X.width,X.height,K.depth,0,X.data,0,0);else Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ie?be&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,X.width,X.height,K.depth,ae,R,X.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ne,Z,X.width,X.height,K.depth,0,ae,R,X.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{ie&&re&&t.texStorage2D(i.TEXTURE_2D,ze,Z,oe[0].width,oe[0].height);for(let ne=0,we=oe.length;ne<we;ne++)X=oe[ne],x.format!==hn?ae!==null?ie?be&&t.compressedTexSubImage2D(i.TEXTURE_2D,ne,0,0,X.width,X.height,ae,X.data):t.compressedTexImage2D(i.TEXTURE_2D,ne,Z,X.width,X.height,0,X.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?be&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,X.width,X.height,ae,R,X.data):t.texImage2D(i.TEXTURE_2D,ne,Z,X.width,X.height,0,ae,R,X.data)}else if(x.isDataArrayTexture)if(ie){if(re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ze,Z,K.width,K.height,K.depth),be)if(x.layerUpdates.size>0){const ne=Go(K.width,K.height,x.format,x.type);for(const we of x.layerUpdates){const Oe=K.data.subarray(we*ne/K.data.BYTES_PER_ELEMENT,(we+1)*ne/K.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,we,K.width,K.height,1,ae,R,Oe)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ae,R,K.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Z,K.width,K.height,K.depth,0,ae,R,K.data);else if(x.isData3DTexture)ie?(re&&t.texStorage3D(i.TEXTURE_3D,ze,Z,K.width,K.height,K.depth),be&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ae,R,K.data)):t.texImage3D(i.TEXTURE_3D,0,Z,K.width,K.height,K.depth,0,ae,R,K.data);else if(x.isFramebufferTexture){if(re)if(ie)t.texStorage2D(i.TEXTURE_2D,ze,Z,K.width,K.height);else{let ne=K.width,we=K.height;for(let Oe=0;Oe<ze;Oe++)t.texImage2D(i.TEXTURE_2D,Oe,Z,ne,we,0,ae,R,null),ne>>=1,we>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){const ne=i.canvas;if(ne.hasAttribute("layoutsubtree")||ne.setAttribute("layoutsubtree","true"),K.parentNode!==ne){ne.appendChild(K),g.add(x),ne.onpaint=we=>{const Oe=we.changedElements;for(const ue of g)Oe.includes(ue.image)&&(ue.needsUpdate=!0)},ne.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,K);else{const Oe=i.RGBA,ue=i.RGBA,Ze=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Oe,ue,Ze,K)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(oe.length>0){if(ie&&re){const ne=De(oe[0]);t.texStorage2D(i.TEXTURE_2D,ze,Z,ne.width,ne.height)}for(let ne=0,we=oe.length;ne<we;ne++)X=oe[ne],ie?be&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,ae,R,X):t.texImage2D(i.TEXTURE_2D,ne,Z,ae,R,X);x.generateMipmaps=!1}else if(ie){if(re){const ne=De(K);t.texStorage2D(i.TEXTURE_2D,ze,Z,ne.width,ne.height)}be&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ae,R,K)}else t.texImage2D(i.TEXTURE_2D,0,Z,ae,R,K);A(x)&&x.mipmapsAutoUpdate===!0&&T(te),ce.__version=se.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function Bt(w,x,B){if(x.image.length!==6)return;const te=Qe(w,x),J=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+B);const se=n.get(J);if(J.version!==se.__version||te===!0){t.activeTexture(i.TEXTURE0+B);const ce=Xe.getPrimaries(Xe.workingColorSpace),q=x.colorSpace===In?null:Xe.getPrimaries(x.colorSpace),K=x.colorSpace===In||ce===q?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);const ae=x.isCompressedTexture||x.image[0].isCompressedTexture,R=x.image[0]&&x.image[0].isDataTexture,Z=[];for(let ue=0;ue<6;ue++)!ae&&!R?Z[ue]=S(x.image[ue],!0,s.maxCubemapSize):Z[ue]=R?x.image[ue].image:x.image[ue],Z[ue]=Re(x,Z[ue]);const X=Z[0],oe=r.convert(x.format,x.colorSpace),ie=r.convert(x.type);let re=y(x.internalFormat,oe,ie,x.normalized,x.colorSpace);const be=x.isVideoTexture!==!0,ze=se.__version===void 0||te===!0,ne=J.dataReady;let we=M(x,X);$e(i.TEXTURE_CUBE_MAP,x);let Oe;if(x.isDepthTexture){if(re=f(x.format===Un,x.type),ze)if(be)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,re,X.width,X.height);else for(let ue=0;ue<6;ue++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,re,X.width,X.height,0,oe,ie,null)}else if(ae){be&&ze&&t.texStorage2D(i.TEXTURE_CUBE_MAP,we,re,X.width,X.height);for(let ue=0;ue<6;ue++){Oe=Z[ue].mipmaps;for(let Ze=0;Ze<Oe.length;Ze++){const St=Oe[Ze];x.format!==hn?oe!==null?be?ne&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ze,0,0,St.width,St.height,oe,St.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ze,re,St.width,St.height,0,St.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):be?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ze,0,0,St.width,St.height,oe,ie,St.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ze,re,St.width,St.height,0,oe,ie,St.data)}}}else{if(Oe=x.mipmaps,be&&ze){Oe.length>0&&we++;const ue=De(Z[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,we,re,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(R){be?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Z[ue].width,Z[ue].height,oe,ie,Z[ue].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,re,Z[ue].width,Z[ue].height,0,oe,ie,Z[ue].data);for(let Ze=0;Ze<Oe.length;Ze++){const bn=Oe[Ze].image[ue].image;be?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ze+1,0,0,bn.width,bn.height,oe,ie,bn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ze+1,re,bn.width,bn.height,0,oe,ie,bn.data)}}else{be?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,oe,ie,Z[ue]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,re,oe,ie,Z[ue]);for(let Ze=0;Ze<Oe.length;Ze++){const St=Oe[Ze];be?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ze+1,0,0,oe,ie,St.image[ue]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ze+1,re,oe,ie,St.image[ue])}}}A(x)&&x.mipmapsAutoUpdate===!0&&T(i.TEXTURE_CUBE_MAP),se.__version=J.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function at(w,x,B,te,J,se){const ce=r.convert(B.format,B.colorSpace),q=r.convert(B.type),K=y(B.internalFormat,ce,q,B.normalized,B.colorSpace),ae=n.get(x),R=n.get(B);if(R.__renderTarget=x,!ae.__hasExternalTextures){const Z=Math.max(1,x.width>>se),X=Math.max(1,x.height>>se);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,se,K,Z,X,x.depth,0,ce,q,null):t.texImage2D(J,se,K,Z,X,0,ce,q,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),de(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,J,R.__webglTexture,0,rt(x)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,te,J,R.__webglTexture,se),t.bindFramebuffer(i.FRAMEBUFFER,null)}function rn(w,x,B){if(i.bindRenderbuffer(i.RENDERBUFFER,w),x.depthBuffer){const te=x.depthTexture,J=te&&te.isDepthTexture?te.type:null,se=f(x.stencilBuffer,J),ce=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;de(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt(x),se,x.width,x.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,rt(x),se,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,se,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,w)}else{const te=x.textures;for(let J=0;J<te.length;J++){const se=te[J],ce=r.convert(se.format,se.colorSpace),q=r.convert(se.type),K=y(se.internalFormat,ce,q,se.normalized,se.colorSpace);de(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt(x),K,x.width,x.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,rt(x),K,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,K,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Mt(w,x,B){const te=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const J=n.get(x.depthTexture);J.__renderTarget=x;const se=te?x.depthTexture.image[0]:x.depthTexture.image;(!J.__webglTexture||se.width!==x.width||se.height!==x.height)&&(se.width=x.width,se.height=x.height,x.depthTexture.needsUpdate=!0),te?me(x.depthTexture,0):pe(x.depthTexture,0);const ce=J.__webglTexture,q=rt(x),K=te?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,ae=x.depthTexture.format===Un?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Bn)de(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,K,ce,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,ae,K,ce,0);else if(x.depthTexture.format===Un)de(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,K,ce,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,ae,K,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Wt(w){const x=n.get(w),B=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){const te=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),te){const J=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,te.removeEventListener("dispose",J)};te.addEventListener("dispose",J),x.__depthDisposeCallback=J}x.__boundDepthTexture=te}if(w.depthTexture&&!x.__autoAllocateDepthBuffer)if(B)for(let te=0;te<6;te++)Mt(x.__webglFramebuffer[te],w,te);else w.texture.mipmaps.length>0?Mt(x.__webglFramebuffer[0],w,0):Mt(x.__webglFramebuffer,w,0);else if(B){x.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[te]),x.__webglDepthbuffer[te]===void 0)x.__webglDepthbuffer[te]=i.createRenderbuffer(),rn(x.__webglDepthbuffer[te],w,!1);else{const J=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=x.__webglDepthbuffer[te];i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,se)}}else if(w.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),rn(x.__webglDepthbuffer,w,!1);else{const J=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,se)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Xt(w,x,B){const te=n.get(w);x!==void 0&&at(te.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Wt(w)}function qt(w){const x=w.texture,B=n.get(w),te=n.get(x);w.addEventListener("dispose",F),I(w);const J=w.textures,se=w.isWebGLCubeRenderTarget===!0,ce=J.length>1;if(ce||(te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture()),te.__version=x.version,a.memory.textures++),se){B.__webglFramebuffer=[];for(let q=0;q<6;q++)if(x.mipmaps.length>0){B.__webglFramebuffer[q]=[];for(let K=0;K<x.mipmaps.length;K++)B.__webglFramebuffer[q][K]=i.createFramebuffer()}else B.__webglFramebuffer[q]=i.createFramebuffer()}else{if(x.mipmaps.length>0){B.__webglFramebuffer=[];for(let q=0;q<x.mipmaps.length;q++)B.__webglFramebuffer[q]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(ce)for(let q=0,K=J.length;q<K;q++){const ae=n.get(J[q]);ae.__webglTexture===void 0&&(ae.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&de(w)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let q=0;q<J.length;q++){const K=J[q];B.__webglColorRenderbuffer[q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[q]);const ae=r.convert(K.format,K.colorSpace),R=r.convert(K.type),Z=y(K.internalFormat,ae,R,K.normalized,K.colorSpace,w.isXRRenderTarget===!0),X=rt(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,X,Z,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+q,i.RENDERBUFFER,B.__webglColorRenderbuffer[q])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),rn(B.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(se){t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),$e(i.TEXTURE_CUBE_MAP,x);for(let q=0;q<6;q++)if(x.mipmaps.length>0)for(let K=0;K<x.mipmaps.length;K++)at(B.__webglFramebuffer[q][K],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+q,K);else at(B.__webglFramebuffer[q],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);A(x)?T(i.TEXTURE_CUBE_MAP):x.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),t.unbindTexture()}else if(ce){for(let q=0,K=J.length;q<K;q++){const ae=J[q],R=n.get(ae);let Z=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Z=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Z,R.__webglTexture),$e(Z,ae),at(B.__webglFramebuffer,w,ae,i.COLOR_ATTACHMENT0+q,Z,0),A(ae)&&T(Z)}t.unbindTexture()}else{let q=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(q=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(q,te.__webglTexture),$e(q,x),x.mipmaps.length>0)for(let K=0;K<x.mipmaps.length;K++)at(B.__webglFramebuffer[K],w,x,i.COLOR_ATTACHMENT0,q,K);else at(B.__webglFramebuffer,w,x,i.COLOR_ATTACHMENT0,q,0);A(x)?T(q):x.mipmaps.length>0&&i.texParameteri(q,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),t.unbindTexture()}w.depthBuffer&&Wt(w)}function U(w){const x=w.textures;for(let B=0,te=x.length;B<te;B++){const J=x[B];if(A(J)&&J.mipmapsAutoUpdate===!0){const se=b(w),ce=n.get(J).__webglTexture;t.bindTexture(se,ce),T(se),t.unbindTexture()}}}const Yt=[];function st(w){if(w.samples>0){if(de(w)===!1){const x=w.textures,B=w.width,te=w.height;let J=i.COLOR_BUFFER_BIT;const se=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=n.get(w),q=x.length>1;if(q)for(let ae=0;ae<x.length;ae++)t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),w.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let ae=0;ae<x.length;ae++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ce.__webglColorRenderbuffer[ae]);const R=n.get(x[ae]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,R,0)}i.blitFramebuffer(0,0,B,te,0,0,B,te,J,i.NEAREST),l===!0&&(Yt.length=0,Yt.push(i.COLOR_ATTACHMENT0+ae),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&Yt.push(se),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Yt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),q)for(let ae=0;ae<x.length;ae++){t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,ce.__webglColorRenderbuffer[ae]);const R=n.get(x[ae]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,R,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&l){const x=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function rt(w){return Math.min(s.maxSamples,w.samples)}function de(w){const x=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function _t(w){const x=a.render.frame;u.get(w)!==x&&(u.set(w,x),w.update())}function Re(w,x){const B=w.colorSpace,te=w.format,J=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||B!==Gs&&B!==In&&(Xe.getTransfer(B)===Je?(te!==hn||J!==Vt)&&Le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ye("WebGLTextures: Unsupported texture color space:",B)),x}function De(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=Pe,this.resetTextureUnits=Q,this.getTextureUnits=j,this.setTextureUnits=ve,this.setTexture2D=pe,this.setTexture2DArray=Me,this.setTexture3D=Ae,this.setTextureCube=me,this.rebindTextures=Xt,this.setupRenderTarget=qt,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=st,this.setupDepthRenderbuffer=Wt,this.setupFrameBufferTexture=at,this.useMultisampledRTT=de,this.dispose=G}function Im(i,e){function t(n,s=In){let r;const a=Xe.getTransfer(s);if(n===Vt)return i.UNSIGNED_BYTE;if(n===Aa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ra)return i.UNSIGNED_SHORT_5_5_5_1;if(n===wl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Al)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===bl)return i.BYTE;if(n===Tl)return i.SHORT;if(n===Ki)return i.UNSIGNED_SHORT;if(n===wa)return i.INT;if(n===fn)return i.UNSIGNED_INT;if(n===cn)return i.FLOAT;if(n===pn)return i.HALF_FLOAT;if(n===Rl)return i.ALPHA;if(n===Cl)return i.RGB;if(n===hn)return i.RGBA;if(n===Bn)return i.DEPTH_COMPONENT;if(n===Un)return i.DEPTH_STENCIL;if(n===Pl)return i.RED;if(n===Ca)return i.RED_INTEGER;if(n===Qn)return i.RG;if(n===Pa)return i.RG_INTEGER;if(n===La)return i.RGBA_INTEGER;if(n===Ps||n===Ls||n===Ds||n===Is)if(a===Je)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ps)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ls)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ds)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Is)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ps)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ls)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ds)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Is)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Hr||n===Vr||n===Wr||n===Xr)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Hr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Vr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Wr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Xr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===qr||n===Yr||n===Kr||n===$r||n===Zr||n===zs||n===Jr)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===qr||n===Yr)return a===Je?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Kr)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===$r)return r.COMPRESSED_R11_EAC;if(n===Zr)return r.COMPRESSED_SIGNED_R11_EAC;if(n===zs)return r.COMPRESSED_RG11_EAC;if(n===Jr)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Qr||n===jr||n===ea||n===ta||n===na||n===ia||n===sa||n===ra||n===aa||n===oa||n===la||n===ca||n===ha||n===da)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Qr)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===jr)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ea)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ta)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===na)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ia)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===sa)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ra)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===aa)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===oa)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===la)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ca)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ha)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===da)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ua||n===fa||n===pa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ua)return a===Je?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===fa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===pa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ma||n===ga||n===ks||n===_a)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ma)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ga)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ks)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===_a)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Si?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Nm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Um=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Fm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new ql(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new kn({vertexShader:Nm,fragmentShader:Um,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new nt(new Qi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Om extends jn{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,g=null,p=null,m=null,_=null;const E=typeof XRWebGLBinding<"u",h=new Fm,d={},S=t.getContextAttributes();let A=null,T=null;const b=[],y=[],f=new Fe;let M=null,I=null;const C=new zt;C.viewport=new ct;const N=new zt;N.viewport=new ct;const F=[C,N],V=new Yh;let P=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let pe=b[$];return pe===void 0&&(pe=new ur,b[$]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function($){let pe=b[$];return pe===void 0&&(pe=new ur,b[$]=pe),pe.getGripSpace()},this.getHand=function($){let pe=b[$];return pe===void 0&&(pe=new ur,b[$]=pe),pe.getHandSpace()};function Y($){const pe=y.indexOf($.inputSource);if(pe===-1)return;const Me=b[pe];Me!==void 0&&(Me.update($.inputSource,$.frame,c||a),Me.dispatchEvent({type:$.type,data:$.inputSource}))}function k(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",ee);for(let $=0;$<b.length;$++){const pe=y[$];pe!==null&&(y[$]=null,b[$].disconnect(pe))}P=null,G=null,h.reset();for(const $ in d)delete d[$];if(e.setRenderTarget(A),m=null,p=null,g=null,s=null,T=null,Pe.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(f.width,f.height,!1),I!==null){const $=I.camera;$.fov=I.fov,$.zoom=I.zoom,$.updateProjectionMatrix(),I=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&Le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&Le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return g===null&&E&&(g=new XRWebGLBinding(s,t)),g},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",k),s.addEventListener("inputsourceschange",ee),S.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(f),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Ae=null,me=null;S.depth&&(me=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=S.stencil?Un:Bn,Ae=S.stencil?Si:fn);const Ue={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:r};g=this.getBinding(),p=g.createProjectionLayer(Ue),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),T=new un(p.textureWidth,p.textureHeight,{format:hn,type:Vt,depthTexture:new yi(p.textureWidth,p.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}else{const Me={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,Me),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),T=new un(m.framebufferWidth,m.framebufferHeight,{format:hn,type:Vt,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Pe.setContext(s),Pe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function ee($){for(let pe=0;pe<$.removed.length;pe++){const Me=$.removed[pe],Ae=y.indexOf(Me);Ae>=0&&(y[Ae]=null,b[Ae].disconnect(Me))}for(let pe=0;pe<$.added.length;pe++){const Me=$.added[pe];let Ae=y.indexOf(Me);if(Ae===-1){for(let Ue=0;Ue<b.length;Ue++)if(Ue>=y.length){y.push(Me),Ae=Ue;break}else if(y[Ue]===null){y[Ue]=Me,Ae=Ue;break}if(Ae===-1)break}const me=b[Ae];me&&me.connect(Me)}}function W($,pe){pe===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(pe.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let pe=$.near,Me=$.far;h.texture!==null&&(h.depthNear>0&&(pe=h.depthNear),h.depthFar>0&&(Me=h.depthFar)),V.near=N.near=C.near=pe,V.far=N.far=C.far=Me,(P!==V.near||G!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),P=V.near,G=V.far),V.layers.mask=$.layers.mask|6,C.layers.mask=V.layers.mask&-5,N.layers.mask=V.layers.mask&-3;const Ae=$.parent,me=V.cameras;W(V,Ae);for(let Ue=0;Ue<me.length;Ue++)W(me[Ue],Ae);V.projectionMatrix.copy(C.projectionMatrix),V.projectionMatrixInverse.copy(C.projectionMatrixInverse),I===null&&$.isPerspectiveCamera&&(I={camera:$,fov:$.fov,zoom:$.zoom}),Q($,V,Ae)};function Q($,pe,Me){Me===null?$.matrix.copy(pe.matrixWorld):($.matrix.copy(Me.matrixWorld),$.matrix.invert(),$.matrix.multiply(pe.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(pe.projectionMatrix),$.projectionMatrixInverse.copy(pe.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Zi*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function($){l=$,p!==null&&(p.fixedFoveation=$),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=$)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(V)},this.getCameraTexture=function($){return d[$]};let j=null;function ve($,pe){if(u=pe.getViewerPose(c||a),_=pe,u!==null){const Me=u.views;m!==null&&(e.setRenderTargetFramebuffer(T,m.framebuffer),e.setRenderTarget(T));let Ae=!1;Me.length!==V.cameras.length&&(V.cameras.length=0,Ae=!0);for(let Ce=0;Ce<Me.length;Ce++){const $e=Me[Ce];let Qe=null;if(m!==null)Qe=m.getViewport($e);else{const wt=g.getViewSubImage(p,$e);Qe=wt.viewport,Ce===0&&(e.setRenderTargetTextures(T,wt.colorTexture,wt.depthStencilTexture),e.setRenderTarget(T))}let Ge=F[Ce];Ge===void 0&&(Ge=new zt,Ge.layers.enable(Ce),Ge.viewport=new ct,F[Ce]=Ge),Ge.matrix.fromArray($e.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray($e.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),Ce===0&&(V.matrix.copy(Ge.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Ae===!0&&V.cameras.push(Ge)}const me=s.enabledFeatures;if(me&&me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&E){g=n.getBinding();const Ce=g.getDepthInformation(Me[0]);Ce&&Ce.isValid&&Ce.texture&&h.init(Ce,s.renderState)}if(me&&me.includes("camera-access")&&E){e.state.unbindTexture(),g=n.getBinding();for(let Ce=0;Ce<Me.length;Ce++){const $e=Me[Ce].camera;if($e){let Qe=d[$e];Qe||(Qe=new ql,d[$e]=Qe);const Ge=g.getCameraImage($e);Qe.sourceTexture=Ge}}}}for(let Me=0;Me<b.length;Me++){const Ae=y[Me],me=b[Me];Ae!==null&&me!==void 0&&me.update(Ae,pe,c||a)}j&&j($,pe),pe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:pe}),_=null}const Pe=new Jl;Pe.setAnimationLoop(ve),this.setAnimationLoop=function($){j=$},this.dispose=function(){}}}const Bm=new it,oc=new Ie;oc.set(-1,0,0,0,1,0,0,0,1);function zm(i,e){function t(h,d){h.matrixAutoUpdate===!0&&h.updateMatrix(),d.value.copy(h.matrix)}function n(h,d){d.color.getRGB(h.fogColor.value,Yl(i)),d.isFog?(h.fogNear.value=d.near,h.fogFar.value=d.far):d.isFogExp2&&(h.fogDensity.value=d.density)}function s(h,d,S,A,T){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(h,d):d.isMeshLambertMaterial?(r(h,d),d.envMap&&(h.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(h,d),g(h,d)):d.isMeshPhongMaterial?(r(h,d),u(h,d),d.envMap&&(h.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(h,d),p(h,d),d.isMeshPhysicalMaterial&&m(h,d,T)):d.isMeshMatcapMaterial?(r(h,d),_(h,d)):d.isMeshDepthMaterial?r(h,d):d.isMeshDistanceMaterial?(r(h,d),E(h,d)):d.isMeshNormalMaterial?r(h,d):d.isLineBasicMaterial?(a(h,d),d.isLineDashedMaterial&&o(h,d)):d.isPointsMaterial?l(h,d,S,A):d.isSpriteMaterial?c(h,d):d.isShadowMaterial?(h.color.value.copy(d.color),h.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(h,d){h.opacity.value=d.opacity,d.color&&h.diffuse.value.copy(d.color),d.emissive&&h.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(h.map.value=d.map,t(d.map,h.mapTransform)),d.alphaMap&&(h.alphaMap.value=d.alphaMap,t(d.alphaMap,h.alphaMapTransform)),d.bumpMap&&(h.bumpMap.value=d.bumpMap,t(d.bumpMap,h.bumpMapTransform),h.bumpScale.value=d.bumpScale,d.side===Ot&&(h.bumpScale.value*=-1)),d.normalMap&&(h.normalMap.value=d.normalMap,t(d.normalMap,h.normalMapTransform),h.normalScale.value.copy(d.normalScale),d.side===Ot&&h.normalScale.value.negate()),d.displacementMap&&(h.displacementMap.value=d.displacementMap,t(d.displacementMap,h.displacementMapTransform),h.displacementScale.value=d.displacementScale,h.displacementBias.value=d.displacementBias),d.emissiveMap&&(h.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,h.emissiveMapTransform)),d.specularMap&&(h.specularMap.value=d.specularMap,t(d.specularMap,h.specularMapTransform)),d.alphaTest>0&&(h.alphaTest.value=d.alphaTest);const S=e.get(d),A=S.envMap,T=S.envMapRotation;A&&(h.envMap.value=A,h.envMapRotation.value.setFromMatrix4(Bm.makeRotationFromEuler(T)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&h.envMapRotation.value.premultiply(oc),h.reflectivity.value=d.reflectivity,h.ior.value=d.ior,h.refractionRatio.value=d.refractionRatio),d.lightMap&&(h.lightMap.value=d.lightMap,h.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,h.lightMapTransform)),d.aoMap&&(h.aoMap.value=d.aoMap,h.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,h.aoMapTransform))}function a(h,d){h.diffuse.value.copy(d.color),h.opacity.value=d.opacity,d.map&&(h.map.value=d.map,t(d.map,h.mapTransform))}function o(h,d){h.dashSize.value=d.dashSize,h.totalSize.value=d.dashSize+d.gapSize,h.scale.value=d.scale}function l(h,d,S,A){h.diffuse.value.copy(d.color),h.opacity.value=d.opacity,h.size.value=d.size*S,h.scale.value=A*.5,d.map&&(h.map.value=d.map,t(d.map,h.uvTransform)),d.alphaMap&&(h.alphaMap.value=d.alphaMap,t(d.alphaMap,h.alphaMapTransform)),d.alphaTest>0&&(h.alphaTest.value=d.alphaTest)}function c(h,d){h.diffuse.value.copy(d.color),h.opacity.value=d.opacity,h.rotation.value=d.rotation,d.map&&(h.map.value=d.map,t(d.map,h.mapTransform)),d.alphaMap&&(h.alphaMap.value=d.alphaMap,t(d.alphaMap,h.alphaMapTransform)),d.alphaTest>0&&(h.alphaTest.value=d.alphaTest)}function u(h,d){h.specular.value.copy(d.specular),h.shininess.value=Math.max(d.shininess,1e-4)}function g(h,d){d.gradientMap&&(h.gradientMap.value=d.gradientMap)}function p(h,d){h.metalness.value=d.metalness,d.metalnessMap&&(h.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,h.metalnessMapTransform)),h.roughness.value=d.roughness,d.roughnessMap&&(h.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,h.roughnessMapTransform)),d.envMap&&(h.envMapIntensity.value=d.envMapIntensity)}function m(h,d,S){h.ior.value=d.ior,d.diffuseRoughness>0&&(h.diffuseRoughness.value=d.diffuseRoughness,d.diffuseRoughnessMap&&(h.diffuseRoughnessMap.value=d.diffuseRoughnessMap,t(d.diffuseRoughnessMap,h.diffuseRoughnessMapTransform))),d.sheen>0&&(h.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),h.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(h.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,h.sheenColorMapTransform)),d.sheenRoughnessMap&&(h.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,h.sheenRoughnessMapTransform))),d.clearcoat>0&&(h.clearcoat.value=d.clearcoat,h.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(h.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,h.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(h.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ot&&h.clearcoatNormalScale.value.negate())),d.dispersion>0&&(h.dispersion.value=d.dispersion),d.retroreflectivity>0&&(h.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(h.iridescence.value=d.iridescence,h.iridescenceIOR.value=d.iridescenceIOR,h.iridescenceThicknessMinimum.value=d.iridescenceThicknessMinimum,h.iridescenceThicknessMaximum.value=d.iridescenceThicknessMaximum,d.iridescenceMap&&(h.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,h.iridescenceMapTransform)),d.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),d.transmission>0&&(h.transmission.value=d.transmission,h.transmissionSamplerMap.value=S.texture,h.transmissionSamplerSize.value.set(S.width,S.height),d.transmissionMap&&(h.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,h.transmissionMapTransform)),h.thickness.value=d.thickness,d.thicknessMap&&(h.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=d.attenuationDistance,h.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(h.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(h.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=d.specularIntensity,h.specularColor.value.copy(d.specularColor),d.specularColorMap&&(h.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,h.specularColorMapTransform)),d.specularIntensityMap&&(h.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,h.specularIntensityMapTransform))}function _(h,d){d.matcap&&(h.matcap.value=d.matcap)}function E(h,d){const S=e.get(d).light;h.referencePosition.value.setFromMatrixPosition(S.matrixWorld),h.nearDistance.value=S.shadow.camera.near,h.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function km(i,e,t,n){let s={},r={};function a(S,A){const T=A.program;n.uniformBlockBinding(S,T,s[S.id])}function o(S,A){let T=s[S.id];T===void 0&&(_(S),T=l(S),s[S.id]=T,S.addEventListener("dispose",h));const b=A.program;n.updateUBOMapping(S,b);const y=e.render.frame;r[S.id]!==y&&(c(S),r[S.id]=y)}function l(S){const A=i.createBuffer(),T=S.__size,b=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,T,b),i.bindBuffer(i.UNIFORM_BUFFER,null),A}function c(S){const A=s[S.id],T=S.uniforms,b=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let y=0,f=T.length;y<f;y++){const M=T[y];if(Array.isArray(M))for(let I=0,C=M.length;I<C;I++)u(M[I],y,I,b);else u(M,y,0,b)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(S,A,T,b){if(p(S,A,T,b)===!0){const y=S.__offset,f=S.value;if(Array.isArray(f)){let M=0;for(let I=0;I<f.length;I++){const C=f[I],N=E(C,!0);g(C,S.__data,M),M+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else g(f,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,S.__data)}}function g(S,A,T){typeof S=="number"||typeof S=="boolean"?A[T]=S:S.isMatrix3?(A[T]=S.elements[0],A[T+1]=S.elements[1],A[T+2]=S.elements[2],A[T+3]=0,A[T+4]=S.elements[3],A[T+5]=S.elements[4],A[T+6]=S.elements[5],A[T+7]=0,A[T+8]=S.elements[6],A[T+9]=S.elements[7],A[T+10]=S.elements[8],A[T+11]=0):ArrayBuffer.isView(S)?A.set(S.subarray(0,A.length-T),T):S.toArray(A,T)}function p(S,A,T,b){const y=S.value,f=A+"_"+T;if(Array.isArray(y)){b[f]===void 0&&(b[f]=[]);const M=b[f];let I=!1;for(let C=0;C<y.length;C++)m(y[C],M,C)===!0&&(I=!0);return I}return m(y,b,f)}function m(S,A,T){if(A[T]===void 0)return typeof S=="number"||typeof S=="boolean"?A[T]=S:ArrayBuffer.isView(S)?A[T]=S.slice():A[T]=S.clone(),!0;{const b=A[T];if(typeof S=="number"||typeof S=="boolean"){if(b!==S)return A[T]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(b.equals(S)===!1)return b.copy(S),!0}}return!1}function _(S){const A=S.uniforms;let T=0;const b=16;for(let f=0,M=A.length;f<M;f++){const I=Array.isArray(A[f])?A[f]:[A[f]];for(let C=0,N=I.length;C<N;C++){const F=I[C],V=Array.isArray(F.value)?F.value:[F.value],P=Array.isArray(A[f])||Array.isArray(F.value);let G=T;for(let k=0,ee=V.length;k<ee;k++){const W=V[k],Q=E(W,P),j=T%b,ve=j%Q.boundary,Pe=j+ve;T+=ve,Pe!==0&&b-Pe<Q.storage&&(T+=b-Pe),k===0&&(G=T),T+=Q.storage}const Y=F.type==="int"?Int32Array:F.type==="uint"?Uint32Array:Float32Array;F.__data=new Y((T-G)/Float32Array.BYTES_PER_ELEMENT),F.__offset=G}}const y=T%b;return y>0&&(T+=b-y),S.__size=T,S.__cache={},this}function E(S,A){const T={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(T.boundary=4,T.storage=4):S.isVector2?(T.boundary=8,T.storage=8):S.isVector3||S.isColor?(T.boundary=16,T.storage=12):S.isVector4?(T.boundary=16,T.storage=16):S.isMatrix3?(T.boundary=16,T.storage=48):S.isMatrix4?(T.boundary=16,T.storage=64):S.isTexture?Le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(T.boundary=16,T.storage=S.byteLength):Le("WebGLRenderer: Unsupported uniform value type.",S),A===!0&&(T.boundary=16,T.storage=Math.ceil(T.storage/16)*16),T}function h(S){const A=S.target;A.removeEventListener("dispose",h),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function d(){for(const S in s)i.deleteBuffer(s[S]);s={},r={}}return{bind:a,update:o,dispose:d}}const Gm=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let on=null;function Hm(){return on===null&&(on=new Uh(Gm,16,16,Qn,pn),on.name="DFG_LUT",on.minFilter=kt,on.magFilter=kt,on.wrapS=Sn,on.wrapT=Sn,on.generateMipmaps=!1,on.needsUpdate=!0),on}class lc{constructor(e={}){const{canvas:t=Zc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:p=!1,outputBufferType:m=Vt}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;const E=m,h=new Set([La,Pa,Ca]),d=new Set([Vt,fn,Ki,Si,Aa,Ra]),S=new Uint32Array(4),A=new Int32Array(4),T={textures:[],min:[],max:[],resolution:[]};let b=null,y=null;const f=[],M=[];let I=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=dn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let N=!1,F=null,V=null,P=null,G=null;this._outputColorSpace=Rt;let Y=0,k=0,ee=null,W=-1,Q=null;const j=new ct,ve=new ct;let Pe=null;const $=new Be(0);let pe=0,Me=t.width,Ae=t.height,me=1,Ue=null,ft=null;const Ce=new ct(0,0,Me,Ae),$e=new ct(0,0,Me,Ae);let Qe=!1;const Ge=new Ji,wt=new ka;let gt=!1,Bt=!1;const at=new it,rn=new D,Mt=new ct,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xt=!1;function qt(){return ee===null?me:1}let U=n;function Yt(v,L){return t.getContext(v,L)}let st,rt,de,_t,Re,De,w,x,B,te,J,se,ce,q,K,ae,R,Z,X,oe,ie,re,be;try{const v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ba}`),t.addEventListener("webglcontextlost",we,!1),t.addEventListener("webglcontextrestored",Oe,!1),t.addEventListener("webglcontextcreationerror",ue,!1),U===null){const L="webgl2";if(U=Yt(L,v),U===null)throw Yt(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ze()}catch(v){throw t.removeEventListener("webglcontextlost",we,!1),t.removeEventListener("webglcontextrestored",Oe,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),Ye("WebGLRenderer: "+v.message),v}function ze(){st=new qf(U),st.init(),ie=new Im(U,st),rt=new Uf(U,st,e,ie),de=new Lm(U,st),rt.reversedDepthBuffer&&p&&de.buffers.depth.setReversed(!0),V=U.createFramebuffer(),P=U.createFramebuffer(),G=U.createFramebuffer(),_t=new $f(U),Re=new _m,De=new Dm(U,st,de,Re,rt,ie,_t),w=new Xf(C),x=new Zh(U),re=new If(U,x),B=new Yf(U,x,_t,re),te=new Jf(U,B,x,re,_t),Z=new Zf(U,rt,De),K=new Ff(Re),J=new gm(C,w,st,rt,re,K),se=new zm(C,Re),ce=new vm,q=new Tm(st),R=new Df(C,w,de,te,_,l),ae=new Pm(C,te,rt),be=new km(U,_t,rt,de),X=new Nf(U,st,_t),oe=new Kf(U,st,_t),_t.programs=J.programs,C.capabilities=rt,C.extensions=st,C.properties=Re,C.renderLists=ce,C.shadowMap=ae,C.state=de,C.info=_t}E!==Vt&&(I=new jf(E,t.width,t.height,o,s,r));const ne=new Om(C,U);this.xr=ne,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const v=st.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=st.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(v){v!==void 0&&(me=v,this.setSize(Me,Ae,!1))},this.getSize=function(v){return v.set(Me,Ae)},this.setSize=function(v,L,H=!0){if(ne.isPresenting){Le("WebGLRenderer: Can't change size while VR device is presenting.");return}Me=v,Ae=L,t.width=Math.floor(v*me),t.height=Math.floor(L*me),H===!0&&(t.style.width=v+"px",t.style.height=L+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,v,L)},this.getDrawingBufferSize=function(v){return v.set(Me*me,Ae*me).floor()},this.setDrawingBufferSize=function(v,L,H){Me=v,Ae=L,me=H,t.width=Math.floor(v*H),t.height=Math.floor(L*H),this.setViewport(0,0,v,L)},this.setEffects=function(v){if(E===Vt){Ye("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let L=0;L<v.length;L++)if(v[L].isOutputPass===!0){Le("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(j)},this.getViewport=function(v){return v.copy(Ce)},this.setViewport=function(v,L,H,O){v.isVector4?Ce.set(v.x,v.y,v.z,v.w):Ce.set(v,L,H,O),de.viewport(j.copy(Ce).multiplyScalar(qt()).round())},this.getScissor=function(v){return v.copy($e)},this.setScissor=function(v,L,H,O){v.isVector4?$e.set(v.x,v.y,v.z,v.w):$e.set(v,L,H,O),de.scissor(ve.copy($e).multiplyScalar(qt()).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(v){de.setScissorTest(Qe=v)},this.setOpaqueSort=function(v){Ue=v},this.setTransparentSort=function(v){ft=v},this.getClearColor=function(v){return v.copy(R.getClearColor())},this.setClearColor=function(){R.setClearColor(...arguments)},this.getClearAlpha=function(){return R.getClearAlpha()},this.setClearAlpha=function(){R.setClearAlpha(...arguments)},this.clear=function(v=!0,L=!0,H=!0){let O=0;if(v){let z=!1;if(ee!==null){const he=ee.texture.format;z=h.has(he)}if(z){const he=ee.texture.type,xe=d.has(he),le=R.getClearColor(),ge=R.getClearAlpha(),Ee=le.r,Ne=le.g,He=le.b;xe?(S[0]=Ee,S[1]=Ne,S[2]=He,S[3]=ge,U.clearBufferuiv(U.COLOR,0,S)):(A[0]=Ee,A[1]=Ne,A[2]=He,A[3]=ge,U.clearBufferiv(U.COLOR,0,A))}else O|=U.COLOR_BUFFER_BIT}L&&(O|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(O|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&U.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),F=v},this.dispose=function(){t.removeEventListener("webglcontextlost",we,!1),t.removeEventListener("webglcontextrestored",Oe,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),R.dispose(),ce.dispose(),q.dispose(),De.dispose(),Re.dispose(),w.dispose(),te.dispose(),B.dispose(),re.dispose(),be.dispose(),J.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",Ja),ne.removeEventListener("sessionend",Qa),Hn.stop()};function we(v){v.preventDefault(),Ws("WebGLRenderer: Context Lost."),N=!0}function Oe(){Ws("WebGLRenderer: Context Restored."),N=!1;const v=_t.autoReset,L=ae.enabled,H=ae.autoUpdate,O=ae.needsUpdate,z=ae.type;ze(),_t.autoReset=v,ae.enabled=L,ae.autoUpdate=H,ae.needsUpdate=O,ae.type=z}function ue(v){Ye("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Ze(v){const L=v.target;L.removeEventListener("dispose",Ze),St(L)}function St(v){bn(v),Re.remove(v)}function bn(v){const L=Re.get(v).programs;L!==void 0&&(L.forEach(function(H){J.releaseProgram(H)}),v.isShaderMaterial&&J.releaseShaderCache(v))}this.renderBufferDirect=function(v,L,H,O,z,he){L===null&&(L=Wt);const xe=z.isMesh&&z.matrixWorld.determinantAffine()<0,le=pc(v,L,H,O,z);de.setMaterial(O,xe);let ge=H.index,Ee=1;if(O.wireframe===!0){if(ge=B.getWireframeAttribute(H),ge===void 0)return;Ee=2}const Ne=H.drawRange,He=H.attributes.position;let Se=Ne.start*Ee,Ve=(Ne.start+Ne.count)*Ee;he!==null&&(Se=Math.max(Se,he.start*Ee),Ve=Math.min(Ve,(he.start+he.count)*Ee)),ge!==null?(Se=Math.max(Se,0),Ve=Math.min(Ve,ge.count)):He!=null&&(Se=Math.max(Se,0),Ve=Math.min(Ve,He.count));const pt=Ve-Se;if(pt<0||pt===1/0)return;re.setup(z,O,le,H,ge);let et,je=X;if(ge!==null&&(et=x.get(ge),je=oe,je.setIndex(et)),z.isMesh)O.wireframe===!0?(de.setLineWidth(O.wireframeLinewidth*qt()),je.setMode(U.LINES)):je.setMode(U.TRIANGLES);else if(z.isLine){let Ct=O.linewidth;Ct===void 0&&(Ct=1),de.setLineWidth(Ct*qt()),z.isLineSegments?je.setMode(U.LINES):z.isLineLoop?je.setMode(U.LINE_LOOP):je.setMode(U.LINE_STRIP)}else z.isPoints?je.setMode(U.POINTS):z.isSprite&&je.setMode(U.TRIANGLES);if(z.isBatchedMesh)if(st.get("WEBGL_multi_draw"))je.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Ct=z._multiDrawStarts,ye=z._multiDrawCounts,Nt=z._multiDrawCount,Ke=ge?x.get(ge).bytesPerElement:1,Vn=Re.get(O).currentProgram.getUniforms();for(let Pt=0;Pt<Nt;Pt++)Vn.setValue(U,"_gl_DrawID",Pt),je.render(Ct[Pt]/Ke,ye[Pt])}else if(z.isInstancedMesh)je.renderInstances(Se,pt,z.count);else if(H.isInstancedBufferGeometry){const Ct=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,ye=Math.min(H.instanceCount,Ct);je.renderInstances(Se,pt,ye)}else je.render(Se,pt)};function Za(v,L,H,O){F!==null&&v.isNodeMaterial&&F.setObject(O,v),gt===!0&&K.setState(v,H,!1),v.transparent===!0&&v.side===nn&&v.forceSinglePass===!1?(v.side=Ot,v.needsUpdate=!0,Ri(v,L,O),v.side=Jn,v.needsUpdate=!0,Ri(v,L,O),v.side=nn):Ri(v,L,O)}this.compile=function(v,L,H=null){H===null&&(H=v),F!==null&&F.renderStart(v,L,H),y=q.get(H),y.init(L),M.push(y),H.traverseVisible(function(z){z.isLight&&z.layers.test(L.layers)&&(y.pushLight(z),z.castShadow&&y.pushShadow(z))}),v!==H&&v.traverseVisible(function(z){z.isLight&&z.layers.test(L.layers)&&(y.pushLight(z),z.castShadow&&y.pushShadow(z))}),y.setupLights(),F!==null&&F.updateLights(y.state.lightsArray),Bt=this.localClippingEnabled,gt=K.init(this.clippingPlanes,Bt),gt===!0&&K.setGlobalState(this.clippingPlanes,L),F!==null&&ae.render(y.state.shadowsArray,H,L);const O=new Set;return v.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const he=z.material;if(he)if(Array.isArray(he))for(let xe=0;xe<he.length;xe++){const le=he[xe];Za(le,H,L,z),O.add(le)}else Za(he,H,L,z),O.add(he)}),y=M.pop(),F!==null&&F.renderEnd(),O},this.compileAsync=function(v,L,H=null){const O=this.compile(v,L,H);return new Promise(z=>{function he(){if(O.forEach(function(xe){const ge=Re.get(xe).currentProgram;(ge===void 0||ge.isReady())&&O.delete(xe)}),O.size===0){z(v);return}setTimeout(he,10)}st.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let tr=null;function uc(v){tr&&tr(v)}function Ja(){Hn.stop()}function Qa(){Hn.start()}const Hn=new Jl;Hn.setAnimationLoop(uc),typeof self<"u"&&Hn.setContext(self),this.setAnimationLoop=function(v){tr=v,ne.setAnimationLoop(v),v===null?Hn.stop():Hn.start()},ne.addEventListener("sessionstart",Ja),ne.addEventListener("sessionend",Qa),this.render=function(v,L){if(L!==void 0&&L.isCamera!==!0){Ye("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;F!==null&&F.renderStart(v,L);const H=ne.enabled===!0&&ne.isPresenting===!0,O=I!==null&&(ee===null||H)&&I.begin(C,ee);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(L),L=ne.getCamera()),v.isScene===!0&&v.onBeforeRender(C,v,L,ee),y=q.get(v,M.length),y.init(L),y.state.textureUnits=De.getTextureUnits(),M.push(y),at.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),L.isArrayCamera?wt.setFromArrayCamera(L):Ge.setFromProjectionMatrix(at,sn,L.reversedDepth),Bt=this.localClippingEnabled,gt=K.init(this.clippingPlanes,Bt),b=ce.get(v,f.length),b.init(),f.push(b),this.info.render.frame++,ne.enabled===!0&&ne.isPresenting===!0){const xe=C.xr.getDepthSensingMesh();xe!==null&&nr(xe,L,-1/0,C.sortObjects)}nr(v,L,0,C.sortObjects),b.finish(),F!==null&&F.updateLights(y.state.lightsArray),C.sortObjects===!0&&b.sort(Ue,ft),Xt=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,Xt&&R.addToRenderList(b,v),this.info.autoReset===!0&&this.info.reset(),gt===!0&&K.beginShadows();const z=y.state.shadowsArray;if(ae.render(z,v,L),gt===!0&&K.endShadows(),(O&&I.hasRenderPass())===!1){const xe=b.opaque,le=b.transmissive;if(y.setupLights(),L.isArrayCamera){const ge=L.cameras;if(le.length>0)for(let Ee=0,Ne=ge.length;Ee<Ne;Ee++){const He=ge[Ee];eo(xe,le,v,He)}Xt&&R.render(v);for(let Ee=0,Ne=ge.length;Ee<Ne;Ee++){const He=ge[Ee];ja(b,v,He,He.viewport)}}else le.length>0&&eo(xe,le,v,L),Xt&&R.render(v),ja(b,v,L)}ee!==null&&k===0&&(De.updateMultisampleRenderTarget(ee),De.updateRenderTargetMipmap(ee)),O&&I.end(C),v.isScene===!0&&v.onAfterRender(C,v,L),re.resetDefaultState(),W=-1,Q=null,M.pop(),M.length>0?(y=M[M.length-1],De.setTextureUnits(y.state.textureUnits),gt===!0&&K.setGlobalState(C.clippingPlanes,y.state.camera)):y=null,f.pop(),f.length>0?b=f[f.length-1]:b=null,F!==null&&F.renderEnd()};function nr(v,L,H,O){if(v.visible===!1)return;if(v.layers.test(L.layers)){if(v.isGroup)H=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(L);else if(v.isLight)y.pushLight(v),v.castShadow&&y.pushShadow(v);else if(v.isSprite){const xe=L.isArrayCamera?wt:Ge;if(!v.frustumCulled||v.intersectsFrustum(xe)){O&&Mt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(at);const le=te.update(v),ge=v.material;ge.visible&&b.push(v,le,ge,H,Mt.z,null,L)}}else if(v.isMesh||v.isLine||v.isPoints){const xe=L.isArrayCamera?wt:Ge;if(!v.frustumCulled||v.intersectsFrustum(xe)){const le=te.update(v),ge=v.material;if(O&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Mt.copy(v.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),Mt.copy(le.boundingSphere.center)),Mt.applyMatrix4(v.matrixWorld).applyMatrix4(at)),Array.isArray(ge)){const Ee=le.groups;for(let Ne=0,He=Ee.length;Ne<He;Ne++){const Se=Ee[Ne],Ve=ge[Se.materialIndex];Ve&&Ve.visible&&b.push(v,le,Ve,H,Mt.z,Se,L)}}else ge.visible&&b.push(v,le,ge,H,Mt.z,null,L)}}}const he=v.children;for(let xe=0,le=he.length;xe<le;xe++)nr(he[xe],L,H,O)}function ja(v,L,H,O){const{opaque:z,transmissive:he,transparent:xe}=v;y.setupLightsView(H),gt===!0&&K.setGlobalState(C.clippingPlanes,H),O&&de.viewport(j.copy(O)),z.length>0&&ns(z,L,H),he.length>0&&ns(he,L,H),xe.length>0&&ns(xe,L,H),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function eo(v,L,H,O){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[O.id]===void 0){const Se=st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[O.id]=new un(1,1,{generateMipmaps:!0,type:Se?pn:Vt,minFilter:Nn,samples:Math.max(4,rt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Xe.workingColorSpace})}const he=y.state.transmissionRenderTarget[O.id],xe=O.viewport||j;he.setSize(xe.z*C.transmissionResolutionScale,xe.w*C.transmissionResolutionScale);const le=C.getRenderTarget(),ge=C.getActiveCubeFace(),Ee=C.getActiveMipmapLevel();C.setRenderTarget(he),C.getClearColor($),pe=C.getClearAlpha(),pe<1&&C.setClearColor(16777215,.5),C.clear(),Xt&&R.render(H);const Ne=C.toneMapping;C.toneMapping=dn;const He=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),y.setupLightsView(O),gt===!0&&K.setGlobalState(C.clippingPlanes,O),ns(v,H,O),De.updateMultisampleRenderTarget(he),De.updateRenderTargetMipmap(he),st.has("WEBGL_multisampled_render_to_texture")===!1){let Se=!1;for(let Ve=0,pt=L.length;Ve<pt;Ve++){const et=L[Ve],{object:je,geometry:Ct,material:ye,group:Nt}=et;if(ye.side===nn&&je.layers.test(O.layers)){const Ke=ye.side;ye.side=Ot,ye.needsUpdate=!0,to(je,H,O,Ct,ye,Nt),ye.side=Ke,ye.needsUpdate=!0,Se=!0}}Se===!0&&(De.updateMultisampleRenderTarget(he),De.updateRenderTargetMipmap(he))}C.setRenderTarget(le,ge,Ee),C.setClearColor($,pe),He!==void 0&&(O.viewport=He),C.toneMapping=Ne}function ns(v,L,H){const O=L.isScene===!0?L.overrideMaterial:null;for(let z=0,he=v.length;z<he;z++){const xe=v[z],{object:le,geometry:ge,group:Ee}=xe;let Ne=xe.material;Ne.allowOverride===!0&&O!==null&&(Ne=O),le.layers.test(H.layers)&&to(le,L,H,ge,Ne,Ee)}}function to(v,L,H,O,z,he){F!==null&&z.isNodeMaterial&&F.setObject(v,z),v.onBeforeRender(C,L,H,O,z,he),v.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),z.onBeforeRender(C,L,H,O,v,he),z.transparent===!0&&z.side===nn&&z.forceSinglePass===!1?(z.side=Ot,z.needsUpdate=!0,C.renderBufferDirect(H,L,O,z,v,he),z.side=Jn,z.needsUpdate=!0,C.renderBufferDirect(H,L,O,z,v,he),z.side=nn):C.renderBufferDirect(H,L,O,z,v,he),v.onAfterRender(C,L,H,O,z,he)}function no(v){let L=0;for(const H of v)H.texture!==null&&L++;return L}function Ri(v,L,H){L.isScene!==!0&&(L=Wt);const O=Re.get(v),z=y.state.lights,he=y.state.shadowsArray,xe=z.state.version,le=J.getParameters(v,z.state,he,L,H,y.state.lightProbeGridArray),ge=J.getProgramCacheKey(le);let Ee=O.programs;O.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?L.environment:null,O.fog=L.fog;const Ne=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;O.envMap=w.get(v.envMap||O.environment,Ne),O.envMapRotation=O.environment!==null&&v.envMap===null?L.environmentRotation:v.envMapRotation,Ee===void 0&&(v.addEventListener("dispose",Ze),Ee=new Map,O.programs=Ee,O.programVariants=new Map);let He=Ee.get(ge);if(He!==void 0){if(O.currentProgram===He&&O.lightsStateVersion===xe)return so(v,le),He}else le.uniforms=J.getUniforms(v),F!==null&&v.isNodeMaterial&&F.build(v,H,le),v.onBeforeCompile(le,C),He=J.acquireProgram(le,ge),Ee.set(ge,He),O.uniforms=le.uniforms;const Se=O.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Se.clippingPlanes=K.uniform),so(v,le),O.needsLights=gc(v),O.lightsStateVersion=xe,O.needsLights&&(Se.ambientLightColor.value=z.state.ambient,Se.lightProbe.value=z.state.probe,Se.sunLights.value=z.state.sun,Se.sunLightShadows.value=z.state.sunShadow,Se.directionalLights.value=z.state.directional,Se.directionalLightShadows.value=z.state.directionalShadow,Se.spotLights.value=z.state.spot,Se.spotLightShadows.value=z.state.spotShadow,Se.rectAreaLights.value=z.state.rectArea,Se.ltc_1.value=z.state.rectAreaLTC1,Se.ltc_2.value=z.state.rectAreaLTC2,Se.pointLights.value=z.state.point,Se.pointLightShadows.value=z.state.pointShadow,Se.hemisphereLights.value=z.state.hemi,Se.sunShadowMatrix.value=z.state.sunShadowMatrix,Se.sunShadowCascade.value=z.state.sunShadowCascade,Se.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Se.spotLightMatrix.value=z.state.spotLightMatrix,Se.spotLightMap.value=z.state.spotLightMap,Se.pointShadowMatrix.value=z.state.pointShadowMatrix),O.numLightProbeGrids=no(y.state.lightProbeGridArray),O.currentProgram=He,O.uniformsList=null,He}function fc(v,L,H,O,z){const he=Re.get(v),xe=he.currentProgram.id+","+O+","+z;let le=he.programVariants.get(xe);return le===void 0?(le=Ri(v,L,H),he.programVariants.set(xe,le)):(he.currentProgram=le,he.uniformsList=null,he.outputColorSpace=O,he.toneMapping=z),le}function io(v){if(v.uniformsList===null){const L=v.currentProgram.getUniforms();v.uniformsList=Fs.seqWithValue(L.seq,v.uniforms)}return v.uniformsList}function so(v,L){const H=Re.get(v);H.outputColorSpace=L.outputColorSpace,H.batching=L.batching,H.batchingColor=L.batchingColor,H.instancing=L.instancing,H.instancingColor=L.instancingColor,H.instancingMorph=L.instancingMorph,H.skinning=L.skinning,H.morphTargets=L.morphTargets,H.morphNormals=L.morphNormals,H.morphColors=L.morphColors,H.morphTargetsCount=L.morphTargetsCount,H.numClippingPlanes=L.numClippingPlanes,H.numIntersection=L.numClipIntersection,H.vertexAlphas=L.vertexAlphas,H.vertexTangents=L.vertexTangents,H.toneMapping=L.toneMapping}function pc(v,L,H,O,z){L.isScene!==!0&&(L=Wt),De.resetTextureUnits();const he=L.fog,xe=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?L.environment:null,le=ee===null?C.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Xe.workingColorSpace,ge=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,Ee=w.get(O.envMap||xe,ge),Ne=O.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,He=!!H.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Se=!!H.morphAttributes.position,Ve=!!H.morphAttributes.normal,pt=!!H.morphAttributes.color;let et=dn;O.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(et=C.toneMapping);const je=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Ct=je!==void 0?je.length:0,ye=Re.get(O),Nt=y.state.lights;if(gt===!0&&(Bt===!0||v!==Q)){const ot=v===Q&&O.id===W;K.setState(O,v,ot)}let Ke=!1,Vn=!1;O.version===ye.__version?ye.needsLights&&ye.lightsStateVersion!==Nt.state.version||z.isBatchedMesh&&ye.batching===!1||!z.isBatchedMesh&&ye.batching===!0||z.isBatchedMesh&&ye.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&ye.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&ye.instancing===!1||!z.isInstancedMesh&&ye.instancing===!0||z.isSkinnedMesh&&ye.skinning===!1||!z.isSkinnedMesh&&ye.skinning===!0||z.isInstancedMesh&&ye.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&ye.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&ye.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&ye.instancingMorph===!1&&z.morphTexture!==null||ye.envMap!==Ee||O.fog===!0&&ye.fog!==he||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==K.numPlanes||ye.numIntersection!==K.numIntersection)||ye.vertexAlphas!==Ne||ye.vertexTangents!==He||ye.morphTargets!==Se||ye.morphNormals!==Ve||ye.morphColors!==pt||ye.morphTargetsCount!==Ct||ye.numLightProbeGrids!==no(y.state.lightProbeGridArray)?Ke=!0:(ye.outputColorSpace!==le||ye.toneMapping!==et)&&(Vn=!0):(Ke=!0,ye.__version=O.version);let Pt=ye.currentProgram;(Ke===!0||Vn===!0)&&(Pt=Vn===!0?fc(O,L,z,le,et):Ri(O,L,z),F&&O.isNodeMaterial&&F.onUpdateProgram(O,Pt,ye));let is=!1,Tn=!1,Wn=!1;const qe=Pt.getUniforms(),At=ye.uniforms;if(de.useProgram(Pt.program)&&(is=!0,Tn=!0,Wn=!0),O.id!==W&&(W=O.id,Tn=!0),is||Q!==v){de.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),qe.setValue(U,"projectionMatrix",v.projectionMatrix),qe.setValue(U,"viewMatrix",v.matrixWorldInverse);const yt=qe.map.cameraPosition;yt!==void 0&&yt.setValue(U,rn.setFromMatrixPosition(v.matrixWorld)),rt.logarithmicDepthBuffer&&qe.setValue(U,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&qe.setValue(U,"isOrthographic",v.isOrthographicCamera===!0),Q!==v&&(Q=v,Tn=!0,Wn=!0)}if(ye.needsLights&&(Nt.state.sunShadowMap.length>0&&qe.setValue(U,"sunShadowMap",Nt.state.sunShadowMap,De),Nt.state.directionalShadowMap.length>0&&qe.setValue(U,"directionalShadowMap",Nt.state.directionalShadowMap,De),Nt.state.spotShadowMap.length>0&&qe.setValue(U,"spotShadowMap",Nt.state.spotShadowMap,De),Nt.state.pointShadowMap.length>0&&qe.setValue(U,"pointShadowMap",Nt.state.pointShadowMap,De)),z.isSkinnedMesh){qe.setOptional(U,z,"bindMatrix"),qe.setOptional(U,z,"bindMatrixInverse");const ot=z.skeleton;ot&&(ot.boneTexture===null&&ot.computeBoneTexture(),qe.setValue(U,"boneTexture",ot.boneTexture,De))}z.isBatchedMesh&&(qe.setOptional(U,z,"batchingTexture"),qe.setValue(U,"batchingTexture",z._matricesTexture,De),qe.setOptional(U,z,"batchingIdTexture"),qe.setValue(U,"batchingIdTexture",z._indirectTexture,De),qe.setOptional(U,z,"batchingColorTexture"),z._colorsTexture!==null&&qe.setValue(U,"batchingColorTexture",z._colorsTexture,De));const Jt=H.morphAttributes;if((Jt.position!==void 0||Jt.normal!==void 0||Jt.color!==void 0)&&Z.update(z,H,Pt),(Tn||ye.receiveShadow!==z.receiveShadow)&&(ye.receiveShadow=z.receiveShadow,qe.setValue(U,"receiveShadow",z.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&L.environment!==null&&(At.envMapIntensity.value=L.environmentIntensity),At.dfgLUT!==void 0&&(At.dfgLUT.value=Hm()),Tn){if(qe.setValue(U,"toneMappingExposure",C.toneMappingExposure),ye.needsLights&&mc(At,Wn),he&&O.fog===!0&&se.refreshFogUniforms(At,he),se.refreshMaterialUniforms(At,O,me,Ae,y.state.transmissionRenderTarget[v.id]),ye.needsLights&&ye.numLightProbeGrids>0){const ot=T;let yt=0;for(const mn of y.state.lightProbeGridArray)mn.texture!==null&&(ot.textures[yt]=mn.texture,ot.min[yt]=mn.boundingBox.min,ot.max[yt]=mn.boundingBox.max,ot.resolution[yt]=mn.resolution,yt++);for(const mn in ot)ot[mn].length=yt;At.probesSH.value=ot.textures,At.probesMin.value=ot.min,At.probesMax.value=ot.max,At.probesResolution.value=ot.resolution}Fs.upload(U,io(ye),At,De)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Fs.upload(U,io(ye),At,De),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&qe.setValue(U,"center",z.center),qe.setValue(U,"modelViewMatrix",z.modelViewMatrix),qe.setValue(U,"normalMatrix",z.normalMatrix),qe.setValue(U,"modelMatrix",z.matrixWorld),O.uniformsGroups!==void 0){const ot=O.uniformsGroups;for(let yt=0,mn=ot.length;yt<mn;yt++){const ao=ot[yt];be.update(ao,Pt),be.bind(ao,Pt)}}return Pt}function mc(v,L){v.ambientLightColor.needsUpdate=L,v.lightProbe.needsUpdate=L,v.sunLights.needsUpdate=L,v.sunLightShadows.needsUpdate=L,v.directionalLights.needsUpdate=L,v.directionalLightShadows.needsUpdate=L,v.pointLights.needsUpdate=L,v.pointLightShadows.needsUpdate=L,v.spotLights.needsUpdate=L,v.spotLightShadows.needsUpdate=L,v.rectAreaLights.needsUpdate=L,v.hemisphereLights.needsUpdate=L}function gc(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(v,L,H){const O=Re.get(v);O.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),Re.get(v.texture).__webglTexture=L,Re.get(v.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:H,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,L){const H=Re.get(v);H.__webglFramebuffer=L,H.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(v,L=0,H=0){ee=v,Y=L,k=H;let O=null,z=!1,he=!1;if(v){const le=Re.get(v);if(le.__useDefaultFramebuffer!==void 0){de.bindFramebuffer(U.FRAMEBUFFER,le.__webglFramebuffer),j.copy(v.viewport),ve.copy(v.scissor),Pe=v.scissorTest,de.viewport(j),de.scissor(ve),de.setScissorTest(Pe),W=-1;return}else if(le.__webglFramebuffer===void 0)De.setupRenderTarget(v);else if(le.__hasExternalTextures)De.rebindTextures(v,Re.get(v.texture).__webglTexture,Re.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Ne=v.depthTexture;if(le.__boundDepthTexture!==Ne){if(Ne!==null&&Re.has(Ne)&&(v.width!==Ne.image.width||v.height!==Ne.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");De.setupDepthRenderbuffer(v)}}const ge=v.texture;(ge.isData3DTexture||ge.isDataArrayTexture||ge.isCompressedArrayTexture)&&(he=!0);const Ee=Re.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Ee[L])?O=Ee[L][H]:O=Ee[L],z=!0):v.samples>0&&De.useMultisampledRTT(v)===!1?O=Re.get(v).__webglMultisampledFramebuffer:Array.isArray(Ee)?O=Ee[H]:O=Ee,j.copy(v.viewport),ve.copy(v.scissor),Pe=v.scissorTest}else j.copy(Ce).multiplyScalar(me).floor(),ve.copy($e).multiplyScalar(me).floor(),Pe=Qe;if(H!==0&&(O=V),de.bindFramebuffer(U.FRAMEBUFFER,O)&&de.drawBuffers(v,O),de.viewport(j),de.scissor(ve),de.setScissorTest(Pe),z){const le=Re.get(v.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+L,le.__webglTexture,H)}else if(he){const le=L;for(let ge=0;ge<v.textures.length;ge++){const Ee=Re.get(v.textures[ge]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+ge,Ee.__webglTexture,H,le)}}else if(v!==null&&H!==0){const le=Re.get(v.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,le.__webglTexture,H)}W=-1};function ro(v){const L=Re.get(v);return(L.__readFormat!==v.format||L.__readType!==v.type)&&(L.__readFormat=v.format,L.__readType=v.type,L.__formatReadable=rt.textureFormatReadable(v.format),L.__typeReadable=rt.textureTypeReadable(v.type)),L}this.readRenderTargetPixels=function(v,L,H,O,z,he,xe,le=0){if(!(v&&v.isWebGLRenderTarget)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=Re.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&xe!==void 0&&(ge=ge[xe],Array.isArray(ge)&&(ge=ge[0])),ge){de.bindFramebuffer(U.FRAMEBUFFER,ge);try{const Ee=v.textures[le],Ne=Ee.format,He=Ee.type;v.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+le);const Se=ro(Ee);if(Se.__formatReadable===!1){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Se.__typeReadable===!1){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=v.width-O&&H>=0&&H<=v.height-z&&U.readPixels(L,H,O,z,ie.convert(Ne),ie.convert(He),he)}finally{const Ee=ee!==null?Re.get(ee).__webglFramebuffer:null;de.bindFramebuffer(U.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(v,L,H,O,z,he,xe,le=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=Re.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&xe!==void 0&&(ge=ge[xe],Array.isArray(ge)&&(ge=ge[0])),ge)if(L>=0&&L<=v.width-O&&H>=0&&H<=v.height-z){de.bindFramebuffer(U.FRAMEBUFFER,ge);const Ee=v.textures[le],Ne=Ee.format,He=Ee.type;v.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+le);const Se=ro(Ee);if(Se.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Se.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ve=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Ve),U.bufferData(U.PIXEL_PACK_BUFFER,he.byteLength,U.STREAM_READ),U.readPixels(L,H,O,z,ie.convert(Ne),ie.convert(He),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);const pt=ee!==null?Re.get(ee).__webglFramebuffer:null;de.bindFramebuffer(U.FRAMEBUFFER,pt);const et=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Jc(U,et,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Ve),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,he),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(Ve),U.deleteSync(et),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,L=null,H=0){const O=Math.pow(2,-H),z=Math.floor(v.image.width*O),he=Math.floor(v.image.height*O),xe=L!==null?L.x:0,le=L!==null?L.y:0;De.setTexture2D(v,0),U.copyTexSubImage2D(U.TEXTURE_2D,H,0,0,xe,le,z,he),de.unbindTexture()},this.copyTextureToTexture=function(v,L,H=null,O=null,z=0,he=0){let xe,le,ge,Ee,Ne,He,Se,Ve,pt;const et=v.isCompressedTexture?v.mipmaps[he]:v.image;if(H!==null)xe=H.max.x-H.min.x,le=H.max.y-H.min.y,ge=H.isBox3?H.max.z-H.min.z:1,Ee=H.min.x,Ne=H.min.y,He=H.isBox3?H.min.z:0;else{const qe=Math.pow(2,-z);xe=Math.floor(et.width*qe),le=Math.floor(et.height*qe),v.isDataArrayTexture?ge=et.depth:v.isData3DTexture?ge=Math.floor(et.depth*qe):ge=1,Ee=0,Ne=0,He=0}O!==null?(Se=O.x,Ve=O.y,pt=O.z):(Se=0,Ve=0,pt=0);const je=ie.convert(L.format),Ct=ie.convert(L.type);let ye;L.isData3DTexture?(De.setTexture3D(L,0),ye=U.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(De.setTexture2DArray(L,0),ye=U.TEXTURE_2D_ARRAY):(De.setTexture2D(L,0),ye=U.TEXTURE_2D),de.activeTexture(U.TEXTURE0),de.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,L.flipY),de.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),de.pixelStorei(U.UNPACK_ALIGNMENT,L.unpackAlignment);const Nt=de.getParameter(U.UNPACK_ROW_LENGTH),Ke=de.getParameter(U.UNPACK_IMAGE_HEIGHT),Vn=de.getParameter(U.UNPACK_SKIP_PIXELS),Pt=de.getParameter(U.UNPACK_SKIP_ROWS),is=de.getParameter(U.UNPACK_SKIP_IMAGES);de.pixelStorei(U.UNPACK_ROW_LENGTH,et.width),de.pixelStorei(U.UNPACK_IMAGE_HEIGHT,et.height),de.pixelStorei(U.UNPACK_SKIP_PIXELS,Ee),de.pixelStorei(U.UNPACK_SKIP_ROWS,Ne),de.pixelStorei(U.UNPACK_SKIP_IMAGES,He);const Tn=v.isDataArrayTexture||v.isData3DTexture,Wn=L.isDataArrayTexture||L.isData3DTexture;if(v.isDepthTexture){const qe=Re.get(v),At=Re.get(L),Jt=Re.get(qe.__renderTarget),ot=Re.get(At.__renderTarget);de.bindFramebuffer(U.READ_FRAMEBUFFER,Jt.__webglFramebuffer),de.bindFramebuffer(U.DRAW_FRAMEBUFFER,ot.__webglFramebuffer);for(let yt=0;yt<ge;yt++)Tn&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Re.get(v).__webglTexture,z,He+yt),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Re.get(L).__webglTexture,he,pt+yt)),U.blitFramebuffer(Ee,Ne,Ee+xe,Ne+le,Se,Ve,Se+xe,Ve+le,U.DEPTH_BUFFER_BIT,U.NEAREST);de.bindFramebuffer(U.READ_FRAMEBUFFER,null),de.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(z!==0||v.isRenderTargetTexture||Re.has(v)){const qe=Re.get(v),At=Re.get(L);de.bindFramebuffer(U.READ_FRAMEBUFFER,P),de.bindFramebuffer(U.DRAW_FRAMEBUFFER,G);for(let Jt=0;Jt<ge;Jt++)Tn?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,qe.__webglTexture,z,He+Jt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,qe.__webglTexture,z),Wn?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,At.__webglTexture,he,pt+Jt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,At.__webglTexture,he),z!==0?U.blitFramebuffer(Ee,Ne,Ee+xe,Ne+le,Se,Ve,Se+xe,Ve+le,U.COLOR_BUFFER_BIT,U.NEAREST):Wn?U.copyTexSubImage3D(ye,he,Se,Ve,pt+Jt,Ee,Ne,xe,le):U.copyTexSubImage2D(ye,he,Se,Ve,Ee,Ne,xe,le);de.bindFramebuffer(U.READ_FRAMEBUFFER,null),de.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Wn?v.isDataTexture||v.isData3DTexture?U.texSubImage3D(ye,he,Se,Ve,pt,xe,le,ge,je,Ct,et.data):L.isCompressedArrayTexture?U.compressedTexSubImage3D(ye,he,Se,Ve,pt,xe,le,ge,je,et.data):U.texSubImage3D(ye,he,Se,Ve,pt,xe,le,ge,je,Ct,et):v.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,he,Se,Ve,xe,le,je,Ct,et.data):v.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,he,Se,Ve,et.width,et.height,je,et.data):U.texSubImage2D(U.TEXTURE_2D,he,Se,Ve,xe,le,je,Ct,et);de.pixelStorei(U.UNPACK_ROW_LENGTH,Nt),de.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ke),de.pixelStorei(U.UNPACK_SKIP_PIXELS,Vn),de.pixelStorei(U.UNPACK_SKIP_ROWS,Pt),de.pixelStorei(U.UNPACK_SKIP_IMAGES,is),he===0&&L.generateMipmaps===!0&&L.mipmapsAutoUpdate===!0&&U.generateMipmap(ye),de.unbindTexture()},this.initRenderTarget=function(v){Re.get(v).__webglFramebuffer===void 0&&De.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?De.setTextureCube(v,0):v.isData3DTexture?De.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?De.setTexture2DArray(v,0):De.setTexture2D(v,0),de.unbindTexture()},this.resetState=function(){Y=0,k=0,ee=null,de.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Xe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Xe._getUnpackColorSpace()}}const Lr=new Map;function tt(i,e={}){const t=`${i}-${e.emissive||0}-${e.transparent||!1}-${e.opacity||1}-${e.flat||!1}`;if(Lr.has(t))return Lr.get(t);const n=new Ha({color:i,emissive:e.emissive||0,emissiveIntensity:e.emissive?e.emissiveIntensity||.8:0,transparent:!!e.transparent,opacity:e.opacity??1,flatShading:!!e.flat});return Lr.set(t,n),n}const Dr=new Map;function Os(i,e,t){const n=`${i}|${e}|${t}`;return Dr.has(n)||Dr.set(n,new En(i,e,t)),Dr.get(n)}function Te(i,e,t,n,s){const r=new nt(Os(i,e,t),tt(n,s));return r.castShadow=!0,r.receiveShadow=!0,r}function cl(i,e,t,n){const s=document.createElement("canvas");s.width=256,s.height=72;const r=s.getContext("2d");r.clearRect(0,0,256,72),r.font="900 26px Nunito, Trebuchet MS, sans-serif",r.textAlign="center",r.textBaseline="middle",r.lineWidth=7,r.strokeStyle="rgba(4,9,18,0.92)",r.strokeText(i,128,24),r.fillStyle=t,r.fillText(i,128,24),n&&(r.fillStyle="rgba(0,0,0,0.7)",r.fillRect(58,46,140,12),r.fillStyle=e>55?"#5ce1b9":e>25?"#ffd447":"#ff5364",r.fillRect(60,48,Math.max(0,136*Math.max(0,e)/100),8));const a=new Zs(s);return a.colorSpace=Rt,a}function Vm(i,e,t=!0){const n=cl(i,100,e,t),s=new Hl(new za({map:n,transparent:!0,depthTest:!1,depthWrite:!1}));return s.scale.set(2.3,.65,1),s.position.set(0,2.45,0),s.renderOrder=20,s.userData.update=r=>{const a=s.material.map;s.material.map=cl(i,r,e,t),s.material.needsUpdate=!0,a?.dispose()},s}function hl(i,e){const t=e.hatColor,n=new dt;switch(e.hat){case"cap":{const s=Te(.62,.16,.6,t);s.position.y=.32,n.add(s);const r=Te(.6,.06,.24,t);r.position.set(0,.28,.38),n.add(r);break}case"headband":{const s=Te(.63,.1,.63,t);s.position.y=.14,n.add(s);const r=Te(.08,.28,.1,t);r.position.set(-.32,.02,-.3),n.add(r);break}case"helmet":{const s=Te(.66,.2,.66,t);s.position.y=.32,n.add(s);const r=Te(.08,.26,.5,t);r.position.set(-.32,.15,0),n.add(r);const a=r.clone();a.position.x=.32,n.add(a);break}case"visor":{const s=Te(.66,.12,.66,1910592);s.position.y=.26,n.add(s);const r=Te(.64,.16,.08,t,{emissive:t,emissiveIntensity:.45});r.position.set(0,.23,.31),n.add(r);break}case"beanie":{const s=Te(.64,.22,.64,t);s.position.y=.34,n.add(s);const r=Te(.16,.16,.16,16777215);r.position.y=.49,n.add(r);break}case"crown":{const s=Te(.56,.13,.56,t);s.position.y=.33,n.add(s);for(let r=-1;r<=1;r++){const a=Te(.12,.18,.12,t);a.position.set(r*.19,.48,0),n.add(a)}break}case"horns":{const s=Te(.12,.34,.12,t);s.position.set(-.26,.42,0),s.rotation.z=.4,n.add(s);const r=Te(.12,.34,.12,t);r.position.set(.26,.42,0),r.rotation.z=-.4,n.add(r);break}case"cat":{const s=Te(.17,.24,.12,t);s.position.set(-.2,.42,0),s.rotation.z=.2,n.add(s);const r=Te(.17,.24,.12,t);r.position.set(.2,.42,0),r.rotation.z=-.2,n.add(r);break}}return i.add(n),n}function Vi(i,e={}){const t=new dt,n=[],s=e.nameColor||"#ffffff",r=e.scale||1,a=new dt;a.scale.setScalar(r),t.add(a);const o=Te(.66,.68,.36,i.torso);o.position.y=1.08,a.add(o),o.userData={hitZone:"body",owner:e.owner},n.push(o);const l=new dt;l.position.y=1.72,a.add(l);const c=Te(.58,.56,.56,i.head);l.add(c),c.userData={hitZone:"head",owner:e.owner},n.push(c);const u=tt(16777215),g=tt(1710626);for(const y of[-.14,.14]){const f=new nt(Os(.13,.15,.02),u);f.position.set(y,.04,.29),l.add(f);const M=new nt(Os(.06,.08,.025),g);M.position.set(y,.03,.31),l.add(M)}const p=new nt(Os(.2,.035,.02),g);p.position.set(0,-.16,.29),l.add(p),hl(l,i);const m=[];for(const y of[-1,1]){const f=new dt;f.position.set(y*.46,1.36,0),a.add(f);const M=Te(.24,.62,.26,y<0?i.arms:i.torso);M.position.y=-.31,f.add(M),M.userData={hitZone:"body",owner:e.owner},n.push(M);const I=Te(.25,.14,.26,i.head);I.position.y=-.66,f.add(I),m.push(f)}const _=[];for(const y of[-1,1]){const f=new dt;f.position.set(y*.17,.74,0),a.add(f);const M=Te(.27,.66,.28,i.legs);M.position.y=-.33,f.add(M),M.userData={hitZone:"body",owner:e.owner},n.push(M);const I=Te(.3,.12,.36,2764602);I.position.set(0,-.68,.04),f.add(I),_.push(f)}const E=new dt;E.position.set(.3,1.16,.42),a.add(E);const h=new dt;h.position.set(-.38,1.02,.38),a.add(h);const d=new dt;d.position.set(.42,.92,.2),a.add(d);let S=null;e.name&&(S=Vm(e.name,s,e.showHp!==!1),t.add(S));let A=Math.random()*6;const T={group:t,body:a,head:l,hitMeshes:n,weaponAnchor:E,meleeAnchor:h,grenadeAnchor:d,tag:S,setHealth(y){S?.userData.update(Math.max(0,Math.round(y)))},animate(y,f=0,M=!1,I=!1){A+=y*(4+f*1.5);const C=Math.min(1,f/5),N=Math.sin(A)*.72*C;M?(m[0].rotation.x=-1.5,m[1].rotation.x=-1.5,_[0].rotation.x=.4,_[1].rotation.x=-.4):(m[0].rotation.x=I?-1.25:N,m[1].rotation.x=I?-1.05:-N,m[0].rotation.z=I?-.2:.04,m[1].rotation.z=I?.22:-.04,_[0].rotation.x=-N,_[1].rotation.x=N),a.position.y=M?0:Math.abs(Math.sin(A))*.045*C,l.rotation.z=Math.sin(A*.5)*.03*C},setDead(y){a.rotation.x=y?-1.35:0,a.position.y=y?-.55:0,S&&(S.visible=!y)},setSkin(y){o.material=tt(y.torso),c.material=tt(y.head),m[0].children[0].material=tt(y.arms),m[1].children[0].material=tt(y.torso),_[0].children[0].material=tt(y.legs),_[1].children[0].material=tt(y.legs);const f=l.children.find(I=>I.userData.isHat);f&&l.remove(f);const M=hl(l,y);M.userData.isHat=!0}},b=l.children[l.children.length-1];return b&&(b.userData.isHat=!0),T}function Wi(i,e){const t=new dt,n=tt(e.body),s=tt(e.accent),r=tt(e.glow,{emissive:e.glow,emissiveIntensity:.55});let a=1.1;const o=Te(.2,.22,.62,e.body);t.add(o);const l=Te(.16,.08,.5,e.accent);l.position.y=.15,t.add(l);const c=Te(.13,.3,.16,e.accent);c.position.set(0,-.24,-.1),c.rotation.x=.25,t.add(c);const u=Te(.14,.34,.2,e.accent);if(u.position.set(0,-.26,.16),u.rotation.x=-.14,t.add(u),i.id==="sniper"){const m=Te(.1,.1,.95,e.accent);m.position.set(0,.06,.72),t.add(m);const _=Te(.13,.13,.42,e.body);_.position.set(0,.28,.12),t.add(_);const E=Te(.11,.11,.04,e.glow,{emissive:e.glow,emissiveIntensity:.7});E.position.set(0,.28,.35),t.add(E),a=1.2}else if(i.id==="shotgun"){const m=Te(.16,.16,.72,e.accent);m.position.set(0,.04,.62),t.add(m);const _=Te(.19,.13,.3,e.body);_.position.set(0,-.07,.5),t.add(_),a=.98}else if(i.id==="smg"){const m=Te(.1,.1,.4,e.accent);m.position.set(0,.03,.5),t.add(m);const _=Te(.06,.1,.06,e.glow,{emissive:e.glow,emissiveIntensity:.8});_.position.set(0,.23,.28),t.add(_),a=.72}else{const m=Te(.1,.1,.62,e.accent);m.position.set(0,.03,.6),t.add(m);const _=Te(.05,.09,.05,e.glow,{emissive:e.glow,emissiveIntensity:.8});_.position.set(0,.23,.32),t.add(_),a=.92}const g=Te(.12,.12,.1,e.body);g.position.set(0,.03,a),t.add(g);const p=Te(.26,.26,.34,16773792,{emissive:16763196,emissiveIntensity:1});return p.position.set(0,.03,a+.2),p.visible=!1,t.add(p),t.userData={muzzle:new D(0,.03,a+.08),flash:p,bodyMat:n,accentMat:s,glowMat:r,applySkin(m){o.material=tt(m.body),l.material=tt(m.accent),c.material=tt(m.accent),u.material=tt(m.accent),g.material=tt(m.body),r.color.set(m.glow),r.emissive.set(m.glow),t.traverse(_=>{_.isMesh&&_.material===tt(e.body)&&(_.material=tt(m.body))}),t.userData.skin=m},skin:e},t.scale.setScalar(1.05),t}function cc(i){const e=new dt,t=Te(.09,.34,.09,i.accent);t.position.y=-.1,e.add(t);const n=Te(.12,.85,.11,i.body);n.position.y=.48,e.add(n);const s=Te(.13,.14,.12,i.glow,{emissive:i.glow,emissiveIntensity:.4});return s.position.y=.95,e.add(s),e.rotation.z=-.5,e}function ya(i){const e=new dt,t=Te(.22,.22,.22,i.body);e.add(t);const n=Te(.24,.06,.24,i.accent);n.position.y=.02,e.add(n);const s=Te(.05,.05,.13,i.glow,{emissive:i.glow,emissiveIntensity:.5});return s.position.set(.06,.14,0),e.add(s),e}function hc(i,e,t=256){const n=document.createElement("canvas");n.width=n.height=t;const s=n.getContext("2d");s.fillStyle=`#${new Be(i).getHexString()}`,s.fillRect(0,0,t,t),s.fillStyle=`#${new Be(e).getHexString()}`;for(let a=0;a<8;a++)for(let o=0;o<8;o++)(o+a)%2===0&&s.fillRect(o*t/8,a*t/8,t/8,t/8);const r=new Zs(n);return r.colorSpace=Rt,r.magFilter=bt,r}const lt=[{id:"rifle",name:"AR-7 BLASTER",short:"AR-7",kind:"auto",damage:21,headMult:2,rate:.105,mag:30,reserve:180,reload:1.9,spread:.013,adsSpread:.004,range:140,pellets:1,adsZoom:.82,recoil:.019,auto:!0,icon:"▰",unlock:0},{id:"smg",name:"SMG-9 BUZZSAW",short:"SMG-9",kind:"auto",damage:13,headMult:1.8,rate:.072,mag:40,reserve:240,reload:1.6,spread:.022,adsSpread:.009,range:90,pellets:1,adsZoom:.88,recoil:.014,auto:!0,icon:"▤",unlock:0},{id:"shotgun",name:"BOOMSTICK 12",short:"BOOM",kind:"pump",damage:11,headMult:1.6,rate:.78,mag:8,reserve:48,reload:2.4,spread:.075,adsSpread:.05,range:55,pellets:8,adsZoom:.9,recoil:.055,auto:!1,icon:"▥",unlock:0},{id:"sniper",name:"LONGSHOT RAIL",short:"RAIL",kind:"bolt",damage:82,headMult:2,rate:1.35,mag:6,reserve:36,reload:2.6,spread:.03,adsSpread:.0012,range:220,pellets:1,adsZoom:.42,recoil:.07,auto:!1,icon:"▯",unlock:0}],Fn=[{id:"factory",name:"Factory Issue",body:5662077,accent:3029581,glow:6080767,price:0,rarity:"STARTER"},{id:"carbon",name:"Carbon Black",body:2501430,accent:1119517,glow:16738877,price:0,rarity:"STARTER"},{id:"mint",name:"Mint Condition",body:4184228,accent:1341276,glow:14090217,price:150,rarity:"COMMON"},{id:"sunset",name:"Sunset Pop",body:16747084,accent:14040438,glow:16765286,price:220,rarity:"COMMON"},{id:"toxic",name:"Toxic Slime",body:10217012,accent:4094482,glow:14286704,price:320,rarity:"RARE"},{id:"ice",name:"Frostbite",body:10476799,accent:5214160,glow:15268863,price:380,rarity:"RARE"},{id:"gold",name:"Golden Boy",body:16763196,accent:12089357,glow:16773800,price:600,rarity:"EPIC"},{id:"galaxy",name:"Galaxy Gyro",body:5980072,accent:2365266,glow:16739811,price:800,rarity:"LEGENDARY"}],Zn=[{id:"classic",name:"Classic Noob",torso:16764723,arms:16764723,legs:3108816,head:16767144,hat:"cap",hatColor:15285051,price:0,rarity:"STARTER"},{id:"ninja",name:"Neo Ninja",torso:2895690,arms:2895690,legs:1908792,head:15252370,hat:"headband",hatColor:6087097,price:0,rarity:"STARTER"},{id:"candy",name:"Candy Rush",torso:16742320,arms:16754895,legs:8215776,head:16767416,hat:"cat",hatColor:16736158,price:180,rarity:"COMMON"},{id:"sand",name:"Sandstorm",torso:14726502,arms:13212238,legs:7174738,head:11105600,hat:"helmet",hatColor:12297069,price:240,rarity:"COMMON"},{id:"cyber",name:"Cyber Blue",torso:2981608,arms:3777279,legs:1455198,head:14198904,hat:"visor",hatColor:4649215,price:380,rarity:"RARE"},{id:"frosty",name:"Frosty",torso:12578815,arms:9098495,legs:4159400,head:15399423,hat:"beanie",hatColor:16777215,price:420,rarity:"RARE"},{id:"gold",name:"Golden Hero",torso:16763196,arms:16767859,legs:12089357,head:16767144,hat:"crown",hatColor:16766023,price:650,rarity:"EPIC"},{id:"void",name:"Void Knight",torso:3878243,arms:4929408,legs:1774640,head:13148904,hat:"horns",hatColor:10181887,price:900,rarity:"LEGENDARY"}],Wm=[{id:"pipe",name:"Trusty Pipe",body:11121860,accent:6121592,glow:16777215,price:0,rarity:"STARTER"},{id:"bat",name:"Home Run",body:11695679,accent:6175260,glow:16765286,price:160,rarity:"COMMON"},{id:"katana",name:"Pixel Katana",body:14215167,accent:2833756,glow:9367807,price:340,rarity:"RARE"},{id:"neon",name:"Neon Bat",body:3465392,accent:883292,glow:11206623,price:500,rarity:"EPIC"}],Xm=[{id:"classic",name:"Classic Grenade",body:4872762,accent:2239260,glow:16751421,price:0,rarity:"STARTER"},{id:"cherry",name:"Cherry Bomb",body:16731501,accent:9182771,glow:16765286,price:180,rarity:"COMMON"},{id:"themed",name:"Block Bomb",body:4892927,accent:1920906,glow:10479871,price:350,rarity:"RARE"},{id:"nuke",name:"Mini Nuke",body:16763196,accent:8014858,glow:16735805,price:700,rarity:"LEGENDARY"}],dl=["NoobMaster69","BlockyBoi","xX_Rocket_Xx","SquareJoe","TinyTitan","PixelPunch","CubeQueen","RespawnKing","ToastyBlock","BrickBoss"],ul=["Tip: Headshots deal double damage.","Tip: Grab glowing health crates to heal up.","Tip: Hold right click to aim down sights.","Tip: The high ground gives you the best angle.","Tip: Press V to swing your melee weapon.","Tip: Press G to toss a grenade around cover."],dc={avatar:Zn,gun:Fn,melee:Wm,grenade:Xm},Cs=300,Bs=20,Ln=38;function Ea(i,e="#ffffff",t=6,n=1.2,s=""){const r=document.createElement("canvas");r.width=1024,r.height=200;const a=r.getContext("2d");a.textAlign="center",a.textBaseline="middle",a.font="900 108px Nunito, Trebuchet MS, sans-serif",a.lineWidth=16,a.strokeStyle="#070d17",a.strokeText(i,512,s?78:100),a.fillStyle=e,a.fillText(i,512,s?78:100),s&&(a.font="900 40px Nunito, Trebuchet MS, sans-serif",a.lineWidth=9,a.strokeText(s,512,158),a.fillStyle="#9fb0cb",a.fillText(s,512,158));const o=new Zs(r);return o.colorSpace=Rt,new nt(new Qi(t,n),new $n({map:o,transparent:!0,depthWrite:!1,side:nn}))}function qm(i,e=4890600,t=13167103){const n=new ji(300,24,16),s=new kn({side:Ot,depthWrite:!1,uniforms:{topColor:{value:new Be(e)},bottomColor:{value:new Be(t)}},vertexShader:"varying vec3 vWorld; void main(){ vWorld = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:"uniform vec3 topColor; uniform vec3 bottomColor; varying vec3 vWorld; void main(){ float h = normalize(vWorld).y * 0.5 + 0.5; gl_FragColor = vec4(mix(bottomColor, topColor, smoothstep(0.28,0.78,h)),1.0); }"}),r=new nt(n,s);return i.add(r),r}function Ym(i,e,t,n,s=1){const r=new dt,a=16055295,o=[[0,0,0,3.4,1.2,1.8],[-2,-.2,0,2.2,.9,1.5],[2,-.1,0,2.4,1,1.5],[.6,.7,0,2,.9,1.4]];for(const[l,c,u,g,p,m]of o){const _=Te(g,p,m,a);_.position.set(l,c,u),_.castShadow=!1,r.add(_)}return r.position.set(e,t,n),r.scale.setScalar(s),i.add(r),r}function Km(){const i=new Oa;i.fog=new $s(11131125,55,155),qm(i),i.add(new Va(14676479,4876874,1.5));const e=new Wa(16774358,2);e.position.set(28,46,18),e.castShadow=!0,e.shadow.mapSize.set(2048,2048),e.shadow.camera.left=-55,e.shadow.camera.right=55,e.shadow.camera.top=55,e.shadow.camera.bottom=-55,e.shadow.camera.near=1,e.shadow.camera.far=130,e.shadow.bias=-6e-4,i.add(e),i.add(new qh(16777215,.35));const t=[],n=[],s=new dt;i.add(s);function r(b,y,f,M,I,C,N,F={}){const V=Te(M,I,C,N,F.material||{});if(V.position.set(b,y,f),F.rotY&&(V.rotation.y=F.rotY),F.map&&(V.material=tt(16777215,{})),s.add(V),F.solid){const P=M/2,G=C/2;let Y=b-P,k=b+P,ee=f-G,W=f+G;if(F.rotY){const Q=Math.abs(Math.cos(F.rotY)),j=Math.abs(Math.sin(F.rotY)),ve=P*Q+G*j,Pe=P*j+G*Q;Y=b-ve,k=b+ve,ee=f-Pe,W=f+Pe}t.push(new Ti(new D(Y,y-I/2,ee),new D(k,y+I/2,W))),n.push(V)}return V}const a=hc(7324791,6468971,256);a.wrapS=a.wrapT=Yi,a.repeat.set(9,9);const o=new nt(new En(84,1,84),new Ha({map:a}));o.position.y=-.5,o.receiveShadow=!0,s.add(o),n.push(o),r(0,.03,0,16,.08,16,10135989),r(0,.02,24,9,.06,30,9346473),r(0,.02,-24,9,.06,30,9346473),r(24,.02,0,30,.06,9,9346473),r(-24,.02,0,30,.06,9,9346473);const l=[16747069,4892927,6087097,16766023];for(let b=0;b<4;b++){const y=b*Math.PI/2,f=Math.sin(y)*(Ln+1),M=Math.cos(y)*(Ln+1),I=b%2===0?Ln*2+6:2,C=b%2===0?2:Ln*2+6;r(f,2.5,M,I,5,C,3886438,{solid:!0}),r(f*.97,4.7,M*.97,I*.99,.5,C*.99,l[b])}r(0,.75,0,11,1.5,11,7307154,{solid:!0}),r(0,1.55,0,11.4,.14,11.4,9413043);for(const b of[1,-1])for(let y=0;y<3;y++)r(0,.25+y*.5,b*(7+y*1.1),7,.5+y*.5,1.1,8096668,{solid:!0}),r(b*(7+y*1.1),.25+y*.5,0,1.1,.5+y*.5,7,8096668,{solid:!0});r(0,2.1,0,1.2,1.2,1.2,16766023,{material:{emissive:16756768,emissiveIntensity:.6}}),[[-24,-18],[24,18],[24,-18],[-24,18]].forEach(([b,y],f)=>{r(b,3,y,9,6,9,6912653,{solid:!0}),r(b,6.1,y,9.6,.3,9.6,f%2?4892927:16747069);const M=Math.sign(-b),I=Math.sign(-y);for(let C=0;C<4;C++)r(b+M*(5.5+C*1.05),.75+C*.75,y,1.1,1.5+C*1.5,3.4,8096668,{solid:!0});r(b+M*2.6,6.9,y,.3,1.4,8.6,14674162),r(b,6.9,y+I*2.6,8.6,1.4,.3,14674162)}),[[-12,12,16739159,0],[12,-12,4892927,0],[-30,4,16763196,Math.PI/2],[30,-4,6087097,Math.PI/2],[4,30,16742320,0],[-4,-30,10190079,0]].forEach(([b,y,f,M])=>{r(b,1.6,y,8,3.2,3,f,{solid:!0,rotY:M}),r(b,1.6,y+(M?0:1.55),7.6,.12,.08,16777215)});const g=[[-8,-10],[8,10],[-16,8],[16,-8],[-20,24],[20,-24],[-30,-22],[30,22],[12,22],[-12,-22],[0,16],[0,-16],[-33,14],[33,-14],[18,4],[-18,-4],[6,-27],[-6,27]];g.forEach(([b,y],f)=>{const M=f%3===0?2.6:2.1;r(b,M/2,y,M,M,M,f%2?13079124:11894338,{solid:!0}),r(b,M-.06,y,M+.06,.1,M+.06,9199408),f%4===0&&r(b+.3,M+.9,y-.2,1.6,1.8,1.6,10317113,{solid:!0})});const p=[[-20,0,1],[20,0,1],[0,-20,0],[0,20,0],[-10,28,0],[10,-28,0]];p.forEach(([b,y,f])=>r(b,1.1,y,f?1.4:7,2.2,f?7:1.4,8886184,{solid:!0}));const m=[];for(let b=-3;b<=3;b++)m.push([b*11,-35],[b*11,35],[-35,b*11],[35,b*11]);m.forEach(([b,y],f)=>{if(Math.abs(b)<6&&Math.abs(y)>30)return;r(b,1.5,y,.8,3,.8,8084026,{solid:!0});const M=[4106332,5226091,3119698][f%3];r(b,3.9,y,3.4,2.4,3.4,M),r(b,5.5,y,2.3,1.6,2.3,M)});const _=[new D(-30,0,-30),new D(30,0,30),new D(30,0,-30),new D(-30,0,30),new D(0,0,32),new D(0,1.6,0)];_.forEach((b,y)=>{const f=[16739159,4892927,16766023,6087097,16742320,16777215][y];r(b.x,.05,b.z,4,.1,4,f,{material:{emissive:f,emissiveIntensity:.45}});const M=new nt(new es(1.9,.1,6,4),tt(f,{emissive:f,emissiveIntensity:.6}));M.rotation.x=Math.PI/2,M.rotation.z=Math.PI/4,M.position.set(b.x,.16,b.z),s.add(M)});const E=[];[[-16,16],[16,-16],[-27,-10],[27,10],[0,-30]].forEach(([b,y])=>{const f=new dt,M=Te(.8,.8,.8,6087097,{emissive:3124870,emissiveIntensity:.7});f.add(M);const I=Te(.55,.18,.85,16777215);f.add(I);const C=Te(.18,.55,.85,16777215);f.add(C);const N=new Us(6087097,1.2,6);f.add(N),f.position.set(b,1.2,y),s.add(f),E.push({pos:new D(b,1.2,y),mesh:f,active:!0,timer:0})});const d=[];for(let b=0;b<10;b++)d.push(Ym(s,(Math.random()-.5)*160,32+Math.random()*16,(Math.random()-.5)*160,1+Math.random()));const S=Ea("BLOCKSTRIKE","#ffd447",22,4.4,"FREE-FOR-ALL ARENA");S.position.set(0,15,-36),s.add(S);const A=new nt(new ji(6,12,8),tt(16774084,{emissive:16771488,emissiveIntensity:.9}));A.position.set(75,70,-90),i.add(A);const T=[..._.map(b=>b.clone()),...g.map(([b,y])=>new D(b,0,y)),...p.map(([b,y])=>new D(b,0,y)),new D(0,1.6,0),new D(0,0,10),new D(0,0,-10),new D(-10,0,0),new D(10,0,0)];return{scene:i,world:s,colliders:t,solidMeshes:n,spawns:_,waypoints:T,pickups:E,clouds:d,sun:e,update(b,y){for(const f of E)f.active?(f.mesh.rotation.y+=b*1.6,f.mesh.position.y=f.pos.y+Math.sin(y*2.4+f.pos.x)*.16):(f.timer-=b,f.timer<=0&&(f.active=!0,f.mesh.visible=!0));d.forEach((f,M)=>{f.position.x+=b*(.4+M*.05),f.position.x>95&&(f.position.x=-95)}),S.lookAt(0,8,40)},collide(b,y,f){for(const M of t)if(b.x+y>M.min.x&&b.x-y<M.max.x&&b.z+y>M.min.z&&b.z-y<M.max.z&&b.y+f>M.min.y&&b.y<M.max.y)return!0;return!1},clamp(b){b.x=mo.clamp(b.x,-Ln,Ln),b.z=mo.clamp(b.z,-Ln,Ln)},takePickup(b){for(const y of E)if(y.active&&b.distanceTo(y.pos)<1.5)return y.active=!1,y.mesh.visible=!1,y.timer=12,!0;return!1}}}function $m(){const i=new Oa;i.background=new Be(1917544),i.fog=new $s(1917544,40,100),i.add(new Va(15267583,3888768,2.2));const e=new Wa(16770744,2.6);e.position.set(12,22,14),e.castShadow=!0,e.shadow.mapSize.set(1024,1024),e.shadow.camera.left=-25,e.shadow.camera.right=25,e.shadow.camera.top=25,e.shadow.camera.bottom=-25,i.add(e);const t=new Us(4892927,60,35);t.position.set(-10,8,-6),i.add(t);const n=new Us(16766023,50,35);n.position.set(10,8,6),i.add(n);const s=new dt;i.add(s);const r=hc(3495034,2770023,256);r.wrapS=r.wrapT=Yi,r.repeat.set(7,7);const a=new nt(new En(36,1,36),new Ha({map:r}));a.position.y=-.5,a.receiveShadow=!0,s.add(a);for(const h of[-1,1]){const d=Te(36,.5,.6,3887477);d.position.set(0,.4,h*17.8),s.add(d);const S=Te(.6,.5,36,3887477);S.position.set(h*17.8,.4,0),s.add(S)}for(const[h,d,S]of[[-16,-16,16747069],[16,-16,4892927],[-16,16,6087097],[16,16,16766023]]){const A=Te(1.2,6,1.2,S);A.position.set(h,3,d),s.add(A);const T=Te(1.5,.4,1.5,S,{emissive:S,emissiveIntensity:.6});T.position.set(h,6.2,d),s.add(T)}const o=new nt(new Js(3.4,3.4,.2,8),tt(2837099,{emissive:1933224,emissiveIntensity:.35}));o.position.y=.1,s.add(o);const l=new nt(new es(2.7,.14,6,8),tt(6087097,{emissive:6087097,emissiveIntensity:.7}));l.rotation.x=Math.PI/2,l.position.y=.25,s.add(l);const c=[];for(let h=0;h<8;h++){const d=Zn[(h+1)%Zn.length],A=Vi(d,{name:["BlockyBoi","TinyTitan","CubeQueen","PixelPunch","NoobMaster","SquareJoe","RespawnKing","BrickBoss"][h],nameColor:h%2?"#5ce1b9":"#ffd447",showHp:!1,scale:.92});A.group.position.set(Math.cos(h/8*Math.PI*2)*8,0,Math.sin(h/8*Math.PI*2)*8),s.add(A.group),c.push({avatar:A,angle:h/8*Math.PI*2,radius:7+h%3*1.3,speed:.22+h%4*.06,bob:Math.random()*6})}const u=[];[{x:-8,z:-6,skin:Fn[3],weapon:lt[0],label:"SUNSET POP"},{x:8,z:-6,skin:Fn[6],weapon:lt[3],label:"GOLDEN BOY"},{x:-8,z:6,skin:Fn[5],weapon:lt[2],label:"FROSTBITE"},{x:8,z:6,skin:Fn[7],weapon:lt[1],label:"GALAXY GYRO"}].forEach((h,d)=>{const S=Te(1.8,1.4,1.8,3295591);S.position.set(h.x,.7,h.z),s.add(S);const A=Te(2,.18,2,h.skin.body);A.position.set(h.x,1.48,h.z),s.add(A);const T=new Us(h.skin.glow,4,5);T.position.set(h.x,2.3,h.z),s.add(T);const b=Wi(h.weapon,h.skin);b.position.set(h.x,2.1,h.z),b.scale.setScalar(1.7),s.add(b);let y=null;h.z<0&&(y=Ea(h.label,"#ffffff",1.8,.36,h.skin.rarity+" SKIN"),y.position.set(h.x,3.4,h.z),s.add(y)),u.push({model:b,label:y,baseY:2.1})});const p=Ea("BLOCKSTRIKE","#ffd447",8.5,1.7,"LOBBY · 9 PLAYERS ONLINE");p.position.set(2,9.2,-14),s.add(p);const m=[];for(let h=0;h<18;h++){const d=[16766023,6087097,4892927,16747069][h%4],S=Te(.35,.35,.35,d,{emissive:d,emissiveIntensity:.25});S.position.set((Math.random()-.5)*30,2+Math.random()*8,(Math.random()-.5)*30),s.add(S),m.push({mesh:S,y:S.position.y,phase:Math.random()*6})}const _=new zt(52,1,.1,200);let E=.55;return{scene:i,camera:_,group:s,rotate(h){E+=h*.004},update(h,d){E+=h*.055;const S=17;_.position.set(Math.sin(E)*S,7.5+Math.sin(d*.35)*.5,Math.cos(E)*S),_.lookAt(0,2.4,0),c.forEach((A,T)=>{A.angle+=h*A.speed,A.avatar.group.position.x=Math.cos(A.angle)*A.radius,A.avatar.group.position.z=Math.sin(A.angle)*A.radius,A.avatar.group.rotation.y=-A.angle+Math.PI/2,A.avatar.animate(h,2.1,!1,!1),A.avatar.group.position.y=Math.abs(Math.sin(d*5+A.bob))*.06,T%3===0&&(A.avatar.body.rotation.z=Math.sin(d*3+A.bob)*.1)}),u.forEach((A,T)=>{A.model.rotation.y=d*.5+T,A.model.position.y=A.baseY+Math.sin(d*1.6+T)*.12}),l.rotation.z+=h*.6,m.forEach(A=>{A.mesh.position.y=A.y+Math.sin(d*1.2+A.phase)*.4,A.mesh.rotation.x+=h,A.mesh.rotation.y+=h*.7}),p.lookAt(_.position),u.forEach(A=>A.label?.lookAt(_.position))}}}class Zm{constructor(e){this.scene=e,this.items=[],this.geo=new En(1,1,1)}tracer(e,t,n=16766023,s=.05,r=.09){const a=new D().subVectors(t,e),o=a.length();if(o<.01)return;const l=new nt(this.geo,new $n({color:n,transparent:!0,opacity:.9,depthWrite:!1}));l.position.copy(e).addScaledVector(a,.5),l.scale.set(s,s,o),l.quaternion.setFromUnitVectors(new D(0,0,1),a.clone().normalize()),this.scene.add(l),this.items.push({mesh:l,life:r,max:r,kind:"fade"})}impact(e,t=16766023,n=7){for(let r=0;r<n;r++){const a=new nt(this.geo,new $n({color:t,transparent:!0,opacity:1,depthWrite:!1})),o=.06+Math.random()*.09;a.scale.setScalar(o),a.position.copy(e),this.scene.add(a);const l=new D((Math.random()-.5)*6,Math.random()*5,(Math.random()-.5)*6);this.items.push({mesh:a,life:.5+Math.random()*.3,max:.8,kind:"particle",v:l})}const s=new nt(new Ga(.08,.16,8),new $n({color:t,transparent:!0,opacity:.9,side:nn,depthWrite:!1}));s.position.copy(e),s.lookAt(e.clone().add(new D(0,1,0))),this.scene.add(s),this.items.push({mesh:s,life:.25,max:.25,kind:"fade"})}blood(e){this.impact(e,16735339,5)}explosion(e,t=4){const n=new nt(new ji(1,10,8),new $n({color:16756797,transparent:!0,opacity:.9,depthWrite:!1}));n.position.copy(e),n.scale.setScalar(.3),this.scene.add(n),this.items.push({mesh:n,life:.45,max:.45,kind:"explode",radius:t});for(let s=0;s<22;s++){const r=new nt(this.geo,new $n({color:s%2?16766023:16739133,transparent:!0,opacity:1,depthWrite:!1}));r.scale.setScalar(.12+Math.random()*.15),r.position.copy(e),this.scene.add(r);const a=new D(Math.random()-.5,Math.random()*.9,Math.random()-.5).normalize().multiplyScalar(9+Math.random()*9);this.items.push({mesh:r,life:.6+Math.random()*.4,max:1,kind:"particle",v:a})}}damageNumber(e,t,n=!1){const s=document.createElement("canvas");s.width=128,s.height=64;const r=s.getContext("2d");r.font="900 40px Nunito, Trebuchet MS, sans-serif",r.textAlign="center",r.lineWidth=8,r.strokeStyle="#000",r.strokeText(String(t),64,44),r.fillStyle=n?"#ffd447":"#ffffff",r.fillText(String(t),64,44);const a=new Zs(s);a.colorSpace=Rt;const o=new Hl(new za({map:a,transparent:!0,depthTest:!1,depthWrite:!1}));o.scale.set(1.3,.65,1),o.position.copy(e),o.renderOrder=25,this.scene.add(o),this.items.push({mesh:o,life:.75,max:.75,kind:"float",v:new D((Math.random()-.5)*.5,1.6,0)})}update(e){for(let t=this.items.length-1;t>=0;t--){const n=this.items[t];n.life-=e;const s=Math.max(0,n.life/n.max);n.kind==="particle"?(n.v.y-=15*e,n.mesh.position.addScaledVector(n.v,e),n.mesh.position.y<.05&&(n.mesh.position.y=.05,n.v.y*=-.3,n.v.x*=.6,n.v.z*=.6),n.mesh.material.opacity=s):n.kind==="explode"?(n.mesh.scale.setScalar(.3+(1-s)*n.radius),n.mesh.material.opacity=s*.8):n.kind==="float"?(n.mesh.position.addScaledVector(n.v,e),n.v.y*=.94,n.mesh.material.opacity=s):n.mesh.material.opacity=s*.9,n.life<=0&&(this.scene.remove(n.mesh),n.mesh.material?.map&&n.mesh.material.map.dispose(),n.mesh.material?.dispose?.(),this.items.splice(t,1))}}}class Jm{constructor(){this.ctx=null,this.master=null,this.enabled=!0}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e,this.master=this.ctx.createGain(),this.master.gain.value=.32,this.master.connect(this.ctx.destination))}tone(e,t,n="square",s=.25,r=0){if(!this.enabled||!this.ctx)return;const a=this.ctx.currentTime,o=this.ctx.createOscillator(),l=this.ctx.createGain();o.type=n,o.frequency.setValueAtTime(e,a),r&&o.frequency.exponentialRampToValueAtTime(Math.max(30,e+r),a+t),l.gain.setValueAtTime(s,a),l.gain.exponentialRampToValueAtTime(.001,a+t),o.connect(l),l.connect(this.master),o.start(a),o.stop(a+t+.02)}noise(e=.1,t=.25,n=1200){if(!this.enabled||!this.ctx)return;this.ctx.currentTime;const s=Math.floor(this.ctx.sampleRate*e),r=this.ctx.createBuffer(1,s,this.ctx.sampleRate),a=r.getChannelData(0);for(let u=0;u<s;u++)a[u]=(Math.random()*2-1)*(1-u/s);const o=this.ctx.createBufferSource();o.buffer=r;const l=this.ctx.createBiquadFilter();l.type="lowpass",l.frequency.value=n;const c=this.ctx.createGain();c.gain.value=t,o.connect(l),l.connect(c),c.connect(this.master),o.start()}shoot(e){e==="shotgun"?(this.noise(.22,.5,900),this.tone(90,.16,"sawtooth",.3,-50)):e==="sniper"?(this.noise(.28,.45,1800),this.tone(140,.22,"square",.22,-90)):e==="smg"?(this.noise(.06,.25,2400),this.tone(210,.05,"square",.12,-60)):(this.noise(.1,.35,2e3),this.tone(160,.08,"square",.18,-70))}hit(){this.tone(880,.06,"sine",.22,220)}headshot(){this.tone(1200,.09,"sine",.25,600),this.tone(1600,.12,"triangle",.15,400)}kill(){this.tone(660,.1,"triangle",.25),setTimeout(()=>this.tone(990,.18,"triangle",.22),85)}hurt(){this.tone(140,.16,"sawtooth",.25,-60),this.noise(.08,.18,500)}jump(){this.tone(330,.1,"square",.12,200)}land(){this.noise(.07,.14,300)}reload(){this.tone(300,.05,"square",.14),setTimeout(()=>this.tone(420,.06,"square",.14),170)}pickup(){this.tone(660,.08,"sine",.2),setTimeout(()=>this.tone(990,.14,"sine",.2),80)}click(){this.tone(520,.04,"square",.1)}buy(){this.tone(523,.09,"triangle",.2),setTimeout(()=>this.tone(784,.14,"triangle",.2),90)}deny(){this.tone(180,.14,"sawtooth",.18,-60)}swing(){this.noise(.12,.18,800)}tick(){this.tone(880,.06,"sine",.12)}}class Qm{constructor(e={}){this.handlers=e,this.id=Math.random().toString(36).slice(2,10),this.born=Date.now()+Math.random(),this.peers=new Map,this.host=!1,this.channel=typeof BroadcastChannel<"u"?new BroadcastChannel("blockstrike-arena-v1"):null,this.lastState=0,this.channel&&(this.channel.onmessage=t=>this.onMessage(t.data),this.send("hello",{id:this.id,born:this.born}))}send(e,t={},n=null){this.channel&&this.channel.postMessage({type:e,from:this.id,to:n,born:this.born,data:t})}get peerCount(){return this.peers.size+1}recomputeHost(){let e=!0;for(const t of this.peers.values())t.born<this.born&&(e=!1);e!==this.host&&(this.host=e,this.handlers.onHostChange?.(e))}onMessage(e){if(!e||e.from===this.id||e.to&&e.to!==this.id)return;const t=this.peers.get(e.from);t&&(t.last=performance.now());const n=e.data||{};if(e.type==="hello"){this.peers.set(e.from,{id:e.from,born:e.born,last:performance.now(),state:null}),this.send("welcome",{id:this.id,born:this.born},e.from),this.recomputeHost();return}if(e.type==="welcome"||e.type==="state"){this.peers.has(e.from)||this.peers.set(e.from,{id:e.from,born:e.born,last:performance.now(),state:null});const s=this.peers.get(e.from);s.last=performance.now(),e.type==="state"?(s.state=n,this.handlers.onPeerState?.(e.from,n)):this.handlers.onPeerState?.(e.from,n.state||null),this.recomputeHost();return}switch(e.type){case"botHit":this.handlers.onRemoteBotHit?.(n);break;case"botHp":this.handlers.onBotHp?.(n);break;case"playerDamage":this.handlers.onPlayerDamage?.(n);break;case"kill":this.handlers.onRemoteKill?.(n);break;case"leave":this.peers.delete(e.from),this.recomputeHost(),this.handlers.onPeerLeave?.(e.from);break}}broadcastPlayerState(e){const t=performance.now();t-this.lastState<55||(this.lastState=t,this.send("state",e))}update(){const e=performance.now();for(const[t,n]of this.peers)e-n.last>4e3&&(this.peers.delete(t),this.handlers.onPeerLeave?.(t),this.recomputeHost())}leave(){this.send("leave",{}),this.channel?.close(),this.channel=null,this.peers.clear()}}const _e=i=>document.getElementById(i);class jm{constructor(e){this.game=e,this.el={loading:_e("loading"),menu:_e("menu"),hud:_e("hud"),pause:_e("pause"),customize:_e("customize"),how:_e("how"),scoreboard:_e("scoreboard"),matchEnd:_e("matchEnd"),touch:_e("touchControls"),toast:_e("toast"),menuCoins:_e("menuCoins"),menuOnline:_e("menuOnline"),statKills:_e("statKills"),statWins:_e("statWins"),statBest:_e("statBest"),loadoutSkinName:_e("loadoutSkinName"),loadoutGunName:_e("loadoutGunName"),loadoutAvatar:_e("loadoutAvatar"),matchTime:_e("matchTime"),matchProgress:_e("matchProgress"),hudKills:_e("hudKills"),leaderboardMini:_e("leaderboardMini"),killfeed:_e("killfeed"),crosshair:_e("crosshair"),hitmarker:_e("hitmarker"),scope:_e("scopeOverlay"),damage:_e("damageVignette"),lowHealth:_e("lowHealth"),killBanner:_e("killBanner"),killBannerTitle:_e("killBannerTitle"),killBannerSub:_e("killBannerSub"),respawn:_e("respawn"),respawnTime:_e("respawnTime"),respawnTip:_e("respawnTip"),healthValue:_e("healthValue"),healthBar:_e("healthBar"),weaponSlots:_e("weaponSlots"),ammoWeapon:_e("ammoWeapon"),ammoSkin:_e("ammoSkin"),ammoCurrent:_e("ammoCurrent"),ammoReserve:_e("ammoReserve"),reloadBar:_e("reloadBar"),reloadHint:_e("reloadHint"),scoreboardTime:_e("scoreboardTime"),scoreRows:_e("scoreRows"),custCoins:_e("custCoins"),skinGrid:_e("skinGrid"),previewLabel:_e("previewLabel"),previewSub:_e("previewSub"),endTitle:_e("endTitle"),endSub:_e("endSub"),endResults:_e("endResults"),pickupToast:_e("pickupToast")},this.activeTab="avatar",this.lastHit=0,this.lastKillBanner=0,this.toastTimer=0,this.pickupTimer=0,this.setupPreview(),this.bindMenuButtons(),this.bindTouch(),this.refreshLoadout()}bindMenuButtons(){_e("playBtn").onclick=()=>this.game.startMatch(),_e("customizeBtn").onclick=()=>this.openCustomize("avatar"),_e("howBtn").onclick=()=>{this.el.how.classList.remove("hidden"),this.game.sfx?.click()},_e("closeHow").onclick=()=>this.el.how.classList.add("hidden"),_e("closeCustomize").onclick=()=>this.closeCustomize(),_e("resumeBtn").onclick=()=>this.game.resume(),_e("pauseCustomizeBtn").onclick=()=>this.openCustomize("avatar"),_e("quitBtn").onclick=()=>this.game.quitToMenu(),_e("rematchBtn").onclick=()=>this.game.startMatch(),_e("endCustomizeBtn").onclick=()=>this.openCustomize("avatar"),_e("endMenuBtn").onclick=()=>this.game.quitToMenu(),document.querySelectorAll(".cust-tab").forEach(e=>{e.onclick=()=>{document.querySelectorAll(".cust-tab").forEach(t=>t.classList.toggle("active",t===e)),this.openCustomize(e.dataset.tab,!0)}})}bindTouch(){const e=_e("touchMove"),t=_e("touchStick"),n=_e("touchLook");let s=null,r=null,a=0,o=0;const l=_=>{const E=e.getBoundingClientRect();let h=_.clientX-(E.left+E.width/2),d=_.clientY-(E.top+E.height/2);const S=E.width*.36,A=Math.hypot(h,d);A>S&&(h*=S/A,d*=S/A),t.style.transform=`translate(${h}px,${d}px)`,a=h/S,o=d/S,this.game.touchMove={x:a,y:o}};e.addEventListener("pointerdown",_=>{s=_.pointerId,e.setPointerCapture(_.pointerId),l(_)}),e.addEventListener("pointermove",_=>{_.pointerId===s&&l(_)});const c=_=>{_.pointerId===s&&(s=null,t.style.transform="",this.game.touchMove={x:0,y:0})};e.addEventListener("pointerup",c),e.addEventListener("pointercancel",c);let u=0,g=0;n.addEventListener("pointerdown",_=>{r=_.pointerId,n.setPointerCapture(_.pointerId),u=_.clientX,g=_.clientY}),n.addEventListener("pointermove",_=>{_.pointerId===r&&(this.game.onMouseMove(_.clientX-u,_.clientY-g),u=_.clientX,g=_.clientY)});const p=_=>{_.pointerId===r&&(r=null)};n.addEventListener("pointerup",p),n.addEventListener("pointercancel",p);const m=(_,E,h)=>{const d=_e(_);d.addEventListener("pointerdown",S=>{S.preventDefault(),d.classList.add("pressed"),E()}),d.addEventListener("pointerup",S=>{S.preventDefault(),d.classList.remove("pressed"),h?.()}),d.addEventListener("pointercancel",()=>{d.classList.remove("pressed"),h?.()})};m("touchFire",()=>this.game.touchFire=!0,()=>this.game.touchFire=!1),m("touchAim",()=>this.game.touchAim=!0,()=>this.game.touchAim=!1),_e("touchJump").addEventListener("pointerdown",_=>{_.preventDefault(),this.game.jump()}),_e("touchReload").addEventListener("pointerdown",_=>{_.preventDefault(),this.game.reload()}),_e("touchSwap").addEventListener("pointerdown",_=>{_.preventDefault(),this.game.switchWeapon(this.game.player.weaponIndex+1)})}setupPreview(){const e=_e("previewCanvas");try{this.preview={renderer:new lc({canvas:e,alpha:!0,antialias:!0,powerPreference:"low-power"}),scene:new Oa,camera:new zt(38,1,.1,50)};const t=this.preview.renderer;t.setPixelRatio(Math.min(devicePixelRatio,1.5)),t.shadowMap.enabled=!0,t.shadowMap.type=_i;const n=this.preview.scene;n.add(new Va(16777215,3425118,2.2));const s=new Wa(16777215,2.2);s.position.set(4,8,6),s.castShadow=!0,n.add(s);const r=new nt(new Js(1.9,2.1,.16,12),tt(3098212));r.position.y=-.02,r.receiveShadow=!0,n.add(r);const a=new nt(new es(1.75,.05,6,16),tt(6087097,{emissive:6087097,emissiveIntensity:.6}));a.rotation.x=Math.PI/2,a.position.y=.08,n.add(a),this.preview.root=new dt,n.add(this.preview.root),this.preview.camera.position.set(0,1.75,5.4),this.preview.camera.lookAt(0,1.1,0),this.preview.ring=a,this.rebuildPreview()}catch(t){console.warn("Skin preview unavailable:",t),this.preview=null}}rebuildPreview(){if(!this.preview)return;const e=this.preview.root;for(;e.children.length;)e.remove(e.children[0]);const t=this.game,n=Vi(t.getSkin("avatar"),{scale:1.05});e.add(n.group);const s=Wi(lt[t.player.weaponIndex],t.getSkin("gun"));s.position.set(.3,1.16,.42),s.scale.setScalar(1.15),e.add(s);const r=cc(t.getSkin("melee"));r.position.set(-.42,.8,.2),r.scale.setScalar(.7),e.add(r);const a=ya(t.getSkin("grenade"));a.position.set(.6,.55,.3),a.scale.setScalar(.9),e.add(a),this.preview.avatar=n}updatePreview(e,t){if(!this.preview||this.el.customize.classList.contains("hidden"))return;const n=this.preview.renderer,s=_e("previewCanvas").getBoundingClientRect();s.width>0&&s.height>0&&(n.domElement.width!==Math.floor(s.width*n.getPixelRatio())||n.domElement.height!==Math.floor(s.height*n.getPixelRatio()))&&(n.setSize(s.width,s.height,!1),this.preview.camera.aspect=s.width/s.height,this.preview.camera.updateProjectionMatrix()),this.preview.root.rotation.y=Math.sin(t*.65)*.5,this.preview.ring.rotation.z+=e,this.preview.renderer.render(this.preview.scene,this.preview.camera)}show(e){for(const t of["loading","menu","hud","pause","scoreboard","matchEnd","how"])this.el[t].classList.toggle("hidden",t!==e)}refreshLoadout(){const e=this.game,t=e.getSkin("avatar"),n=e.getSkin("gun");this.el.loadoutSkinName.textContent=t.name,this.el.loadoutGunName.textContent=`${lt[e.player.weaponIndex].name} · ${n.name}`,this.el.menuCoins.textContent=e.coins,this.el.statKills.textContent=e.stats.kills,this.el.statWins.textContent=e.stats.wins,this.el.statBest.textContent=e.stats.best;const s=this.el.loadoutAvatar;s.querySelector(".block-head").style.background=`#${t.head.toString(16).padStart(6,"0")}`;const r=s.querySelector(".block-body");r.style.background=`#${t.torso.toString(16).padStart(6,"0")}`,s.querySelector(".block-arms").style.background=`linear-gradient(90deg, #${t.arms.toString(16).padStart(6,"0")} 0 18px, transparent 18px calc(100% - 18px), #${t.torso.toString(16).padStart(6,"0")} calc(100% - 18px))`,s.querySelector(".block-legs").style.background=`linear-gradient(90deg, #${t.legs.toString(16).padStart(6,"0")} 0 24px, transparent 24px 32px, #${t.legs.toString(16).padStart(6,"0")} 32px)`,this.el.custCoins.textContent=e.coins,this.updateWeaponSlots()}openCustomize(e=this.activeTab,t=!1){this.activeTab=e,document.querySelectorAll(".cust-tab").forEach(n=>n.classList.toggle("active",n.dataset.tab===e)),this.el.customize.classList.remove("hidden"),this.renderSkins(e),this.rebuildPreview(),this.game.sfx?.click()}closeCustomize(){this.el.customize.classList.add("hidden"),this.game.sfx?.click(),this.refreshLoadout(),this.game.state==="menu"?this.show("menu"):this.game.state==="paused"&&this.show("pause")}renderSkins(e){const t=this.game,n=dc[e],s=t.owned[e],r=t.equipped[e];this.el.skinGrid.innerHTML="",n.forEach(o=>{const l=s.includes(o.id),c=r===o.id,u=document.createElement("button");u.className="skin-card"+(c?" selected":"")+(l?"":" locked");const g=`#${(o.torso??o.body).toString(16).padStart(6,"0")}`,p=`#${(o.legs??o.accent??o.body??3355443).toString(16).padStart(6,"0")}`;u.innerHTML=`
        <div class="skin-swatch" style="background:linear-gradient(135deg, ${g} 0 48%, ${p} 48% 100%)"></div>
        <div class="skin-name">${o.name}</div>
        <div class="skin-meta">${c?"✓ EQUIPPED":l?o.rarity:`◈ ${o.price}`}</div>
        ${!l&&!c?`<div class="skin-price">◈ ${o.price}</div>`:""}
      `,u.onclick=()=>{l?(t.equipSkin(e,o.id),this.renderSkins(e),this.rebuildPreview(),this.refreshLoadout(),this.game.sfx?.click()):t.coins>=o.price?(t.buySkin(e,o),this.renderSkins(e),this.rebuildPreview(),this.refreshLoadout()):(this.game.sfx?.deny(),this.toast(`Need ${o.price-t.coins} more coins`))},this.el.skinGrid.appendChild(u)});const a=n.find(o=>o.id===r)||n[0];this.el.previewLabel.textContent=a.name.toUpperCase(),this.el.previewSub.textContent=`${a.rarity} · ${e==="avatar"?"AVATAR SKIN":e==="gun"?"WEAPON FINISH":e==="melee"?"MELEE SKIN":"GRENADE SKIN"}`}updateWeaponSlots(){const e=this.game,t=e.player;this.el.weaponSlots.innerHTML="",lt.forEach((n,s)=>{const r=document.createElement("div");r.className="wslot"+(s===t.weaponIndex?" active":""),r.innerHTML=`<b>${s+1}</b><span>${n.short}</span><i><em style="width:${Math.max(0,t.ammo[s]/n.mag*100)}%"></em></i>`,this.el.weaponSlots.appendChild(r)})}updateHud(e){const t=e.player,n=Math.max(0,Math.ceil(e.matchTime));this.el.matchTime.textContent=`${String(Math.floor(n/60)).padStart(2,"0")}:${String(n%60).padStart(2,"0")}`,this.el.matchProgress.style.width=`${Math.max(0,n/e.matchDuration*100)}%`,this.el.hudKills.textContent=t.kills,this.el.healthValue.textContent=Math.max(0,Math.ceil(t.health)),this.el.healthBar.style.width=`${Math.max(0,t.health)}%`,this.el.lowHealth.style.opacity=t.health<30&&t.alive?"1":"0";const s=lt[t.weaponIndex];this.el.ammoWeapon.textContent=s.name,this.el.ammoSkin.textContent=e.getSkin("gun").name.toUpperCase(),this.el.ammoCurrent.textContent=t.ammo[t.weaponIndex],this.el.ammoReserve.textContent=t.reserve[t.weaponIndex];const r=t.reloadTimer>0;this.el.reloadBar.classList.toggle("show",r),this.el.reloadBar.firstElementChild.style.width=r?`${(1-t.reloadTimer/s.reload)*100}%`:"0%",this.el.reloadHint.textContent=r?"RELOADING…":t.ammo[t.weaponIndex]===0?"PRESS R TO RELOAD":"R TO RELOAD",this.el.reloadHint.style.color=t.ammo[t.weaponIndex]===0?"#ff5364":"",this.el.crosshair.classList.toggle("scoped",t.aiming&&s.id==="sniper"),this.el.scope.classList.toggle("show",t.aiming&&s.id==="sniper"),this.el.respawn.classList.toggle("hidden",t.alive),t.alive||(this.el.respawnTime.textContent=Math.max(1,Math.ceil(t.respawnTimer))),this.el.damage.style.opacity=Math.max(0,t.damageFlash||0)*.85;const a=e.scoreboardEntries();this.el.leaderboardMini.innerHTML=a.slice(0,5).map((o,l)=>`<div class="lb-row ${o.me?"me":""}"><span>${l+1}. ${o.name}</span><span>${o.kills}</span></div>`).join(""),this.el.scoreboard.classList.contains("hidden")||this.updateScoreboard(e),this.updateWeaponSlots()}updateScoreboard(e){const t=e.scoreboardEntries();this.el.scoreRows.innerHTML=t.map((n,s)=>`<div class="score-row ${n.me?"me":""}"><span>${s+1}</span><span>${n.name}</span><span>${n.kills}</span><span>${n.deaths}</span><span>${n.streak}</span></div>`).join(""),this.el.scoreboardTime.textContent=`${Math.ceil(e.matchTime)}s REMAINING · FIRST TO ${Bs}`}addKill(e,t,n,s){const r=document.createElement("div");for(r.className="kf-item",r.innerHTML=`<b>${e}</b> ${s?"☠":"✕"} ${n} ${s?"HEADSHOT":""} <i>${t}</i>`,this.el.killfeed.prepend(r),setTimeout(()=>r.remove(),5200);this.el.killfeed.children.length>5;)this.el.killfeed.lastChild.remove()}showHit(e){const t=performance.now();t-this.lastHit<40||(this.lastHit=t,this.el.hitmarker.classList.toggle("head",e),this.el.hitmarker.classList.add("show"),clearTimeout(this._hitTimer),this._hitTimer=setTimeout(()=>this.el.hitmarker.classList.remove("show"),120))}showKillBanner(e,t){this.el.killBannerTitle.textContent=e==="HEADSHOT!"?"HEADSHOT!":"ELIMINATED!",this.el.killBannerSub.textContent=`+${t} ◈  ${e!=="HEADSHOT!"?e.toUpperCase():""}`,this.el.killBanner.classList.add("show"),clearTimeout(this._killTimer),this._killTimer=setTimeout(()=>this.el.killBanner.classList.remove("show"),1400)}showPickup(e){this.el.pickupToast.textContent=e,this.el.pickupToast.classList.add("show"),clearTimeout(this.pickupTimer),this.pickupTimer=setTimeout(()=>this.el.pickupToast.classList.remove("show"),1e3)}toast(e){this.el.toast.textContent=e,this.el.toast.classList.add("show"),clearTimeout(this.toastTimer),this.toastTimer=setTimeout(()=>this.el.toast.classList.remove("show"),2e3)}showEnd(e,t){this.el.endTitle.textContent=t?"VICTORY!":"MATCH OVER",this.el.endSub.textContent=t?"You ruled the block. Nice shooting!":"Good run, block-head. Go again?";const n=e.find(s=>s.me);this.el.endResults.innerHTML=`
      <div><b>#${e.findIndex(s=>s.me)+1}</b><span>PLACE</span></div>
      <div><b>${n?.kills||0}</b><span>KILLS</span></div>
      <div><b>${n?.deaths||0}</b><span>DEATHS</span></div>
      <div><b>${n?.streak||0}</b><span>STREAK</span></div>`,this.show("matchEnd")}setOnline(e){this.el.menuOnline.textContent=`ONLINE · ${e} PLAYERS`}}const fl="blockstrike-save-v1",Oi=new D,e0=new D,tn=new Kh;function Ir(i,e,t){return Math.max(e,Math.min(t,i))}function ht(i,e){return i+Math.random()*(e-i)}class t0{constructor(){this.canvas=document.getElementById("gameCanvas"),this.renderer=new lc({canvas:this.canvas,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.6)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=_i,this.renderer.outputColorSpace=Rt,this.renderer.toneMapping=dn,this.arena=Km(),this.effects=new Zm(this.arena.scene),this.lobby=$m(),this.camera=new zt(72,1,.1,500),this.sfx=new Jm,this.load(),this.net=new Qm({onPeerState:(e,t)=>this.onPeerState(e,t),onPeerLeave:e=>this.onPeerLeave(e),onRemoteBotHit:e=>this.onRemoteBotHit(e),onBotHp:e=>this.onBotHp(e),onPlayerDamage:e=>this.onPlayerDamage(e),onRemoteKill:e=>this.onRemoteKill(e)}),this.player=this.makePlayer(),this.bots=this.makeBots(),this.remotes=new Map,this.projectiles=[],this.state="menu",this.matchTime=Cs,this.matchDuration=Cs,this.time=0,this.keys={},this.touchMove={x:0,y:0},this.touchFire=!1,this.touchAim=!1,this.waitingFireRelease=!1,this.isTouch=window.matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>0,this.suppressPause=!1,this.killSeen=new Set,this.ui=new jm(this),this.bindEvents(),this.onResize(),this.last=performance.now(),requestAnimationFrame(e=>this.loop(e)),requestAnimationFrame(()=>{document.getElementById("loading").classList.add("hidden"),document.getElementById("menu").classList.remove("hidden"),this.ui.setOnline(this.net.peerCount+8)})}load(){const e={coins:500,owned:{avatar:["classic","ninja"],gun:["factory","carbon"],melee:["pipe"],grenade:["classic"]},equipped:{avatar:"classic",gun:"factory",melee:"pipe",grenade:"classic"},stats:{kills:0,wins:0,best:0}};try{const t=JSON.parse(localStorage.getItem(fl)||"null");if(t&&typeof t=="object"){e.coins=Number.isFinite(t.coins)?t.coins:e.coins;for(const n of Object.keys(e.owned))Array.isArray(t.owned?.[n])&&(e.owned[n]=t.owned[n]),t.equipped?.[n]&&(e.equipped[n]=t.equipped[n]);Object.assign(e.stats,t.stats||{})}}catch{}this.coins=e.coins,this.owned=e.owned,this.equipped=e.equipped,this.stats=e.stats,this.save()}save(){try{localStorage.setItem(fl,JSON.stringify({coins:this.coins,owned:this.owned,equipped:this.equipped,stats:this.stats}))}catch{}}getSkin(e){const t=dc[e];return t.find(n=>n.id===this.equipped[e])||t[0]}isOwned(e,t){return this.owned[e].includes(t)}equipSkin(e,t){this.isOwned(e,t)&&(this.equipped[e]=t,this.save(),this.applyLoadout())}buySkin(e,t){return this.coins<t.price||this.isOwned(e,t.id)?!1:(this.coins-=t.price,this.owned[e].push(t.id),this.equipped[e]=t.id,this.save(),this.applyLoadout(),this.sfx.buy(),this.ui.toast(`Unlocked ${t.name}!`),!0)}applyLoadout(){if(!this.player)return;const e=this.getSkin("avatar");this.player.avatar.setSkin(e),this.rebuildModels(this.player);for(const t of this.bots);this.ui?.refreshLoadout(),this.ui?.rebuildPreview()}rebuildModels(e){e.weaponModels&&e.weaponModels.forEach(t=>e.avatar.weaponAnchor.remove(t)),e.weaponModels=lt.map(t=>{const n=Wi(t,this.getSkin("gun"));return n.visible=!1,e.avatar.weaponAnchor.add(n),n}),e.meleeModel&&e.avatar.meleeAnchor.remove(e.meleeModel),e.meleeModel=cc(this.getSkin("melee")),e.meleeModel.visible=!1,e.avatar.meleeAnchor.add(e.meleeModel),e.grenadeModel&&e.avatar.grenadeAnchor.remove(e.grenadeModel),e.grenadeModel=ya(this.getSkin("grenade")),e.grenadeModel.visible=!1,e.avatar.grenadeAnchor.add(e.grenadeModel),e.weaponModels[e.weaponIndex]&&(e.weaponModels[e.weaponIndex].visible=!0),e.weaponModel=e.weaponModels[e.weaponIndex]}makePlayer(){const e=this.getSkin("avatar"),t=Vi(e,{name:"YOU",nameColor:"#ffd447",showHp:!1,owner:"player"});t.group.position.set(0,0,-28),this.arena.scene.add(t.group);const n={id:this.net.id,name:"YOU",isLocal:!0,pos:new D(0,0,-28),vel:new D,yaw:0,pitch:0,grounded:!0,health:100,alive:!0,respawnTimer:0,deaths:0,kills:0,streak:0,highestStreak:0,weaponIndex:0,ammo:lt.map(s=>s.mag),reserve:lt.map(s=>s.reserve),fireCooldown:0,reloadTimer:0,reloadWeapon:-1,aiming:!1,sprinting:!1,damageFlash:0,flashTimer:0,meleeTimer:0,meleeCooldown:0,avatar:t,lastFootstep:0};return this.rebuildModels(n),n}makeBots(){const e=[];for(let t=0;t<8;t++){const n=Zn[(t+2)%Zn.length],s=Vi(n,{name:dl[t],nameColor:t%3===0?"#ff8a3d":"#ff6b7a",owner:`bot${t}`}),r=this.arena.spawns[t%this.arena.spawns.length];s.group.position.copy(r),this.arena.scene.add(s.group);const a=Wi(lt[t%3],Fn[t%Fn.length]);a.position.set(.3,1.16,.42),s.weaponAnchor.add(a);const o={id:`bot${t}`,name:dl[t],isBot:!0,skin:n,pos:r.clone(),vel:new D,yaw:0,pitch:0,grounded:!0,health:100,alive:!0,respawnTimer:0,kills:0,deaths:0,streak:0,target:null,thinkTimer:ht(0,.5),waypoint:null,wpTimer:0,fireCooldown:ht(0,1),strafe:Math.random()<.5?1:-1,avatar:s,weaponModel:a,flashTimer:0,speed:ht(5.2,7.2),accuracy:ht(.72,.93)};e.push(o)}return e}bindEvents(){window.addEventListener("resize",()=>this.onResize()),document.addEventListener("keydown",n=>this.onKeyDown(n)),document.addEventListener("keyup",n=>this.onKeyUp(n)),document.addEventListener("mousemove",n=>{document.pointerLockElement===this.canvas&&this.onMouseMove(n.movementX,n.movementY)}),document.addEventListener("mouseup",n=>{n.button===0&&(this.mouseDown=!1),n.button===2&&(this.mouseAim=!1)}),this.canvas.addEventListener("mousedown",n=>{this.state==="playing"&&(document.pointerLockElement!==this.canvas&&!this.isTouch&&this.canvas.requestPointerLock?.(),n.button===0&&(this.mouseDown=!0),n.button===2&&(this.mouseAim=!0))}),this.canvas.addEventListener("contextmenu",n=>n.preventDefault()),this.canvas.addEventListener("wheel",n=>{this.state==="playing"&&(n.preventDefault(),this.switchWeapon(this.player.weaponIndex+(n.deltaY>0?1:-1)))},{passive:!1}),document.addEventListener("pointerlockchange",()=>{document.pointerLockElement!==this.canvas&&this.state==="playing"&&!this.suppressPause&&!this.isTouch&&this.pause()});let e=!1,t=0;this.canvas.addEventListener("pointerdown",n=>{this.state==="menu"&&(e=!0,t=n.clientX)}),window.addEventListener("pointerup",()=>{e=!1}),window.addEventListener("pointermove",n=>{e&&this.state==="menu"&&(this.lobby.rotate(n.clientX-t),t=n.clientX)})}onResize(){const e=window.innerWidth,t=window.innerHeight;this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.lobby.camera.aspect=e/t,this.lobby.camera.updateProjectionMatrix()}onMouseMove(e,t){this.state==="playing"&&(this.player.yaw+=e*.0022,this.player.pitch=Ir(this.player.pitch-t*.0022,-1.45,1.45))}onKeyDown(e){const t=e.key.toLowerCase();if(this.keys[t]=!0,t==="tab"&&(e.preventDefault(),this.state==="playing"&&this.ui.el.scoreboard.classList.remove("hidden")),e.key==="Escape"){if(!this.ui.el.customize.classList.contains("hidden")){this.ui.closeCustomize();return}if(!this.ui.el.how.classList.contains("hidden")){this.ui.el.how.classList.add("hidden");return}this.state==="playing"?this.pause():this.state==="paused"&&this.resume();return}this.state==="playing"&&(t===" "&&(e.preventDefault(),this.jump()),t==="r"&&this.reload(),t==="v"&&this.melee(),t==="g"&&this.throwGrenade(),t==="b"&&this.openCustomizeInGame(),["1","2","3","4"].includes(t)&&this.switchWeapon(parseInt(t,10)-1))}onKeyUp(e){const t=e.key.toLowerCase();this.keys[t]=!1,t==="tab"&&this.ui.el.scoreboard.classList.add("hidden")}openCustomizeInGame(){this.suppressPause=!0,document.exitPointerLock?.(),this.ui.openCustomize("avatar")}startMatch(){this.sfx.init(),this.sfx.click(),this.matchTime=Cs,this.matchDuration=Cs,this.killSeen.clear(),this.projectiles.forEach(t=>this.arena.scene.remove(t.mesh)),this.projectiles=[];const e=(t,n)=>{const s=this.arena.spawns[n%this.arena.spawns.length];t.pos.copy(s),t.vel.set(0,0,0),t.health=100,t.alive=!0,t.respawnTimer=0,t.invuln=2.5,t.kills=0,t.deaths=0,t.streak=0,t.avatar.setDead(!1),t.isLocal&&(t.ammo=lt.map(r=>r.mag),t.reserve=lt.map(r=>r.reserve),t.reloadTimer=0,t.weaponIndex=0,t.yaw=Math.atan2(-s.x,-s.z),t.pitch=0)};e(this.player,4),this.bots.forEach((t,n)=>e(t,n)),this.ui.el.customize.classList.add("hidden"),this.ui.el.how.classList.add("hidden"),this.ui.show("hud"),this.ui.el.touch.classList.toggle("hidden",!this.isTouch),this.state="playing",this.suppressPause=!1,this.last=performance.now(),this.isTouch||this.canvas.requestPointerLock?.()}pause(){this.state==="playing"&&(this.state="paused",this.ui.show("pause"),this.ui.el.touch.classList.add("hidden"),document.exitPointerLock?.(),this.mouseDown=!1,this.mouseAim=!1)}resume(){this.state==="paused"&&(this.ui.show("hud"),this.ui.el.touch.classList.toggle("hidden",!this.isTouch),this.state="playing",this.last=performance.now(),this.isTouch||this.canvas.requestPointerLock?.())}quitToMenu(){this.state="menu",this.ui.show("menu"),this.ui.el.touch.classList.add("hidden"),this.ui.el.customize.classList.add("hidden"),this.ui.refreshLoadout(),this.ui.setOnline(this.net.peerCount+8),document.exitPointerLock?.()}endMatch(){if(this.state!=="playing")return;this.state="end";const e=this.scoreboardEntries(),t=this.player.kills>=Bs||e[0]?.me&&e[0].kills>=this.player.kills;t&&(this.stats.wins++,this.coins+=200,this.save()),this.ui.showEnd(e,t),this.ui.el.touch.classList.add("hidden"),document.exitPointerLock?.(),this.sfx.kill()}collideAt(e,t,n,s=.42,r=1.75){return Oi.set(e,t,n),this.arena.collide(Oi,s,r)}moveEntity(e,t,n,s,r){const a=Math.hypot(n,s);a>0&&(n/=a,s/=a);const o=n*r,l=s*r,c=1-Math.exp(-t*(a>0?14:10));e.vel.x+=(o-e.vel.x)*c,e.vel.z+=(l-e.vel.z)*c,e.vel.y-=24*t,e.vel.y<-32&&(e.vel.y=-32);const u=e.pos.x+e.vel.x*t;this.collideAt(u,e.pos.y,e.pos.z)?e.grounded&&!this.collideAt(u,e.pos.y+.66,e.pos.z)&&!this.collideAt(e.pos.x,e.pos.y+.66,e.pos.z)?(e.pos.y+=.66,e.pos.x=u):e.vel.x=0:e.pos.x=u;const g=e.pos.z+e.vel.z*t;this.collideAt(e.pos.x,e.pos.y,g)?e.grounded&&!this.collideAt(e.pos.x,e.pos.y+.66,g)&&!this.collideAt(e.pos.x,e.pos.y+.66,e.pos.z)?(e.pos.y+=.66,e.pos.z=g):e.vel.z=0:e.pos.z=g;const p=e.pos.y+e.vel.y*t;this.collideAt(e.pos.x,p,e.pos.z)?(e.vel.y<0&&(e.grounded=!0),e.vel.y=0):(e.pos.y=p,e.pos.y<=0?(e.pos.y=0,e.grounded=!0,e.vel.y<-4&&(e.landed=!0),e.vel.y=0):e.grounded=!1),this.arena.clamp(e.pos)}jump(){const e=this.player;!e.alive||!e.grounded||(e.vel.y=9.2,e.grounded=!1,this.sfx.jump())}switchWeapon(e){const t=this.player;e=(e+lt.length)%lt.length,!(e===t.weaponIndex||t.reloadTimer>0)&&(t.weaponModels[t.weaponIndex]&&(t.weaponModels[t.weaponIndex].visible=!1),t.weaponIndex=e,t.weaponModels[e]&&(t.weaponModels[e].visible=!0),t.weaponModel=t.weaponModels[e],t.fireCooldown=Math.max(t.fireCooldown,.18),t.aiming=!1,this.sfx.click(),this.ui.updateWeaponSlots())}reload(){const e=this.player,t=lt[e.weaponIndex];!e.alive||e.reloadTimer>0||e.ammo[e.weaponIndex]>=t.mag||e.reserve[e.weaponIndex]<=0||(e.reloadTimer=t.reload,e.reloadWeapon=e.weaponIndex,this.sfx.reload())}melee(){const e=this.player;if(!e.alive||e.meleeCooldown>0)return;e.meleeTimer=.32,e.meleeCooldown=.62,e.meleeModel.visible=!0,this.sfx.swing();const t=this.aimDirection();for(const n of[...this.bots,...this.remotes.values()]){if(!n.alive)continue;const s=Oi.copy(n.pos).sub(e.pos).setY(0);s.length()>2.8||(s.normalize(),s.dot(t.setY(0).normalize())>.45&&this.dealDamage(n,42,e,!1,"MELEE","melee"))}}throwGrenade(){const e=this.player;if(!e.alive||(e.grenadeCooldown||0)>0)return;e.grenadeCooldown=1.4,e.grenadeModel.visible=!1;const t=this.aimDirection(),n=ya(this.getSkin("grenade"));n.scale.setScalar(1.1);const s=e.pos.clone().add(new D(0,1.4,0)).addScaledVector(t,.7);n.position.copy(s),this.arena.scene.add(n),this.projectiles.push({mesh:n,pos:s,vel:t.clone().multiplyScalar(19).add(new D(0,7,0)),fuse:2.1,owner:e}),this.sfx.swing()}aimDirection(){const e=this.player;return new D(Math.sin(e.yaw)*Math.cos(e.pitch),Math.sin(e.pitch),Math.cos(e.yaw)*Math.cos(e.pitch)).normalize()}shoot(){const e=this.player,t=lt[e.weaponIndex];if(!e.alive||e.reloadTimer>0||e.fireCooldown>0)return;if(e.ammo[e.weaponIndex]<=0){this.reload();return}e.ammo[e.weaponIndex]--,e.fireCooldown=t.rate;const n=e.weaponModel,s=n.userData.muzzle.clone();n.updateWorldMatrix(!0,!1),n.localToWorld(s);const r=new D;this.camera.getWorldDirection(r);const a=this.camera.position.clone(),o=[];for(const g of this.bots)g.alive&&o.push(...g.avatar.hitMeshes);for(const g of this.remotes.values())g.alive&&g.avatar&&o.push(...g.avatar.hitMeshes);o.push(...this.arena.solidMeshes),tn.far=t.range;let l=a.clone().addScaledVector(r,t.range),c=!1,u=!1;for(let g=0;g<t.pellets;g++){const p=e.aiming?t.adsSpread:t.spread,m=r.clone();m.x+=ht(-p,p),m.y+=ht(-p,p),m.z+=ht(-p,p),m.normalize(),tn.set(a,m);const E=tn.intersectObjects(o,!1)[0];if(!E){this.effects.tracer(s,l,this.getSkin("gun").glow,.035,.07);continue}l=E.point.clone();const h=E.object.userData||{};if(h.owner){const d=this.findEntity(h.owner);if(d){const S=h.hitZone==="head",A=E.distance,T=Ir(1-Math.max(0,A-t.range*.55)/(t.range*.6),.45,1),b=Math.round(t.damage*(S?t.headMult:1)*T);this.dealDamage(d,b,e,S,t.name,"gun"),this.effects.blood(E.point),this.effects.damageNumber(E.point,b,S),c=!0,u=u||S}}else this.effects.impact(E.point,16766023,5);this.effects.tracer(s,E.point,this.getSkin("gun").glow,.035,.07)}n.userData.flash.visible=!0,e.flashTimer=.05,e.pitch=Ir(e.pitch+t.recoil*(e.aiming?.55:1)*ht(.8,1.2),-1.45,1.45),e.yaw+=ht(-t.recoil,t.recoil)*.3,this.sfx.shoot(t.id),(c||u)&&(this.ui.showHit(u),this.sfx[u?"headshot":"hit"]()),this.ui.updateHud(this)}findEntity(e){if(e===this.player.id||e==="player")return this.player;const t=this.bots.find(n=>n.id===e);return t||this.remotes.get(e)}dealDamage(e,t,n,s,r,a="gun"){if(!e||!e.alive||t<=0||(e.invuln||0)>0)return;const o=e.alive;e.health-=t,e.isLocal&&(e.damageFlash=1,this.sfx.hurt(),!this.net.host&&n&&n!==e&&(n.id,this.player.id)),e.isBot&&(e.avatar.setHealth(e.health),this.net.host?this.net.send("botHp",{id:e.id,hp:e.health}):n===this.player&&a==="gun"&&this.net.send("botHit",{target:e.id,amount:t,head:s,shooter:this.player.id,weapon:r})),e&&!e.isLocal&&!e.isBot&&n===this.player&&this.net.send("playerDamage",{target:e.id,from:"YOU",amount:t,head:s,weapon:r}),e.health<=0&&o&&this.registerKill(e,n,r,s)}registerKill(e,t,n,s){e.health=0,e.alive=!1,e.deaths=(e.deaths||0)+1,e.respawnTimer=e.isLocal?3:ht(2.5,4),e.avatar.setDead(!0),e.vel.set(0,0,0);const r=t?.name||"The Arena";if(t&&t!==e&&(t.kills=(t.kills||0)+1,t.streak=(t.streak||0)+1,t.highestStreak=Math.max(t.highestStreak||0,t.streak),t.isLocal)){const a=40+(s?20:0)+Math.min(40,t.streak*5);this.coins+=a,this.stats.kills++,this.stats.best=Math.max(this.stats.best,t.streak),this.save(),this.ui.showKillBanner(s?"HEADSHOT!":r,a),this.sfx.kill(),this.ui.toast(`+${a} coins · ${t.streak} kill streak`)}this.ui.addKill(r,e.name||"Player",n,s),e.isBot&&this.net.host&&(this.net.send("botHp",{id:e.id,hp:0}),this.net.send("kill",{killer:r,victim:e.name,weapon:n,head:s})),e.isLocal&&this.sfx.hurt(),t?.isLocal&&this.player.kills>=Bs&&this.endMatch()}respawn(e,t){const n=this.arena.spawns[Math.floor(ht(0,this.arena.spawns.length-1))];e.pos.copy(n),e.pos.y=n.y||0,e.vel.set(0,0,0),e.health=100,e.alive=!0,e.streak=0,e.invuln=2.5,e.avatar.setDead(!1),e.avatar.setHealth(100),e.isLocal&&(e.ammo=lt.map(s=>s.mag),e.reloadTimer=0,e.damageFlash=0,e.yaw=Math.atan2(-n.x,-n.z),this.ui.el.respawnTip.textContent=ul[Math.floor(ht(0,ul.length))]),e.isBot&&this.net.host&&this.net.send("botHp",{id:e.id,hp:100})}onPeerState(e,t){if(!t||!Array.isArray(t.p))return;let n=this.remotes.get(e);if(!n){const s=Zn.find(a=>a.id===t.skin)||Zn[0],r=Vi(s,{name:t.name||"PLAYER",nameColor:"#4aa8ff",owner:e});if(this.arena.scene.add(r.group),n={id:e,name:t.name||"PLAYER",avatar:r,pos:new D(...t.p),alive:!0,health:100,kills:0,deaths:0,streak:0,yaw:0,weaponIndex:t.weapon||0},this.remotes.set(e,n),this.ui.toast(`${n.name} joined the arena!`),this.player.weaponModels[t.weapon||0]){const a=Wi(lt[t.weapon||0],Fn[0]);a.position.set(.3,1.16,.42),r.weaponAnchor.add(a)}}n.targetPos=new D(...t.p),n.yaw=t.yaw||0,n.alive=t.alive!==!1,n.health=t.hp??n.health,n.avatar.setDead(!n.alive),n.avatar.setHealth(n.health),this.ui.setOnline(this.net.peerCount+8)}onPeerLeave(e){const t=this.remotes.get(e);t&&(this.arena.scene.remove(t.avatar.group),this.remotes.delete(e)),this.ui.setOnline(this.net.peerCount+8)}onRemoteBotHit(e){if(!this.net.host)return;const t=this.bots.find(s=>s.id===e.target);if(!t||!t.alive)return;const n=e.shooter===this.player.id?this.player:this.remotes.get(e.shooter)||{name:"PLAYER",id:e.shooter};this.dealDamage(t,e.amount,n,e.head,e.weapon||"GUN","net")}onBotHp(e){const t=this.bots.find(n=>n.id===e.id);t&&(t.health=e.hp,t.avatar.setHealth(e.hp),e.hp<=0&&t.alive&&(t.alive=!1,t.deaths++,t.respawnTimer=ht(2.5,4),t.avatar.setDead(!0)))}onPlayerDamage(e){if(e.target!==this.player.id||!this.player.alive)return;const t=this.bots.find(n=>n.name===e.from)||this.remotes.get(e.from);this.dealDamage(this.player,e.amount,t||{name:e.from||"PLAYER"},e.head,e.weapon||"GUN","net")}onRemoteKill(e){const t=`${e.killer}|${e.victim}|${Math.round(this.time)}`;this.killSeen.has(t)||(this.killSeen.add(t),this.ui.addKill(e.killer,e.victim,e.weapon,e.head))}updateBots(e){for(const t of this.bots){if(!t.alive){t.respawnTimer-=e,t.respawnTimer<=0&&this.respawn(t);continue}if(t.fireCooldown-=e,t.thinkTimer-=e,t.wpTimer-=e,t.invuln=Math.max(0,(t.invuln||0)-e),t.flashTimer=Math.max(0,t.flashTimer-e),t.weaponModel.userData.flash.visible=t.flashTimer>0,t.thinkTimer<=0){t.thinkTimer=ht(.35,.7);const a=[this.player,...this.remotes.values(),...this.bots];let o=null,l=42;for(const c of a){if(c===t||!c.alive||c.isBot&&!this.net.host)continue;const u=t.pos.distanceTo(c.pos);u<l&&this.hasLineOfSight(t.pos,c.pos)&&(o=c,l=u)}t.target=o,(!t.waypoint||t.wpTimer<=0||t.pos.distanceTo(t.waypoint)<2.5)&&(t.waypoint=this.arena.waypoints[Math.floor(ht(0,this.arena.waypoints.length))].clone(),t.wpTimer=ht(5,10))}let n=0,s=0,r=t.speed;if(t.target){const a=Oi.copy(t.target.pos).sub(t.pos),o=a.length(),l=Math.atan2(a.x,a.z);t.yaw=this.angleLerp(t.yaw,l,1-Math.exp(-e*7));const c=t.target.pos.y+1.3-(t.pos.y+1.5);t.pitch=this.angleLerp(t.pitch,Math.atan2(c,Math.max(1,o)),1-Math.exp(-e*6));const u=e0.set(Math.sin(t.yaw),0,Math.cos(t.yaw));o>17?(n=u.x,s=u.z):o<9?(n=-u.x,s=-u.z):(n=u.z*t.strafe,s=-u.x*t.strafe,Math.random()<e*.4&&(t.strafe*=-1)),o<38&&t.fireCooldown<=0&&this.hasLineOfSight(t.pos,t.target.pos)&&(this.botShoot(t,t.target,o),t.fireCooldown=ht(.16,.42))}else if(t.waypoint){const a=Oi.copy(t.waypoint).sub(t.pos),o=Math.atan2(a.x,a.z);t.yaw=this.angleLerp(t.yaw,o,1-Math.exp(-e*4)),n=Math.sin(t.yaw),s=Math.cos(t.yaw),r*=.75}if(this.moveEntity(t,e,n,s,r),t.avatar.group.position.copy(t.pos),t.avatar.group.rotation.y=t.yaw,t.avatar.head.rotation.x=-t.pitch*.6,t.avatar.animate(e,Math.hypot(t.vel.x,t.vel.z),!t.grounded,!1),t.health<70)for(const a of this.arena.pickups)a.active&&t.pos.distanceTo(a.pos)<3.5&&(this.arena.takePickup(t.pos),t.health=Math.min(100,t.health+40),t.avatar.setHealth(t.health),this.effects.impact(a.pos,6087097,5))}}angleLerp(e,t,n){let s=(t-e+Math.PI)%(Math.PI*2)-Math.PI;return s<-Math.PI&&(s+=Math.PI*2),e+s*n}hasLineOfSight(e,t){const n=e.clone().add(new D(0,1.5,0)),r=t.clone().add(new D(0,1.3,0)).clone().sub(n),a=r.length();tn.set(n,r.normalize()),tn.far=a-.6;const o=tn.intersectObjects(this.arena.solidMeshes,!1);return tn.far=300,o.length===0}botShoot(e,t,n){const s=e.pos.clone().add(new D(0,1.5,0)),a=t.pos.clone().add(new D(0,1.3,0)).sub(s).normalize(),o=(1-e.accuracy)*1.8+n*.002;a.x+=ht(-o,o),a.y+=ht(-o,o),a.z+=ht(-o,o),a.normalize(),tn.set(s,a),tn.far=60;const l=[];t.isLocal||t!==this.player&&this.net.host?t.isLocal&&l.push(...this.player.avatar.hitMeshes):t.isBot&&this.net.host&&l.push(...t.avatar.hitMeshes),l.length===0&&l.push(...this.arena.solidMeshes);const u=tn.intersectObjects(l.concat(this.arena.solidMeshes),!1)[0],g=u?u.point:s.clone().addScaledVector(a,60);e.weaponModel.updateWorldMatrix(!0,!1);const p=e.weaponModel.localToWorld(e.weaponModel.userData.muzzle.clone());if(this.effects.tracer(p,g,16747069,.04,.08),e.flashTimer=.05,u?.object.userData?.owner){const m=Math.round(ht(8,13)),_=u.object.userData.hitZone==="head";t.isLocal?this.dealDamage(this.player,m,e,_,"ENEMY GUN","bot"):this.net.host&&t.id&&t!==this.player?this.net.send("playerDamage",{target:t.id,from:e.name,amount:m,head:_,weapon:"ENEMY GUN"}):t.isBot&&this.net.host&&this.dealDamage(t,m,e,_,"ENEMY GUN","bot")}tn.far=300}updateProjectiles(e){for(let t=this.projectiles.length-1;t>=0;t--){const n=this.projectiles[t];n.fuse-=e,n.vel.y-=20*e;const s=n.pos.clone().addScaledVector(n.vel,e);if(this.collideAt(s.x,s.y,s.z,.15,.2)||s.y<=.12?(n.vel.multiplyScalar(.35),n.vel.y=Math.abs(n.vel.y)*.4):n.pos.copy(s),n.mesh.position.copy(n.pos),n.mesh.rotation.x+=e*12,n.fuse<=0){this.effects.explosion(n.pos,4.5),this.sfx.shoot("shotgun");for(const a of[this.player,...this.bots,...this.remotes.values()]){if(!a.alive)continue;const o=a.pos.distanceTo(n.pos);if(o<5.2){const l=Math.round(95*(1-o/6));a.isLocal||a.isBot&&this.net.host?this.dealDamage(a,l,n.owner,!1,"GRENADE","explosion"):a.id&&a.isBot===void 0&&this.net.send("playerDamage",{target:a.id,from:n.owner.name,amount:l,head:!1,weapon:"GRENADE"})}}this.arena.scene.remove(n.mesh),this.projectiles.splice(t,1)}}}updateCamera(e){const t=this.player,n=this.aimDirection(),s=new D(t.pos.x,t.pos.y+1.5,t.pos.z),r=new D(Math.cos(t.yaw),0,-Math.sin(t.yaw)),a=t.aiming?2.9:5,o=t.aiming?.5:.95,l=t.aiming?.3:.85,c=s.clone().addScaledVector(n,-a).addScaledVector(r,o).add(new D(0,l,0)),u=c.clone().sub(s),g=u.length();u.normalize();for(let h=1;h<=10;h++){const d=s.clone().addScaledVector(u,g*h/10);if(this.collideAt(d.x,d.y,d.z,.2,.2)){c.copy(s).addScaledVector(u,Math.max(.6,g*(h-1)/10-.2));break}}this.camera.position.lerp(c,1-Math.exp(-e*18));const p=s.clone().addScaledVector(n,t.aiming?40:12);this.camera.lookAt(p);const m=Math.hypot(t.vel.x,t.vel.z),E=72-(t.aiming?72*(1-lt[t.weaponIndex].adsZoom):0)+Math.min(5,m*.5);this.camera.fov+=(E-this.camera.fov)*(1-Math.exp(-e*10)),this.camera.updateProjectionMatrix()}update(e){if(this.matchTime-=e,this.matchTime<=0||this.player.kills>=Bs){this.endMatch();return}const t=this.player;if(t.fireCooldown=Math.max(0,t.fireCooldown-e),t.meleeCooldown=Math.max(0,t.meleeCooldown-e),t.grenadeCooldown=Math.max(0,(t.grenadeCooldown||0)-e),t.damageFlash=Math.max(0,t.damageFlash-e*1.8),t.invuln=Math.max(0,(t.invuln||0)-e),t.flashTimer=Math.max(0,t.flashTimer-e),t.weaponModel&&(t.weaponModel.userData.flash.visible=t.flashTimer>0),t.meleeTimer=Math.max(0,t.meleeTimer-e),t.meleeModel&&(t.meleeModel.visible=t.meleeTimer>0,t.meleeModel.rotation.z=-.5+Math.sin((1-t.meleeTimer/.32)*Math.PI)*1.8),t.grenadeCooldown>1&&t.grenadeModel&&(t.grenadeModel.visible=!0),!t.alive)t.respawnTimer-=e,t.respawnTimer<=0&&this.respawn(t);else{const n=(this.keys.w?1:0)-(this.keys.s?1:0)+-this.touchMove.y,s=(this.keys.d?1:0)-(this.keys.a?1:0)+this.touchMove.x;t.aiming=!!(this.mouseAim||this.touchAim),t.sprinting=!!(this.keys.shift&&n>0&&!t.aiming);const r=t.aiming?4.6:t.sprinting?11.2:7.4,a=Math.sin(t.yaw)*n+Math.cos(t.yaw)*s,o=Math.cos(t.yaw)*n-Math.sin(t.yaw)*s;if(this.moveEntity(t,e,a,o,r),t.grounded&&t.landed&&(this.sfx.land(),t.landed=!1),t.avatar.group.position.copy(t.pos),t.avatar.group.rotation.y=t.yaw,t.avatar.head.rotation.x=-t.pitch*.5,t.avatar.animate(e,Math.hypot(t.vel.x,t.vel.z),!t.grounded,t.aiming),t.reloadTimer>0&&(t.reloadTimer-=e,t.reloadTimer<=0)){const g=lt[t.reloadWeapon].mag-t.ammo[t.reloadWeapon],p=Math.min(g,t.reserve[t.reloadWeapon]);t.ammo[t.reloadWeapon]+=p,t.reserve[t.reloadWeapon]-=p,t.reloadTimer=0}const l=this.mouseDown||this.touchFire,c=lt[t.weaponIndex];l&&(c.auto||!this.waitingFireRelease)&&(this.shoot(),c.auto||(this.waitingFireRelease=!0)),l||(this.waitingFireRelease=!1),this.arena.takePickup(t.pos)&&(t.health=Math.min(100,t.health+35),t.avatar.setHealth(t.health),this.sfx.pickup(),this.ui.showPickup("+35 HEALTH"))}this.updateBots(e),this.updateProjectiles(e),this.updateCamera(e),this.arena.update(e,this.time),this.effects.update(e),this.net.update(),this.net.broadcastPlayerState({p:[t.pos.x,t.pos.y,t.pos.z],yaw:t.yaw,hp:Math.round(t.health),alive:t.alive,skin:this.equipped.avatar,weapon:t.weaponIndex,name:"PLAYER"+this.net.id.slice(0,3)}),this.ui.updateHud(this)}scoreboardEntries(){return[{name:"YOU",me:!0,kills:this.player.kills,deaths:this.player.deaths,streak:this.player.streak},...this.bots.map(t=>({name:t.name,kills:t.kills,deaths:t.deaths,streak:t.streak})),...[...this.remotes.values()].map(t=>({name:t.name,kills:t.kills,deaths:t.deaths,streak:t.streak}))].sort((t,n)=>n.kills-t.kills||t.deaths-n.deaths)}loop(e){const t=Math.min(.05,(e-this.last)/1e3);this.last=e,this.time+=t,this.time-(this.lastOnlineUpdate||0)>.8&&(this.lastOnlineUpdate=this.time,this.net.send("ping",{playing:this.state==="playing"}),this.state==="menu"&&this.ui.setOnline(this.net.peerCount+8)),this.state==="menu"?(this.lobby.update(t,this.time),this.renderer.render(this.lobby.scene,this.lobby.camera)):(this.state==="playing"&&this.update(t),this.renderer.render(this.arena.scene,this.camera)),this.ui.updatePreview(t,this.time),requestAnimationFrame(n=>this.loop(n))}}window.addEventListener("DOMContentLoaded",()=>{window.blockstrike=new t0});
