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
        title: 'Section 1', link: 'section1', data: [`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra
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
        title: 'Section 2', link: 'section2', data: [`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra
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
        title: 'Section 3', link: 'section3', data: [`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra
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
        title: 'Section 4', link: 'section4', data: [`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra
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

/**
 * End Global Variables
 * Start Helper Functions
 *
*/
function CreateNewLinkElement(text, link, className) {
    const navBarItemLink = document.createElement('a');
    navBarItemLink.className = className;
    navBarItemLink.innerText = text;
    navBarItemLink.href = `#${link}`;
    navBarItemLink.addEventListener('click', scrollToSection);
    return navBarItemLink;
}


/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
function BuildNavBar() {
    const navBar = document.querySelector('#navbar__list');
    const navBarBuilder = document.createDocumentFragment();
    sectionsData.forEach(item => {
        const navBarItem = document.createElement('li');
        navBarItem.appendChild(CreateNewLinkElement(item.title, item.link, 'menu__link'));
        navBarBuilder.appendChild(navBarItem);
    });
    navBar.appendChild(navBarBuilder);
}


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/


// Build menu 
BuildNavBar();

// Scroll to section on link click
function scrollToSection(event) {
    const id = event.srcElement.innerText.replace(/\s/, '');
    const sectionId = id[0].toLowerCase() + id.slice(1);
    const sections = document.getElementsByTagName('section');
    for (let section of sections) {
        if (section.id === sectionId) {
            section.classList.toggle('active');
        } else {
            section.removeAttribute('class');
        }
    }

    // switch (link.innerText) {
    //     case 'Section 1':
    //         link.classList.add('active');
    //         break;
    //     case 'Section 2':
    //         link.classList.add('active');
    //         break;
    //     case 'Section 3':
    //         link.classList.add('active');
    //         break;
    //     case 'Section 4':
    //         link.classList.add('active');
    //         break;
    //     default:
    //         break;
    // }
}

// Set sections as active


