import { Link } from 'react-router-dom'

export default function BasicsOverview() {
    return (
        <>
            <h2 className="subtitle">Basic Operations</h2>

            <p>There are two parts which I think are the basic operations:
                <ol>
                    <li>The commands to work with data in tables: <code>SELECT</code>, <code>INSERT</code>, <code>UPDATE</code>, and <code>DELETE</code></li>
                    <li>Commands to deal with tables: <code>CREATE</code>, <code>ALTER</code>, and <code>DROP</code></li>
                </ol>
            </p>
            <p>Later on we'll learn (you'll read) about table joins, indexes and constraints, and stored procedures.</p>
            <p>Head on over to the <Link to="/basic/tables">table overview section</Link> to continue.</p>
        </>
    )
}