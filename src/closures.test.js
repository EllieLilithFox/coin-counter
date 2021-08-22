const rewire = require("rewire")
const closures = rewire("./closures")
const makeAdder = closures.__get__("makeAdder")
// @ponicode
describe("makeAdder", () => {
    test("0", () => {
        let callFunction = () => {
            makeAdder(0.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            makeAdder(350)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            makeAdder(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            makeAdder(50)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            makeAdder(-1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            makeAdder(NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})
