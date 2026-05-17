import { supabase } from '@/lib/supabase';

export async function createChat(
    user1: string,
    user2: string
) {
    const { data, error } = await supabase
        .from('chats')
        .insert({
            user_1: user1,
            user_2: user2,
        })
        .select()
        .single();

    if (error) {
        console.log(error);

        return null;
    }

    return data;
}