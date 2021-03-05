const playButton = document.querySelector('.play');
const lapButton = document.querySelector('.lap');
const resetButton = document.querySelector('.reset');
const minHead = document.querySelector('.minute');
const secHead = document.querySelector('.sec');
const msecHead = document.querySelector('.msec');
const laps = document.querySelector('.laps');
const clearButton = document.querySelector('.lap-lear-button');
const bg = document.querySelectorAll('.outer-circle');

const toggleButton = () =>{
    lapButton.classList.remove('hidden')
    resetButton.classList.remove('hidden')
}

let min = 0;
let sec = 0;
let msec = 0;
let intervalsec;
let intervalmsec;
let intervalmin;
let lapItem = 0;



// create a laps
const lap = () =>{
    const li = document.createElement('li');
    const number = document.createElement('span');
    const timeStamp = document.createElement('span');

    li.setAttribute('class', 'lap-item');
    number.setAttribute('class', 'number');
    timeStamp.setAttribute('class', 'timeStamp');

    number.innerText= `#${++lapItem}         `;
    timeStamp.innerHTML = `${min} : ${sec} : ${msec}`;
    

    li.append(number, timeStamp)
    laps.append(li)
    clearButton.classList.remove('hidden')
}



playButton.addEventListener('click', (e) => {
   if (e.target.innerHTML === 'Stop') {
       e.target.innerHTML = 'Start'
         clearInterval(intervalsec);
         clearInterval(intervalmsec);
         clearInterval(intervalmin);
         bg.forEach((val)=>{
            val.classList.remove('animation-bg')
         })
       
        
   }else{
       e.target.innerHTML = 'Stop'
       bg.forEach((val)=>{
        val.classList.add('animation-bg')
     })
       intervalmin = setInterval(() =>{
        if (min === 60) {
            min = 0;
        }
         minHead.innerHTML = `${++min}`;
       },60*1000)

       intervalsec = setInterval(() =>{
           if (sec === 60) {
                sec = 0;
            }
           secHead.innerHTML = `${++sec}`;
          },1000)
       
       intervalmsec = setInterval(() =>{
           if (msec === 100) {
               msec = 0;
           }
          msecHead.innerHTML = `${++msec}`;
           },10)

   }
    toggleButton()
})

resetButton.addEventListener('click', () =>{
 
    playButton.innerHTML = 'Start'
    lapButton.classList.add('hidden')
    resetButton.classList.add('hidden')
    min = 0;
    sec = 0;
    msec = 0;
    minHead.innerHTML = `${min}`
    secHead.innerHTML = `${sec}`
    msecHead.innerHTML = msec
    clearInterval(intervalsec);
    clearInterval(intervalmsec);
    clearInterval(intervalmin);
    bg.forEach((val)=>{
        val.classList.remove('animation-bg')
     })
})

lapButton.addEventListener('click', lap)

clearButton.addEventListener('click', ()=>{
    laps.innerHTML = ''
    laps.append(clearButton)
    clearButton.classList.add('hidden')
    lapItem = 0
})