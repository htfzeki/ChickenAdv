const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function menu() {
  state = {}
  window.location = "gamemenu3.html";
}

function next() {
  state = {}
  window.location = "final.html";
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
    text: 'In this path you will train to become strong. Answer the questions correctly and you will gain a random stats or items',
    options: [{
        text: 'Continue',
        nextText: 2
      }
    ]
  },
  {
    id: 2,
    text: 'Question: Where is the correct place to insert JavaScript?',
    options: [{
        text: 'The <body> section',
        nextText: 3.1
      },
      {
        text: 'The <head> section',
        nextText: 3.1
      },
      {
        text: 'Both <body> section and <head> section are correct',
        nextText: 3
      },
      {
        text: 'The <title> section',
        nextText: 3.1
      }
    ]
  },
  {
    id: 3,
    text: 'Gained Attack: +5',
    options: [{
        text: 'Continue',
        nextText: 4
      }
    ]
  },
  {
    id: 3.1,
    text: 'Failed!',
    options: [{
        text: 'Continue',
        nextText: 4
      }
    ]
  },
  



  {
    id: 4,
    text: 'Question: What is the correct syntax for referring to an external script called "xxx.js"?',
    options: [{
        text: '<script a href=”xxx.js”>',
        nextText: 5.1
      },
      {
        text: '<script href=”xxx.js”>',
        nextText: 5.1
      },
      {
        text: '<script name=”xxx.js”>',
        nextText: 5.1
      },
      {
        text: '<script src=”xxx.js”>',
        nextText: 5
      }
    ]
  },
  {
    id: 5,
    text: 'Gained Giant Belt',
    options: [{
        text: 'Equip it and Continue',
        nextText: 6
      }
    ]
  },
  {
    id: 5.1,
    text: 'Failed!',
    options: [{
        text: 'Continue',
        nextText: 6
      }
    ]
  },

  {
    id: 6,
    text: 'Last Question for Rare Item: How do you write "Hello World" in an alert box?"?',
    options: [{
        text: 'alert(“Hello World!”)',
        nextText: 7
      },
      {
        text: 'msgBox(“Hello World”)',
        nextText: 7.1
      },
      {
        text: 'alertBox(“Hello World!”)',
        nextText: 7.1
      },
      {
        text: 'msg(“Hello World!”)',
        nextText: 7.1
      }
    ]
  },
  {
    id: 7,
    text: 'Gained Dragonmancer Emblem',
    options: [{
        text: 'Continue to the next path',
        nextText: 99
      }
    ]
  },
  {
    id: 7.1,
    text: 'Failed!',
    options: [{
        text: 'Continue to the next path',
        nextText: 99
      }
    ]
  },



  
]
startGame()