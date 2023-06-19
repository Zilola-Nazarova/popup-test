//name, description, featured image, technologies, link to live version, link to source
const projectDetails = [
  {
    "name": "Project name goes here",
    "description": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. Ut aliquip ex ea commodo consequat.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi."],
    "featured-image": "./images/project-1-featured.svg",
    "alternative-images": ["./images/project-1-small-1.svg", "./images/project-1-small-2.svg", "./images/project-1-small-3.svg", "./images/project-1-small-4.svg"],
    "technologies": ["HTML/CSS", "Ruby on Rails", "JavaScript"],
    "link-to-live-version": "https://zilola-nazarova.github.io/zilola-portfolio/",
    "link-to-source": "https://github.com/Zilola-Nazarova/zilola-portfolio"
  },
  {
    "name": "Project name goes here",
    "description": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. Ut aliquip ex ea commodo consequat.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi."],
    "featured-image": "./images/project-2-featured.svg",
    "alternative-images": ["./images/project-2-small-1.svg", "./images/project-2-small-2.svg", "./images/project-2-small-3.svg", "./images/project-2-small-4.svg"],
    "technologies": ["HTML/CSS", "Ruby on Rails", "JavaScript"],
    "link-to-live-version": "https://zilola-nazarova.github.io/zilola-portfolio/",
    "link-to-source": "https://github.com/Zilola-Nazarova/zilola-portfolio"
  },
  {
    "name": "Project name goes here",
    "description": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. Ut aliquip ex ea commodo consequat.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi."],
    "featured-image": "./images/project-3-featured.svg",
    "alternative-images": ["./images/project-3-small-1.svg", "./images/project-3-small-2.svg", "./images/project-3-small-3.svg", "./images/project-3-small-4.svg"],
    "technologies": ["HTML/CSS", "Ruby on Rails", "JavaScript"],
    "link-to-live-version": "https://zilola-nazarova.github.io/zilola-portfolio/",
    "link-to-source": "https://github.com/Zilola-Nazarova/zilola-portfolio"
  },
  {
    "name": "Project name goes here",
    "description": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. Ut aliquip ex ea commodo consequat.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi."],
    "featured-image": "./images/project-4-featured.svg",
    "alternative-images": ["./images/project-4-small-1.svg", "./images/project-4-small-2.svg", "./images/project-4-small-3.svg", "./images/project-4-small-4.svg"],
    "technologies": ["HTML/CSS", "Ruby on Rails", "JavaScript"],
    "link-to-live-version": "https://zilola-nazarova.github.io/zilola-portfolio/",
    "link-to-source": "https://github.com/Zilola-Nazarova/zilola-portfolio"
  },
  {
    "name": "Project name goes here",
    "description": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. Ut aliquip ex ea commodo consequat.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi."],
    "featured-image": "./images/project-5-featured.svg",
    "alternative-images": ["./images/project-5-small-1.svg", "./images/project-5-small-2.svg", "./images/project-5-small-3.svg", "./images/project-5-small-4.svg"],
    "technologies": ["HTML/CSS", "Ruby on Rails", "JavaScript"],
    "link-to-live-version": "https://zilola-nazarova.github.io/zilola-portfolio/",
    "link-to-source": "https://github.com/Zilola-Nazarova/zilola-portfolio"
  },
  {
    "name": "Project name goes here",
    "description": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. Ut aliquip ex ea commodo consequat.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi."],
    "featured-image": "./images/project-6-featured.svg",
    "alternative-images": ["./images/project-6-small-1.svg", "./images/project-6-small-2.svg", "./images/project-6-small-3.svg", "./images/project-6-small-4.svg"],
    "technologies": ["HTML/CSS", "Ruby on Rails", "JavaScript"],
    "link-to-live-version": "https://zilola-nazarova.github.io/zilola-portfolio/",
    "link-to-source": "https://github.com/Zilola-Nazarova/zilola-portfolio"
  }
]

const projects = document.querySelectorAll('.work-card');
console.log(projects);
for (let i = 0; i < projects.length; i += 1) {
  let card = document.createElement('div');
  card.id = `project-${i}`;
  card.classList.add('project-details');
  card.innerHTML = '<p>CreateElement example</p>';
  projects[i].appendChild(card);
}


const projectBtn = document.querySelectorAll('.see-project');
for (let i = 0; i < projectBtn.length; i += 1) {
  projectBtn[i].addEventListener('click', () => {
    const projectPopup = document.getElementById(`project-${i}`);
    projectPopup.classList.toggle('visible');
    // const restOfThePage = document.querySelectorAll('header, section, footer');
    // for (let i = 0; i < restOfThePage.length; i += 1) {
    //   restOfThePage[i].classList.toggle('unvisible');
    // }
  });
}