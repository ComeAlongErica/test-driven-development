/**
 * This class handles change for a vending machine.
 * 
 * IMPORTANT: All amounts are in cents. E.g. $1.35 = 135. This will help with rounding errors.
 */
class ChangeHandler {

    constructor(amountDue) {
        this.amountDue = amountDue.amountDue;
        this.cashTendered = 0;
    }

    /**
     * The customer inserts a coin, increasing the cashTendered.
     * @param {string} type either quarter, dime, nickel, or penny
     */
    insertCoin(type) {
        if (type === "quarter") {
            this.cashTendered += 25;
        } else if (type === "dime") {
            this.cashTendered += 10;
        } else if (type === "nickel") {
            this.cashTendered += 5;
        } else if (type === "penny") {
            this.cashTendered += 1;
        } else {
            console.log("error");
        }
    }

    /**
     * Returns true if enough coins have been inserted to at least meet the amountDue
     */
    isPaymentSufficient() {
        if (this.cashTendered >= this.amountDue) {
            return true;
        } else {
            return false;
        }
    }

     giveChange() {
        // TODO return the correct change in the following format...
        let change = this.cashTendered - this.amountDue;
        let quarters = Math.floor(change / 25);
        let dimes = Math.floor((change % 25) / 10);
        let nickels = Math.floor(((change % 25) % 10) / 5);
        let pennies = Math.floor(((change % 25) %10) % 5);
            
        return {
            quarters: quarters,
            dimes: dimes,
            nickels: nickels,
            pennies: pennies
        }
    }

}