import Message from '../components/Message'
import { synopsis } from './../snippets/tableSynopsis'

const HowToReadDocs = () => {
  return (
    <>
      <h2 className="subtitle">How to read documentation</h2>

      <p>Reading documentation pages is of anything is a skill in and of itself, whether that's postgres, RFCs, programming languages. Your brain needs to tune into the structure that the authors have decided to standardize all the possible values.</p>
      <p>Luckily the more you do it, the more documentation you understand, the easier it becomes to figure out docs of a new thing.</p>
      <p>We're going to work with this snippet from the postgres <a href="https://www.postgresql.org/docs/13/sql-createtable.html">create table documentation:</a></p>
      <pre><code>{synopsis}</code></pre>
      <p>This is a lot to take in, so let's start with some basics here.</p>
      <h3>Symbols</h3>
      <p>There are a few structural elements that we can recognise here</p>
      <h4>1. Anything that does not have a parenthesis around it is required</h4>
      <p>Let's use the first line for this:</p>
      <pre><code><span className="bg-paleblue p-2">CREATE</span> [ [ GLOBAL | LOCAL ] &#123; TEMPORARY | TEMP &#125; | UNLOGGED ] <span className="bg-paleblue p-2">TABLE</span> [ IF NOT EXISTS ] <span className="bg-paleblue p-2">table_name</span></code></pre>
      <p>Anything else in this can be omitted, and the query would still succeed. It would mean something different without them, but the command itself would still be valid. This is the reduced required part of the first line:</p>
      <pre><code>CREATE TABLE table_name</code></pre>

      <h4>2. Anything between <code>[ ]</code> is optional</h4>
      <p>Using the same first line, these are optional:</p>
      <pre><code>CREATE <span className="bg-lime p-2">[ <span className="bg-purple p-2 has-text-white">[ GLOBAL | LOCAL ]</span> &#123; TEMPORARY | TEMP &#125; | UNLOGGED ]</span> TABLE <span className="bg-lime p-2">[ IF NOT EXISTS ]</span> table_name</code></pre>
      <p>Note that here the <code>[ GLOBAL | LOCAL ]</code> itself is optional within the larger outer optional bits, which means all of these would be correct:</p>
      <pre><code>CREATE TEMPORARY TABLE IF NOT EXISTS table_name</code></pre>
      <pre><code>CREATE GLOBAL TEMPORARY TABLE IF NOT EXISTS table_name</code></pre>

      <h4>3. Things separated by a pipe character (<code>|</code>) and maybe enclosed by curly braces (<code>&#123; &#125;</code>) are exclusive "one of" and you should choose one</h4>
      <p>Essentially you need to choose one from them.</p>

      <pre><code>CREATE [ <span className="bg-cyan p-2">[ <span className="bg-red p-2">GLOBAL | LOCAL</span> ] &#123; <span className="bg-red p-2">TEMPORARY | TEMP</span> &#125; | UNLOGGED</span> ] TABLE [ IF NOT EXISTS ] table_name</code></pre>
      <p>These mean that if you're adding the optional part, then you need to choose between <code>[ GLOBAL | LOCAL ] &#123; TEMPORARY | TEMP &#125;</code> and <code>UNLOGGED</code>.</p>
      <p>If you choose <code>UNLOGGED</code>, you're done, move on to the next section. If you chose the left side, then the parts in the curly braces, <code>&#123; TEMPORARY | TEMP &#125;</code> are required (which is why they're not in square brackets), but their meaning is identical here, but you still have to choose one form.</p>
      <p>Let's say you went with the shorter, so now your left side looks like <code>[ GLOBAL | LOCAL ] TEMP</code>, and you decide to include the optional parts where you need to decide between <code>GLOBAL</code> and <code>LOCAL</code>. Supposing you chose <code>GLOBAL</code>, the full resulting query will look like this:</p>
      <pre><code>CREATE GLOBAL TEMP TABLE table_name</code></pre>

      <h4>4. Parens (<code>( )</code>) are literal, and required</h4>
      <p>Taking the first entire block of the synopsis as example: </p>
      <pre><code>{`CREATE [ [ GLOBAL | LOCAL ] { TEMPORARY | TEMP } | UNLOGGED ] TABLE [ IF NOT EXISTS ] table_name `}<span className="bg-paleblue p-2">(</span>{` [
  { column_name data_type [ COLLATE collation ] [ column_constraint [ ... ] ]
    | table_constraint
    | LIKE source_table [ like_option ... ] }
    [, ... ]
] `}<span className="bg-paleblue p-2">)</span></code></pre>

      <h4>5. Three dots (<code>...</code>) means the preceding element can be repeated</h4>
      <pre><code>{`CREATE [ [ GLOBAL | LOCAL ] { TEMPORARY | TEMP } | UNLOGGED ] TABLE [ IF NOT EXISTS ] table_name ( [
  { column_name data_type [ COLLATE collation ] [ `}<span className="bg-paleblue p-2">column_constraint</span> <span className="bg-lime p-2">[ <span className="bg-orange p-2">...</span> ]</span>{` ]
    | table_constraint
    | LIKE source_table [ `} <span className="bg-paleblue p-2">like_option</span> <span className="bg-orange p-2">...</span> {`] }
    [, ... ]
] )`}</code></pre>
      <p>In the above, the <code>column_constraint</code> can be optionally repeated as many times as you need it to. Similarly <code>like_optiona</code> can be repeated. In these cases, they need to be separated by a space between them.</p>
      <p>For example the <code>column_constraint</code> would look like this:</p>
      <pre><code>{`CREATE TABLE example (
  `}id bigint <span className="bg-paleblue p-2">not null</span> <span className="bg-paleblue p-2">default 0</span>{`
)`}</code></pre>
      <p>In the above, <i>id</i> is <code>column_name</code>, <i>bigint</i> is <code>column_type</code>, and both <i>not null</i> and <i>default 0</i> are <code>column_constraint</code>s.</p>

      <p>Illustrating the outer repetition separately to make it clear what the last one refers to:</p>
      <pre><code>{`CREATE [ [ GLOBAL | LOCAL ] { TEMPORARY | TEMP } | UNLOGGED ] TABLE [ IF NOT EXISTS ] table_name ( [
  `}<span className="bg-paleblue p-2">{`{ column_name data_type [ COLLATE collation ] [ column_constraint [ ... ] ]
    | table_constraint
    | LIKE source_table [ like_option ... ] }`}</span>{`

   `}<span className="bg-lime p-2">[<span className="bg-orange p-2">, ...</span> ]</span>{`
] )`}</code></pre>
      <p>In this case the entire region inside the curly braces can be repeated, however importantly they need to be separated by a comma. See the comma in front of the three dots? This is why a create table command looks like this:</p>
      <pre><code>{`CREATE TABLE products (import Message from '../components/Message';

    id UUID NOT NULL DEFAULT uuid_generate_v4()`}<span className="bg-paleblue p-2">,</span>{`
    name TEXT NOT NULL`}<span className="bg-paleblue p-2">,</span>{`
    price SMALLINT`}<span className="bg-paleblue p-2">,</span>{`
    sku TEXT NOT NULL
);`}</code></pre>


      <h4>6. There are substitutions with where clauses</h4>
      <p>If you look at the actual postgres documentation, their synopsis has some of the lowercase parts in bold and italics, like so:</p>
      <pre><code>{`CREATE [ [ GLOBAL | LOCAL ] { TEMPORARY | TEMP } | UNLOGGED ] TABLE [ IF NOT EXISTS ] `}<b><i>table_name</i></b>{` ( [
  { `}<b><i>column_name data_type</i></b>{` [ COLLATE `}<b><i>collation</i></b>{` ] [ `}<span className="bg-lime p-2"><b><i>column_constraint</i></b></span>{` [ ... ] ]
    | `}<b><i>table_constraint</i></b>{`
    | LIKE `}<b><i>source_table</i></b>{` [ `}<b><i>like_option</i></b>{` ... ] }
    [, ... ]
] )`}</code></pre>

      <p>Those bold and italics can refer discrete things, or further definitions. For example <b><i>table_name</i></b>, and <b><i>data_type</i></b> are discrete things with explanations further down the documentation.</p>

      <p>Something like <b><i>column_constraint</i></b> however is not in the documentation notes, instead you can find this later in the same synopsis:</p>
      <pre><code>{`where `}<b><i>column_constraint</i></b>{` is:

[ CONSTRAINT `}<b><i>constraint_name</i></b>{` ]
{ NOT NULL |
  NULL |
  CHECK ( `}<b><i>expression</i></b>{` ) [ NO INHERIT ] |
  DEFAULT `}<b><i>default_expr</i></b>{` |
  GENERATED ALWAYS AS ( `}<b><i>generation_expr</i></b>{` ) STORED |
  GENERATED { ALWAYS | BY DEFAULT } AS IDENTITY [ ( `}<b><i>sequence_options</i></b>{` ) ] |
  UNIQUE `}<b><i>index_parameters</i></b>{` |
  PRIMARY KEY `}<b><i>index_parameters</i></b>{` |
  REFERENCES `}<b><i>reftable</i></b>{` [ ( `}<b><i>refcolumn</i></b>{` ) ] [ MATCH FULL | MATCH PARTIAL | MATCH SIMPLE ]
    [ ON DELETE `}<b><i>referential_action</i></b>{` ] [ ON UPDATE `}<b><i>referential_action</i></b>{` ] }
[ DEFERRABLE | NOT DEFERRABLE ] [ INITIALLY DEFERRED | INITIALLY IMMEDIATE ]`}</code></pre>

      <p>It's a fragment with rules on its own. You could technically substitue this entire codebase to where <b><i>column_constraint</i></b> is, but this is what it would look like:</p>

      <pre><code>{`CREATE [ [ GLOBAL | LOCAL ] { TEMPORARY | TEMP } | UNLOGGED ] TABLE [ IF NOT EXISTS ] `}<b><i>table_name</i></b>{` ( [
  { `}<b><i>column_name data_type</i></b>{` [ COLLATE `}<b><i>collation</i></b>{` ] [ `}<span className="bg-lime p-2">{`[ CONSTRAINT `}<b><i>constraint_name</i></b>{` ]
    { NOT NULL |
      NULL |
      CHECK ( `}<b><i>expression</i></b>{` ) [ NO INHERIT ] |
      DEFAULT `}<b><i>default_expr</i></b>{` |
      GENERATED ALWAYS AS ( `}<b><i>generation_expr</i></b>{` ) STORED |
      GENERATED { ALWAYS | BY DEFAULT } AS IDENTITY [ ( `}<b><i>sequence_options</i></b>{` ) ] |
      UNIQUE `}<b><i>index_parameters</i></b>{` |
      PRIMARY KEY `}<b><i>index_parameters</i></b>{` |
      REFERENCES `}<b><i>reftable</i></b>{` [ ( `}<b><i>refcolumn</i></b>{` ) ] [ MATCH FULL | MATCH PARTIAL | MATCH SIMPLE ]
        [ ON DELETE `}<b><i>referential_action</i></b>{` ] [ ON UPDATE `}<b><i>referential_action</i></b>{` ] }
    [ DEFERRABLE | NOT DEFERRABLE ] [ INITIALLY DEFERRED | INITIALLY IMMEDIATE ]`}</span>{` [ ... ] ]
    | `}<b><i>table_constraint</i></b>{`
    | LIKE `}<b><i>source_table</i></b>{` [ `}<b><i>like_option</i></b>{` ... ] }
    [, ... ]
] )`}</code></pre>

      <p>I hope you agree that this would very quickly get out of hand. The same rules about parens, optional parts, exclusive choices and required exclusive choices, repetitions, and substitutions still apply in any part of the substitution definitions.</p>

      <Message type="is-link" header="Postgres's doc page on this">
        <p>There is a documentation page at Postgres for this, but it's maybe 5 lines, and they don't go into details as much and there are no examples of this. If you'd still like to see, here's the <a href="https://www.postgresql.org/docs/13/notation.html">page on conventions used in the docs</a>.</p>
      </Message>
    </>
  )
}

export default HowToReadDocs