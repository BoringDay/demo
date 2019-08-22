// 判断用户键盘输入
export function handleKeydownMixer (e) {
  e.returnValue = false

  if (e.key === 'Escape') {
    this.isShowMixertModal = false
    return
  }

  let keyCode
  if (/^[a-zA-Z]{1}$/.test(e.key)) {
    keyCode = e.key.toLocaleUpperCase()
  } else {
    if (/^((?!Arrow).)+Right$/.test(e.code)) {
      keyCode = ['Right', e.key].join(' ')
    } else if (/Numpad/.test(e.code)) {
      keyCode = e.code.replace(/^Numpad/, 'Num ')
    } else {
      keyCode = e.key.split(/(?=[A-Z])/).join(' ')
    }

    keyCode.replace(/^Control$/, 'Ctrl')
  }

  this.keydownMixerVal = keyCode
  window.event.preventDefault()
}
