function counter (){

    const counter = document.querySelector('.counter span');
    let count = counter.innerText;

    function isVisible ()  {
            let coords = counter.getBoundingClientRect();
    
            let windowHeight = document.documentElement.clientHeight;
    
            let topVisible = coords.top > 0 && coords.top < windowHeight;

            if(topVisible){
                startCount();
                isVisible = function(){};
            }
            return topVisible;
    };

    window.addEventListener('scroll', () => {
        isVisible();
    });

    let startCount = () => {
        let time = setInterval(() => {
            count++;
            counter.innerHTML = `${count}`;
            if(count >= 1787){
                clearInterval(time);
            }
        }, 30);
    };
};

export default counter;