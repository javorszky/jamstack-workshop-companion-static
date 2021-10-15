import { Link } from 'react-router-dom'

import Message from './../../../components/Message'
import alterTableIllustration from '../../../assets/alter_table.jpg'

export default function TablesAlter() {
    const alterTableQuery = `alter table public.products
    add column vat_rate numeric(5, 2) null;`
    const dropColumnQuery = `alter table public.products
    drop column vat_rate;`

    return (
        <>
            <h2 className="subtitle">Alter table</h2>
            <p>There comes a time when a database table needs to be changed. In an ideal world we would avoid doing that by having a robust discovery phase and making sure we capture all the requirements upfront, to use some business / product management speak, but in reality things change as time marches forward.</p>

            <p>As an example, let's suppose that after we launch our ecommerce store with the products table tracking the id, name, price, and sku of a product, the government introduces a law that says that each product needs to be classified into one of many different cateogires, and customers would need to pay tax on top of the base price depending on what category the product is in.</p>

            <p>If that sounds familiar, I don't blame you. In the United Kingdom, where I am, this is the system of VAT. Different products have different rates, and occasionally the same products will have different rates depending on where and how you use them.</p>

            <Message type="is-link" header="Variable VATs on items based on what they are and how you use them">
                <p>HMRC (The UK's tax authority) has this <a href="https://www.gov.uk/guidance/catering-takeaway-food-and-vat-notice-7091">guidance on what VAT you need to charge on food</a> going into details as to what "hot" means, what "premises" means, and a bunch of tests to figure out what category selling that sandwich falls into.</p>
                <p>More broadly here's <a href="https://www.gov.uk/guidance/rates-of-vat-on-different-goods-and-services">the page you would use to figure out what product / service incurs what rate of VAT</a>.</p>
            </Message>

            <p>This would mean that we now need to add another column to our database which likely already has data in it, so dropping it and recreating it is not an option.</p>
            <p>So let's add a column here that will house a VAT rate. For this column the value is going to be a <code>numeric</code> type with both a precision and scale. The column is going to be nullable, because the law makes a difference between "exempt" and "0%". In this case a <code>null</code> value means there is no value specified, with the implication that it's going to be exempt. A value of "0.00" will mean there IS a rate for the product, but that rate just happens to be 0%. Here's the entire <code>alter table</code> command that will achieve what we need. Notice that I've included the schema name here too:</p>
            <pre><code>{alterTableQuery}</code></pre>
            <p>Here's the colour coded breakdown of what it does:</p>
            <img className="box my-6" src={alterTableIllustration} alt="alter table query colour coded. 'alter' is do what, 'table' is what with, public is schema name, products is table name, 'add' is do what, 'column' is with what, vat_rates is new column name, numeric(5,2) is column type, and null is column constraint" />
            <p>Specifying the schema is useful, but for our purposes not required. If it's not there, postgres will search through the schemas you have access to in a set order and applies the changes to the first table it finds in whichever schema.</p>
            <Message type="is-info" header="When schemas are required">
                <p>If you have a table present in multiple schemas, which we will have shortly, specifying the schema along with the table name is super important to avoid nasty surprises. You don't want to accidentally drop the wrong <code>users</code> table just because you forgot to specify you want to drop the <code>testing.users</code> table, where <code>testing</code> is a new schema you created.</p>
                <p>To use an analogy, say you're at your neighbour's house because they invited you over for dinner, and you're helping them with preparing food. You have a super nice turkey carving knife at home, and would love to use that, and your neighbour is helpful, so you ask them: "Hey, can you get me the turkey carving knife from the kitchen?"</p>
                <p>Because you're in <i>their</i> kitchen though, your neighbour, rightly, assumes that you want the turkey carving knife from their kitchen, and brings you their, which isn't as nice as yours.</p>
                <p>If however you asked your neighbour "Hey, can you get me the turkey carving knife from <i>my</i> kitchen?" and gave them your keys, they would return with precisely what you wanted.</p>
            </Message>
            <p>Runing the above query in the query window in supabase should yield a new "Success. No rows returned." message.</p>
            <Message type="is-warning" header="Gotcha!">
                <p>Heads up, supabase will run ALL queries currently present in the query window. If you still have the create product table query there, it will try to run that, as well as the alter table query, which will possibly fail because you already have a table with that name.</p>
                <p>It is best to either open a new query window, or delete the contents of the existing one, or comment out the contents of the existing one.</p>
                <p>In SQL, lines that start with a double dash, like this: <code>-- select ...</code>, are comments, and will be ignored.</p>
            </Message>
            <p>We can also use the <code>alter table</code> to drop a column we no longer need.</p>
            <p>To drop the freshly created <code>vat_rates</code> column, you'd need to run this query:</p>
            <pre><code>{dropColumnQuery}</code></pre>

            <Message type="is-link" header="Alter table on postgres">
                <p>The documentation on <code>alter table</code> for postgres can be found here: <a href="https://www.postgresql.org/docs/13/sql-altertable.html">https://www.postgresql.org/docs/13/sql-altertable.html</a>.</p>
            </Message>
            <p>Next up, let's learn how to <Link to="/basic/tables/copy">copy a table structure</Link>.</p>
        </>

    )
}