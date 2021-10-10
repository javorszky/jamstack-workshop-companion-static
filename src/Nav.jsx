import {
    Link as ReactDomLink,
    useRouteMatch
} from "react-router-dom";

import './nav.css';

function Link(props) {
    let match = useRouteMatch({
        path: props.to,
        exact: true,
    })

    let open = useRouteMatch({
        path: props.to,
        exact: false,
        strict: true,
    })

    function classes(m, o) {
        let c = ''
        if (m) {
            c += 'is-active '
        }
        if (o) {
            c += 'is-open'
        }
        return c.trim()
    }

    return (
        <ReactDomLink className={classes(match, open)} to={props.to}>{props.children}</ReactDomLink>
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
                <li>
                    <Link to="/initial-setup">Initial setup</Link>
                </li>
            </ul>
            <p className="menu-label">Basic Operations</p>
            <ul className="menu-list">
                <li>
                    <Link to="/basic">Overview</Link>
                </li>
                <li>
                    <Link to="/basic/first">First steps to enable everything else</Link>
                </li>
                <li>
                    <Link to="/basic/tables">Table operations</Link>
                    <ul>
                        <li>
                            <Link to="/basic/tables/create">Create table</Link>
                        </li>
                        <li>
                            <Link to="/basic/tables/drop">Drop table</Link>
                        </li>
                        <li>
                            <Link to="/basic/tables/alter">Alter table</Link>
                        </li>
                        <li>
                            <Link to="/basic/tables/copy">Copy table</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="/basic/select">Fetching data</Link>
                    <ul>
                        <li>
                            <Link to="/basic/select/renaming-columns">Renaming columns in result</Link>
                        </li>
                        <li>
                            <Link to="/basic/select/fetching-only-some-columns">Fetching only some of the columns</Link>
                        </li>
                        <li>
                            <Link to="/basic/select/where">Fetching some of the data with <code>WHERE</code></Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="/basic/insert">Inserting data</Link>
                    <ul>
                        <li>
                            <Link to="/basic/insert/insert-with-defaults">Inserting with defaults</Link>
                        </li>
                        <li>
                            <Link to="/basic/insert/bulk-inserts">Bulk inserts</Link>
                        </li>
                        <li>
                            <Link to="/basic/insert/seletc">Inserting from another table</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="/basic/update">Updating data</Link>
                </li>
                <li>
                    <Link to="/basic/delete">Deleting data</Link>
                    <ul>
                        <li>
                            <Link to="/basic/delete/delete-one">Deleting one row</Link>
                        </li>
                        <li>
                            <Link to="/basic/delete/delete-many">Delete many rows</Link>
                        </li>
                        <li>
                            <Link to="/basic/delete/truncate">Delete everything / truncate</Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </>
    )

}

export default Nav;