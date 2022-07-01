import * as THREE from "three";
import * as CANNON from "cannon-es";

console.log(new THREE.Vector3(1, 2, 3));
console.log(new CANNON.Vec3(4, 5, 6));

// const socket = new WebSocket("ws://localhost:3000");
const socket = new WebSocket("wss://rollup-websockets-heroku-js.herokuapp.com");

socket.onopen =
    () =>
    {
        console.log("Connected");
    };
