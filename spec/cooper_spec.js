describe("cooper", function(){
  it("returns a correct assessment on a calculation", function(){
    expect(evaluate({age: 13, gender: "man", distance: 2700})).toEqual("Excellent");
  });
});
