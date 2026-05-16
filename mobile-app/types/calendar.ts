export interface Calendar{
    id: string;
    title: string;
    date: string;
    type: 'study' | 'meeting' | 'exam' | 'custom';
    location?: string;
    desc?: string
}