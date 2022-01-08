// import Circle from "./Circle";

// export default class Friend {
//     x: number;
//     y: number;
//     radius: number;
//     color: string;
//     speedX: number;
//     speedY: number;
//     circle: Circle;
//     context: any;

//     constructor(
//         x: number,
//         y: number,
//         radius: number,
//         color: string,
//         speedX: number,
//         speedY: number,
//         context: any
//     ) {
//         this.x = x;
//         this.y = y;
//         this.radius = radius;
//         this.color = color;
//         this.speedX = speedX;
//         this.speedY = speedY;
//         this.context = context;

//         this.circle = new Circle(
//             this.x,
//             this.y,
//             this.radius,
//             this.color,
//             this.context
//         );
//     }

//     draw(x: number, y: number) {
//         this.circle.draw(x, y, this.radius, this.color);
//     }

//     checkEnemyOutOfScreen(screenWidth: any, screenHeight: any) {
//         if (this.x > screenWidth || this.x < 0) {
//             this.speedX *= -1;
//         }
//         if (this.y > screenHeight || this.y < 0) {
//             this.speedY *= -1;
//         }
//     }
// }
