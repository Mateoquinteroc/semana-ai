
export const DIAS = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"] as const;
export type Dia = typeof DIAS[number];

export interface ScheduleItem {
    dia: Dia;
    time: string;
    location: string;
    title: string;
    tipo: string;
    ponente: string;
    description?: string;
}

export interface Speaker {
    id: string;
    name: string;
    role: string;
    bio: string;
    imageUrl: string;
    conference?: string;
    workshop?: string;
    profile: string;
}

export interface Message {
    role: 'user' | 'model';
    text: string;
}
