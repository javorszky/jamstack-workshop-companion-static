import { Link } from "react-router-dom"
import Message from "../../../components/Message"

const OrderBy = () => {
    return (
        <>
            <h2 className="subtitle">Order by, Limit, and Offset</h2>

            <p>Here we're going to talk about three additions to the <code>where</code> clause: order by, limit, and offset. There are a few other we are not talking about, like <code>group by</code>, and <code>having</code>, but I'll leave the links on this page for you to check out.</p>

            <Message type="is-link" header="Having, group by, and other aggregate functions">
                <p></p>
            </Message>


            <h3>Limit and offset</h3>

            <p>Limit and offset tells the database where to start returning the data from, and how much of it to return. This is useful if you want to have the last of something, or you're paginating results.</p>

            <img src="/where_limit_offset.jpg" alt="illustration of the where limit and offset modifiers" className="box my-6" />

            <p>The black data table with the squigglies is the data that would be returned by the default <code>select * from table</code> query. The blue window is what's getting returned when using the modifiers of <code>offset = 1 limit = 3</code>.</p>
            <p><b><i>Offset</i></b> will skip the first <b><i>n</i></b> results that would be returned, and will start returning from the <b><i>n+1</i></b> row.</p>

            <p><b><i>Limit</i></b> will keep returning the data until either there's no more data to return, or the number of rows reached the value we set.</p>
            <p>This means that if we start from the beginning, and set limit to, for example, 8, and we have 50 rows, we're going to get the first 50 rows.</p>
            <p>If we start from row 48 with <code>offset = 48</code>, then we only have 2 rows of data left, so even though we have <code>limit = 8</code>, we'll only have 2 rows in the result set.</p>
            <p>You can use limit and offset on their own without the other, and in this context, they come at the very end of the query.</p>

            <h3>Order by</h3>

            <p>There are two main ways we can order data:</p>
            <ol>
                <li>Get everything and do it ourselves on the client side, or</li>
                <li>Let the database do it for us</li>
            </ol>

            <p>Mostly we'll want to do it using the database, simply because it's easier, though that also depends on query performance: generally speaking large sets of data ordered by a column that is not indexed is going to be slow, so in those cases it might be cheaper (as in, take less resources) to do the ordering client side.</p>

            <p>To use the order by, you need to specify the name of the column, and optionally whether you want the values to appear in <code>ascending</code> or <desc>descending</desc> order.</p>

            <img src="/where_orderby.jpg" alt="illuestration showing an example order by and its effect" className="box my-6" />

            <p>You can also chain order by clauses like this:</p>

            <pre><code>{`SELECT * FROM table ORDER BY col1 desc, col2 asc;`}</code></pre>

            <Message type="is-link" header="Order By reference">
                <p>Have a look at the <a href="https://www.postgresql.org/docs/13/queries-order.html">Postgres documentation page on sorting rows</a>.</p>
            </Message>

            <p>A practical use of this, along with the where clause would be something like <i>"give me the 5 latest completed orders for the user that's currently logged in."</i></p>

            <p>However, let's move on to <Link to="/basic/insert">putting data into tables</Link>!</p>
        </>
    )
}

export default OrderBy