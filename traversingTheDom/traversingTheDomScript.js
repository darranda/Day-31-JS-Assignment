// Get the header element
const header = document.getElementsByTagName('header');
console.log(header);

// Get all the section elements
const section = document.getElementsByTagName('section');
console.log(section);

// Get the section element with the class = 'current'
const current = document.getElementsByClassName('current');
console.log(current);

// Get the section that comes after the current section
const currentSection = document.querySelector('section.current');
console.log(currentSection);
const nextSection = currentSection.nextElementSibling;
console.log(nextSection);

// Get the h2 node from the section before the 'current' section
const previousSection = currentSection.previousElementSibling;
console.log(previousSection);
const h2 = previousSection.querySelector('h2');
console.log(h2);

// Get the div that contains the section that has an h2 with a class of 'highlight'
const highlight = document.querySelector('h2.highlight');
console.log(highlight);

//Get all the sections that contain an H2 (usind a single statement)
const sections = document.querySelectorAll('h2');
console.log(sections);
