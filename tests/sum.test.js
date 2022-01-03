const sum=require("../src/sum.js")

it("should return sum",()=>{
    const result=sum(2,3)
    expect(result).toBe(5)
})