import Router from './Router'

class App {
  constructor(root: HTMLDivElement) {
    const router = new Router({ root })
    const { render, navigateTo } = router

    window.addEventListener('popstate', render)

    document.addEventListener('DOMContentLoaded', () => {
      document.body.addEventListener('click', (e) => {
        const target = <HTMLAnchorElement>e.target
        if (target.matches('[data-link]')) {
          e.preventDefault()
          navigateTo(target.href)
        }
      })
      render()
    })
  }
}

export default App
