import { Link } from "react-router-dom"
import Message from "../../components/Message"

export default function JoinsOverview() {
    return (
        <>
            <h2 className="subtitle mb-6">Table joins</h2>
            <p>The whole reason for the existence of a relational database is the relationships part. The other side of that is the answer to the question: relationships between <i>what</i>?</p>

            <p>To answer that question we need to talk about <i><b>normalization of data</b></i>.</p>

            <h3 className="mb-6">Normalization of data</h3>

            <p>In a database table you have a set of columns with a rigid set of structure. Sure, some of the columns can be made to store arbitrary data, like <code>TEXT</code>, or <code>JSONB</code>, but they are still rigid in their structure: they will still be <code>TEXT</code>, or <code>JSONB</code>, regardless of what the actual data being stored is.</p>

            <p>That also means that whatever you want to store needs to have its data laid out in such a way that it neatly fits into that rigid structure. For complex collections of data this means breaking up the collection into smaller, normalized pieces.</p>

            <p>For example let's look at the complete data stored for a customer in our hypothetical ecommerce website. They would have generated the following data:</p>

            <ul>
                <li>Their name, email address, password (which we're storing hashed)</li>
                <li>Billing addresses</li>
                <li>Payment methods</li>
                <li>Shipping addresses, including shipping names (for example buying a gift for grandparents)</li>
                <li>Saved wishlists of products</li>
                <li>Orders</li>
                <li>Reviews left on products</li>
                <li>Cart data</li>
                <li>Logged in sessions</li>
            </ul>

            <p>You can represent this as a huge json object with keys for each section and arrays to hold a collection of objects for them.</p>

            <p>In a relational database world, each of these would live in their own table and they'd need to conform to the structure of that table. Some of the tables would have very simple structures, like the saved wishlists of products, though that would involve four tables, others would be more involved, like the shipping addresses and names.</p>

            <Message type="is-info" header="Structure for wishlists">
                <p>You might be wondering why I said the structure for wishlists would be simple even though it would involve four different tables. Here's how I imagine this being laid out:</p>

                <p>I'm assuming that we already have a <b><i>users</i></b> table where each row corresponds to a registered user. These rows would have a unique ID of some sort. This is table one.</p>

                <p>I'm also assuming that we have a global <b><i>products</i></b> table which has information about every product we're selling. This table would also have a unique ID.</p>

                <p>The other two tables would have the wishlists, and the products in them.</p>

                <p>The wishlist table would have three columns:</p>
                <ol>
                    <li>A unique ID for the wishlist</li>
                    <li>A column that references the user this wishlist belongs to with the same structure as the users table's ID field (we'll learn about these in indexes)</li>
                    <li>A text field to name the list, like "Gabor's Xmas 2021 list"</li>
                </ol>

                <p>This way we can create an arbitrary number of wishlists for any user, and we can make sure that any wishlist only belongs to one user.</p>

                <p>The fourth table would house only relationships, with maybe extra data. This would be a pivot table. The columns would be:</p>
                <ol>
                    <li>A unique ID for each row for easier removal (it's easiest to remove something by its unique ID)</li>
                    <li>A column for the wishlist ID, which references the unique ID column of the wishlist table.</li>
                    <li>A column for the product ID, which refeences the unique ID column of the products table</li>
                    <li>And optionally a quantity column</li>
                </ol>
                <p>Note that wishlist_id and product_id columns here are not unique because you need to be able to store multiple rows with the same data.</p>
            </Message>

            <p>Because data lives in separate tables in normalized structures, if you want to have a clearer picture about something, you will most likely need to pull data from many tables to complete the answer you're looking for.</p>

            <p>The answer to the query: "Get me all the products, their prices for the first wishlist for the currently logged in user, and give me their name" would involve querying 5 different tables. You can do it in 4 distinct passes:</p>
            <ol>
                <li>Query sessions table for presented logged in cookie, which would yield a user id</li>
                <li>Query the users table for the name by using the user id you got from the sessions table</li>
                <li>Query the wishlists table for the lists for the user id, and select the oldest one (one with the lowest unique id), which gives you the wishlist id</li>
                <li>Query the wishlist/product pivot table for the wishlist id to get you the ids of the products, and their quantites</li>
                <li>And finally query the products table for the list of product ids to get their prices</li>
            </ol>
            <p>And once you've done all of that, stitch all this data together in the application.</p>

            <p>Or you could have one query and use table joins and get everything in one go because they're all related. This entire chapter talks about how to achieve that.</p>

            <p>Let's start by talking about <Link to="/joins/types">join types</Link> between tables.</p>
        </>
    )
}