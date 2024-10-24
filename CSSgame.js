const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function menu() {
  state = {}
  window.location = "gamemenu2.html";
}

function next() {
  state = {}
  window.location = "gamemenu3.html";
}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('test')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return menu()
  }
  if (nextTextNodeId == 99) {
    return next()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [{
    id: 1,
    text: 'While you are walking in the CSS path, there is a stranger. What would you do?',
    options: [{
        text: 'Talk to the stranger',
        nextText: 1.1
      },
      {
        text: 'Ignore the stranger',
        nextText: 2.1
      }
    ]
  },
  {
    id: 1.1,
    text: 'The stranger is asking for a food. What would you do?',
    options: [{
      text: 'Give stranger a food',
      nextText: 1.3
    }]
  },
  {
    id: 1.3,
    text: 'The stranger became magical and want to give you something but the stranger said "You must answer the question correctly to prove your worth" | Question: What is the default value of the position property?',
    options: [{
        text: 'relative',
        nextText: 1.4
      },
      {
        text: 'absolute',
        nextText: 1.4
      },
      {
        text: 'static',
        nextText: 1.5
      },
      {
        text: 'fixed',
        nextText: 1.4
      }
    ]
  },
  {
    id: 1.4,
    text: 'Incorrect!',
    options: [{
      text: 'Try again',
      nextText: 1.3
    }]
  },
  {
    id: 1.5,
    text: 'You proved your worthy now I will give you an Ardent Censer!',
    options: [{
      text: 'Take it and Continue Walking',
      nextText: 2
    }]
  },
  {
    id: 2.1,
    text: 'There is a wild Pix in you path. What would you do?',
    options: [{
      text: 'Tame it',
      nextText: 2.3
    }]
  },
  {
    id: 2.3,
    text: 'In order to tame the Pix you need an item called Ardent Censer.',
    options: [{
      text: 'You dont have an Ardent Censer, Continue Walking',
      nextText: 3.1
    }]
  },
  {
    id: 2,
    text: 'There is a wild Pix in you path. What would you do?',
    options: [{
      text: 'Tame it',
      nextText: 2.6
    }, ]
  },
  {
    id: 2.6,
    text: 'In order to tame the Pix you need an item called Ardent Censer.',
    options: [{
      text: 'Use the Ardent Censer',
      nextText: 2.4
    }]
  },
  {
    id: 2.4,
    text: 'Congratulations! You have tamed the Pix!',
    options: [{
      text: 'Continue Walking',
      nextText: 3
    }]
  },
  {
    id: 3.1,
    text: 'While walking you fell into a hole. You must answer the question correctly to climb in the hole | Question: How do you insert a comment in a CSS file?',
    options: [{
        text: '// this is a comment //',
        nextText: 4.02
      },
      {
        text: ' --this is a comment--',
        nextText: 4.02
      },
      {
        text: '*/ this is a comment',
        nextText: 4.02
      },
      {
        text: '/* this is a comment */',
        nextText: 4.1
      }
    ]
  },
  {
    id: 4.02,
    text: 'Incorrect!',
    options: [{
      text: 'Try again',
      nextText: 3.1
    }]
  },
  {
    id: 4.1,
    text: 'You will entering the forest and then a man said that only a pet Pix can see the path in order to complete the CSS Path',
    options: [{
      text: 'Continue Walking without Pix',
      nextText: 5.1
    }]
  },
  {
    id: 5.1,
    text: 'You got lost in the forest and died!',
    options: [{
      text: 'Restart',
      nextText: 1
    }]
  },

  {
    id: 3,
    text: 'While walking you fell into a hole. You must answer the question correctly to climb in the hole | Question: How do you insert a comment in a CSS file?',
    options: [{
        text: '// this is a comment //',
        nextText: 4.01
      },
      {
        text: ' --this is a comment--',
        nextText: 4.01
      },
      {
        text: '*/ this is a comment',
        nextText: 4.01
      },
      {
        text: '/* this is a comment */',
        nextText: 4
      }
    ]
  },
  {
    id: 4.01,
    text: 'Incorrect!',
    options: [{
      text: 'Try again',
      nextText: 3
    }]
  },
  {
    id: 4,
    text: 'You will entering the forest and then a man said that only a pet Pix can see the path in order to complete the CSS Path',
    options: [{
      text: 'Use Pix to guide your path',
      nextText: 5
    }]
  },

  {
    id: 5,
    text: 'You reach the end of the forest but you will need to answer the 2 questions correctly to complete the CSS Path | Question 1: How do you select elements with the class name "test"?',
    options: [{
        text: '#test',
        nextText: 6.01
      },
      {
        text: '.test',
        nextText: 6
      },
      {
        text: '*test',
        nextText: 6.01
      },
      {
        text: '/test',
        nextText: 6.01
      },
    ]
  },
  {
    id: 6.01,
    text: 'Incorrect!',
    options: [{
      text: 'Try again',
      nextText: 5
    }]
  },
  {
    id: 6,
    text: 'Question 2: Which property is used to change the right margin of an element?',
    options: [{
        text: 'indent-right',
        nextText: 7.01
      },
      {
        text: 'padding-right',
        nextText: 7.01
      },
      {
        text: 'margin-right',
        nextText: 8
      },
      {
        text: 'align-right',
        nextText: 7.01
      }
    ]
  },
  {
    id: 7.01,
    text: 'Incorrect!',
    options: [{
      text: 'Try again',
      nextText: 6
    }]
  },
  {
    id: 8,
    text: 'Congratulations you have completed the CSS Path!',
    options: [{
      text: 'Proceed to the menu',
      nextText: 99
    }]
  },
]

startGame()