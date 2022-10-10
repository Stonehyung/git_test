class Parents {
    static test: string;
    constructor(
        public stock : string,
        public phone : number,
        private password : number
    ){
        testconstruc : String;
    }

}

Parents.test="부모클래스"
//console.log(Parents)


class son extends Parents{
    constructor( stock : string, phone:number, password:number){
        super(stock,phone,password);
    }
    
}

console.log(son.test)
console.log(son.test)
    