describe('Magic Carpet', () => {
  it('magicCarpet is an instance of MagicCarpet', () => {
    let magicCarpet = new MagicCarpet();
    expect(magicCarpet instanceof MagicCarpet).toBeTrue();
  });

  it('MagicCarpet objects are initialized with a default passenger of Jasmine', () => {
    let magicCarpet = new MagicCarpet();
    expect(magicCarpet.viewPassengers()).toEqual("Jasmine");
  });

  it('canShowYouTheWorld function ejects passenger', () => {
    let magicCarpet = new MagicCarpet();
    magicCarpet.canShowYouTheWorld();
    expect(magicCarpet.viewPassengers()).toNotEqual("Jasmine");
  })
});

