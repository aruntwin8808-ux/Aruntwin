const endDate = "01 JANUARY 2027 12:00 AM"

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")

//const clock = () => {
    
// }

function clock() {
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now) / 1000;

     if (diff < 0) return;

     //console.log(diff);
   //convert into days
     inputs[0].value = Math.floor(diff / 3600 / 24);
     inputs[1].value = Math.floor(diff / 3600) % 24;
     inputs[2].value = Math.floor(diff / 60) % 60;
     inputs[3].value = Math.floor(diff) % 60;
      
 
}
// initial call
clock()


 
/*
* 1  days = 24 hrs
* 1 hr = 60 min
*60 min = 3600
*/

setInterval(
    () => {
        clock()
    },
    1000
)