const seeMore = document.getElementById('see-more-link');
const speakers = document.getElementById('speakers');
const speakerData = [
  {
    name: 'Daniel Vera',
    role: 'Bass, main vocals, lyrics composer',
    description: 'Dasik co-founder. Music & lyrics composer. Bass player. Producer. Leader of Dasik Band project',
    image: './images/DanielVera.jpeg',
  },
  {
    name: 'David Vera',
    role: 'Guitar, backing vocals, music composer',
    description: 'Dasik co-founder. Music composer. Guitar and bass player. Main arranger for the songs. Playing guitar since 2003',
    image: './images/DavidVera.jpeg',
  },
  {
    name: 'Damian Betancourt',
    role: 'External consultant and touring musician',
    description: 'Producer and touring musician. Multi-instrumentalist. Engineer. Music consultant',
    image: './images/DamianBetancourt.jpeg',
  },
  {
    name: 'Xavier De La Torre',
    role: 'Touring musician. Drummer',
    description: 'Drummer and percusionist. Touring musician.',
    image: './images/XavierDeLaTorre.jpeg',
  },
];

function generateLi(index) {
  const li = document.createElement('li');
  const photo = document.createElement('div');
  const info = document.createElement('div');
  const h3 = document.createElement('h3');
  const h4 = document.createElement('h4');
  const p = document.createElement('p');
  const hr = document.createElement('hr');

  photo.classList.add('photo');
  info.classList.add('info');

  photo.innerHTML = `<div class="pattern"> </div><img src="${speakerData[index].image}" alt="${speakerData[index].name}"></div>`;
  h3.innerText = speakerData[index].name;
  h4.innerText = speakerData[index].role;
  p.innerHTML = speakerData[index].description;

  info.appendChild(h3);
  info.appendChild(h4);
  info.appendChild(hr);
  info.appendChild(p);

  li.appendChild(photo);
  li.appendChild(info);
  if (index > 1) {
    li.classList.add('hidden-speaker');
  }
  return li;
}

for (let i = 0; i < speakerData.length; i += 1) {
  speakers.appendChild(generateLi(i));
}

seeMore.addEventListener('click', (e) => {
  for (let i = 0; i < speakers.children.length; i += 1) {
    if (i > 1) {
      speakers.children[i].classList.toggle('hidden-speaker');
    }
  }
  if (speakers.lastChild.classList.contains('hidden-speaker')) {
    seeMore.innerHTML = 'More <i class="fa-solid fa-angle-down"></i>';
  } else {
    seeMore.innerHTML = 'Less <i class="fa-solid fa-angle-up"></i>';
  }
});
