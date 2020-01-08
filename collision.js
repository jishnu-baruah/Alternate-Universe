function checkCollision(sprite1, sprite2) {

    var x1 = sprite1.x
    var x2 = sprite2.x
    var y1 = sprite1.y
    var y2 = sprite2.y
    var x = x1 - x2;
    var y = y1 - y2;
    if (x1 < x2) {
        x = x2 - x1;
    } else {
        x = x1 - x2;
    }

    if (y1 < y2) {
        y = y2 - y1;
    } else {
        y = y1 - y2;
    }
    console.log(sprite1.collider.radius)
    var distance = Math.sqrt(x * x + y * y);
    var colliderRadii = sprite1.collider.radius + sprite2.collider.radius;
    // console.log(distance, colliderRadii);
    if (distance <= colliderRadii) {
        return (true)
    } else if (distance > colliderRadii) {
        return (false)
    }
}