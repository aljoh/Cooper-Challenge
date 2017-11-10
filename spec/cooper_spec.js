describe("cooper", function(){
  it("returns a correct assessment on a calculation", function(){
    expect(cooper({age: 53, gender: "man", distance: 2000})).toEqual("Above Average");
  });
  it("returns a correct assessment on a calculation", function(){
    expect(cooper({age: 45, gender: "man", distance: 2000})).toEqual("Average");
  });
});
