import HeaderOnly from "../components/Layout/HeaderOnly"
import Following from "../pages/Following"
import Home from "../pages/Home"
import Profile from "../pages/Profile"
import Upload from "../pages/Upload"

const publicRoutes: any[] = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
]

export { publicRoutes }