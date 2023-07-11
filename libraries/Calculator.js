class Calculator {

    // Adds ID to the output.
        constructor() {
            this.id = this.generateRandomNumber();
            }
        // Generates random number to be used for the above output ID.
        generateRandomNumber() {
            return Math.floor(Math.random() * 100000);
            }

    // Calculation Library
        #log=(value)=>{
            console.log(`[Calculator:${this.id}]:${value}`)
            }
        // Addition 
            add(num1, num2) {
                const value=num1+num2
                this.#log(value)
                return value;
            }
        // Subtraction
            minus(num1, num2) {
                const value=num1-num2
                this.#log(value)
                return value;
            }
        // Multiplication
            times(num1, num2) {
                const value=num1*num2
                this.#log(value)
                return value;
            }
        // Division 
            divide(num1, num2) {
                const value=num1/num2
                this.#log(value)
                return value;
            }
        // Percentage
            percentage(num1, num2) {
                const value=(num1 / num2) * 100
                this.#log(value)
                return value;
            }

    }
    module.exports=Calculator