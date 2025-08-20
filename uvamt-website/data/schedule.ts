export interface ScheduleItem {
    time: string;
    activity: string;
}

export const schedule: ScheduleItem[] = [
    { time: "9:00 AM", activity: "Check-In" },
    { time: "10:00 AM", activity: "Opening Ceremony" },
    { time: "10:30 AM", activity: "Team Round" },
    { time: "11:15 AM", activity: "Optimization Round" },
    { time: "11:55 AM", activity: "Lunch" },
    { time: "1:10 PM", activity: "Individual Round" },
    { time: "2:20 PM", activity: "Game Round" },
    { time: "3:00 PM", activity: "Awards, Closing Ceremony" },
];

