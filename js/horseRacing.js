

function steedHorse(name, fnc) {
  
  let promiseRacing = new Promise (function (resolve, rejected) {
    setTimeout(function() {
      resolve ('Steed ' + name + ' has finished in ' + horseTime() + ' seconds!')
    },5000)
  })
  return promiseRacing
}

function horseTime(min,max){
  let time = Math.round(Math.random()*(30-20)+20);
  return time
}

let horses = ['Altair', 'Nebula', 'Storm'];
for (i=0; i<horses.length; i++){
let steed = steedHorse(horses[i], horseTime);
steed.then(function(data){
  console.log(data)
})
}