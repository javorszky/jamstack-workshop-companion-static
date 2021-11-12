import { Link } from "react-router-dom"
import Message from '../../../components/Message';

export default function DeleteOne() {
    return (
        <>
            <h2 className="subtitle mb-6">Deleting one row</h2>

            <p>The delete syntax looks like this:</p>

            <img src="/Delete_From.jpg" alt="" className="box my-6" />

            <p>In order to delete exactly one row, the <code>WHERE</code> clause, or <i><b>condition</b></i> needs to match exactly one row in the table you're deleting from. Usually that set of conditions will include at least one indexed column, and most ideally it should be a column that has a non null unique index on it. We'll talk about the importance of this later.</p>


            <p>For example if you have the following table, and you delete entry where <code>id = 43</code>, that row, and only that row will be gone.</p>

            <img src="/Delete_Table.jpg" alt="" className="box my-6" />

            <p>Other than that when running a <code>DELETE</code> query the row you specified will be gone.</p>

            <p>A curious side effect: if one of the columns was an auto-increment column, the id that the deleted row had will NOT be reused.</p>

            <h3 className="my-6">Deleting many rows</h3>

            <p>You would use the exact same query to delete many rows, except the <code>WHERE</code> clause would match multiple rows in the same table.</p>

            <p>Using the same starting data, if you delete entries where <code>country = 'USA'</code>, all of the rows where that's true will be gone.</p>

            <img src="/Delete_Table_2.jpg" alt="" className="box my-6" />


            <h3 className="my-6">Deleting everything / truncation</h3>

            <p>There are two ways to delete everything: using the <code>delete</code> query above, or issuing a <code>truncate</code>. Which one you need depends on a few factors. I've run into problems with <code>truncate</code> while testing functionality where emptying a database table was part of setting up / tearing down the test suite due to locking and other concurrent tests.</p>

            <pre><code>DELETE FROM schema.tablename;</code></pre>

            <p>It will delete every row from the table one by one. There is no <code>where</code> clause, which means every row is fair game, which means all of them are going to be removed.</p>

            <p>A significantly faster way of doing this is issuing a <code>truncate</code> command.</p>

            <pre><code>TRUNCATE schema.tablename;</code></pre>

            <p>The main difference between the delete everything without where and truncae is that truncate will just delete the entire contents of the table, while the delete will loop over each row one by one and do the deletes on them one by one.</p>

            <p>That's everything that you need to know about deletes on a basic level. This also finished the basic operations you can do on data in a table. Let's move on to <Link to="/joins">table joins</Link>!</p>
        </>
    )
}