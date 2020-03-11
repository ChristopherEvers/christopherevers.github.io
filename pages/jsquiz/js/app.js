/* eslint-disable prefer-destructuring */
let points = 0;
let question = 0;
const content = document.getElementById('content');
const catergories = {
  musicCategory: {
    questions: [
      '<h1>Who sung Where Is the Love?</h1>',
      '<h1>Who holds the record for longest billboard number one?</h1>',
      '<h1>Which type of wood did the Beatles sing about?</h1>',
      '<h1>Who rose to fame with the hit song I Kissed A Girl?</h1>',
    ],
    choices: [
      [
        '<h3>Ed Sheeran</h3>',
        '<h3>Eminem</h3>',
        '<h3>Katy Perry</h3>',
        '<h3>Black Eyed Peas</h3>',
      ],
      [
        '<h3>Drake</h3>',
        '<h3>Lil Nas</h3>',
        '<h3>Lizzo</h3>',
        '<h3>Rihanna</h3>',
      ],
      [
        '<h3>Norwegian</h3>',
        '<h3>Mopane</h3>',
        '<h3>Desert Ironwood</h3>',
        '<h3>Purpleheart</h3>',
      ],
      [
        '<h3>Taylor Swift</h3>',
        '<h3>Mariah Carey</h3>',
        '<h3>Katy Perry</h3>',
        '<h3>Elton John</h3>',
      ],
    ],
    correctChoices: ['Black Eyed Peas', 'Lil Nas', 'Norwegian', 'Katy Perry'],
  },
  sportsCategory: {
    questions: [
      '<h1>How many minutes is a rugby match?</h1>',
      '<h1>How many NBA Teams are there</h1>',
      '<h1>How matches did Mohammed Ali lose in his career?</h1>',
      '<h1>Who was drafted #1 in the 2019 NBA Draft?</h1>',
    ],
    choices: [
      [
        '<h3>80 Minutes</h3>',
        '<h3>100 Minutes</h3>',
        '<h3>40 Minutes</h3>',
        '<h3>60 Minutes</h3>',
      ],
      ['<h3>30</h3>', '<h3>20</h3>', '<h3>10</h3>', '<h3>25</h3>'],
      ['<h3>8</h3>', '<h3>5</h3>', '<h3>1</h3>', '<h3>10</h3>'],
      [
        '<h3>Ja Morant</h3>',
        '<h3>RJ Barret</h3>',
        '<h3>Tyler Herro</h3>',
        '<h3>Zion Williamson</h3>',
      ],
    ],
    correctChoices: ['80 Minutes', '30', '1', 'Zion Williamson'],
  },
  natureCategory: {
    questions: [
      '<h1>What single country are lemurs native to?</h1>',
      "<h1>What food comprises 99% of a panda's diet?</h1>",
      '<h1>Where is the second longest barrier reef?</h1>',
      '<h1>What Hawaiian volcano first erupted in the 1970s and has done so regularly since 1983?</h1>',
    ],
    choices: [
      [
        '<h3>Argentina</h3>',
        '<h3>Iceland</h3>',
        '<h3>Madagascar</h3>',
        '<h3>Mongolia</h3>',
      ],
      [
        '<h3>Bamboo</h3>',
        '<h3>Chicken</h3>',
        '<h3>Corn</h3>',
        '<h3>Wheat</h3>',
      ],
      [
        '<h3>Belize</h3>',
        '<h3>Philippines</h3>',
        '<h3>Australia</h3>',
        '<h3>Caribbean Basin</h3>',
      ],
      [
        '<h3>Mauna Loa</h3>',
        '<h3>Kilauea</h3>',
        '<h3>Puʻu ʻŌʻō</h3>',
        '<h3>Kohala</h3>',
      ],
    ],
    correctChoices: ['Madagascar', 'Bamboo', 'Phiippines', 'Kilauea'],
  },
  artCategory: {
    questions: [
      '<h1>Who painted the Mona Lisa?</h1>',
      '<h1>Which Art Nouveau artist designed many posters for the Moulin Rouge in Paris?</h1>',
      '<h1>Which Bauhaus architect once famously said: "A house is a machine for living in"?</h1>',
      '<h1>Who painted the Sistine Chapel?</h1>',
    ],
    choices: [
      [
        '<h3>Sandro Botticelli</h3>',
        '<h3>Leonardo Da Vinci</h3>',
        '<h3>Edvard Munch</h3>',
        '<h3>Gian Lorenzo Bernini</h3>',
      ],
      [
        '<h3>Henri de Toulouse-Lautrec</h3>',
        '<h3>Edgar Degas</h3>',
        '<h3>Vincent van Gogh</h3>',
        '<h3>Paul Gauguin</h3>',
      ],
      [
        '<h3>Charlotte Perriand</h3>',
        '<h3>Walter Gropius</h3>',
        '<h3>Frank Lloyd Wright</h3>',
        '<h3>Le Corbusier</h3>',
      ],
      [
        '<h3>Vincent van Gogh</h3>',
        '<h3>Pablo Picasso</h3>',
        '<h3>Michael Angelo</h3>',
        '<h3>Salvador Dali</h3>',
      ],
    ],
    correctChoices: [
      'Leonardo Da Vinci',
      'Henri de Toulouse-Lautrec',
      'Le Corbusier',
      'Michael Angelo',
    ],
  },
};

