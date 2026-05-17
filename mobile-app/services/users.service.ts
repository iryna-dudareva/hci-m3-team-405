import { supabase } from '@/lib/supabase';

import { User } from '@/types/user';

export async function getUsers(): Promise<User[]> {
  const { data, error } = await supabase
    .from('users')
    .select('*');

  if (error) {
    console.log(error);

    return [];
  }

  return data ?? [];
}

