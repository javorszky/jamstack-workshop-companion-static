import Message from '../../../components/Message';

export default function FetchSome() {
    return (
        <>
            <h2 className="subtitle">Fetch only some columns</h2>

            <p>In the previous section we looked at the generic simple select query, which looked like this. Notice the star:</p>
            <pre><code>{`SELECT `}<span className="bg-lime p-2">*</span>{` FROM public.products;`}</code></pre>
            <p>That star means <b><i>everything</i></b> from the table: all columns of data. Because there's no <code>where</code> clause there (we'll get into that shortly), it will also try to return all rows in the table.</p>

            <p>For a practical example here, we will need to copy some data from the users table that supabase itself uses to keep track of the users that interact with its authentication libraries. If you haven't done so, on the example site I had you cloned and spun up, there's a Sign up / Log in button in the top right corner. Sign up or log in. Note that you had to give an email address, and choose a password.</p>
            <p>Those details are stored <i>somewhere</i>, but if you look at your tables in the supabase UI (screenshot below), you don't have a users table.</p>

            <img src="/tables_schema_selection.jpg" alt="screenshot of supabase ui, red arrow pointing to the table icon that looks like a grid, immediately under the home button, blue arrow pointing to a select element in the sidebar of the table page to choose schema" className="my-6 box" />

            <p>Supabase has a table called users in the <b><i>auth</i></b> schema. Here are a few ways to figure that out.</p>

            <h3>List a record of all tables in all schemas</h3>
            <p>Every postgres database will have a few built in schemas and tables or views to hold its own record of what's where: how many tables there are, what those tables look like, what they are called, what constraints exist on them, and so on.</p>

            <Message type="is-link" header="What is a view?">
                <p>A view and a table are very similar to each other in that you can query the data out of them using the same syntax, and pretend that a view was a table.</p>
                <p>The difference however is that technically a view does not exist. It's not a table, in which it doesn't have its data stored somewhere, like a table. It's a virtual construct that may depend on many other tables, or even other views.</p>
                <p>The easiest analogy to React or Vue is that a View is kind of like a computed property: it exists, but it depends on other properties, and it changes when the underlying data changes too.</p>
                <p>Here are some useful links for more info if you want to dive deeper:</p>
                <ul>
                    <li><a href="https://en.wikipedia.org/wiki/View_(SQL)">View definition on WikiPedia</a></li>
                    <li><a href="https://www.postgresql.org/docs/13/tutorial-views.html">View on Postgres documentation</a></li>
                </ul>
            </Message>

            <p>One of the tables and schemas that are common across both MySQL and Postgres is the <a href="https://www.postgresql.org/docs/13/information-schema.html"><b><i>information_schema</i></b> concept</a>. To grab a list of all tables in that schema, we can use this query:</p>

            <pre><code>{`SELECT * FROM information_schema.tables where table_schema = 'information_schema';`}</code></pre>

            <p>You can go ahead, open a new query window, paste that in there, and run it. You should get a lot of rows of information along with a LOT of columns. For our purposes we only care about the following columns</p>

            <img src="/select_columns_1.jpg" alt="" className="box my-6" />
        </>
    )
}