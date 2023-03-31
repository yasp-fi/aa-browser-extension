class PopupController {
  openedPopup: boolean
  constructor() {
    this.openedPopup = false
  }

  focusPopup = () => {
    const transactions = JSON.parse(window.localStorage.getItem('transactions') || 'null')
    const signMessages = JSON.parse(window.localStorage.getItem('signMessafes') || 'null')
    const popUpWindowId =
      (transactions && transactions.windowId) ||
      (signMessages && signMessages.windowId)

    chrome.windows.update(popUpWindowId, { focused: true })
  }

  showPopup = (cb: any) => {
    if (!this.openedPopup) {
      chrome.windows.create(
        {
          url: '/popup.html',
          type: 'popup',
          height: 630,
          width: 390
        },
        (window) => {
          cb(window)
        }
      )
      this.openedPopup = true
    } else {
      this.focusPopup()
    }
  }

  handleClosePopup = () => {
    this.openedPopup = false
  }
}

export default PopupController