// Reviews Data for manipulation
const reviews = [
  {
    author: 'CodeWithMrX 1',
    job: 'Programmer',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique alias impedit aliquam modi quas cum ut optio pariatur sed molestias!',
    img: './images/client1.png',
  },
  {
    author: 'MrX 2',
    job: 'YouTuber',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique alias impedit aliquam modi quas cum ut optio pariatur sed molestias!',
    img: 'https://yt3.ggpht.com/ytc/AKedOLRHjqTEyYUMkb1ir-TnxrZBo0EotyhtiSmpsY1jAw=s176-c-k-c0x00ffffff-no-rj-mo',
  },
  {
    author: 'MrX 3',
    job: 'JavaScript Developer',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique alias impedit aliquam modi quas cum ut optio pariatur sed molestias!',
    img: 'https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png',
  },
  {
    author: 'MrX 4',
    job: 'YouTube Creator',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique alias impedit aliquam modi quas cum ut optio pariatur sed molestias!',
    img: 'https://yt3.ggpht.com/omDV4RX5BjOw_R3J8L-qwETRq4qqy_uN5DTo58Trg1HW6TM2ejPGuVjtRjh2BrlGpeRLgaPAtA=s176-c-k-c0x00ffffff-no-rj-mo',
  },
];

// Creating variables to get elements from our DOM.
const mainImage = document.getElementById('img');
const myAuthor = document.getElementById('author');
const myJob = document.getElementById('job');
const myText = document.getElementById('text');
const prev = document.getElementById('prev-btn');
const next = document.getElementById('next-btn');
const random = document.getElementById('randomBtn');

let indexNum = 0;
let length = reviews.length;

// Code for listening next button event
next.addEventListener('click', function () {
  indexNum++;
  if (indexNum > length - 1) {
    indexNum = 0;
    mainImage.src = reviews[indexNum].img;
    myAuthor.innerHTML = reviews[indexNum].author;
    myJob.innerHTML = reviews[indexNum].job;
    myText.innerHTML = reviews[indexNum].text;
  } else {
    mainImage.src = reviews[indexNum].img;
    myAuthor.innerHTML = reviews[indexNum].author;
    myJob.innerHTML = reviews[indexNum].job;
    myText.innerHTML = reviews[indexNum].text;
  }
});

// Code for listening previous button event
prev.addEventListener('click', function () {
  indexNum--;
  if (indexNum < 0) {
    indexNum = 3;
    mainImage.src = reviews[indexNum].img;
    myAuthor.innerHTML = reviews[indexNum].author;
    myJob.innerHTML = reviews[indexNum].job;
    myText.innerHTML = reviews[indexNum].text;
  } else {
    mainImage.src = reviews[indexNum].img;
    myAuthor.innerHTML = reviews[indexNum].author;
    myJob.innerHTML = reviews[indexNum].job;
    myText.innerHTML = reviews[indexNum].text;
  }
});

// Code for listening random button event
random.addEventListener('click', function () {
  let num = Math.floor(3 * Math.random());

  mainImage.src = reviews[num].img;
  myAuthor.innerHTML = reviews[num].author;
  myJob.innerHTML = reviews[num].job;
  myText.innerHTML = reviews[num].text;
});
