function modal () {
    const modal = document.createElement("div"),
          parent = document.querySelector('.video');
        modal.classList.add('modal');
        parent.append(modal);

    modal.innerHTML = `
        <div class="modal__wrapper">
            <span>X</span>
            // <iframe width="560" height="315" src="https://www.youtube.com/embed/Z9jG-q0pO4g?start=846" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    `;

    const closeModal = document.querySelector(".modal__wrapper span");

    closeModal.addEventListener('click', () => {
        modal.remove();
    });
};

export default modal;