import Message from './../components/Message'
import tableRelations from '../assets/Table_relations.jpg'

export default function AboutRelational() {
    return (
        <>
            <h2 className="subitle">About Relational databases</h2>
            <p>Let's start with the first question: what is a database?</p>
            <p>A database is practically anything that has the capability to store some data, and give it back to you when you ask for it. In this sense a csv document is a database as well. Earlier databases included phone books - actual printed books with everyone's names and contact info in there.</p>
            <p>In more practical term, they are usually meant to represent software whose main purpose is to serve as a way for the rest of the application to store data: in this case a database is a piece of software that calls itself a database.</p>
            <p>Examples of databases include Postgres, which we'll deal with, MySQL and MariaDB, which is another super popular relational database, Mongo as a document store, and a few others like TimescaleDB, which is a time series database - a relational database with a more focused purpose.</p>
            <h3>What makes a database relational?</h3>
            <p>The idea of a relational database is that you store data in different tables which you can link together to grab related data.</p>
            <p>Contrast this with databases where the logic of storing data is not fragmented into tables; there's no concept of data being related.</p>
            <p>Examples of non-relational databases include Redis, a key-value store, Mongo, a NoSQL document store, and ElasticSearch, a full text search engine with an API.</p>
            <Message type='is-link' header='IBM on Relational databases'>
                <p className="learn-more">Here's <a href="https://www.ibm.com/cloud/learn/relational-databases">IBM's page on what a relational database is</a></p>
            </Message>
            <p>For most purposes when someone needs a database, a relational database is going to be a good way to start if they don't know any other requirements that they have besides "I have data, need to store it someplace." This makes learning about them a particularly useful skill.</p>
            <h3>Vocabulary and examples</h3>
            <p>Let's suppose we have a list of users in a table where we store a unique id, their email address, the name they gave us, and the hash of their password.</p>
            <p>We have another table where we store a list of orders by users. It would not make sense to have a separate table to store the orders for each user, so we store all of the orders, from all of the users in the same database. When we need to list the orders that a particular user has placed, we link the two tables together by the user's id (id column on the users table, and user_id column on the orders table), and pull out the records for the user from both tables.</p>
            <p>This linking, or relating, is where relational databases get their name, and it's what makes them super powerful.</p>

            <img src={tableRelations} alt="illustration showing two tables with related data highlighted" className="mb-6" />
        </>
    )
}