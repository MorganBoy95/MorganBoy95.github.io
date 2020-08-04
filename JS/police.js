//Create a request variable and assign a new XMLHttpRequest object to it.//

var request = new XMLHttpRequest();

//Open a new connection, using the GET request on the URL endpoint//

request.open(
  "GET",
  "https://data.police.uk/api/crimes-at-location?date=2020-07&lat=52.5695&lng=0.2405",
  true
);
request.onload = function () {
  //Begin accessing JSON data
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(police => {
      //Creating a div with a card//
      const card = document.createElement("div");
      card.setAttribute("class", "card");

      //Create an h1 and set the text content to the film's title//
      const h1 = document.createElement("h1");
      h1.textContent = `Age: ${police.age_range}`;

      //Create an h2 and set the text content to the film's director//
      const h2 = document.createElement("h2");
      h2.textContent = `Release Date: ${police.gender}`;

      const p = document.createElement("p");
      police.legislation = police.legislation.substring(0, 300); //Limit to 300 chars so that the card doesn't become too long.
      p.textContent = `${police.legislation}...`; //End with an ellipses

      //Append the cards to the container element//
      container.appendChild(card);

      //Each card will contain an h1 heading a p paragraph
      card.appendChild(h1);
      card.appendChild(h2);
      card.appendChild(p);

      //Log each police's title
      console.log(police.title);
    });
  } else {
    console.log("error");

    const errorMessage = docuiment.createElement("marquee");
    errorMessage.textContent = "It's not working!";
    app.appendChild(errorMessage);
  }
};

//send request
request.send();

const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');
app.appendChild(container);