/*   Planet Travel Agency website 
    author: Irada Shamilova
    date: February 24, 2020 
    course module: Winter 2020 - Web Application Development (CPRG-210-XM5)
    assignment: Individual assignment */

// Javascript Object to populate the Packages in the gallery.
const packages = [
  {
    destination:     'Norway',
    dates:  				 'March 21-28, 2020',
    price:  				 '$2,000',
    imgURL:					 "https://picsum.photos/id/1015/300/300",
    url:							"https://www.google.com"
  },
  {
    destination:     'Utah',
    dates:  				 'April 21-28, 2020',
    price:  				 '$500',
    imgURL:					 "https://picsum.photos/id/1016/300/300",
    url:							"https://www.google.com"
  },
  {
    destination:     'Siberia',
    dates:  				 'June 21-28, 2020',
    price:  				 '$2,000',
    imgURL:				   "https://picsum.photos/id/1020/300/300",
    url:							"https://www.google.com"
  },
  {
    destination:     'Iceland',
    dates:  				 'July 21-28, 2020',
    price:  				 '$800',
    imgURL:					 "https://picsum.photos/id/1018/300/300",
    url:							"https://www.google.com"
  },
  {
    destination:     'San Diego',
    dates:  				 'May 21-28, 2020',
    price:  				 '$500',
    imgURL:					 "https://picsum.photos/id/1019/300/300",
    url:							"https://www.google.com"
  }
]

let content = '';

// Loop through each element in the array and append to content
// Note: I've attached url link to the image rather than as a separate link
packages.forEach(function(package){

  content +=  `<article>
                <a href = "${package.url}"> <h2 class="center header-blue">${package.destination}</h2> </a> 
                <p class="packages center">Dates: ${package.dates}</p>
                <p class="packages center">Price: ${package.price}</p>
                <a href = "${package.url}"> <img class="package-img shadow2" src="${package.imgURL}" alt="Destination: ${package.destination}"></a>
              </article>`;
});

// assign our container element to a variable
const main = document.querySelector('main');

// innerHTML will parse the content string as HTML and create the proper elements in the DOM
main.innerHTML = content;
