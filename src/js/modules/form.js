
function form (){

    const forms = document.getElementById('form');

    const message = {
        loading: "Loading",
        success: "Thank you, our specialist will contact you shortly",
        error: "upss, something went wrong"
    };


    forms.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(forms);

        const object = {};
        formData.forEach(function(value, key){
            object[key] = value;
        });

        let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            forms.appendChild(statusMessage);

        fetch("assets/server.php", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(object)
        }).then((data) => {
            data.text();
            statusMessage.innerHTML = message.success;
        }).then((data) => {
            console.log(data.text());
        })
        .catch(()=>{
            statusMessage.innerHTML = message.error
        }).finally(() => {
            forms.reset();
        })
    });
    
};

export default form;