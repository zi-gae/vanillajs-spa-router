import AbstractView from './AbstractView'

export default class extends AbstractView {
  constructor() {
    super()
    this.setTitle('Settings')
  }

  async getHtml() {
    return `
            <h1>Settings</h1>
            <p>Manage your privacy and configuration.</p>
        `
  }
}
