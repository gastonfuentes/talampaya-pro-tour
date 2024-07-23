import { createClient } from '@/utils/supabase/server';


export default async function TorneoPage() {

    const supabase = createClient();
    const { data: notes } = await supabase.from("pareja").select();

    return (
        <div>
            <h1>Hello Page de torneos</h1>
            <pre>{JSON.stringify(notes, null, 2)}</pre>
        </div>
    );
}