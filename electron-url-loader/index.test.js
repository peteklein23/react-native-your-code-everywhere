const rewire = require("rewire")
const index = rewire("./index")
const createWindow = index.__get__("createWindow")
// @ponicode
describe("createWindow", () => {
    test("0", () => {
        let callFunction = () => {
            createWindow()
        }
    
        expect(callFunction).not.toThrow()
    })
})
