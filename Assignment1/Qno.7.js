const car = {
    brand: 'TATA',
    model: 'NEXON',
    getDetails: function() {
      return `This car is a ${this.brand} ${this.model}`;
    }
  };
  
  console.log(car.getDetails());