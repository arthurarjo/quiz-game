const rewire = require("rewire")
const useWindowDimensions = rewire("./useWindowDimensions")
const getWindowDimensions = useWindowDimensions.__get__("getWindowDimensions")
// @ponicode
describe("getWindowDimensions", () => {
    test("0", () => {
        let callFunction = () => {
            getWindowDimensions()
        }
    
        expect(callFunction).not.toThrow()
    })
})
