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

function Cards(i) {
    const newsCard = document.createElement("div"),
          newsHeadline = document.createElement("div"),
          newsAuthor = document.createElement("div"),
          newsImgCont = document.createElement("div"),
          newsImg = document.createElement("img"),
          newsBy = document.createElement("span");

    newsCard.append(newsHeadline, newsAuthor);
    newsAuthor.append(newsImgCont, newsBy);
    newsImgCont.append(newsImg);

    newsCard.classList.add('card');
    newsHeadline.classList.add('headline');
    newsAuthor.classList.add('author');
    newsImgCont.classList.add('img-container');

    newsHeadline.textContent = i.headline;
    newsImg.src = i.authorPhoto;
    newsBy.textContent = i.authorName;

    return newsCard;
}

const cardsCont = document.querySelector(".cards-container");
//cardsCont.appendChild(Cards());

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    console.log(response);
    for (const property in response.data.articles) {
        console.log(`${property}: ${response.data.articles}`);
        const articles = response.data.articles[property];
        console.log(articles);
        articles.forEach(item => {
            cardsCont.appendChild(Cards(item));
        })
    }
     
});