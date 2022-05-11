import { Route, Routes } from 'react-router-dom'
import Forum from './Pages/Forum'
import Home from './Pages/Home'
import SobreNos from './Pages/Sobre_Nos'
import Voluntario from './Pages/Voluntario'
import { GlobalProvider } from './context/GlobalContext'

function MainRoutes() {
    return (
        <GlobalProvider>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/sobre_nos' element={<SobreNos />} />
                <Route path='/forum' element={<Forum />} />
                <Route path='/voluntario' element={<Voluntario />} />
            </Routes>
        </GlobalProvider>
    )
}

export default MainRoutes