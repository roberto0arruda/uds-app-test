import Home from '@/pages/Home'
import Catalogo from '@/pages/Catalogo'

const routes = [
    // {
    //     path: '/detalhe',
    //     component: Detalhe,
    //     name: 'detalhe'
    // },

    {
        path: '/montar-acai',
        component: Catalogo,
        name: 'catalogo'
    },

    {
        path: '/',
        component: Home,
        name: 'home'
    }

]

export default routes