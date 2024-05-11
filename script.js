
document.addEventListener("DOMContentLoaded", function () {
  
  const navLinks = document.querySelectorAll(".nav a");
  
  const contentSections = document.querySelectorAll(".content section");

  contentSections.forEach((section) => {
    section.style.display = "none";
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault(); 

     
      const targetId = link.getAttribute("href").substring(1);

     
      contentSections.forEach((section) => {
        section.style.display = "none";
      });

      
      const targetElement = document.getElementById(targetId);
      targetElement.style.display = "block";
    });
  });

  
  const defaultSection = document.getElementById("none");
  if (defaultSection) {
    defaultSection.style.display = "block";
  }
});
