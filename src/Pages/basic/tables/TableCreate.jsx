import { Link } from 'react-router-dom'

import Message from './../../../components/Message'
import createTableImage from '../../../assets/Create_table_optimized.jpg'
import queryWindowPointer from '../../../assets/query_window_pointer.jpg'
import pastedQuery from '../../../assets/pasted_query.jpg'

export default function TablesCreate() {
    const productJson = `{
    name: "widgetinator 9000",
    price: 1337,
    id: "w90sss",
    sku: "w90sss-433",
}`

    const createProductTable = `create table products (
    id uuid not null default uuid_generate_v4(),
    name text not null,
    price smallint,
    sku text not null
);`
    const allcapsCreate = `CREATE TABLE products (
    id UUID NOT NULL DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    price SMALLINT,
    sku TEXT NOT NULL
);`

    return (
        <>
            <h2 className="subtitle">Create table</h2>

            <p>Let's talk about the parts of a table:</p>
            <ul>
                <li>schema, and name of the table</li>
                <li>rows, to hold each record</li>
                <li>columns that specify what kind of data we're holding for a record, and what the size of that data can be</li>
                <li>indexes, and constraints, to enable faster lookup of data, or to enforce some form of format that our data can have</li>
            </ul>

            <p>To create a table, we need to specify each of these parts. For our purposes and in the context of the fake ecommerce site you have cloned, we're going to start with the products table.</p>
            <p>If you look in the codebase of the ecommerce site, a single product looks like this:</p>
            <pre><code>{productJson}</code></pre>
            <p>From that we know we need 4 columns for the 4 pieces of data we need to store:</p>
            <ol>
                <li>an id column for the id</li>
                <li>a text column for the name</li>
                <li>another text or varchar column for the sku (stock keeping unit)</li>
                <li>and a number to store the price in cents (our fake ecommerce store is based on USD)</li>
            </ol>

            <Message type="is-info" header="Text or Varchar?">
                <p>Postgres, as most relational databases, has the concept of data types. They serve three distinct functions:</p>
                <ol>
                    <li>first, they help you restrict the kind of data to hold. A timestamp column can't hold text. An integer column also can't hold text. A boolean column can't hold a timestamp.</li>
                    <li>Second, it helps with keeping the size of the database in control. If you know that a piece of data is only ever going to be a value lower than 32768, then there's no reason to use a <code>bigint</code> column type, as that's just wasting space</li>
                    <li>third, it helps the database engine with sorting the data. Integers are a lot easier and faster to sort and find by than free text.</li>
                </ol>
                <p>There is no difference between <code>text</code> and <code>varchar</code> column types in postgres if varchar has no length specifier. See the Postgres version 13 documentation on their <a href="https://www.postgresql.org/docs/13/datatype.html" alt="data types of postgres">data types</a>. They are both "variable-length character strings."</p>
            </Message>

            <Message type="is-info" header="Which int?">
                <p>If you looked at the postgres data types link already, you might have noticed that there are a few different variations on <a href="https://www.postgresql.org/docs/13/datatype-numeric.html">numeric data types</a>.</p>
                <p>There are three different integer types, <code>smallint</code>, <code>integer</code>, and <code>bigint</code>. Documentation suggests to use <code>integer</code>, unless you're running out of space and can fit the data in the <code>smallint</code> column, or if the values you want to store do not fit in the range <code>integer</code> provides.</p>
                <p>For the sake of example here, we're going to use <code>smallint</code>, as it's good for the range -32768 to +32767, and none of our products are going to cost more than $327, and we'll ignore negative numbers for now.</p>
            </Message>

            <p>Here's the code to create a new products table that we can use:</p>

            <pre><code>{createProductTable}</code></pre>
            <p>To colour code what part does what, here's an image:</p>
            <img className="box mb-6" src={createTableImage} />

            <Message type="is-info" header="Does it matter if the SQL is not capitalized?">
                <p>In short, no. As a convention it can make life easier to visually distinguish which parts are SQL grammar (ie modifier words, etc), and which parts are given names that we provided the database with, but the part of the database that takes our query and makes sense of it will not care if the control parts are in all caps, or not.</p>
                <p>The above query looks like this with the control words in all caps:</p>
                <pre><code>{allcapsCreate}</code></pre>
            </Message>
            <p>With that, we're now ready to run this query.</p>
            <p>In supabase, go to the SQL window. It has an icon of a >_ with a border around it. See the image to help you.</p>
            <img className="box mb-6" src={queryWindowPointer} alt="screenshot of supabase interface of an arrow pointing at the SQL menu item" />
            <p>In that page, click on the + New query link at the top of the new sidebar, and copy paste the create table command into the query window on the right. It should look like this:</p>
            <img className="box mb-6" src={pastedQuery} alt="screenshot of supabase interface of the query window with the create table query pasted into it" />
            <p>Once that's there, hit cmd+enter / ctrl+enter (I don't actually know the keyboard shortcut on Windows), or click the Run button in the bottom right corner of the query window. You should see the following in the result window, below the query window:</p>
            <pre><code>Success. No rows returned</code></pre>
            <p>With that, you're ready to move on to the next page, <Link to="/basic/tables/drop">dropping tables</Link>!</p>
        </>

    )
}