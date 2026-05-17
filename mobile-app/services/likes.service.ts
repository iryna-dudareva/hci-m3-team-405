import { supabase } from '@/lib/supabase';

export async function createLike(
    fromUserId: string,
    toUserId: string
) {
    const { error } = await supabase
        .from('likes')
        .insert({
            from_user_id: fromUserId,
            to_user_id: toUserId,
        });

    if (error) {
        console.log(error);
    }
}

export async function getLikedUsers(
    fromUserId: string
) {
    const { data, error } = await supabase
        .from('likes')
        .select('to_user_id')
        .eq('from_user_id', fromUserId);

    if (error) {
        console.log(error);

        return [];
    }

    return data;
}

export async function checkMatch(
    currentUserId: string,
    targetUserId: string
) {
    const { data, error } = await supabase
        .from('likes')
        .select('*')
        .eq('from_user_id', targetUserId)
        .eq('to_user_id', currentUserId)
        .single();

    if (error) {
        return false;
    }

    return !!data;
}