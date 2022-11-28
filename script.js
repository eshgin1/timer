const input = document.querySelector('input');

input.addEventListener('input', () => {

    const start = document.querySelector('button');

    let secondElem = document.querySelector('.second');
    let minElem = document.querySelector('.min');
    let hourElem = document.querySelector('.hour');

    secondElem.innerHTML = +input.value;

    if(secondElem.innerHTML <= 9){
        secondElem.innerHTML = '0' + +input.value;
    }
    if(secondElem.innerHTML > 9){
        secondElem.innerHTML = +input.value;
    }

    let second = +input.value,
        min = 00,
        hour = 00;

    start.addEventListener('click', () => {
        setInterval(startTimer, 1000)
    })

    function startTimer (){
        second++;

        //second
        if(second < 9){
            secondElem.innerHTML = '0' + second;
        }
        if(second > 9){
            secondElem.innerHTML = second;
        }
        if(second > 59){
            min++;
            minElem.innerHTML = '0' + min;
            second = 0;
            secondElem.innerHTML = '0' + second;
        }

        // min
        if(min > 9 ){
            minElem.innerHTML = min;
        }
        if(min > 59){
            hour++;
            hourElem.innerHTML = '0' + hour;
            min = 0;
            minElem.innerHTML = '0' + min;
        }

        //hour
        if(hour > 9){
            hourElem.innerHTML = hour;
        }
    }
})
