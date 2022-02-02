import modal from "./modal";

const videoBtn = (btn, animBtn) => {
    
    const videoBtn = document.querySelector(btn),
    videBtnCercl = document.querySelectorAll(animBtn);

    videoBtn.addEventListener("click", (e) => {
    e.preventDefault();

    let index = 2;
    videBtnCercl.forEach(item => {

        setTimeout(()=>{
            item.style.background = "#C40B0B";
        }, index * 100);

        index ++;

        setTimeout(()=>{
            item.style.background = "";
        }, index * 100);

        });
        setTimeout(animComplete, 700);
        function animComplete(){
            modal();
            // window.open(e.target.href = "https://www.youtube.com/watch?v=Z9jG-q0pO4g&t=846s", "_blank");
        };
    });

   
};

export default videoBtn;