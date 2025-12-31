const musicList = [{
    src: './audio/1.mp3',
    correct: 1,
    answer: './audio/ответ-1.mp3',
    options: ['Виктор Королёв - С Новым Годом', 'Чай Вдвоём - Новогодний поцелуй', 'Пара Нормальных - Новогодняя', 'Пара Нормальных - Новый Год'],
},
{
    src: './audio/2.mp3',
    correct: 0,
    answer: './audio/ответ-2.mp3',
    options: ['Дискотека Авария - Новогодняя', 'Олег Газманов - Белый снег', 'Мумий Тролль - С Новым Годом, Крошка!', 'Руки Вверх! - Новый год'],
},
{
    src: './audio/3.mp3',
    correct: 0,
    answer: './audio/ответ-3.mp3',
    options: ['Лариса Долина - Три белых коня', 'Кабы не было зимы', 'Анет Сай - Три белых коня', 'Маленькой ёлочке'],
},
{
    src: './audio/4.mp3',
    correct: 1,
    answer: './audio/ответ-4.mp3',
    options: ['Чай Вдвоём - Новый год', 'Олег Газманов - Белый снег', 'Пара Нормальных - Новогодняя', 'Виктор Королёв - Снег'],
},
{
    src: './audio/5.mp3',
    correct: 1,
    answer: './audio/ответ-5.mp3',
    options: ['Last Christmas', 'ABBA - Happy New Year', 'Pentatonix - God Rest Ye Merry Gentelmen', 'Carol of the Bells'],
},
{
    src: './audio/6.mp3',
    correct: 1,
    answer: './audio/ответ-6.mp3',
    options: ['Frank Sinatra - White Christmas', 'Frank Sinatra - Let is snow!', 'ОООО ПОГОДА НА УЛИЦЕ УЖАААААСНАЯ', 'untitled - Снег идет'],
},
{
    src: './audio/7.mp3',
    correct: 3,
    answer: './audio/ответ-7.mp3',
    options: ['Last Christmas', 'Christmas Tree', 'Merry Christmas', 'God Rest Ye Merry Gentelmen'],
},
{
    src: './audio/8.mp3',
    correct: 2,
    answer: './audio/ответ-8.mp3',
    options: ['Маленькой ёлочке', 'Let is snow!', 'В лесу родилась ёлочка', 'Jingle Bells'],
},
{
    src: './audio/9.mp3',
    correct: 3,
    answer: './audio/ответ-9.mp3',
    options: ['Прошлое рождество', 'Happy New Year', 'White Christmas', 'Last Christmas'],
},
{
    src: './audio/10.mp3',
    correct: 0,
    answer: './audio/ответ-10.mp3',
    options: ['Кабы не было зимы', 'Звенит январская вьюга', 'Маленьклй ёлочке', 'С Новым Годом'],
},
{
    src: './audio/11.mp3',
    correct: 2,
    answer: './audio/ответ-11.mp3',
    options: ['Chirstmas Tree', 'Merry Christmas', 'Carol of the Bells', 'Jingle Bells'],
},
{
    src: './audio/12.mp3',
    correct: 3,
    answer: './audio/ответ-12.mp3',
    options: ['Алла Пугачова - В лесу родилась ёлочка', 'Frank Sinatra - White Christmas', 'Frank Sinatra - Merry Christmas', 'Алла Пугачова - А знаешь, всё еще будет'],
},
{
    src: './audio/13.mp3',
    correct: 1,
    answer: './audio/ответ-13.mp3',
    options: ['Carol of the Bells', 'Silent Night', 'Merry Christmas', 'Chirstmas Tree'],
},
{
    src: './audio/14.mp3',
    correct: 3,
    answer: './audio/ответ-14.mp3',
    options: ['Олег Газманов - Белый снег', 'Руки Вверх! - Новый год', 'Пара Нормальных - Снег идёт', 'Глюкоза - А снег идет'],
},
{
    src: './audio/15.mp3',
    correct: 0,
    answer: './audio/ответ-15.mp3',
    options: ['Звенит январская вьюга', 'Три белых коня', 'Всё ещё будет', 'Вьюга'],
},
{
    src: './audio/16.mp3',
    correct: 1,
    answer: './audio/ответ-16.mp3',
    options: ['Мумий Тролль - Новогодняя', 'Мумий Тролль - С Новым Годом, Крошка!', 'Мумий Тролль - С Новым Годом', 'Мумий Тролль - Зима'],
},
{
    src: './audio/17.mp3',
    correct: 3,
    answer: './audio/ответ-17.mp3',
    options: ['Jingle Bells Rock', 'Happy New Year', 'Last Christmas', 'Jingle Bells'],
},
{
    src: './audio/18.mp3',
    correct: 2,
    answer: './audio/ответ-18.mp3',
    options: ['Пара Нормальных - Новый год', 'Виктор Королёв - С Новым Годом', 'Руки Вверх! - Новый год', 'Сергей Жуков - Новогодняя'],
}]

