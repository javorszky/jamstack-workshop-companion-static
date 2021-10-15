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
                    <Link to="/initial-setup">Initial setup</Link>
                </li>
            </ul>
            <p className="menu-label">Basic Operations</p>
            <ul className="menu-list">
                <li>
                    <Link to="/basic">Overview</Link>
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
                            <Link to="/basic/select/fetching-only-some-columns">Fetching only some of the columns</Link>
                        </li>
                        <li>
                            <Link to="/basic/select/renaming-columns">Renaming columns in result</Link>
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
                            <Link to="/basic/insert/select">Inserting from another table</Link>
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
            <p className="menu-label">Table joins</p>
            <ul className="menu-list">
                <li>
                    <Link to="/joins">Overview</Link>
                </li>
                <li>
                    <Link to="/joins/types">Join types</Link>
                    <ul>
                        <li>
                            <Link to="/joins/types/inner">Inner</Link>
                        </li>
                        <li>
                            <Link to="/joins/types/outer">Outer</Link>
                        </li>
                    </ul>
                </li>

            </ul>
            <p className="menu-label">Indexes and constraints</p>
            <ul className="menu-list">
                <li>
                    <Link to="/indexes">Overview</Link>
                </li>
                <li>
                    <Link to="/indexes/indextypes">Index types</Link>
                    <ul>
                        <li>
                            <Link to="/indexes/unique">Unique</Link>
                        </li>
                        <li>
                            <Link to="/indexes/partial">Partial</Link>
                        </li>
                        <li>
                            <Link to="/indexes/compound">Compound</Link>
                        </li>
                        <li>
                            <Link to="/indexes/covering">Covering</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="/indexes/constrainttypes">Non index constraints</Link>
                    <ul>
                        <li>
                            <Link to="/indexes/foreignkeyconstraint">Foreign key constraints</Link>
                        </li>
                        <li>
                            <Link to="/indexes/column-constraints">Column constraints</Link>
                        </li>
                        <li>
                            <Link to="/indexes/table-constraints">Table constraints</Link>
                        </li>
                    </ul>
                </li>

            </ul>
            <p className="menu-label">Stored procedures and triggers</p>
            <ul className="menu-list">
                <li>
                    <Link to="/storedprocedures">Overview</Link>
                </li>
                <li>
                    <Link to="/storedprocedures/procedure">Stored procedure</Link>
                </li>
                <li>
                    <Link to="/storedprocedures/trigger">Trigger</Link>
                </li>
                <li>
                    <Link to="/storedprocedures/usecases">Use cases</Link>
                </li>
            </ul>
            <p className="menu-label">Supabase API</p>
            <ul className="menu-list">
                <li>
                    <Link to="/supabaseapi">Overview</Link>
                </li>
                <li>
                    <Link to="/supabaseapi/auth">Auth</Link>
                </li>
                <li>
                    <Link to="/supabaseapi/fetch">Fetch</Link>
                </li>
                <li>
                    <Link to="/supabaseapi/insert-upsert">Insert / Upsert</Link>
                </li>
                <li>
                    <Link to="/supabaseapi/delete">Delete</Link>
                </li>
                <li>
                    <Link to="/supabaseapi/rpc">RPC - Remote procedure call</Link>
                </li>
            </ul>
            <p className="menu-label">Addenda</p>
            <ul className="menu-list">
                <li>
                    <Link to="/how-to-read-command-specifications">How to read documentation pages</Link>
                </li>
            </ul>
        </>
    )
}

export default Nav;