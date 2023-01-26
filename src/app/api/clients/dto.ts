export interface ClientRegistry {
    clients: Client[];
    clients_count: number;
    clients_count_search: number;
}

export interface Client {
    FirstName: string;
    SecondName: string;
    Patronymic: string;
    Phone: string;
    Email: string;
    Time: string;
    Reports: Report[];
    Rating: number;
    CreatedAt: string;
    Statistic: Statistic;
}

export interface Report {
    ReportText: string;
    ReportTheme: string;
}

export interface Statistic {
    lessons_count: number;
    uncomplited_lessons: number;
}
