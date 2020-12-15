// ===== Метод setTimeout(logger, intervsl) - регистарация отложеной ф-ии

// const loader = require("sass-loader");

// setTimeout(() => {
//     console.log('Визов callback-функции через 3 секунды');
// }, 3000);

//  const fn1 = () => {
//      console.log('Визов callback-функции через 0 секунды');
// };

// function fn2 () {
//     console.log('Визов callback-функции через 3 секунды');
// };

// Отложенные функции вызываються после объчных
// console.log('До вызова setTimeout');
// setTimeout(fn1, 0)
// setTimeout(fn2, 3000)
// console.log('После вызова setTimeout');

// ===== Очистка таймера с clearTimeout()

// const logger = timer => {
//     console.log(`Лог через ${timer}ms, потому что не отложыли таймаут`);
// }
 
// const timerId = setTimeout(logger, 2000, 2000)
// console.log(timerId);

// // clearTimeout(timerId)

// // Рандомное действие пользователя
// const shouldCancelTimer = Math.random() > 0.3;
// console.log(shouldCancelTimer);

// if (shouldCancelTimer) { 
//     clearTimeout(timerId)
// }

//  ======= Метод setInterval(logger, intervsl); - регистрация ф-ии которая вывывается через интервал
// == clearInterval(intervalId) - остановать интервал

// const logger = time => console.log(`Лог каждие ${time}ms  - ${Date.now()}`);    

// setInterval(logger, 2000, 2000);

// ======= Напоминание пользователю подписптся на расслку
// let subscriptionCounter = 0;
// let hasSubscribed = false;

// const intervalId = setInterval(() => {

//     if (subscriptionCounter === 3 || hasSubscribed) {
//         console.log('Останавливаем интервал');
//         clearInterval(intervalId)
//         return
//     }
     
//     console.log('Подпишись на рассилку!');
//     subscriptionCounter += 1;
// }, 1000)

// Вызова ф-ии - асинхронный код - вызивается после обычного (синхронного)

// =========== Пример notification - сообщения на странице

// Работа с Date
// console.log(new Date());
// console.log(Date.now());