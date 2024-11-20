import { useState } from 'react';
import Editor from './components/editor/Editor';
/* import Preview from './components/preview/Preview';
 */
import './App.css'

function App() {
  const [data, setData] = useState({
    generalInfo: {
      firstName: '',
    }
  }
    
  )

  return (
    <>
      <Editor
        data ={data}
      />
    </>
  )
}

export default App
