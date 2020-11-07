const stringLib = require('./script')



test("Testing capitalize", () => {
    expect(stringLib.capitalize("hello")).toBe("Hello")
    expect(stringLib.capitalize("hELLO")).toBe("Hello")
})






