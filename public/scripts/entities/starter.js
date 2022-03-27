class Starter extends Denizen {

  constructor(options) {
    super(options);
    this.imageUri = '/images/Volcano-eruption-molten-lava-catastrophic-512.webp';
    this.position.y += this.height;
  }

  update(t) {
    // no physics for Starter
  }

  clickEffect() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
    document.body.style.background = bgColor;
  }

  onClick(event) {
    let xVel = randRangeInt(-300, 300);
    let yVel = 400 - Math.abs(xVel);
    let s = new Seed({
      tank: this.tank,
      position: this.position,
      velocity: new Vector(xVel, yVel),
      type: this.tank.getRandomSpecies(),
    });
    this.clickEffect();
  }
}
