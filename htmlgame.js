const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function menu() {
  state = {}
  window.location = "gamemenu.html";
}
function next() {
  state = {}
  window.location = "gamemenu2.html";
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
    text: 'There is a voidling in your path answer the question correctly to use your fist to defeat it | Question: What is the correct HTML for inserting an image?',
    options: [{
        text: '<img src="image.gif" alt="MyImage">',
        nextText: 1.1
      },
      {
        text: '<image src="image.gif" alt="MyImage">',
        nextText: 1.2
      },
      {
        text: '<img alt="MyImage">image.gif</img>',
        nextText: 1.2
      },
      {
        text: '<img href="image.gif" alt="MyImage">',
        nextText: 1.2
      }
    ]
  },
  {
    id: 1.1,
    text: 'You successfully killed the voidling!',
    options: [{
        text: 'Continue Walking',
        nextText: 2
      },
    ]
  },
  {
    id: 1.2,
    text: 'You missed and Died!',
    options: [{
        text: 'Try again?',
        nextText: 1
      },
      {
        text: 'Give up',
        nextText: -1
      }
    ]
  },
  {
    id: 2,
    text: '-Checkpoint- There is a chest in your path answer the question correctly to obtain the key | Question: The HTML global attribute, "contenteditable" is used to:',
    options: [{
        text: 'Update content from the server',
        nextText: 2.2
      },
      {
        text: 'Specifies a context menu for an element. The menu appears when a user right-clicks on the element',
        nextText: 2.2
      },
      {
        text: 'Specify whether the content of an element should be editable or not',
        nextText: 2.1
      },
      {
        text: 'Return the position of the first found occurrence of content inside a string',
        nextText: 2.2
      }
    ]
  },
  {
    id: 2.1,
    text: 'You obtained the key and open the chest, You got Dorans Blade!',
    options: [{
        text: 'Equip it and Continue Walking',
        nextText: 2.3
      }
    ]
  },
  {
    id: 2.2,
    text: 'You failed to obtain the chest',
    options: [{
        text: 'Continue Walking',
        nextText: 2.4
      }
    ]
  },
  {
    id: 2.3,
    text: 'There is a void priest in your path!',
    options: [{
        text: 'Use Dorans Blade',
        nextText: 2.5
      },
    ]
  },
  {
    id: 2.4,
    text: 'There is a void priest in your path!',
    options: [{
        text: 'Use Fist',
        nextText: 2.6
      },
    ]
  },
  {
    id: 2.5,
    text: 'To wield the Dorans Blade answer the question correctly | Question: Which attribute is used to specify that an input field must be filled out?',
    options: [{
        text: 'Validate',
        nextText: 2.7
      },
      {
        text: 'Placeholder',
        nextText: 2.7
      },
      {
        text: 'Autofocus',
        nextText: 2.7
      },
      {
        text: 'Required',
        nextText: 2.9
      }
    ]
  },
  {
    id: 2.6,
    text: 'To use fist answer the question correctly | Question: Which attribute is used to specify that an input field must be filled out?',
    options: [{
        text: 'Validate',
        nextText: 2.8
      },
      {
        text: 'Placeholder',
        nextText: 2.8
      },
      {
        text: 'Autofocus',
        nextText: 2.8
      },
      {
        text: 'Required',
        nextText: 2.8
      }
    ]
  },
  {
    id: 2.7,
    text: 'You missed and Died',
    options: [{
        text: 'Try Again',
        nextText: 2.5
      },
      {
      text: 'Give up',
      nextText: -1
    }
    ]
  },  
{
  id: 2.8,
  text: 'You died, You need a better weaponry!',
  options: [{
      text: 'Go back to Checkpoint',
      nextText: 2
    },
    {
      text: 'Give Up',
      nextText: -1
    }
  ]
},
{
  id: 2.9,
  text: 'You killed the Void Priest',
  options: [{
      text: 'Continue Walking',
      nextText: 4
    },
  ]
},
{
  id: 4,
  text: 'There is a merchant in your path',
  options: [{
      text: 'Upgrade the Dorans Blade to B.F Sword and purchase Dorans Shield',
      nextText: 4.1
    },
    {
      text: 'Ignore merchant and continue walking',
      nextText: 4.2
    }
  ]
},
  {
    id: 4.1,
    text: 'Answer the question correctly to upgrade the Dorans Blade to B.F Sword and purchase Dorans Shield | Question: Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?',
    options: [{
        text: 'alt',
        nextText: 4.5
      },
      {
        text: 'src',
        nextText: 4.6
      },
      {
        text: 'img',
        nextText: 4.6
      },
      {
        text: 'txt',
        nextText: 4.6
      }
    ]
  },
  {
    id: 4.2,
    text: '-Final Boss - In order to complete the path you must defeat the final boss "Kassdin", To defeat the boss you must answer the question correctly | Question: Which of these elements are all <table> elements?',
    options: [{
      text: '<table><t1><tt>',
      nextText: 4.4
    },
    {
      text: '<table><thead><th>',
      nextText: 4.4
    },
    {
      text: '<table><tr><td> ',
      nextText: 4.4
    },
    {
      text: '<table><td><tfoot>',
      nextText: 4.4
    }
  ]
},
  {
    id: 4.5,
    text: 'Congratulation your weaponry has been upgraded and you become powerful',
    options: [{
        text: 'Continue Walking',
        nextText: 5
      }
    ]
  },
  {
    id: 4.6,
    text: 'You failed to upgrade your weaponry!',
    options: [{
        text: 'Try Again',
        nextText: 4.1
      },
      {
        text: 'Give up',
        nextText: -1
      }
    ]
  },
  {
    id: 4.4,
    text: 'You died, You dont have enough power',
    options: [{
        text: 'Go to Checkpoint',
        nextText: 2
      }
    ]
  },
  {
    id: 4.2,
    text: '-Final Boss - In order to complete the path you must defeat the final boss "Kassadin", To defeat the boss you must answer the question correctly | Question: Which of these elements are all <table> elements?',
    options: [{
      text: '<table><t1><tt>',
      nextText: 4.4
    },
    {
      text: '<table><thead><th>',
      nextText: 4.4
    },
    {
      text: '<table><tr><td> ',
      nextText: 4.4
    },
    {
      text: '<table><td><tfoot>',
      nextText: 4.4
    }
  ]
},
{
  id: 4.3,
  text: 'You failed to upgrade you weaponry',
  options: [{
      text: 'Continue Walking',
      nextText: 4.2
    }
  ]
},
{
  id: 5,
  text: '-Final Boss - In order to complete the path you must defeat the final boss "Kassadin", To defeat the boss you must answer the question correctly | Question: Which of these elements are all <table> elements?',
  options: [{
    text: '<table><t1><tt>',
    nextText: 5.1
  },
  {
    text: '<table><thead><th>',
    nextText: 5.1
  },
  {
    text: '<table><tr><td> ',
    nextText: 5.2
  },
  {
    text: '<table><td><tfoot>',
    nextText: 5.1
  }
]
},
{
  id: 5.1,
  text: 'You died to Kassadin',
  options: [{
    text: 'Go to Checkpoint',
    nextText: 2
  },
  {
    text: 'Give up',
    nextText: -1
  }
]
},
  {
    id: 5.2,
    text: 'Congratulation you defeated Kassadin and completed the HTML path',
    options: [{
      text: 'Proceed to Menu',
      nextText: 99
    }]
  },
]

startGame()