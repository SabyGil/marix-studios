const wrapper = document.querySelector('.wrapper');

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
