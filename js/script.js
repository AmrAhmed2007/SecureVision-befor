// Placeholder for JavaScript functionality (if needed)
console.log("Page loaded!");

function handleSearch(event) {
    event.preventDefault(); 
    const searchText = document.getElementById("searchInput").value.toLowerCase();

    
    const sections = {
      "home": "#home",
      "about":"#about",
      "product":"#products",
      "testimonial":"#testimonial",
      "contact":"#contact"
    };


    if (sections[searchText]) {

      const targetSection = document.querySelector(sections[searchText]);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      alert("Section not found!");
    }
  }


 

  const targetSection = document.querySelector('.content-img img');

  
  window.addEventListener('scroll', () => {
    const sectionTop = targetSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight && sectionTop > 0) {
      targetSection.classList.add('active'); // open animation
    } else {
      targetSection.classList.remove('active'); 
    }
  });
 