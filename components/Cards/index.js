// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(results => {
        console.log(results);
        const cardsCont = document.querySelector('.cards-container');
        results.data.articles.bootstrap.forEach(e => {
            cardsCont.appendChild(card(e));
        });
        results.data.articles.javascript.forEach(e => {
            cardsCont.appendChild(card(e));
        });
        results.data.articles.technology.forEach(e => {
            cardsCont.appendChild(card(e));
        });
        results.data.articles.jquery.forEach(e => {
            cardsCont.appendChild(card(e));
        });
        results.data.articles.node.forEach(e => {
            cardsCont.appendChild(card(e));
        });
    })
    .catch(err => {
        console.log(err);
    });

function card(whoopty) {
    const card = document.createElement('div');
    card.classList.add('card');

    const headline = document.createElement('div');
    headline.textContent = whoopty.headline;
    headline.classList.add('headline');
    card.appendChild(headline);

    const author = document.createElement('div');
    author.classList.add('author');
    card.appendChild(author);


    const imgCont = document.createElement('div');
    imgCont.classList.add('img-container');
    author.appendChild(imgCont);

    const image = document.createElement('img');
    image.setAttribute('src', whoopty.authorPhoto);
    image.classList.add('img');
    imgCont.appendChild(image);

    const span = document.createElement('span');
    span.textContent = `By ${whoopty.authorName}`;
    span.classList.add('span')
    author.appendChild(span);

    return card;
};