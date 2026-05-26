document.addEventListener('DOMContentLoaded', () => {
  new LoginValidator({
    usernameInput: '.username',
    passwordInput: '.password',
    eyeButton: '.eye',
    submitBtn: '.btn',
    hintText: '.hint-text',
  })
})

class LoginValidator {
  constructor(config) {
    this.usernameInput = document.querySelector(config.usernameInput)
    this.passwordInput = document.querySelector(config.passwordInput)
    this.eyeButton = document.querySelector(config.eyeButton)
    this.submitBtn = document.querySelector(config.submitBtn)
    this.hintText = document.querySelector(config.hintText)

    this.successColor = '#32D190'
    this.errorColor = '#e74c3c'

    this.init()
  }

  init() {
    if (this.eyeButton) {
      this.eyeButton.addEventListener('click', () => this.toggleVisibility())
    }

    if (this.submitBtn) {
      this.submitBtn.addEventListener('click', e => {
        e.preventDefault()
        this.validate()
      })
    }

    this.usernameInput.addEventListener('input', () => this.capitalizeUsername())
    this.usernameInput.addEventListener('input', () => this.validate())
    this.passwordInput.addEventListener('input', () => this.validate())
  }

  toggleVisibility() {
    const isPassword = this.passwordInput.type === 'password'
    this.passwordInput.type = isPassword ? 'text' : 'password'

    this.eyeButton.classList.toggle('fa-eye-slash', !isPassword)
    this.eyeButton.classList.toggle('fa-eye', isPassword)
  }

  capitalizeUsername() {
    const username = this.usernameInput.value.trim()

    if (username.length > 0 && username[0] !== username[0].toUpperCase()) {
      this.usernameInput.value = username.charAt(0).toUpperCase() + username.slice(1)
    }
  }

  validate() {
    const username = this.usernameInput.value.trim()
    const password = this.passwordInput.value.trim()

    if (!username && !password) {
      return this.updateUI({ isValid: false, message: '' })
    }

    if (!username) {
      return this.updateUI({ isValid: false, message: 'Username is required' })
    }

    if (!password) {
      return this.updateUI({ isValid: false, message: 'Password is required' })
    }

    if (username.length < 5) {
      return this.updateUI({
        isValid: false,
        message: 'Username must be at least 5 characters',
      })
    }

    if (password.length < 8) {
      return this.updateUI({
        isValid: false,
        message: 'Password must be at least 8 characters',
      })
    }

    this.updateUI({ isValid: true, message: 'Looks good ✔' })
  }

  updateUI({ isValid, message = '' }) {
    const color = isValid ? this.successColor : this.errorColor

    this.usernameInput.style.borderColor = color
    this.passwordInput.style.borderColor = color

    if (this.hintText) {
      this.hintText.textContent = message
      this.hintText.style.color = color
    }

    this.usernameInput.classList.toggle('error', !isValid)
    this.passwordInput.classList.toggle('error', !isValid)

    this.usernameInput.classList.toggle('success', isValid)
    this.passwordInput.classList.toggle('success', isValid)
  }
}
