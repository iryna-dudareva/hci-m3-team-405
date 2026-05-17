import { supabase } from '@/lib/supabase';

export async function getMessages(
    chatId: string
) {
    const { data, error } = await supabase
        .from('messages')
        .select('*')
        .eq('chat_id', chatId)
        .order('created_at', {
            ascending: true,
        });

    if (error) {
        console.log(error);

        return [];
    }

    return data;
}

export async function sendMessageToChat(
    chatId: string,
    senderId: string,
    text: string
) {
    const { error } = await supabase
        .from('messages')
        .insert({
            chat_id: chatId,
            sender_id: senderId,
            text,
        });

    if (error) {
        console.log(error);
    }
}