const musicList = [{
    src: './audio/1.mp3',
    correct: 1,
    answer: './audio/ответ-1.mp3',
    options: ['Виктор Королёв - С Новым Годом', 'Чай Вдвоём - Новогодний поцелуй', 'Пара Нормальных - Новогодняя', 'Пара Нормальных - Новый Год'],
},
{
    src: './audio/2.mp3',
    correct: 1,
    answer: './audio/ответ-2.mp3',
    options: [],
},
{
    src: './audio/3.mp3',
    correct: 1,
    answer: './audio/ответ-3.mp3',
    options: [],
},
{
    src: './audio/4.mp3',
    correct: 1,
    answer: './audio/ответ-4.mp3',
    options: [],
},
{
    src: './audio/5.mp3',
    correct: 1,
    answer: './audio/ответ-5.mp3',
    options: [],
},
{
    src: './audio/6.mp3',
    correct: 1,
    answer: './audio/ответ-6.mp3',
    options: [],
},
{
    src: './audio/7.mp3',
    correct: 1,
    answer: './audio/ответ-8.mp3',
    options: [],
}]

const playBtn = document.getElementById('playBtn');
const answers = document.querySelectorAll('.answer');
const result = document.getElementById('result');

function getData(count) {
    return {
        audio: new Audio(musicList[count].src), // добавь файл мелодии
        answer: new Audio(musicList[count].answer),
        correct: musicList[count].correct,
        options: musicList[count].options
    }
}


const currentAudio = getData(0);

// Заполняем кнопки
answers.forEach((btn, index) => {

  btn.textContent = currentAudio.options[index];

  btn.addEventListener('click', () => {
    if (index === currentAudio.correct) {
      btn.classList.add('correct');
      result.textContent = '✅ Правильно!';
      currentAudio.audio.pause();
      currentAudio.answer.currentTime = 0;
      currentAudio.answer.play();
    } else {
      btn.classList.add('wrong');
      result.textContent = '❌ Неправильно';
    }
    currentAudio.audio.pause();
  });
});

// Воспроизведение
playBtn.addEventListener('click', () => {
    console.log('click');
    
  currentAudio.audio.currentTime = 0;
  currentAudio.audio.play();
});
