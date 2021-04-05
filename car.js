   class Car {
      constructor(brand, model, yearOfManufacturing, maxSpeed, maxFuelVolume, fuelConsumption) {

         if (typeof brand !== 'string' || brand.length > 50 || brand.length < 1) {
            throw new Error('brand value is not string, or brand length > 50, or < 1 ')
         }
         this.#brand = brand
   
         if (typeof model !== 'string' || model.length > 50 || model.length < 1) {
            throw new Error('model value is not string, or model length > 50, or < 1 ')
         }
         this.#model = model
   
         if (typeof yearOfManufacturing !== 'number' || yearOfManufacturing < 1900 || yearOfManufacturing > 2021) {
            throw new Error('year value is not number, or > 2021, or < 1900')
         }
         this.#yearOfManufacturing = yearOfManufacturing
   
         if (typeof maxSpeed !== 'number' || maxSpeed < 100 || maxSpeed > 300) {
            throw new Error('maxSpeed value is not number, or < 100, or > 300')
         }
         this.#maxSpeed = maxSpeed
   
         if (maxFuelVolume < 5 || maxFuelVolume > 20) {
            throw new Error('maxFuelVolume value is not number, or < 5, or > 20')
         }
         this.#maxFuelVolume = maxFuelVolume
   
         if (typeof fuelConsumption !== 'number') {
            throw new Error('fuelConsumption must be a number')
         }
         this.#fuelConsumption = fuelConsumption
      }
    #brand = null;
    get brand() {
       return this.#brand
    }
    set brand(value) {
       if (typeof value !== 'string' || value.length > 50 || value.length < 1) {
          throw new Error('brand value is not string, or brand length > 50, or < 1 ');
       }
       this.#brand = value
    }
 
    #model = null;
    get model() {
       return this.#model
    }
    set model(value) {
       if (typeof value !== 'string' || value.length > 50 || value.length < 1) {
          throw new Error('model value is not string, or model length > 50, or < 1 ')
       }
       this.#model = value
    }
 
    #yearOfManufacturing = null;
    get yearOfManufacturing() {
       return this.#yearOfManufacturing
    }
    set yearOfManufacturing(value) {
       if (typeof value !== 'number' || value < 1900 || value > new Date().getFullYear()) {
          throw new Error('year value is not number, or > 2021, or < 1900')
       }
       this.#yearOfManufacturing = value
    }
 
    #maxSpeed = null
    get maxSpeed() {
       return this.#maxSpeed
    }
    set maxSpeed(value) {
       if (typeof value !== 'number' || value < 100 || value > 300) {
          throw new Error('maxSpeed value is not number, or < 100, or > 300')
       }
       this.#maxSpeed = value
    }
 
    #maxFuelVolume = null;
    get maxFuelVolume() {
       return this.#maxFuelVolume
    }
    set maxFuelVolume(value) {
       if (value < 5 || value > 20) {
          throw new Error('maxFuelVolume value is not number, or < 5, or > 20')
       }
       this.#maxFuelVolume = value
    }
 
    #fuelConsumption = null
    get fuelConsumption() {
       return this.#fuelConsumption
    }
    set fuelConsumption(value) {
       if (typeof value !== 'number') {
          throw new Error('fuelConsumption must be a number')
       }
       this.#fuelConsumption = value
    }
 
    #isStarted = false
    get isStarted() {
       return this.#isStarted
    }
 
    #currentFuelVolume = 0
    get currentFuelVolume() {
       return this.#currentFuelVolume
    }
 
    #mileage = 0
    get mileage() {
       return this.#mileage
    }
 
    start() {
       if (this.#isStarted) {
          throw new Error('Машина уже заведена')
       }
       this.#isStarted = true
    }
 
    shutDownEngine() {
       if (!this.#isStarted) {
          throw new Error('Машина ещё не заведена')
       }
       this.#isStarted = false
    }
 
    fillUpGasTank(amount) {
       if (typeof amount !== 'number' || amount <= 0) {
          throw new Error('Неверное количество топлива для заправки')
       } else if (this.maxFuelVolume < (this.#currentFuelVolume + amount)) {
          throw new Error('Топливный бак переполнен')
       } else {
          this.#currentFuelVolume += amount
       }
    }
 
    drive(speed, hoursAmount) {
       if (typeof speed !== 'number' || speed <= 0) {
          throw new Error('Неверная скорость')
       }
       if (typeof hoursAmount !== 'number' || hoursAmount <= 0) {
          throw new Error('Неверное количество часов')
       }
       if (speed > this.#maxSpeed) {
          throw new Error('Машина не может ехать так быстро');
       }
       if (!this.#isStarted) {
          throw new Error('Машина должна быть заведена, чтобы ехать');
       }

       const consumedFuel = (speed * hoursAmount) / 100 * this.fuelConsumption;
       if ((this.#currentFuelVolume - consumedFuel) < 0) {
          throw new Error('Недостаточно топлива')
       }

       this.#mileage += (speed * hoursAmount)
       this.#currentFuelVolume -= consumedFuel
    }
 }
 
 module.exports = Car;
