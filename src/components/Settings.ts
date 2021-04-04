import AbstractView from './AbstractView'

export default class extends AbstractView {
  constructor(params) {
    super(params)
    this.setTitle('Settings')
  }

  async getHtml() {
    const strElement = '<h1>Settings</h1><p>Manage your privacy and configuration.</p>'
    const htmlElement = this.stringToHTML(strElement)
    return htmlElement
  }
}
