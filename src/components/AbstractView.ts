export default class {
  constructor(_params) {}
  setTitle(title: string) {
    document.title = title
  }

  stringToHTML = (str: string) => {
    var parser = new DOMParser()
    var { body } = parser.parseFromString(str, 'text/html')
    return body
  }

  async getHtml() {
    const htmlElement = this.stringToHTML('')
    return htmlElement
  }

  render() {
    return this.getHtml()
  }
}
