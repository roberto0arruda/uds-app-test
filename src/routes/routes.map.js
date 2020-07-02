import Home from '@/pages/Home'
import Pedido from '@/pages/Pedido'
import Detalhe from '@/pages/Detalhe'

const routes = [
    {
        path: '/detalhe',
        component: Detalhe,
        name: 'detalhe'
    },
    {
        path: '/escolher-acai',
        component: Pedido,
        name: 'pedido'
    },

    {
        path: '/',
        component: Home,
        name: 'home'
    }

]

export default routes