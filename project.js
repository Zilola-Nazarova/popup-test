//name, description, featured image, technologies, link to live version, link to source
const projectDetails = [
  {
    "name": "Project name goes here",
    "description": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi", "Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi."],
    "featured_image": "./images/project-1-featured.svg",
    "alternative_images": ["./images/project-1-small-1.svg", "./images/project-1-small-2.svg", "./images/project-1-small-3.svg", "./images/project-1-small-4.svg"],
    "technologies": ["HTML/CSS", "Ruby on Rails", "JavaScript"],
    "link_version": "https://zilola-nazarova.github.io/zilola-portfolio/",
    "link_source": "https://github.com/Zilola-Nazarova/zilola-portfolio"
  },
  {
    "name": "Project name goes here",
    "description": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi", "Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi."],
    "featured_image": "./images/project-2-featured.svg",
    "alternative_images": ["./images/project-2-small-1.svg", "./images/project-2-small-2.svg", "./images/project-2-small-3.svg", "./images/project-2-small-4.svg"],
    "technologies": ["HTML/CSS", "Ruby on Rails", "JavaScript"],
    "link_version": "https://zilola-nazarova.github.io/zilola-portfolio/",
    "link_source": "https://github.com/Zilola-Nazarova/zilola-portfolio"
  },
  {
    "name": "Project name goes here",
    "description": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi", "Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi."],
    "featured_image": "./images/project-3-featured.svg",
    "alternative_images": ["./images/project-3-small-1.svg", "./images/project-3-small-2.svg", "./images/project-3-small-3.svg", "./images/project-3-small-4.svg"],
    "technologies": ["HTML/CSS", "Ruby on Rails", "JavaScript"],
    "link_version": "https://zilola-nazarova.github.io/zilola-portfolio/",
    "link_source": "https://github.com/Zilola-Nazarova/zilola-portfolio"
  },
  {
    "name": "Project name goes here",
    "description": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi", "Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi."],
    "featured_image": "./images/project-4-featured.svg",
    "alternative_images": ["./images/project-4-small-1.svg", "./images/project-4-small-2.svg", "./images/project-4-small-3.svg", "./images/project-4-small-4.svg"],
    "technologies": ["HTML/CSS", "Ruby on Rails", "JavaScript"],
    "link_version": "https://zilola-nazarova.github.io/zilola-portfolio/",
    "link_source": "https://github.com/Zilola-Nazarova/zilola-portfolio"
  },
  {
    "name": "Project name goes here",
    "description": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi", "Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi."],
    "featured_image": "./images/project-5-featured.svg",
    "alternative_images": ["./images/project-5-small-1.svg", "./images/project-5-small-2.svg", "./images/project-5-small-3.svg", "./images/project-5-small-4.svg"],
    "technologies": ["HTML/CSS", "Ruby on Rails", "JavaScript"],
    "link_version": "https://zilola-nazarova.github.io/zilola-portfolio/",
    "link_source": "https://github.com/Zilola-Nazarova/zilola-portfolio"
  },
  {
    "name": "Project name goes here",
    "description": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi", "Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi."],
    "featured_image": "./images/project-6-featured.svg",
    "alternative_images": ["./images/project-6-small-1.svg", "./images/project-6-small-2.svg", "./images/project-6-small-3.svg", "./images/project-6-small-4.svg"],
    "technologies": ["HTML/CSS", "Ruby on Rails", "JavaScript"],
    "link_version": "https://zilola-nazarova.github.io/zilola-portfolio/",
    "link_source": "https://github.com/Zilola-Nazarova/zilola-portfolio"
  }
]

const projects = document.querySelectorAll('.work-card');
for (let i = 0; i < projects.length; i += 1) {
  let card = document.createElement('div');
  card.id = `project-${i}`;
  card.classList.add('project-details');

  let closeBtn = document.createElement('a');
  closeBtn.innerHTML = '<img src="./images/popup-close.png">';
  card.appendChild(closeBtn);

  let projectName = document.createElement('h2');
  projectName.textContent = projectDetails[i].name;
  projectName.classList.add('poppins', 'dark-blue');
  card.appendChild(projectName); 

  let featureImage = document.createElement('img');
  featureImage.src = projectDetails[i].featured_image;
  featureImage.classList.add('feature-image');
  card.appendChild(featureImage);

  for (let j = 0; j < projectDetails[i]['description'].length; j += 1) {   
    let p = document.createElement('p');
    p.textContent = projectDetails[i].description[j];
    p.classList.add('poppins', 'dark-blue');
    card.appendChild(p);
  }

  let liveBtn = document.createElement('a');
  liveBtn.textContent = "See live";
  liveBtn.classList.add('secondary', 'poppins', 'dark-blue');
  liveBtn.href = projectDetails[i].link_version;

  let sourceBtn = document.createElement('a');
  sourceBtn.textContent = "See source";
  sourceBtn.classList.add('secondary', 'poppins', 'dark-blue');
  sourceBtn.href = projectDetails[i].link_source;

  card.appendChild(liveBtn);
  card.appendChild(sourceBtn);

  document.body.appendChild(card);
}


const projectBtn = document.querySelectorAll('.see-project');
for (let i = 0; i < projectBtn.length; i += 1) {
  projectBtn[i].addEventListener('click', () => {
    const projectPopup = document.getElementById(`project-${i}`);
    projectPopup.classList.toggle('visible');
    const restOfThePage = document.querySelectorAll('header, footer, section');
    for (let i = 0; i < restOfThePage.length; i += 1) {
      restOfThePage[i].classList.toggle('unvisible');
    }
  });
}

const closeProjectBtn = document.querySelectorAll('.project-details a img');
for (let i = 0; i < closeProjectBtn.length; i += 1) {
  closeProjectBtn[i].addEventListener('click', () => {
    const projectPopup = document.getElementById(`project-${i}`);
    projectPopup.classList.toggle('visible');
    const restOfThePage = document.querySelectorAll('header, section, footer');
    for (let i = 0; i < restOfThePage.length; i += 1) {
      restOfThePage[i].classList.toggle('unvisible');
    }
  });
}

  