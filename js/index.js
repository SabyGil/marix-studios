gsap.registerPlugin(ScrollTrigger);

function initNavigation() {
  const mainNavLinks = gsap.utils.toArray('.nav-list a');
  // console.log(mainNavLinks);

  mainNavLinks.forEach((link) => {
    link.addEventListener('mouseleave', (e) => {
      link.classList.add('animate-out');

      // setTimeout(() => {
      //   link.classList.remove('animate-out');
      // }, 300);
      link.ontransitionend = () => {
        //remove class
        link.classList.remove('animate-out');
      };
    });
  });

  // const wrapper = document.querySelector('.wrapper');

  ScrollTrigger.create({
    start: '60%',
    end: '401%',
    // id: 'my-id',
    scroller: '.wrapper',
    toggleClass: {
      targets: '.header-container',
      className: 'has-scrolled',
    },
    // markers: true,
  });
}

function init() {
  initNavigation();
}

window.addEventListener('load', function () {
  init();
});

// <------------>

const wrapper = document.querySelector('.wrapper');
//
const allImgs = document.querySelectorAll('.projects__item img');
const closeBtn = document.querySelector('.close');
const modal = document.querySelector('.modal');
//

const sections = document.querySelectorAll('section[id]');
let currSectionId;
let prevSectionId;

wrapper.addEventListener('scroll', () => {
  /* for possible future refactor
        // if pageNum = 4
        // wrapper.scrollTop < ( wrapper.clientheight * ( numberOfPages - (numberOfPages - 1) ) )
    */

  if (wrapper.scrollTop < wrapper.clientHeight) {
    if (prevSectionId !== undefined) {
      document
        .querySelector(`.nav a[href=\"#${prevSectionId}\"]`)
        .classList.remove('active');
    }
  } else if (wrapper.scrollTop < wrapper.clientHeight * 2) {
    // <------------->
    if (prevSectionId !== undefined) {
      document
        .querySelector(`.nav a[href=\"#${prevSectionId}\"]`)
        .classList.remove('active');
    }

    currSectionId = sections[1].getAttribute('id');
    prevSectionId = currSectionId;

    document
      .querySelector(`.nav a[href=\"#${currSectionId}\"]`)
      .classList.add('active');
    // <------------->
  } else if (wrapper.scrollTop < wrapper.clientHeight * 3) {
    // <------------->
    if (prevSectionId !== undefined) {
      document
        .querySelector(`.nav a[href=\"#${prevSectionId}\"]`)
        .classList.remove('active');
    }

    currSectionId = sections[2].getAttribute('id');
    prevSectionId = currSectionId;

    document
      .querySelector(`.nav a[href=\"#${currSectionId}\"]`)
      .classList.add('active');
    // <------------->
  } else if (wrapper.scrollTop < wrapper.clientHeight * 4) {
    // <------------->
    if (prevSectionId !== undefined) {
      document
        .querySelector(`.nav a[href=\"#${prevSectionId}\"]`)
        .classList.remove('active');
    }

    currSectionId = sections[3].getAttribute('id');
    prevSectionId = currSectionId;

    document
      .querySelector(`.nav a[href=\"#${currSectionId}\"]`)
      .classList.add('active');
    // <------------->
  }
});

// <------------->

/*
1. add event listener to the images. also add a pointer to indicate they are clickable. maybe a little hover & shadow effect as well
2. generate the ids for the projects later. manually give each item a data-id attribute that will be used to fetch that objects info from my "database"

3. make data base with objects in the form of   -> id : {
  logo: src
  tech: [names of diff tech],
  problem: "lorem30",
  solution: ""
}

4. make function that will genreate a modal when clicked
-> get the parse the data-attribute on the clicked item to get its id
-> may need to use parseInt to turn data atr to a number
-> pass the id to a loadData function to get the correct set of data from the data base

*/

function getId(item) {
  return item.dataset.id;
}

function generateModal(clickedItem) {
  let itemData = loadData(getId(clickedItem));
  // destructure props off item data
  // let {logo, tech, problem, solution} = itemData
  let modal = modal();
}

function addEventToImages(images) {
  images.forEach((image) => {
    image.addEventListener('click', openModal);
  });
}

//---
addEventToImages(allImgs);

closeBtn.addEventListener('click', closeModal);

window.addEventListener('click', outsideClick);
//---

// projectsGrid.innerHTML += modal();
// console.log(projectsGrid.innerHTML);

// .addEventListener('click', modal);

// modalBtn.addEventListener('click', openModal);
// Open
function openModal() {
  modal.style.display = 'block';
}

// Close
function closeModal() {
  modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}
