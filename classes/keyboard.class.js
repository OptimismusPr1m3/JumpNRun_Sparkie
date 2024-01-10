class KeyBoard {

    RIGHT = false;
    LEFT = false;
    UP = false;
    DOWN = false;
    SPACE = false;
    MELEE = false;
    WBUBBLE = false;

    /**
     * Creates an instance of the KeyBoard - class and initializes desktop button handling.
     */
    constructor() {
        this.handleButtonsDesktop();
    }

    /**
     * Handles keyboard events for desktop controls, updating corresponding flags based on key presses.
     * 
     */
    handleButtonsDesktop() {
        /**
         * Adds an event listener to the window for keydown events.
         * 
         * @param {string} type - A string representing the event type to listen for (in this case, "keydown").
         * @param {EventListenerOrEventListenerObject} listener - The listener function or object to handle the event.
         */
        window.addEventListener("keydown", (event) => {
            switch (event['key']) {
                case 'w': this.UP = true;
                    break;
                case 's': this.DOWN = true;
                    break;
                case 'a': this.LEFT = true;
                    break;
                case 'd': this.RIGHT = true;
                    break;
                case 'f': this.MELEE = true;
                    break;
                case ' ': this.SPACE = true;
                    break;
                case 'g': this.WBUBBLE = true;
                default:
                    break;
            }
        });
        /**
         * @param {string} type - A string representing the event type to listen for (in this case, "keyup").
         * @param {EventListenerOrEventListenerObject} listener - The listener function or object to handle the event.
         */
        window.addEventListener("keyup", (event) => {
            switch (event['key']) {
                case 'w': this.UP = false;
                    break;
                case 's': this.DOWN = false;
                    break;
                case 'a': this.LEFT = false;
                    break;
                case 'd': this.RIGHT = false;
                    break;
                case 'f': this.MELEE = false;
                    break;
                case ' ': this.SPACE = false;
                    break;
                case 'g': this.WBUBBLE = false;
                default:
                    break;
            }
        })
    }
    /**
     * Handles touch events for mobile controls, updating corresponding flags based on touch interactions.
     */
    handleButtonsMobile() {
        /**
         * Adds an event listener to the 'leftBtn' element for touchstart events.
         * @param {string} type - A string representing the event type to listen for (in this case, "touchstart").
         * @param {EventListenerOrEventListenerObject} listener - The listener function or object to handle the event.
         */
        document.getElementById('leftBtn').addEventListener("touchstart", (event) => {
            event.preventDefault();
            this.LEFT = true;
        });
        document.getElementById('leftBtn').addEventListener("touchend", (event) => {
            event.preventDefault();
            this.LEFT = false;
        });
        document.getElementById('rightBtn').addEventListener("touchstart", (event) => {
            event.preventDefault();
            this.RIGHT = true;
        });
        document.getElementById('rightBtn').addEventListener("touchend", (event) => {
            event.preventDefault();
            this.RIGHT = false;
        });
        document.getElementById('jumpBtn').addEventListener("touchstart", (event) => {
            event.preventDefault();
            this.UP = true;
        })
        document.getElementById('jumpBtn').addEventListener("touchend", (event) => {
            event.preventDefault();
            this.UP = false;
        })
        document.getElementById('attackBtn').addEventListener("touchstart", (event) => {
            event.preventDefault();
            this.SPACE = true;
        })
        document.getElementById('attackBtn').addEventListener("touchend", (event) => {
            event.preventDefault();
            this.SPACE = false;
        })
        document.getElementById('meleeAttackBtn').addEventListener("touchstart", (event) => {
            event.preventDefault();
            this.MELEE = true;
        })
        document.getElementById('meleeAttackBtn').addEventListener("touchend", (event) => {
            event.preventDefault();
            this.MELEE = false;
        })
        document.getElementById('wBubbleBtn').addEventListener("touchstart", (event) => {
            event.preventDefault();
            this.WBUBBLE = true;
        })
        document.getElementById('wBubbleBtn').addEventListener("touchend", (event) => {
            event.preventDefault();
            this.WBUBBLE = false;
        })
    }
}