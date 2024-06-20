/*
class BookSale {
  amount = 1_000;
  currency = "usd";
  isStudent = false;


  applyStudentDiscount(){
    this.isStudent = true;
    this.amount = 800;
    return this;
  }
  setCurrency(currency){
    this.currency = currency;
    return this;
  }
  applyPercentageDiscount(percent){
    this.amount = this.amount - this.amount * percent / 100;
    return this;
  }
}

const bookSale = new BookSale;
bookSale.applyStudentDiscount().setCurrency("SR").applyPercentageDiscount(5);

class User {
  #votingAge = 18;
  get votingAge(){
    return this.#votingAge;
  }
  set votingAge(age){
    if(age >= 18){
      this.#votingAge = age;
    }
  }
}
const user = new User();
console.log(user.votingAge); // 18
user.votingAge = 10;
console.log(user.votingAge); // still 18 because of the condition in `set votingAge`
user.votingAge = 20;
console.log(user.votingAge); // 20


class User2 {
  constructor(age){
    this.age = age;
    this.#logAge();
  }
  #logAge() {
    console.log(this.age)
  }
}
const user2 = new User2(40);

setTimeout(() => {
  console.log("heloo my hero")
}, 5_000);

const del = name => {
  setTimeout(() => {
    console.log(`Welcome ${name}`)
  }, 5_000);
}
del("Ahmed")

console.log("A");
setTimeout(() => {
  console.log("b")
}, 5_000);
setTimeout(() => {
  console.log("Q")
}, 3_000);
console.log("C")

console.log("A");
wait(1_000).then(() => {
    console.log("B");
});
console.log("C");

const init = () => {
  console.log("Yes");
  wait (1_000).then(() =>{
    console.log("Yes cd")
  })
}
  
 const wait = maillsecondes => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, maillsecondes);
  });
 }
 const result = wait(3_000);
 console.log(result);
 result.then(() => {
  console.log(result);
 });
 console.log(result)
 
const waitp = wait(3_000);
console.log(waitp);
waitp.then(() => {
  console.log(" waited 3 second");
  console.log(waitp)
});
console.log(waitp)

const temperatures = [10, 5, 3];
sumTemper(temperatures).then(value => {
  console.log(value)
});

const waitOneSecond = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2_000);
  });
}
waitOneSecond().then(() => {
  console.log("إنتظار ثانيتتين")
});


const wait = millse => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, millse);
  });
}
wait(4_000).then(() => {
  console.log("تم الإنتظار");
});

const wait = mill => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const sec = mill / 1_000;
      resolve(sec);
    }, mill)
  });
}
wait(2_000).then(data => {
  console.log(data);
})
wait(3_000).then(sec => {
  console.log(sec);
})
*/
const alll = () => {
  return new Promise((resolev, reject) => {
    reject("حطا")
  });
}
alll().then(() => {

}).catch(data => {
  console.error(data)
});


const fake = endpoint => {
  return new Promise((resolev, reject) => {
    if (endpoint !== "flight"){
      reject("end not support")
    }
    setTimeout(() => {
      resolev({
        de: false,
        tre: true
      });
    }, 2_000);
  });
}
fake("flight").then((data) => {
  console.log(data);
}).catch(error => {
  console.error(error);
});

fake("user").then((data) => {
  console.log(data);
}).catch(error => {
  console.error(error);
});


const string = '{"firstName":"Sam","lastName":"Green","age": 32}';
const ahmed = JSON.parse(string);
console.log(ahmed.firstName)


const person = {
  firstName: "Sam",
  lastName: "Green",
  age: 32
};
const ssss = JSON.stringify(person);
console.log(ssss)