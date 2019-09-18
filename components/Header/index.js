// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function header() {
    const head = document.createElement('div');
    head.classList.add('header');

    const date = document.createElement('span');
    date.textContent = 'SMARCH 28, 2019';
    date.classList.add('date');
    head.appendChild(date);
    
    const lamTime = document.createElement('h1');
    lamTime.textContent = 'Lamdba Times';
    lamTime.classList.add('h1');
    head.appendChild(lamTime);

    const temp = document.createElement('span');
    temp.textContent = '98°';
    temp.classList.add('temp');
    head.appendChild(temp);

    return head;
};

let headCont = document.querySelector('.header-container');

headCont.appendChild(header());