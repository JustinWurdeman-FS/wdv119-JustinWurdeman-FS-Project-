//Blog Objects//

let blog1 = {
  title: "Exploring the Heart of Ireland",
  author: "Emily R.",
  image: "img/Emily.jpg",
  summary:
    "I wondered the historic streets of Dublin.From night life at the Temple Bar, to site seeing at Trinity College library. All of this with no stress getting here. I would definitely book through Ready Set Travel again!",
};

let blog2 = {
  title: "London Through a New lens",
  author: "Mark J.",
  Image: "img/Mark.jpg",
  summary:
    "London has so MUCH history! I spend my days trying local delicacies to catching the changing of the guard. London never seemed to disappoint. I will definitely be back again!",
};

let blog3 = {
  title: "Street Art and Wine in Melbourne",
  author: "Tina C.",
  Image: "img/Tina.jpg",
  summary:
    "The laneways of the streets of Melbourne come alive with its colors and artwork. I sipped white wine at hidden cafes and lost myself in the local music. Australia stole my heart. This wouldnt have been possible without Ready Set Travels wonderful packages!",
};

//HTML CONTAINER//

let blogContainer = document.querySelector("#blog-posts");

//Blog post going into page//

blogContainer.innerHTML = `

<section class="post-box">
  <figure>
      <img src="${blog1.image}" alt="Dublin post" />
    </figure>
    <article>
      <h4>${blog1.title}</h4>
      <p><strong>By ${blog1.author}</strong></p>
      <p>${blog1.summary}</p>
    </article>
  </section>

  <section class="post-box">
    <figure>
      <img src="${blog2.Image}" alt="London post" />
    </figure>
    <article>
      <h4>${blog2.title}</h4>
      <p><strong>By ${blog2.author}</strong></p>
      <p>${blog2.summary}</p>
    </article>
  </section>

  <section class="post-box">
    <figure>
      <img src="${blog3.Image}" alt="Melbourne post" />
    </figure>
    <article>
      <h4>${blog3.title}</h4>
      <p><strong>By ${blog3.author}</strong></p>
      <p>${blog3.summary}</p>
    </article>
  </section>
`;
