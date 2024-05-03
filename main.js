const btn = document.getElementById('button');
const expand = document.getElementById('expand');
const btnProject1 = document.getElementById("projects-btn-1")
const btnProject2 = document.getElementById("projects-btn-2")



btnProject1.addEventListener("click",e =>{
  const groupProject1 = document.getElementById("projects-group-1")
  const groupProject2 = document.getElementById("projects-group-2")
  btnProject1.style.backgroundColor="#f85347 "
  btnProject2.style.backgroundColor="#fff"
  groupProject1.classList.remove("display-none")
  groupProject2.classList.add("display-none")
})
btnProject2.addEventListener("click",e =>{
  const groupProject1 = document.getElementById("projects-group-1")
  const groupProject2 = document.getElementById("projects-group-2")
  btnProject2.style.backgroundColor="#f85347 "
  btnProject1.style.backgroundColor="#fff"
  groupProject1.classList.add("display-none")
  groupProject2.classList.remove("display-none")

})

expand.addEventListener("click", e => {
  const iconDropdown = document.getElementById('dropdown-icon');
  const curriculum = document.getElementById('curriculum');
  const curriculumInfo = document.getElementById('curriculum-info');
  curriculumInfo.classList.toggle("display-none")
  iconDropdown.classList.toggle("dropdown__icon--up")
  curriculum.classList.toggle("curriculum__container--top")
  e.target.classList.toggle("info__expand--big")

})

document.getElementById('form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    btn.value = 'Sending...';

    const serviceID = 'service_r18uhkp';
    const templateID = 'template_anqrdun';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Send Email';
        alert('Sent!');
      }, (err) => {
        btn.value = 'Send Email';
        alert(JSON.stringify(err));
      });
  });

function scrollDown() {
  window.scrollBy(0, window.innerHeight);
}

document.addEventListener("DOMContentLoaded", function () {
  var sections = document.querySelectorAll(".section");

  var options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3
  };

  var observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  }, options);

  sections.forEach(function (section) {
    observer.observe(section);
  });
});


function scrollToContent() {
  const container = document.querySelector('.section__container-info');
  const content = document.querySelectorAll('.container-info__content');
  const scrollPosition = container.scrollLeft;
  const contentWidth = content[0].offsetWidth;

  if (scrollPosition < contentWidth) {
    container.scroll({
      left: contentWidth,
      behavior: 'smooth'
    });
  } else {
    container.scroll({
      left: 0,
      behavior: 'smooth'
    });
  }
}

function handleScroll() {
  const container = document.querySelector('.section__container-info');
  const scrollPosition = container.scrollLeft;
  const content = document.querySelectorAll('.container-info__content');
  const contentWidth = content[0].offsetWidth;
  const arrow = document.querySelector('.section__scroll');

  if (scrollPosition < contentWidth) {
    arrow.classList.remove('section__scroll-left');
  } else {
    arrow.classList.add('section__scroll-right');
  }

  if (scrollPosition > 0) {
    arrow.classList.add('section__scroll-right');
  } else {
    arrow.classList.add('section__scroll-left');
  }
}

const container = document.querySelector('.section__container-info');
container.addEventListener('scroll', handleScroll);
