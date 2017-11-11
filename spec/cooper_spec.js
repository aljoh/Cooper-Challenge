describe("cooper", function(){
  it("returns a correct assessment on a calculation, for men", function(){
    expect(evaluate({age: 13, gender: "man", distance: 2700})).toEqual("Excellent");
  });
  it("returns a correct assessment on a calculation, for men", function(){
    expect(evaluate({age: 63, gender: "man", distance: 1700})).toEqual("Average");
  });
  it("returns a correct assessment on a calculation, for women", function(){
    expect(evaluate({age: 23, gender: "woman", distance: 1900})).toEqual("Average");
  });
  it("returns a correct assessment on a calculation, for women", function(){
    expect(evaluate({age: 39, gender: "woman", distance: 1200})).toEqual("Poor");
  });
});
