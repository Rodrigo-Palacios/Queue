// Representación de la serpiente como una cola de posiciones [x, y]
class Snake {
      constructor(initialPositions) {
        this.body = [...initialPositions];// cola de segmentos
      }

      move(direction) {
        // Obtener la posición de la cabeza actual (ultimo elemento de la cola)
        const head = this.body[this.body.length - 1];
        let newHead;
        // Calcular nueva posición de la cabeza según la dirección
        switch(direction) {
          case 'UP':    newHead = [head[0], head[1] - 1]; break;
          case 'DOWN':  newHead = [head[0], head[1] + 1]; break;
          case 'LEFT':  newHead = [head[0] - 1, head[1]]; break;
          case 'RIGHT': newHead = [head[0] + 1, head[1]]; break;
        }
        // 1. Encolar: añadir la nueva cabeza al final de la cola
        this.body.push(newHead);
        // 2. Desencolar: eliminar el segmento del frente (cola de la serpiente)
        this.body.shift();
      }

      eatFood() {
        // Al comer, la serpiente crece encolar nueva cabeza sin desencolar la cola
        const head = this.body[this.body.length - 1];
        this.body.push([head[0], head[1]]);//duplicar la cabeza actual
      }
    }

    let snake = new Snake([[0,0], [1,0], [2,0]]);// posición inicial de 3 segmentos

    function renderSnake() {
      const div = document.getElementById('snake');
      div.innerHTML = `<strong>Segmentos:</strong><br>` + 
        snake.body.map((seg, i) => `#${i+1}: [${seg[0]}, ${seg[1]}]`).join('<br>');
    }

    function move(dir) {
      snake.move(dir);//llama al método move
      renderSnake();//"Lo renderiza"
    }
    function eatFood() {
      snake.eatFood();//llama al método comer comida
      renderSnake();//"Lo renderiza"
    }

    renderSnake();