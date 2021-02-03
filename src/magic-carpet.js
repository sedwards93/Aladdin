class MagicCarpet {
  constructor(passengers = "Jasmine") {
    this.passengers = [passengers];
  };

  viewPassengers() {
    return this.passengers;
  };

  canShowYouTheWorld() {
    this.passengers.pop();
  };
}