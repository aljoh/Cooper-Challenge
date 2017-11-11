describe("person", function(){

  beforeEach(function() {
    person = new Person({gender: 'man', age: 26, distance: 2000});
  });

  it("person should have an age", function() {
    expect(person.age).toEqual(26);
  });

  it("person shoud have a gender", function() {
    expect(person.gender).toEqual('man');
  });

  it("person should have a distance run", function()  {
    expect(person.distance).toEqual(2000);
  });
});
