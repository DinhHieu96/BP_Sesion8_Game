function Icon(image, top, left, speed, size) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.speed = speed;
    this.size = size;
    this.getIconElement = function () {
        return '<img width="' + this.size + '" height="' + this.size + '" src="' + this.image + '" style="top: ' +
            this.top + 'px; left:' + this.left + 'px; speed:' + this.speed + 'px; position:absolute;" />';
    };
    this.moveRight = function () {
        this.left += this.speed;
        console.log('ok:' + this.left);
    };

};
let icon = new Icon('icon.jpg', 20, 30, 5, 200);

function start() {
    if (icon.left < window.innerWidth - icon.size) {
        icon.moveRight();
    }
    document.getElementById("game").innerHTML = icon.getIconElement();
    setInterval(start, 500);
}

start();