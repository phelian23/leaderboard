const addScoresToList = (score) => {
    const list = document.querySelector('.leader-list');

    const listItem = document.createElement('li');
  
    listItem.innerHTML = `
        <p>${score.userName}:</p>
        <p>${score.score}</p>
        `;
  
    list.appendChild(listItem);
};

export default addScoresToList;