import videoBtn from "./modules/videoBtn";
import counter from "./modules/counter";
import albom from "./modules/albom";

window.addEventListener("DOMContentLoaded", () => {
    "use strict";

    const data = [
        {item: true},
        {item: false},
        {item: true}
    ];

    videoBtn('.video-arrow', '.video-btn');
    counter();
    albom('.tabheader-item', '.foto', '.tabheader-items', data);
});