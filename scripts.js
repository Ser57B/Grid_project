function Car(year, mileage, make) {
   this.year = year;
   this.mileage = mileage;
   this.make = make;
   this.driver = function () {
      if (this.make === 'BMW') {
         console.log(`GO on ${this.make}`);
         this.make = 'Opel';
      }
   };
}

Car.prototype.driver1 = function () {
   console.log('First Test');
};
Car.prototype.full = '100%';
Car.prototype.color = 'red';

let opel = new Car(2022, 234987, "BMW");
console.log(opel.mileage);
console.log(opel.full);
opel.driver();
opel.driver1();
console.log(opel.make);
console.log(opel.hasOwnProperty('driver1'));
console.log(opel instanceof Object);

function NewModelCar(speed, width, year) {
   Car.call(this, year);
   this.speed = speed;
   this.width = width;
}

NewModelCar.prototype = new Car();
NewModelCar.prototype.constructor = NewModelCar;
let rally = new NewModelCar(360, "2m", 2023);

console.log(rally instanceof NewModelCar);
console.log(rally.year);
console.log(opel.year);
console.log(rally.hasOwnProperty('width'));

let vop = void (3 + 1) ? (3 + 1) : 'not';
console.log(vop);

let obj = {
   34: 'A',
   54: 'B',
   '66': 'C',
   sss: 'D'
};

delete obj['34'];
console.log(obj['34']);
console.log('34' in obj);

class Dog {
   constructor(name, weight, hendler) {
      this.name = name;
      this.weight = weight;
      this.hendler = hendler;
   }
   getSpeed(v) {

      console.log('Speed ' + v + 'km');
   }
}

let barry = new Dog('Barry', 20, 'Frank');
console.log(barry.hendler);

class ShowDog extends Dog {
   constructor(name, weight, hendler, sit) {
      super(name, weight, hendler);
      this.sit = sit;
   }
   getStop() {
      console.log('Stop speed');
   }
}

let dogShow = new ShowDog('Lucky', 25, 'Serge', 'On sit');
console.log(dogShow.name);
console.log(barry.hendler);
console.log(dogShow.hendler);
console.log(barry instanceof Dog);
dogShow.getSpeed('150');
barry.getSpeed('30');

let i = 1, j = 4, sum = 0;
console.log(j);
for (; i < 7; i++, j++) {
   console.log(i);
   console.log(j);
   console.log(i + j);
   console.log(sum += (i + j));
}

let fr = {};
for (let letter of "mississippi") {
   console.log(letter);
   if (fr[letter]) {
      console.log(fr[letter]);
      fr[letter] = fr[letter] + 1;
      console.log(fr[letter]);
   } else {
      fr[letter] = 1;
   }
}
console.log(fr);

let l = {};
l.m = 5;
l.p = 9;
l['m'] += 1;

console.log(l);

let arr = [12, 45, 27, 5, 667, 100, 32, 55, 78, 89];
let sumn = 0;
outer: for (let key of arr) {
   if (key === arr[6]) {
      console.log(`this ${key} `);
      break outer;
   }
   console.log(key);
   sumn += key;
   if (sumn === 856)
      console.log(sumn);
}

let s = -6;
outer: do {
   console.log('all ok');
   s--;
   if (s > 2) {
      console.log(s);
      console.log('mmm');
      continue outer;
   }
} while (s > 0);
try {
   if (s < 0) {
      throw new Error('Страница не существует. Ошибка 404');
   }
}
catch (e) {
   console.log(String(e));
   // console.log('Ошибка ввода');
}