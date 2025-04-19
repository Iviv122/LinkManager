import './App.css'
import AddLink from './components/AddLink'
import LinksList from './components/LinkList/LinksList'
import Search from './components/Search'
import { RefreshContextProvider } from './context/RefreshContext'
import { SearchFieldProvider } from './context/SearchContext'

function App() {
  return (
    <div>
      <SearchFieldProvider>
        <RefreshContextProvider>
          <div className='flex flex-col justify-center text-center items-center'>
            <Search/>
            <AddLink/>
            <LinksList/>
          </div>
        </RefreshContextProvider>
      </SearchFieldProvider>
    </div>
  )
}

export default App
