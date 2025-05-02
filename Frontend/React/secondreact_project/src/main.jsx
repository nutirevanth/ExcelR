import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Example1 from './States/Example1.jsx'
import Example2 from './States/Example2.jsx'
import Example3 from './States/Example3.jsx'
import Parent from './props/Parent.jsx'
import Parent2 from './props/Parent2.jsx'
import Parent3 from './props/Parent3.jsx'
import Parent4 from './props/Parent4.jsx'
import GrandParent from './props/propsdriling.jsx'
import GrandParentcontext from './context/contextParent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Header/>
    <Footer/> */}
    {/* <Example1/> */}
    {/* <Example2/> */}
    {/* <Example3/> */}
    {/* <Parent/> */}
    {/* <Parent2/> */}
    {/* <Parent3/> */}
    {/* <Parent4/> */}
    {/* <GrandParent/> */}
    <GrandParentcontext/>
  </StrictMode>,
)
