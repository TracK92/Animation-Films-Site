import postLikes from './postLikes';

const listContainer = document.querySelector('.mainlist');

const populatePage = (animations) => {
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
    span.innerText = animation.likes;
    if (span.innerText > 0) {
      heartIcon.style.color = 'red';
    } else {
      heartIcon.style.color = 'black';
    }
    para.appendChild(span);

    // comment box
    const commentBox = document.createElement('button');
    commentBox.id = `${animation.id}`;
    commentBox.className = 'commentBox';
    commentBox.innerHTML = 'Comments';
    oneList.appendChild(commentBox);

    // update likes
    const updateLikes = () => {
      const currentLikes = span.innerText;
      span.innerText = currentLikes ? Number(currentLikes) + 1 : 1;
    };

    // like event listeners
    heart.addEventListener('click', async (e) => {
      heartIcon.style.color = 'red';
      const { id } = e.target;
      updateLikes();
      await postLikes(id);
    });
  });
};

export default populatePage;