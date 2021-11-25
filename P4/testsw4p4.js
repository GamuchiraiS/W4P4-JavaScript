// JavaScript source code
const chai = window.chai;
const expect = chai.expect;

//Ship Charge Test 1
describe("Shipping charge", function () {
    it("should return R155.50", function () {
        shippingCharge(50);
        expect(155.50, chai.shipCharge);
    });
});

//Ship Charge Test 2
describe("Shipping charge", function () {
    it("should return R25.70", function () {
        shippingCharge(6);
        expect(25.70, chai.shipCharge);
    });
});

//Ship Charge Test 3
describe("Shipping charge", function () {
    it("should return R81.75", function () {
        shippingCharge(25);
        expect(81.75, chai.shipCharge);
    });
});