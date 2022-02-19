
function overfooter(){

    const overfooter = document.querySelector('.overfooter');
    let height = overfooter.offsetHeight;
    const standartHeight = 140;
    let newTop = (height + 10) / 2;

    if (height == standartHeight){
        overfooter.style.top = -newTop+'px';
        console.log(height)
    } else if (height > standartHeight){
        overfooter.style.top = -newTop+'px';
    } else if ( height < standartHeight){
        overfooter.style.top = -75+ "px";
    }

};

export default overfooter;