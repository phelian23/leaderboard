const addScoresToList = (score) => {
    const list = document.querySelector('.leader-list');

    const listItem = document.createElement('li');
  
    listItem.innerHTML = `
        <div class="disflex list-item">
        <p>${score.userName}:</p>
        <p>${score.score}</p>
        </div>
        `;
  
    list.appendChild(listItem);
};

export default addScoresToList;