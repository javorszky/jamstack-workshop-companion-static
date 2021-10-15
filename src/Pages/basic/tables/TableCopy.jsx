import { Link } from 'react-router-dom'
import Message from '../../../components/Message'
import { synopsisShort } from '../../../snippets/tableSynopsis'

export default function TablesCopy() {
    const tableCopyQuery = `create table if not exists public.products_2 (
    like public.products
    including all
    excluding comments
);`

    const tableCopyQueryMinimal = `create table products_2 (
    like public.products
);`

    return (
        <>
            <h2 className="subtitle">Copy a database table</h2>

            <p>Sometimes we'll need to copy an existing database table's structure, without the content. Situations where you have a lot of data (hundreds of millions of rows), and you need to make some changes to the structure but you want to start with what's available, but you don't want to wait until the changes are applied to all rows, or simply you want to experiment without fear of destroying data.</p>

            <p>In those cases we can use a <code>like</code> operator instead of manually specifying each individual columns.</p>
            <pre><code>{tableCopyQuery}</code></pre>
            <p>I've included some other parts in this query to illustrate additional options you can have here. I'm including the absolute minimal version of the above query later in the page.</p>
            <img className="box my-6" src="/create_table_like.jpg" alt="colour coded query: create is do what, table is with what, if not exists if do what modifier, public is schema, products_2 is table name, like is table structure specifier, public is schema name, products is table name, and including all excluding comments are structure modifiers" />
            <p>This essentially means "create a new table named products_2 that has a structure and all other parts to it as products, except for the column comments, if any. Ignore those."</p>
            <p>The absolute minimal version of the above is this:</p>
            <pre><code>{tableCopyQueryMinimal}</code></pre>
            <p>It will behave slightly differently, like throw an error if there's already a table with the name <code>products_2</code>, and will copy the comments too, but for our purposes it's the same thing.</p>

            <Message type="is-info" header="IF NOT EXIST">
                <p>A lot of queries can have this modifier on them: <code>create table</code>, <code>add column</code>, to name the two most important ones.</p>
                <p>The effect of using this in the query is that if the table / column / whatever already exists, the query is going to silently not do anything, and not raise an error. If the <code>if not exist</code> was not there, the same queries would throw an error telling you it can't complete because the thing you're trying to do is already there.</p>
                <p>This is useful for resiliency, or when all you care about is to ensure that a thing is there, but you don't care whether it's been there the whole time, or you needed to create it then.</p>
            </Message>

            <Message type="is-link" header="Reading postgres documentation">
                <p>By now you have probably seen a few postgres documentation pages and wondered how the heck are you supposed to make sense of the Synopsis that they have going on on those pages. The look like this:</p>
                <pre><code>{synopsisShort}</code></pre>
                <p>I've put together an addendum page to try to clear up and demystify some of the symbols being used there through examples and colour coding.</p>
                <p>Have a look at <Link to="/how-to-read-command-specifications">how to read documentation pages</Link>.</p>
            </Message>

            <p>We're now ready to <Link to="/basic/select">learn how to select/fetch information out from tables</Link>.</p>
        </>
    )
}