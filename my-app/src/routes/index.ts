import HeaderOnly from "../layouts/HeaderOnly"
import FeedBack from "../pages/FeedBack"
import Following from "../pages/Following"
import Home from "../pages/Home"
import Profile from "../pages/Profile"
import Upload from "../pages/Upload"

const publicRoutes: any[] = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/:nickname', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/feedback', component: FeedBack },
]

export { publicRoutes }