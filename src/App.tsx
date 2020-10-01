import React, { useReducer, createContext } from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Header from './components/Header/Header'
import HomePage from './pages/home/HomePage'
import ClipPage from './pages/clip/ClipPage'
import { clipReducer } from './flux/reducers/ClipReducer'
import { ClipContextType } from './types'
import './App.scss'

export const ClipContext = createContext({} as ClipContextType)

const App: React.FC = () => {
  const [state, dispatch] = useReducer(clipReducer, { clipArticles: [] })

  return (
    // 子コンポーネントでWebクリップ用のstateとdispatchを共有できるように設定
    <ClipContext.Provider value={{ clipState: state, clipDispatch: dispatch }}>
      <div>
        {/* Headerで発生する「You should not use <Switch> outside a <Router>」エラー対策のためMemoryRouterを利用 */}
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/clip' component={ClipPage} />
          </Switch>
        </BrowserRouter>
      </div>
    </ClipContext.Provider>
  )
}

export default App
