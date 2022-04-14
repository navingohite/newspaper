// Initialize the news api parameters
let source = 'the-wall-street-journal';
let apiKey = '95c7c91fe9d0402f8c5a728f5f5783de'

// Grab the news container
let newsAccordion = document.getElementById('newsAccordion');

// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=the-wall-street-journal&apiKey=95c7c91fe9d0402f8c5a728f5f5783de`, true);

// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element, index) {
            let news = `
            <div id="card${index} style="width: 18rem;">
            <img class="card-img-top" src="${element["urlToImage"]}" alt="${element["title"]}">
            <div class="card-body">
              <h5 class="card-title">${element["title"]}"</h5>
              <p class="card-text" id="card${index}" aria-labelledby="heading${index}" data-parent="#newsAccordion">${element["description"]}"</p>
              <h5><i>Author : ${element['author']} | Published At : ${element['publishedAt']}   </h5>
              <a href="${element['url']}" target="_blank" class="btn btn-danger">Read more</a>
              
            </div>
          </div> <br><hr>`;
            newsHtml += news;
            newsAccordion.innerHTML = newsHtml;
        });
        
    }
    else {
        console.log("Some error occured")
    }
}

xhr.send()




//Get the button
var mybutton = document.getElementById("myBtn");
        
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}