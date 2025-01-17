// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(results => {
        const top = document.querySelector('.topics');
        results.data.topics.forEach(e => {
            top.appendChild(tabs(e));
        })
    .catch(err=>{
        console.log(err);
    });
    });

    function tabs (schtuff) {
        const tab = document.createElement('div');
        tab.textContent = schtuff;
        tab.classList.add('tab');
        
        return tab;
    };

// const testData = [
//     "javascript",
//     "bootstrap",
//     "technology",
//     "jquery",
//     "node.js"
//    ];



