const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
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

document.addEventListener("DOMContentLoaded", function() {
  var sections = document.querySelectorAll(".section");
  
  var options = {
    root: null, 
    rootMargin: "0px",
    threshold: 0.3 
  };
  
  var observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target); 
      }
    });
  }, options);
  
  sections.forEach(function(section) {
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
