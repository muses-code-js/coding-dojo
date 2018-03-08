class Player {
  playTurn(warrior) {
    let _health = this.health;
    // Cool code goes here
    //if (warrior.feel().isEmpty() && warrior.health() < _health) {
    if (warrior.feel().isCaptive()) {
      warrior.rescue();
    } else if (
      warrior.feel().isEmpty() &&
      warrior.health() >= _health &&
      warrior.health() < 15
    ) {
      warrior.rest();
    } else if (!warrior.feel().isEmpty()) {
      warrior.attack();
    } else {
      warrior.walk();
    }

    this.health = warrior.health();
  }
}
