//<><>querySelectors<><>

var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var coverTagLine1 = document.querySelector('.tagline-1');
var coverTagLine2 = document.querySelector('.tagline-2');

var buttonHome = document.querySelector('.home-button');
var buttonRandomCover = document.querySelector('.random-cover-button');
var buttonSaveCover = document.querySelector('.save-cover-button');
var buttonViewSaved = document.querySelector('.view-saved-button');
var buttonMakeOwn = document.querySelector('.make-new-button');
var buttonCreateBook = document.querySelector('.create-new-book-button');

var viewHome = document.querySelector('.home-view');
var viewMakeOwn = document.querySelector('.form-view');
var viewViewSaved = document.querySelector('.saved-view');

var coverInput = document.querySelector('#cover');
var titleInput = document.querySelector('#title');
var firstDescriptorInput = document.querySelector('#descriptor1');
var secondDescriptorInput = document.querySelector('#descriptor2');

//<><>variables<><>

var savedCovers = [
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;


//<><>event listeners<><>

buttonRandomCover.addEventListener('click', init);
buttonHome.addEventListener('click', setHome);
buttonMakeOwn.addEventListener('click', setMake);
buttonViewSaved.addEventListener('click', setSaved);
buttonCreateBook.addEventListener('click', saveCover);
buttonCreateBook.addEventListener('click', saveCover);


//<><>event handler functions<><>

function init() {
  currentCover = randomCover();
  updateCover();
};

function saveCover(e) {
  covers.push(coverInput.value);
  titles.push(titleInput.value);
  descriptors.push(firstDescriptorInput.value);
  descriptors.push(secondDescriptorInput.value);

  currentCover = createCover(
    coverInput.value, 
    titleInput.value, 
    firstDescriptorInput.value, 
    secondDescriptorInput.value
    );
  updateCover();
  setHome();
  
  coverInput.value = '';
  titleInput.value = '';
  descriptor1.value = '';
  descriptor2.value = '';

  e.preventDefault();
}

function updateCover() {
  coverImage.src = currentCover.coverImg;
  coverTitle.innerText = currentCover.title;
  coverTagLine1.innerText = currentCover.tagline1;
  coverTagLine2.innerText = currentCover.tagline2;
};

function setHome() {
  viewHome.classList.remove('hidden');
  viewMakeOwn.classList.add('hidden');
  viewViewSaved.classList.add('hidden');

  buttonRandomCover.classList.remove('hidden');
  buttonSaveCover.classList.remove('hidden');
  buttonHome.classList.add('hidden');
}

function setMake() {
  viewMakeOwn.classList.remove('hidden');
  viewHome.classList.add('hidden');
  viewViewSaved.classList.add('hidden');

  buttonRandomCover.classList.add('hidden');
  buttonSaveCover.classList.add('hidden');
  buttonHome.classList.remove('hidden');
}

function setSaved() {
  viewViewSaved.classList.remove('hidden');
  viewMakeOwn.classList.add('hidden');
  viewHome.classList.add('hidden');

  buttonRandomCover.classList.add('hidden');
  buttonSaveCover.classList.add('hidden');
  buttonHome.classList.remove('hidden');
}

//<><>functions<><>

function getRandomIndex(array) {
  var randomIndex =  Math.floor(Math.random() * array.length);
  var randItem = array[randomIndex];
    return randItem;
};

function createCover(imgSrc, title, descriptor1, descriptor2) {
  var cover = {
    id: Date.now(),
    coverImg: imgSrc,
    title: title,
    tagline1: descriptor1,
    tagline2: descriptor2
  }
  return cover
};

function randomCover() {
  return createCover(
    getRandomIndex(covers),
    getRandomIndex(titles),
    getRandomIndex(descriptors),
    getRandomIndex(descriptors)
    );
}

init();

// should fill out inputs value into fields
// cover is made based on input values
// save submitted info into proper arrays
// setHome button to hide
// create new cover using inputted values