import { Children } from "react";
import {
    Link as ReactDomLink,
    useRouteMatch
} from "react-router-dom";

function Link(props) {
    let match = useRouteMatch({
        path: props.to,
        exact: true,
    })
    return (
        <ReactDomLink className={match ? 'is-active' : ''} to={props.to}>{props.children}</ReactDomLink>
    )
}


function Nav() {


    return (
        <>
            <p className="menu-label">Introduction</p>
            <ul className="menu-list">
                <li>
                    <Link to="/">Start here</Link>
                </li>
                <li>
                    <Link to="/about-gabor">About Gabor</Link>
                </li>
                <li>
                    <Link to="/about-relational-databases">About Relational Databases</Link>
                </li>
                <li>
                    <Link to="/about-non-relational-databases">Non-relational databases</Link>
                </li>
            </ul>
        </>
    )

}

export default Nav;