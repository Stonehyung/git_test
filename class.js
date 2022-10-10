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
var Parents = /** @class */ (function () {
    function Parents(stock, phone, password) {
        this.stock = stock;
        this.phone = phone;
        this.password = password;
        testconstruc: String;
    }
    return Parents;
}());
Parents.test = "부모클래스";
//console.log(Parents)
var son = /** @class */ (function (_super) {
    __extends(son, _super);
    function son(stock, phone, password) {
        return _super.call(this, stock, phone, password) || this;
    }
    return son;
}(Parents));
console.log(son.test);
