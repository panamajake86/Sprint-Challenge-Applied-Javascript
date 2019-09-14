// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

// axios.get('https://lambda-times-backend.herokuapp.com/topics')
//     .then(results => {
//         const topics = document.querySelector('.topics');
//         topics.appendChild(tabs(results));
//     });

function tabs (schtuff) {
    schtuff.data.forEach(e => {
        const tab = document.createElement('div');
        tab.textContent = e;
        tab.classList.add('tab');
    });
};

//     topics: Array(5)
// 0: "javascript"
// 1: "bootstrap"
// 2: "technology"
// 3: "jquery"
// 4: "node.js"