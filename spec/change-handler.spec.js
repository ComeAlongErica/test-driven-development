// These test cases are all unfinished. We will finish them together.
describe("generateCashRegister", function() {

    //test constructor

    it("amountDue is set based on an arguement and cashTendered is 0", () => {
        //Arrange
        let tender = new ChangeHandler({
            amountDue: 20,
        });
        //Assert
        expect(tender.amountDue).toBe(20);
        expect(tender.cashTendered).toBe(0);
    });

    it("insert coin adds to amound and continues adding", () => {
        //Arrange
        let tender = new ChangeHandler({
            amountDue: 20,
        });
        //Act
        tender.insertCoin("quarter");
        tender.insertCoin("quarter");
        tender.insertCoin("dime");
        tender.insertCoin("nickel");
        tender.insertCoin("penny");

        //Assert
        expect(tender.cashTendered).toBe(66);
    });

    it("check if enough payment was given", () => {
        //Arrange
        let tender = new ChangeHandler({
            amountDue: 20,
        });
        //Act
        tender.insertCoin("quarter");
        tender.insertCoin("quarter");
        tender.insertCoin("dime");
        //Assert
        expect(tender.isPaymentSufficient()).toBe(true);
    });

    it("give change", () => {
        //Arrange
        let tender = new ChangeHandler({
            amountDue: 20,
        });
        //Act
        tender.insertCoin("quarter");
        tender.insertCoin("quarter");
        tender.insertCoin("penny");
        tender.insertCoin("penny");


        //Assert
        expect(tender.giveChange()).toEqual(
            {
            quarters: 1,
            dimes: 0,
            nickels: 1,
            pennies: 2
        });
    });

});