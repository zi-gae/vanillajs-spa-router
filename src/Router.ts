import Dashboard from './components/Dashboard'
import Posts from './components/Posts'
import PostView from './components/PostView'
import Settings from './components/Settings'
import './styles/index.css'

// ^string$ 정규식 반환 하는 함수
// ^~~$ => ~~ 와 정확히 일치

interface Params {
  root: HTMLDivElement
}

class Router {
  root: HTMLDivElement
  constructor({ root }: Params) {
    this.root = root
  }

  pathToRegex = (path: string) =>
    new RegExp('^' + path.replace(/\//g, '\\/').replace(/:\w+/g, '(.+)') + '$')

  // 쿼리파람 값 추출
  getParams = <T>(match: {
    route: {
      path: string
      view: new (args: unknown) => T
    }
    result: RegExpMatchArray
  }) => {
    const values = match.result.slice(1)
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map((result) => result[1])

    return Object.fromEntries(
      keys.map((key, i) => {
        return [key, values[i]]
      })
    )
  }

  navigateTo = (url: string) => {
    const { render } = this
    history.pushState(null, null, url)
    render()
  }

  render = async () => {
    const { pathToRegex, getParams, root } = this

    const routes = [
      { path: '/', view: Dashboard },
      { path: '/posts', view: Posts },
      { path: '/posts/:id', view: PostView },
      { path: '/settings', view: Settings },
    ]

    const potentialMatches = routes.map((route) => {
      return {
        route,
        result: location.pathname.match(pathToRegex(route.path)),
      }
    })

    let match = potentialMatches.find((potentialMatch) => potentialMatch.result !== null)

    // 없는 라우트는 루트경로 설정
    if (!match) {
      match = {
        route: routes[0],
        result: [location.pathname],
      }
    }

    // 쿼리 파람 받기 위해서 params 받아야함
    const view = new match.route.view(getParams(match))
    const node = await view.getHtml()
    root.innerHTML = ''
    root.appendChild(node)
  }
}

export default Router
