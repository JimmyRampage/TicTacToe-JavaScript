# Tic-Tac-Toe Modular

Un proyecto web del clásico juego Tic-Tac-Toe, con la particularidad de ser modular, permitiendo configurar el tamaño del tablero y los símbolos de los jugadores.

## 📝 Descripción

Este proyecto es una implementación digital y personalizable del tradicional juego "Tres en Raya". A diferencia de la versión clásica, esta aplicación permite a los usuarios configurar la partida antes de comenzar: pueden elegir el tamaño del tablero (3x3, 4x4, etc.) y definir los símbolos que representarán a cada jugador.

Está diseñado para que dos jugadores puedan competir en el mismo dispositivo. El juego detecta automáticamente las condiciones de victoria o empate y muestra el turno del jugador actual.

## ✨ Características

* **Panel de Configuración:** Permite ajustar el tamaño del tablero y los símbolos de los jugadores antes de iniciar.
* **Tablero Dinámico:** El tablero de juego se genera dinámicamente según el tamaño seleccionado.
* **Indicador de Turno:** Muestra claramente a qué jugador le corresponde jugar.
* **Detección de Ganador:** El sistema identifica si un jugador ha conseguido una línea (horizontal, vertical o diagonal) según el tamaño del tablero.
* **Detección de Empate:** Si el tablero se llena sin un ganador, el juego se declara en empate.
* **Botón de Inicio/Reinicio:** El botón "Play!" inicia la partida con la configuración seleccionada y puede usarse para reiniciar el juego.
* **Diseño Limpio:** Una interfaz clara y fácil de usar.

## 🛠️ Tecnologías Utilizadas

* **HTML5:** Para la estructura semántica y el contenido de la aplicación, incluyendo el panel de control.
* **CSS3:** Para el diseño, la maquetación y la apariencia visual del tablero y los componentes.
* **JavaScript (ES6 Modules):** Para toda la lógica del juego, la generación dinámica del tablero, la interactividad del usuario y la manipulación del DOM.

## 📁 Estructura de Carpetas

El proyecto sigue una estructura organizada para separar el contenido, los estilos y la lógica.

```plaintext
tictactoe-modular/
├── assets/
│   ├── css/
│   │   └── style.css       # Hoja de estilos para la apariencia visual
│   ├── js/
│   │   ├── script.js       # Script principal que maneja la UI y los eventos
│   │   └── TicTacToe.js    # Clase que encapsula toda la lógica del juego
│   └── img/
│       └── tictactoe.png   # Favicon de la aplicación
├── index.html              # Archivo principal HTML con la estructura
└── README.md               # Documentación del proyecto
```

## 🎮 Cómo Jugar

1. En el panel de control, selecciona el **tamaño del tablero** en el menú desplegable "Size".
2. (Opcional) Cambia los símbolos por defecto para el **Jugador 1** y **Jugador 2**.
3. Haz clic en el botón **"Play!"** para generar el tablero e iniciar la partida.
4. El juego comienza con el turno del **Jugador 1**. Haz clic en una celda vacía para colocar tu marca.
5. Los jugadores se turnan hasta que uno de ellos consiga alinear sus marcas en una fila, columna o diagonal.
6. Si todas las celdas se llenan y no hay un ganador, el juego termina en **empate**.
7. Usa el botón **"Play!"** de nuevo para reiniciar la partida con la misma configuración o una nueva.

## 📄 Documentación del Proyecto

A continuación se detalla el propósito de cada archivo principal.

### `index.html`

Este archivo contiene la estructura de la página. Se divide en dos secciones principales:

* `#control-panel`: Contiene todos los elementos de configuración (selector de tamaño, inputs para símbolos de jugador) y el botón de inicio. También muestra el título y los mensajes de estado.
* `#board-game`: Es el contenedor vacío donde JavaScript generará dinámicamente el tablero de juego.

### `assets/css/style.css`

Aquí se encuentra todo el código CSS para dar estilo al juego. Se encarga de:

* Diseñar el panel de control y sus elementos.
* Definir el layout del tablero usando CSS Grid o Flexbox.
* Estilizar las celdas, los símbolos 'X' y 'O' (o los personalizados).
* Dar formato a los mensajes de estado y al botón de inicio.
* Añadir efectos visuales para mejorar la experiencia de usuario.

### `assets/js/script.js`

Este archivo actúa como el **controlador principal** de la aplicación. Se encarga de interactuar con el DOM y de orquestar la lógica del juego utilizando una instancia de la clase `TicTacToe`.

* **Selectores del DOM:** Obtiene las referencias a los elementos HTML necesarios (tablero, botón, panel de mensajes).
* **Instancia de la Clase:** Crea un nuevo objeto `TicTacToe` para gestionar el estado y la lógica.
* **Manejo de Eventos:**
  * Escucha el clic en el botón "Play!" para iniciar o reiniciar la partida, leyendo la configuración de la UI y llamando a los métodos correspondientes de la clase (`deleteBoard`, `createBoard`, etc.).
  * Escucha los clics sobre el tablero para gestionar el flujo del juego (comprobar ganador, empate, actualizar turno).
* **Actualización de la UI:** Modifica el contenido de los elementos HTML para informar al usuario sobre el estado del juego (ej. "Turno de: X", "Gana el jugador O").

### `assets/js/TicTacToe.js`

Esta clase es el **corazón del juego**. Encapsula todo el estado interno y la lógica necesaria para que el juego funcione, independientemente de la interfaz de usuario.

* **Propiedades:** Almacena el estado del juego, como el contador de jugadas (`playCounter`), el tamaño del tablero (`boardSize`) y los símbolos de los jugadores (`playerOne`, `playerTwo`).
* **`createBoard()`:** Genera dinámicamente las celdas del tablero, les asigna IDs y añade los listeners para las jugadas.
* **`playerTurn()`:** Determina a qué jugador le corresponde el turno actual.
* **`checkWinner()`:** Contiene el algoritmo principal para verificar si hay un ganador en las filas, columnas o diagonales.
* **`fullBoard()`:** Comprueba si se ha alcanzado un empate.
* **`choicePlay()` y `closingGame()`:** Gestionan la lógica de una jugada individual y el final de la partida.
* **Métodos de actualización:** (`boardSymbolUpdate`, `boardSizeUpdate`) Leen los valores de la configuración para actualizar el estado interno del juego.
