const listContainer = document.querySelector('.mainlist');

const populatePage = (animations) => {
  // const animationData = animations.filter((item) => item.title.length < 20);
  animations.forEach((animation) => {
    // list
    const oneList = document.createElement('li');
    oneList.className = 'onelist';
    listContainer.appendChild(oneList);

    // maindiv
    const mainDiv = document.createElement('div');
    mainDiv.className = 'maindiv';
    oneList.appendChild(mainDiv);
    // image
    const animeImage = document.createElement('img');
    animeImage.className = 'animeImage';
    animeImage.src = `${animation.medium_cover_image}`;
    animeImage.alt = 'anime image';
    mainDiv.appendChild(animeImage);
    // div
    const div = document.createElement('div');
    div.className = 'divElement';
    mainDiv.appendChild(div);
    // title
    const animeTitle = document.createElement('h5');
    animeTitle.className = 'animetitle';
    animeTitle.innerHTML = `${animation.title}`;
    div.appendChild(animeTitle);
    // heart
    const heart = document.createElement('button');
    heart.className = 'heart';
    heart.id = `${animation.id}`;
    div.appendChild(heart);

    const heartIcon = document.createElement('i');
    heartIcon.classList.add('fas', 'fa-heart');
    heartIcon.setAttribute('id', animation.id);
    heart.appendChild(heartIcon);

    const para = document.createElement('p');
    para.className = 'para';
    para.innerText = 'Likes ';
    heart.appendChild(para);

    const span = document.createElement('span');
    para.appendChild(span);

    // comment box
    const commentBox = document.createElement('button');
    commentBox.id = `${animation.id}`;
    commentBox.className = 'commentBox';
    commentBox.innerHTML = 'Comments';
    oneList.appendChild(commentBox);
  });
};

export default populatePage;