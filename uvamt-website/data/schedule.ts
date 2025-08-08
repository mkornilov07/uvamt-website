export interface ScheduleItem {
    time: string;
    activity: string;
}

export const schedule: ScheduleItem[] = [
    { time: "8:30 AM", activity: "Check-In" },
    { time: "9:30 AM", activity: "Welcome & Opening Ceremony" },
    { time: "10:00 AM", activity: "Team Round" },
    { time: "11:00 AM", activity: "Individual Round" },
    { time: "12:30 PM", activity: "Lunch Break" },
    { time: "1:30 PM", activity: "Game Round" },
    { time: "2:30 PM", activity: "Awards Ceremony" },
];
