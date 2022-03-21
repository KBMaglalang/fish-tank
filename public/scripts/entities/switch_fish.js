class SwitchFish extends Fish {
  constructor(options) {
    super(options);
    this.imageUri = '/images/giphy.gif';
  }


  onClick(event) {
    this.makeNewVelocity(50);
  }
}
