// Modal Receitas
const receitas = document.querySelectorAll('.receita__iten');
const modalTela = document.querySelector('.modal__wrap')
const modal = document.querySelector('.modal_box');

for (let receita of receitas) {

    receita.addEventListener('click', function () {
        const receitaID = receita.getAttribute("id");


        // Modal
        modalTela.classList.add('active');
        modal.querySelector('.capaimg img').src = `/assets/${receitaID}.png`;



    })
}



modal.querySelector("a").addEventListener("click", function (event) {
    event.preventDefault();
    modalTela.classList.remove('active');

    

})


