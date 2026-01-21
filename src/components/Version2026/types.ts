
export interface ScheduleItem {
    time: string;
    title: string;
    description: string;
    location: string;
}

export interface Speaker {
    id: string;
    name: string;
    role: string;
    bio: string;
    imageUrl: string;
}

export interface Message {
    role: 'user' | 'model';
    text: string;
}
