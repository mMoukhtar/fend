/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
const sectionsData = [
    {
        id: 'section1', title: 'Section 1', data: [`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra
    dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus
    imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget
    bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet
    elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo
    nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie
    semper in tellus. Sed congue et odio sed euismod.`, `Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel
    luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur
    porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.`]
    },
    {
        id: 'section2', title: 'Section 2', data: [`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra
    dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus
    imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget
    bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet
    elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo
    nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie
    semper in tellus. Sed congue et odio sed euismod.`, `Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel
    luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur
    porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.`]
    },
    {
        id: 'section3', title: 'Section 3', data: [`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra
    dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus
    imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget
    bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet
    elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo
    nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie
    semper in tellus. Sed congue et odio sed euismod.`, `Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel
    luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur
    porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.`]
    },
    {
        id: 'section4', title: 'Section 4', data: [`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra
    dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus
    imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget
    bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet
    elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo
    nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie
    semper in tellus. Sed congue et odio sed euismod.`, `Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel
    luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur
    porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.`]
    }
];
let last_known_scroll_position = 0;
let ticking = false;

/**
 * End Global Variables
 * Start Helper Functions
 *
*/
function createNewNavLink(text, id, className) {
    const navBarItemLink = document.createElement('a');
    navBarItemLink.id = `${id}Link`;
    navBarItemLink.className = className;
    navBarItemLink.innerText = text;
    navBarItemLink.href = `#${id}`;;
    return navBarItemLink;
}

function addPageSections() {
    const newSection = document.createDocumentFragment();
    for (const sectionData of sectionsData) {
        let section = document.getElementById(sectionData.id)
        if (section === null) {
            section = document.createElement('section');
            section.id = sectionData.id;
            const header = document.createElement('h2');
            const main = document.createElement('p');
            const secondary = document.createElement('p');
            header.innerText = sectionData.title;
            main.innerText = sectionData.data[0];
            secondary.innerText = sectionData.data[1];
            section.appendChild(header);
            section.appendChild(main);
            section.appendChild(secondary);
            newSection.appendChild(section);
        }
        section.dataset.nav = sectionData.title;
        section.dataset.main = sectionData.data[0];
        section.dataset.main = sectionData.data[1];
    }
    document.querySelector('#main').appendChild(newSection);
}


/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
function buildNavBar() {
    const navBar = document.querySelector('#navbar__list');
    const navBarBuilder = document.createDocumentFragment();
    sectionsData.forEach(item => {
        const navBarItem = document.createElement('li');
        navBarItem.appendChild(createNewNavLink(item.title, item.id, 'menu__link'));
        navBarBuilder.appendChild(navBarItem);
    });
    navBar.appendChild(navBarBuilder);
}


// Add class 'active' to section when near top of viewport
function adjustActiveSection(scroll_pos) {
    let top = Number.MAX_VALUE;
    let topSectionId = '';
    const sections = document.querySelectorAll('section');
    for (let section of sections) {
        const topMargin = Math.abs(section.getBoundingClientRect().top - 0);
        if (topMargin < top) {
            top = topMargin;
            topSectionId = section.id;
        }
    }
    addActiveClassToLink(topSectionId);
    addActiveClassToSection(topSectionId);
}


// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
*/
// Load Sections
addPageSections();

// Build menu 
buildNavBar();

// Set sections as active
function addActiveClassToSection(sectionId) {
    const sections = document.getElementsByTagName('section');
    for (let section of sections) {
        if (section.id === sectionId) {
            section.classList.add('active');
        } else {
            section.removeAttribute('class');
        }
    }
}

// Set nav link as active
function addActiveClassToLink(topSectionId) {
    const links = document.getElementsByClassName('menu__link');
    for (let link of links) {
        if (link.id === `${topSectionId}Link`) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    }
}

//Scroll event
document.addEventListener('scroll', function (e) {
    last_known_scroll_position = window.scrollY;
    if (!ticking) {
        window.requestAnimationFrame(function () {
            adjustActiveSection(last_known_scroll_position);
            ticking = false;
        });
        ticking = true;
    }
});