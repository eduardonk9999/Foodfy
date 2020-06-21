const modal = document.querySelector('.box__modal');
const recipes = document.querySelectorAll('article.recipes');



for(let recipe of recipes) {
  recipe.addEventListener('click', function(){
    modal.classList.add('active');
    const capaImg = recipe.getAttribute("data-id");
    
    const textTitle = recipe.querySelector('.recipes-title').innerText;
    const textAuthor = recipe.querySelector('.recipes-author').innerText;
   

    modal.querySelector('.capa__img img').src = `assets/imgs/${capaImg}.png`;
    modal.querySelector('h4.recipes-title').innerHTML = `${textTitle}`;
    modal.querySelector('p.recipes-author').innerHTML = `${textAuthor}`;
  })
}


//fechar modal
document.querySelector('span.fechar-modal').addEventListener('click', function(){
  modal.classList.remove('active');
})

//

