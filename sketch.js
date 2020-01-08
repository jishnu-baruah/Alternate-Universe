
var star;
var angle = 0;
var planet1, planet2, planet3, planet4, planet5;
var sun, plnt1, plnt2, plnt3, plnt4, plnt5, space;
var size = 1;
var planets;

function preload() {
    sun = loadImage("sun.png");
    plnt1 = loadImage("planet1.png");
    plnt2 = loadImage("planet2.png");
    plnt3 = loadImage("planet3.png");
    plnt4 = loadImage("planet4.png");
    plnt5 = loadImage("planet5.png");
    space = loadImage("space.png");
}

function setup() {
    var canvas = createCanvas(600, 600);
    angleMode(DEGREES)

    star = createSprite(0, 0, 50, 50);
    star.addAnimation("1", sun);

    star.setCollider("circle", 0, 0, star.width / 2);

    planet1 = createSprite(190, 190, 30, 30);
    planet2 = createSprite(50, 50, 15, 15);
    planet3 = createSprite(80, -80, 20, 20);
    planet4 = createSprite(-110, 110, 50, 50);
    planet5 = createSprite(-150, - 150, 40, 40);

    planet1.addAnimation("1", plnt5);
    planet2.addAnimation("1", plnt1);
    planet3.addAnimation("1", plnt3);
    planet4.addAnimation("1", plnt4);
    planet5.addAnimation("1", plnt2);

    planet1.rotationSpeed = -1;
    planet2.rotationSpeed = -1;
    planet3.rotationSpeed = -1;
    planet4.rotationSpeed = -1;
    planet5.rotationSpeed = -1;

    planets = createGroup();
    planets.push(planet1);
    planets.push(planet2);
    planets.push(planet3);
    planets.push(planet4);
    planets.push(planet5);
    // planet1.debug = planet2.debug = planet3.debug = planet4.debug = planet5.debug = star.debug = true;


}
function draw() {
    background(space);
    star.scale = size;
    star.collider.radius = star.width / 2
    translate(300, 300);

    rotate(angle);

    drawSprites();
    angle = angle + 1;
    size = size + 0.005;

    planetsDestroy();

    // console.log(checkCollision(planet2, star))
}

function planetsDestroy() {
    for (var i = 0; i <= planets.length; i++) {
        var temp = planets.get(i);

        if (temp != undefined) {

            setRoundCollider(temp);
            if (checkCollision(star, temp) === true) {

                temp.destroy();
            }
        }
    }
}
function setRoundCollider(sprite) {
    sprite.setCollider("circle", 0, 0, sprite.width / 2)
}