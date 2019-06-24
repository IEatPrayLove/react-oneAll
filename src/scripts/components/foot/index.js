export const foots = [
    { txt: "ONE", path: "/app/one", name: "one", icon: "icon-yuanquan" },
    { txt: "ALL", path: "/app/all", name: "all", icon: "icon-gallery-copy" },
    { txt: "ME", path: "/app/mine", name: "mine", icon: "icon-gerenkehuguanli" }
]
import "./foot.scss"
import { NavLink } from "react-router-dom"
export const Foot = () => {
    return (
        <footer>
            {
                foots.map((item, index) => {
                    return (
                        <div key={index}>
                            <NavLink to={item.path} activeClassName="nav-active">
                                <i className={"iconfont icon " + item.icon} ></i>
                                <span> {item.txt}</span>
                            </NavLink>
                        </div>
                    )
                })
            }
        </footer>
    )
}