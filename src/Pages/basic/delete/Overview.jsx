import { Link } from "react-router-dom"

export default function DeleteOverview() {
    return (
        <>
            <h2 className="subtitle mb-6">Deleting data</h2>

            <p>Deletion is fairly straightforward. We're going to talk about three different and simple ways:</p>

            <ul>
                <li><Link to="/basic/delete/delete-one">Deleting a single row</Link></li>
                <li><Link to="/basic/delete/delete-many">Deleting multiple rows at the same time</Link></li>
                <li><Link to="/basic/delete/truncate">Deleting everything from a table</Link></li>
            </ul>
            <p>Take your pick :).</p>
        </>

    )
}