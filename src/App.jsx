import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-[#333]'>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </div>
  )
}

export default App
