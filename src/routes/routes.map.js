import Home from '@/pages/Home'
import Catalogo from '@/pages/Catalogo'
import Pedidos from '@/pages/Pedidos'

const routes = [
    {
        path: '/listar-pedidos',
        component: Pedidos,
        name: 'pedidos'
    },

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