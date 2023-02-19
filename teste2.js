// Definindo uma classe para representar um retângulo
class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  
    // Método para calcular a área do retângulo
    getArea() {
      return this.height * this.width;
    }
  
    // Método para calcular o perímetro do retângulo
    getPerimeter() {
      return 2 * (this.height + this.width);
    }
  }
  
  // Criando um objeto retângulo com altura 5 e largura 10
  const rectangle = new Rectangle(50, 70);
  
  // Imprimindo a área e o perímetro do retângulo
  console.log(rectangle.getArea()); // deve retornar 50
  console.log(rectangle.getPerimeter()); // deve retornar 30
  




  //Este código define uma classe Rectangle que representa um retângulo com altura e largura especificadas.
  //A classe tem dois métodos, getArea e getPerimeter, que calculam a área e o perímetro do retângulo, respectivamente.
  //Em seguida, um objeto retângulo é criado com altura 5 e largura 10, e os métodos getArea e getPerimeter são chamados para imprimir a área e o perímetro do retângulo.