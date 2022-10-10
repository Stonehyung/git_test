var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person3_4 = /** @class */ (function () {
    function Person3_4(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Person3_4.prototype.sellStock = function (symbol, numberOfShares) {
        console.log("Selling ".concat(numberOfShares, " of ").concat(symbol));
    };
    Person3_4.person = 4;
    return Person3_4;
}());
var Employee3_4 = /** @class */ (function (_super) {
    __extends(Employee3_4, _super);
    function Employee3_4(firstName, lastName, //부모클래스 파마미터에, department 추가
    age, department) {
        var _this = _super.call(this, firstName, lastName, age) || this;
        _this.department = department;
        return _this;
    }
    Employee3_4.prototype.sellStock = function (symbol, shares) {
        _super.prototype.sellStock.call(this, symbol, shares); // 부모에서 sellStock() 호출
        this.reportToCompliance(symbol, shares); //자식 클래스에서 reportToCompliance 호출
    };
    Employee3_4.prototype.reportToCompliance = function (symbol, shares) {
        console.log("".concat(this.lastName, " from ").concat(this.department, " sold ").concat(shares, " shares of ").concat(symbol));
        console.log(Person3_4.person);
    };
    return Employee3_4;
}(Person3_4));
var instance = new Employee3_4('Joe', 'Smith', 29, 'Accounting');
// 자식클래스를 기반으로 인스턴스 생성 firstname joe lastname smith age 29 department accounting
instance.sellStock('IBM', 100); // Employee 에서 sellStock 호출.
//자식 클래스의 sellstoc임으로 
//1. super.sellStoc 호출  ->"Selling IBM of 100" 출력
// 2. 현재 클래스의 report 호출 =>  smith from accounting 100 shares of  IBM
