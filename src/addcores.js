const addScoresToList = (score) => {
    const list = document.querySelector('.leader-list');

    const listItem = document.createElement('li');
  
    listItem.innerHTML = `
        <p>${scores.userName}:</p>
        <p>${scores.score}</p>
        `;
  
    list.appendChild(listItem);
};