const rulesScreen = document.getElementById('rulesScreen');
const gameScreen = document.getElementById('gameScreen');
const startGameBtn = document.getElementById('startGame');
const finishScreen = document.getElementById('finishScreen');
const restartGameBtn = document.getElementById('restartGame');

const playBtn = document.getElementById('playBtn');
const answers = document.querySelectorAll('.answer');
const next = document.querySelector('.next')
const result = document.getElementById('result');
const skip = document.querySelector('.skip');


let counter = 0;
let isCorrectChosen = false;
let isAnswerEnded = false;

let audio = new Audio();
let answerAudio = new Audio();

//функция загрузки вопроса
function loadQuestion(index) {
    skip.disabled = true;
  const data = musicList[index];

  // сброс состояний
  isCorrectChosen = false;
  isAnswerEnded = false;
  result.textContent = '';
  next.disabled = true;

  // сброс кнопок
  answers.forEach(btn => {
    btn.classList.remove('correct', 'wrong');
    btn.disabled = false;
  });

  // загружаем аудио
  audio.src = data.src;
  answerAudio.src = data.answer;

  // заполняем варианты
  answers.forEach((btn, i) => {
    btn.textContent = data.options[i] || '';
    btn.style.display = data.options[i] ? 'block' : 'none';
  });
}

answers.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    if (index === musicList[counter].correct) {
        btn.classList.add('correct');
        result.textContent = '✅ Правильно!';
        isCorrectChosen = true;

        audio.pause();
        audio.currentTime = 0;

        answerAudio.currentTime = 0;
        answerAudio.play();

        answers.forEach(b => b.disabled = true);

        skip.disabled = false; // ← ВАЖНО
    } else {
      btn.classList.add('wrong');
      result.textContent = '❌ Неправильно';
    }
  });
});

//отслеживаем, что ответ дослушан
answerAudio.addEventListener('ended', () => {
  isAnswerEnded = true;

  if (isCorrectChosen) {
    next.disabled = false;
  }
});

playBtn.addEventListener('click', () => {
  audio.currentTime = 0;
  audio.play();
});

next.addEventListener('click', () => {
  if (!isCorrectChosen || !isAnswerEnded) return;

  counter++;

  if (counter >= musicList.length) {
    gameScreen.classList.remove('active');
    finishScreen.classList.add('active');
    return;
    }


  loadQuestion(counter);
});

startGameBtn.addEventListener('click', () => {
  rulesScreen.classList.remove('active');
  gameScreen.classList.add('active');

  counter = 0;
  loadQuestion(counter);
});

skip.addEventListener('click', () => {
  answerAudio.pause();
  answerAudio.currentTime = 0;
  isAnswerEnded = true;
  next.disabled = false;

  setTimeout(() => next.click(), 300);
});


