import Home from './Pages/Home'
import AboutGabor from './Pages/AboutGabor'
import AboutRelational from './Pages/AboutRelational'
import InitialSetup from './Pages/InitialSetup'
import NotFound from './NotFound'

import BasicOverview from './Pages/basic/Overview'
import FirstSteps from './Pages/basic/FirstSteps'
import TableOperations from './Pages/basic/tables/Overview'

import CreateTable from './Pages/basic/tables/TableCreate'
import DropTable from './Pages/basic/tables/TableDrop'
import AlterTable from './Pages/basic/tables/TableAlter'
import CopyTable from './Pages/basic/tables/TableCopy'

import SelectOverview from './Pages/basic/select/Overview'
import RenameColumns from './Pages/basic/select/FetchRename'
import SomeColumns from './Pages/basic/select/FetchSome'
import SelectWhere from './Pages/basic/select/FetchWhere'

import InsertOverview from './Pages/basic/insert/Overview'
import InsertDefaults from './Pages/basic/insert/InsertDefaults'
import InsertBulk from './Pages/basic/insert/InsertBulk'
import InsertSelect from './Pages/basic/insert/InsertSelect'

import UpdateOverview from './Pages/basic/update/Overview'

import DeleteOverview from './Pages/basic/delete/Overview'
import DeleteOne from './Pages/basic/delete/DeletingOne'
import DeleteMany from './Pages/basic/delete/DeletingMany'
import DeleteTruncate from './Pages/basic/delete/DeletingEverything'

import JoinsOverview from './Pages/joins/Overview'
import JoinTypes from './Pages/joins/JoinTypes'
import JoinsInner from './Pages/joins/InnerJoins'
import JoinsOuter from './Pages/joins/OuterJoins'

import IndexesOverview from './Pages/indexes/Overview'
import IndexTypes from './Pages/indexes/IndexTypes'
import IndexesUnique from './Pages/indexes/Unique'
import IndexesPartial from './Pages/indexes/Partial'
import IndexesCompound from './Pages/indexes/Compound'
import IndexesCovering from './Pages/indexes/Covering'

import ProceduresOverview from './Pages/procedures/Overview'
import StoredProcedure from './Pages/procedures/StoredProcedures'
import Trigger from './Pages/procedures/Triggers'
import ProcedureUsecases from './Pages/procedures/UseCases'

import SupabaseOverview from './Pages/supabase/Overview'
import SupabaseAuth from './Pages/supabase/Auth'
import SupabaseFetch from './Pages/supabase/Fetch'
import SupabaseInsert from './Pages/supabase/InsertUpsert'
import SupabaseDelete from './Pages/supabase/Delete'
import SupabaseRPC from './Pages/supabase/RPC'

const routes = [
    {
        path: '/about-gabor',
        component: AboutGabor
    },
    {
        path: '/about-relational-databases',
        component: AboutRelational,
    },
    {
        path: '/initial-setup',
        component: InitialSetup
    },
    // Baisc operations
    {
        path: '/basic',
        component: BasicOverview
    },
    {
        path: '/basic/first',
        component: FirstSteps
    },
    {
        path: '/basic/tables',
        component: TableOperations
    },
    // Basic operations / tables
    {
        path: '/basic/tables/create',
        component: CreateTable
    },
    {
        path: '/basic/tables/drop',
        component: DropTable
    },
    {
        path: '/basic/tables/alter',
        component: AlterTable
    },
    {
        path: '/basic/tables/copy',
        component: CopyTable
    },
    // Basic operations / fetching data
    {
        path: '/basic/select',
        component: SelectOverview
    },
    {
        path: '/basic/select/renaming-columns',
        component: RenameColumns
    },
    {
        path: '/basic/select/fetching-only-some-columns',
        component: SomeColumns
    },
    {
        path: '/basic/select/where',
        component: SelectWhere
    },
    // Basic operations / insert
    {
        path: '/basic/insert',
        component: InsertOverview
    },
    {
        path: '/basic/insert/insert-with-defaults',
        component: InsertDefaults
    },
    {
        path: '/basic/insert/bulk-inserts',
        component: InsertBulk
    },
    {
        path: '/basic/insert/select',
        component: InsertSelect
    },

    // Basic operations / updating data
    {
        path: '/basic/update',
        component: UpdateOverview
    },

    // Basic operations / delete
    {
        path: '/basic/delete',
        component: DeleteOverview
    },
    {
        path: '/basic/delete/delete-one',
        component: DeleteOne
    },
    {
        path: '/basic/delete/delete-many',
        component: DeleteMany
    },
    {
        path: '/basic/delete/truncate',
        component: DeleteTruncate
    },

    // Table joins
    {
        path: '/joins',
        component: JoinsOverview
    },
    {
        path: '/joins/types',
        component: JoinTypes
    },
    {
        path: '/joins/inner',
        component: JoinsInner
    },
    {
        path: '/joins/outer',
        component: JoinsOuter
    },

    // Indexes and constraints
    {
        path: '/indexes',
        component: IndexesOverview
    },
    {
        path: '/indexes/indextypes',
        component: IndexTypes
    },
    {
        path: '/indexes/unique',
        component: IndexesUnique
    },
    {
        path: '/indexes/partial',
        component: IndexesPartial
    },
    {
        path: '/indexes/compound',
        component: IndexesCompound
    },
    {
        path: '/indexes/covering',
        component: IndexesCovering
    },

    // Stored procedures and triggers
    {
        path: '/storedprocedures',
        component: ProceduresOverview
    },
    {
        path: '/storedprocedures/procedure',
        component: StoredProcedure
    },
    {
        path: '/storedprocedures/trigger',
        component: Trigger
    },
    {
        path: '/storedprocedures/usecases',
        component: ProcedureUsecases
    },

    // Supabase API

    {
        path: '/supabaseapi',
        component: SupabaseOverview
    },
    {
        path: '/supabaseapi/auth',
        component: SupabaseAuth
    },
    {
        path: '/supabaseapi/fetch',
        component: SupabaseFetch
    },
    {
        path: '/supabaseapi/insert-upsert',
        component: SupabaseInsert
    },
    {
        path: '/supabaseapi/delete',
        component: SupabaseDelete
    },
    {
        path: '/supabaseapi/rpc',
        component: SupabaseRPC
    },
    {
        path: '/',
        component: Home,
    },
    {
        path: '*',
        component: NotFound
    }
]

export default routes