// junk objects

class Junk extends Denizen {
  constructor(options) {
    super(options);
    this.imageUri = '/images/banana.png';
    this.maxSwimSpeed = 100;
    this.makeNewVelocity();
    this.isTasty = false;
  }

  generateSwimVelocity(max, min) {
    if (min && min > max) {
      min = 0;
    }
    let newSpeed = new Vector(randRangeInt(-max, max), randRangeInt(-max / 2, max / 2));
    while (min && newSpeed.magnitude() < min) {
      newSpeed = new Vector(randRangeInt(-max, max), randRangeInt(-max / 2, max / 2));
    }
    return newSpeed;
  }

  updateOneTick() {
    let delta = this.swimVelocity.scale(PHYSICS_TICK_SIZE_S);
    this.position.addMut(delta);
    this.timeUntilSpeedChange -= PHYSICS_TICK_SIZE_S;
    if (this.timeUntilSpeedChange < 0) {
      this.makeNewVelocity();
    }

    for (let food of this.tank.getProximateDenizens(this.position,85)) {
      if (!food.isTasty && (food instanceof SharkFish || food instanceof BiteFish)) {  // prey
        food.kill();
        continue;
      }

      if ((food instanceof Junk)) {
        food.makeNewVelocity();
      }
    }
  }

  makeNewVelocity(minMag) {
    this.swimVelocity = this.generateSwimVelocity(this.maxSwimSpeed, minMag || 0);
    this.timeUntilSpeedChange = randRangeInt(5);
  }
}
