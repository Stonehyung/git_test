class Person3_4{
    static person : number =4;
    constructor(public firstName: string,
      public lastName: string,
      private age: number){   }
    
      sellStock(symbol: string, numberOfShares: number){ // 부모의 sellStock()
        console.log(`Selling ${numberOfShares} of ${symbol}`);
      }
  }
<<<<<<< HEAD
  const git_revert=1234;

=======
  
console.log(Person3_4.person)
>>>>>>> parent of 74e96fc (git revert 테스트)
  class Employee3_4 extends Person3_4{ //자식 클래스 
    constructor(firstName: string, lastName: string, //부모클래스 파마미터에, department 추가
      age: number, public department: string){
      super(firstName, lastName, age); // 부모 생성자 호출
    }
  
    sellStock(symbol: string, shares: number){ // 자식의 sellStock()
      super.sellStock(symbol, shares); // 부모에서 sellStock() 호출
      this.reportToCompliance(symbol, shares); //자식 클래스에서 reportToCompliance 호출
    }
  
    private reportToCompliance(symbol: string, shares: number){ // reportToCompliance()는 private 메서드
      console.log(`${this.lastName} from ${this.department} sold ${shares} shares of ${symbol}`);
      console.log(Person3_4.person);
    }
    //내부에서만 실행 가능하고 symbol과 shares라는 매개변수를 이용
    //이 클래스 내부의 lastname, department, 매개변수인 shares, symbol을 출력한다.
  }
  
  const instance = new Employee3_4('Joe', 'Smith', 29, 'Accounting');
  // 자식클래스를 기반으로 인스턴스 생성 firstname joe lastname smith age 29 department accounting
  instance.sellStock('IBM', 100); // Employee 에서 sellStock 호출.
 //자식 클래스의 sellstoc임으로 
 //1. super.sellStoc 호출  ->"Selling IBM of 100" 출력
// 2. 현재 클래스의 report 호출 =>  smith from accounting 100 shares of  IBM





