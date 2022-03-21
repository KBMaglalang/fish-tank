class BiteFish extends GoFish {
  constructor(options) {
    super(options); // call super to run the code inside 'Fish's constructor
    this.imageUri = '/images/Kit-Cat.png'; // set the image to the new image for this fish
    // this.surgeSecondsLeft = 0;
    this.maxSurge = 2.0;
    // this.surgMult = 3.0;

    this.width = 68;
    this.isTasty = false;
    // console.log(this.tank.denizens);
  }

  updateOneTick() {
    // let delta = this.swimVelocity.scale(PHYSICS_TICK_SIZE_S * (1 + this.surgeSecondsLeft * this.surgMult));
    // this.position.addMut(delta);
    // this.timeUntilSpeedChange -= PHYSICS_TICK_SIZE_S;
    // if (this.timeUntilSpeedChange < 0) {
    //   this.makeNewVelocity();
    // }
    // this.surgeSecondsLeft = Math.max(0, this.surgeSecondsLeft - PHYSICS_TICK_SIZE_S);
    super.updateOneTick();



    // console.log(this.position);
    // console.log(this.tank.getProximateDenizens(this.position,200)); // gives back an array of objects of nearby fish
    for (let food of this.tank.getProximateDenizens(this.position,85)) {
      if (food.isTasty === true) {
        food.kill();
      }
    }
  }

  // onClick(event) {
  //   this.surgeSecondsLeft = this.maxSurge;
  // }
}

