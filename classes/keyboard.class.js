class KeyBoard{
    RIGHT = false;
    LEFT = false;
    UP = false;
    DOWN = false;
    SPACE = false;

    constructor() {
        this.handleButtonsDesktop();
    }


    handleButtonsDesktop() {

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
                case ' ': this.SPACE = true;
                default:
                    break;
            }
        });
        
        window.addEventListener("keyup", (event) =>{
            switch (event['key']) {
                case 'w': this.UP = false;
                    break;
                case 's': this.DOWN = false;
                    break;
                case 'a': this.LEFT = false;
                    break;
                case 'd': this.RIGHT = false;
                    break;
                case ' ': this.SPACE = false;
                default:
                    break;
            }
        })
    }

    handleButtonsMobile() {
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
    }
}