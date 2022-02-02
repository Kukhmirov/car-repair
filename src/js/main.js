import videoBtn from "./modules/videoBtn";
import counter from "./modules/counter";
import albom from "./modules/albom";
import form from "./modules/form";

window.addEventListener("DOMContentLoaded", () => {
    "use strict";

    videoBtn('.video-arrow', '.video-btn');
    counter();
    albom('.tabheader-item', '.foto', '.tabheader-items');
    form();
});