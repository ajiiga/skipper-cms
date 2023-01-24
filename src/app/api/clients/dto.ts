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
}

export interface Report {
    ReportText: string;
    ReportTheme: string;
}
