describe("cooper", function(){
  it("returns a correct assessment on a calculation", function(){
    expect(cooper({age: 53, gender: "man", distance: 2000})).toEqual("Above Average");
  });
  it("returns a correct assessment on a calculation", function(){
    expect(cooper({age: 45, gender: "man", distance: 2000})).toEqual("Average");
  });
  it("returns a correct assessment on a calculation", function(){
    expect(cooper({age: 25, gender: "female", distance: 2200})).toEqual("Above Average");
  });
  it("returns a correct assessment on a calculation", function(){
    expect(cooper({age: 17, gender: "female", distance: 2600})).toEqual("Excellent");
  });
  it("returns a correct assessment on a calculation", function(){
    expect(cooper({age: 13, gender: "female", distance: 1400})).toEqual("Poor");
  });
});
