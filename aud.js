// document.getElementById("music").onclick = function () {
//     if (mute === true) {
//       document.getElementById('demomusic').play();
//       mute = false;
//     } else {
//       document.getElementById('demomusic').pause();
//       mute = true;
//     }
//   };

        
        function playaud(x) {
            switch(x.id){
                case "planeButton":
                    document.getElementById("plane").play();
                break;
                case "policeButton":
                    document.getElementById("police").play();
                break;
                case "officeButton":
                    document.getElementById("office").play();
                break;
            default:
                return false;
            }   
        }

// var x = document.getElementById("plane");
// x.onclick = function(){
//     x.loop = true;
//     x.load();
// }

// var y = document.getElementById("police");
// y.onclick = function(){
//     y.loop = true;
//     y.load();
// }

// var z = document.getElementById("office");
// z.onclick = function(){
//     z.loop = true;
//     z.load();
// }

//ocument.getElementById("plane").onplay();

// var x = document.getElementById("plane");

// function enableLoop() { 
//   x.loop = true;
//   x.load();
// } 

// var y = document.getElementById("office");

// function enableLoop() { 
//   y.loop = true;
//   y.load();
// } 

// var z = document.getElementById("police");

// function enableLoop() { 
//   z.loop = true;
//   z.load();
// } 