console.log('text');

let mainTitleEl = document.querySelector('h1');
mainTitleEl.innerText = "Welcome to Bettereddit";

const articleContainerEl = document.getElementById('main');
// let sectionEl = document.createElement('section');

fetch('https://www.reddit.com/r/aww/.json')
    .then(response => response.json())
    .then(data => {
        console.log(data.kind);
        let dataEl = data.data;
        for (const child of dataEl.children) {
            let sectionEl = document.createElement('a');
            sectionEl.classList.add('subtitle');
            articleContainerEl.appendChild(sectionEl);
            sectionEl.innerHTML = child.data.title;
            sectionEl.setAttribute('href', `https:\\www.reddit.com${child.data.permalink}`)
            let thumbnailEl = document.createElement('img');
            sectionEl.appendChild(thumbnailEl);
            thumbnailEl.setAttribute('src', child.data.thumbnail);
            //need data.thumbnail
        }
    });