// создаем разметку клавиатуры -HTML

const wrapper = document.createElement('div');
wrapper.className = 'wrapper';
wrapper.id = 'wrapper';
document.body.prepend(wrapper);

const textarea = document.createElement('textarea');
textarea.className = 'textarea';
textarea.id = 'textarea';
document.querySelector('#wrapper').prepend(textarea);

const keyboardWrapper = document.createElement('section');
keyboardWrapper.className = 'keybord';
keyboardWrapper.id = 'keybord';
document.querySelector('#wrapper').append(keyboardWrapper);

const buttonClear = document.createElement('button');
buttonClear.className = 'buttonClear';
buttonClear.id = 'buttonClear';
buttonClear.innerText = 'Очистить поле ввода';
document.querySelector('#wrapper').append(buttonClear);

const blockInformation = document.createElement('footer');
blockInformation.className = 'blockInformation';
blockInformation.id = 'blockInformation';
blockInformation.innerText = 'Клавиатура создана в операционной системе Windows. \n Для переключения языка комбинация: левые shift + alt.';
document.querySelector('#wrapper').append(blockInformation);

const keyboard = [
  'Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8',
  'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR',
  'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'CapsLock',
  'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote',
  'Backslash', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM',
  'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft',
  'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight',
];

const keyboardNameEn = [
  '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab',
  'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'CapsLock',
  'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', '&#92', 'Enter', 'Shift',
  'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '&#47', '&#8593', 'Shift', 'Ctrl', 'Win', 'Alt',
  ' ', 'Alt', 'Ctrl', '&#8592', '&#8595', '&#8594',
];

const keyboardNameRu = [
  'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab',
  'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'CapsLock',
  'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', '&#92', 'Enter', 'Shift',
  'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.',
  '&#8593', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '&#8592', '&#8595', '&#8594',
];

const keyboardNameEnCaps = [
  '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=',
  'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']',
  'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'',
  '&#92', 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.',
  '&#47', '&#8593', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '&#8592', '&#8595', '&#8594',
];

const keyboardNameRuCaps = [
  'Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=',
  'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Ш', 'З', 'Х', 'Ъ',
  'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', '&#92',
  'Enter', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '&#8593',
  'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '&#8592', '&#8595', '&#8594',
];

function init() {
  let out = '';
  for (let i = 0; i < keyboard.length; i++) {
    // eslint-disable-next-line
    out += '<div class="k-key" data="' + keyboard[i] + '"></div>';
  }
  document.querySelector('#keybord').innerHTML = out;
}
init();

const keyboardButtom = keyboardWrapper.querySelectorAll('div');

let flagLanguage = 0;
let flagCapsLook = 1;

function contentButtom() {
  if ((flagLanguage % 2 === 0) && (localStorage.En % 2 === 0)) {
    if (flagCapsLook % 2 === 0) {
      for (let j = 0; j < keyboardButtom.length; j++) {
        keyboardButtom[j].innerHTML = keyboardNameEnCaps[j];
        localStorage.En = 0;
      }
    } else {
      for (let j = 0; j < keyboardButtom.length; j++) {
        keyboardButtom[j].innerHTML = keyboardNameEn[j];
        localStorage.En = 0;
      }
    }
  } else if (flagCapsLook % 2 === 0) {
    for (let j = 0; j < keyboardButtom.length; j++) {
      keyboardButtom[j].innerHTML = keyboardNameRuCaps[j];
      localStorage.En = 1;
    }
  } else {
    for (let j = 0; j < keyboardButtom.length; j++) {
      keyboardButtom[j].innerHTML = keyboardNameRu[j];
      localStorage.En = 1;
    }
  }
}

contentButtom();

document.onkeydown = (event) => {
  // document.querySelectorAll('#keybord .k-key').forEach(function (element) {
  //     element.classList.remove('active-key');
  // eslint-disable-next-line
  document.querySelector('#keybord .k-key[data="' + event.code + '"]').classList.add('active-key');
};

document.onkeyup = () => {
  document.querySelectorAll('#keybord .k-key').forEach((element) => {
    element.classList.remove('active-key');
  });
};

// document.onmousedown = function (event) {
//     document.querySelector('#keybord .k-key[data=''+event.code+'']').classList.add('active-key');
// }

// document.onmouseup = function (event) {
//     document.querySelectorAll('#keybord .k-key').forEach(function (element) {
//         element.classList.remove('active-key');
//     });
// }

document.querySelectorAll('#keybord .k-key').forEach((elem) => {
  const param = elem;
  // eslint-disable-next-line
  param.onmousedown = function () {
    // eslint-disable-next-line
    document.querySelectorAll('#keybord .k-key').forEach((element) => {
      element.classList.remove('active-key');
    });
    this.classList.add('active-key');
  };
});

let textInTextarea = '';

document.onkeypress = (element) => {
  if (element.key === 'Enter') {
    textInTextarea = `${textInTextarea}\n`;
  } else {
    textInTextarea += element.key;
  }
  textarea.innerHTML = textInTextarea;
};

document.getElementById('keybord').onclick = (element) => {
  // eslint-disable-next-line
  const target = element.target;
  if (target.tagName === 'DIV') {
    let textOnButton = element.srcElement.innerHTML;
    if (textOnButton === 'Shift' || textOnButton === 'Ctrl' || textOnButton === 'Alt' || textOnButton === 'Win') {
      textOnButton = '';
    }
    if (textOnButton === 'Tab') {
      textOnButton = '  ';
    }
    if (textOnButton === 'Enter') {
      textOnButton = '\n';
    }
    if (textOnButton === 'CapsLock') {
      flagCapsLook += 1;
      textOnButton = '';
      contentButtom();
    }
    if (textOnButton === 'Backspace') {
      textOnButton = '';
      let arr = [];
      arr = textInTextarea.split('');
      arr.splice(arr.length - 1, 1);
      const str = arr.join('');
      textInTextarea = str;
    }
    textInTextarea += textOnButton;
    textarea.innerHTML = textInTextarea;
  }
};

function runOnKeys(func, ...keys) {
  const pressed = new Set();
  document.addEventListener('keydown', (event) => {
    pressed.add(event.key);
    // eslint-disable-next-line
    for (const key of keys) { // все ли клавиши из набора нажаты?
      if (!pressed.has(key)) {
        return;
      }
    }

    // если пользователь отпустит клавиши - не возникнет keyup
    // при этом JavaScript 'пропустит' факт отпускания клавиш, а pressed[key] останется true
    // чтобы избежать 'залипания' клавиши -- обнуляем статус всех клавиш, пусть нажимает всё заново
    pressed.clear();
    flagLanguage += 1;

    if (flagLanguage % 2 === 0) {
      localStorage.En = 0;
    } else {
      localStorage.En = 1;
    }
    func();
  });

  document.addEventListener('keyup', (event) => {
    pressed.delete(event.key);
  });
}

runOnKeys(
  () => {
    contentButtom();
  },
  'Shift',
  'Alt',
);

document.querySelector('#buttonClear').addEventListener('click', () => {
  textarea.innerHTML = '';
  textInTextarea = '';
});
