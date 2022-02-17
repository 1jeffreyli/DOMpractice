// This selects the element with id container
const container = document.querySelector('#container');


// This creates a div element in the memory, not directly in the HTML file
const content = document.createElement('div');

    // This adds class .content to the div element
    content.classList.add('content');

    // This adds some text to the div
    content.textContent = 'This is the glorious text-content!';

    // This adds the content just created to the #container div
    container.appendChild(content);

// A paragraph element with red text that says "Hey I'm red!"
const pText = document.createElement('p');
    pText.textContent = 'Hey I\'m red!';
    pText.style.color = 'red';
    container.appendChild(pText);

// An h3 tag with blue text that says "I'm a blue h3!"
    const hText = document.createElement('h3');
    hText.textContent = 'I\'m a blue h3!';
    hText.style.color = 'blue';
    container.appendChild(hText);