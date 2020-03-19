/*   Planet Travel Agency website 
    author: Irada Shamilova
    date: February 24, 2020 
    course module: Winter 2020 - Web Application Development (CPRG-210-XM5)
    assignment: Individual assignment */

// Javascript Object to populate the experts list in the Contact Us page.
const experts = [
  {
    name:     			 'Irada',
    phone:  				 '(403) 470-0806',
    imgURL:					 "images/Irada Quebec.jpg",
  },
  {
    name:     			 'Loki',
    phone:  				 '911',
    imgURL:					 "images/Loki.jpg",
  },
  {
    name:     			 'Bagheera',
    phone:  				 '911',
    imgURL:					 "https://picsum.photos/id/1074/200/200",
  },
  {
    name:     			 'Balu',
    phone:  				 '911',
    imgURL:					 "https://picsum.photos/id/433/200/200",
  }
]

let content = '';

// Loop through each element in the array and append to content
experts.forEach(function(expert){

  content +=  `<article>
                <h3 class="center blue-color">${expert.name}</h3> 
                <p class="center blue-color"><img class = "phone-align" src="images/phone_img.png" alt="Phone icone" width = 15em height = 15em></img> ${expert.phone}</p>
                <img class="shadow1" src="${expert.imgURL}" alt="Agent: ${expert.name}" width = "200" height= "200">
              </article>`;
});

// assign our container element to a variable
const main = document.querySelector('main');

// innerHTML will parse the content string as HTML and create the proper elements in the DOM
main.innerHTML = content;