function finishScreen() {
  if (points === 4) {
    content.innerHTML = `Congratulations! You got ${points *
      25}% correct! 🥳 <br/> <div id="replay"><a href="index.html">Replay</a></div>`;
  } else if (points > 1) {
    content.innerHTML = `Congrats you got ${points *
      25}%! Some studying can get you to 100% though! 😃 <br/> <div id="replay"><a href="index.html">Replay</a></div>`;
  } else {
    content.innerHTML =
      'You could use some studying 😞 <br/> <div id="replay"><a href="index.html">Replay</a></div>';
  }
}

function nextQuestion(category) {
  if (question < 4) {
    content.innerHTML =
      catergories[`${category.textContent.toLowerCase()}Category`].questions[
        question
      ];
    for (let j = 0; j < 4; j += 1) {
      content.innerHTML +=
        catergories[`${category.textContent.toLowerCase()}Category`].choices[
          question
        ][j];
    }
    // eslint-disable-next-line no-use-before-define
    setAnswerClickers(category);
  } else {
    finishScreen();
  }
}

function setAnswerClickers(category) {
  const answers = document.getElementsByTagName('h3');

  // eslint-disable-next-line no-restricted-syntax
  for (const element of answers) {
    // eslint-disable-next-line no-loop-func
    element.addEventListener('click', function() {
      let i = 0;
      for (i; i <= 4; i += 1) {
        if (
          element.innerHTML ===
          catergories[`${category.textContent.toLowerCase()}Category`]
            .correctChoices[i]
        ) {
          points += 1;
        }
      }
      question += 1;
      nextQuestion(category);
    });
  }
}

function startContent() {
  const listItems = document.getElementsByTagName('li');
  // eslint-disable-next-line no-restricted-syntax
  for (const element of listItems) {
    element.addEventListener('click', function() {
      content.innerHTML =
        catergories[
          `${element.textContent.toLowerCase()}Category`
        ].questions[0];
      content.innerHTML += `${
        catergories[`${element.textContent.toLowerCase()}Category`]
          .choices[0][0]
      } ${
        catergories[`${element.textContent.toLowerCase()}Category`]
          .choices[0][1]
      } ${
        catergories[`${element.textContent.toLowerCase()}Category`]
          .choices[0][2]
      } ${
        catergories[`${element.textContent.toLowerCase()}Category`]
          .choices[0][3]
      }`;
      setAnswerClickers(element);
      const elem = document.querySelector('#category');
      elem.parentNode.removeChild(elem);
    });
  }
}

startContent();
