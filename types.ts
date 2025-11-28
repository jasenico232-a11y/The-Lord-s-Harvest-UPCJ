export interface ServiceEvent {
  id: string;
  day: string;
  time: string;
  title: string;
  description: string;
}

export enum AppointmentType {
  COUNSELING = 'Counseling',
  BIBLE_STUDY = 'Bible Study',
  PRAYER_MEETING = 'Prayer Meeting',
  BAPTISM_CLASS = 'Baptism Class'
}

export interface PrayerRequest {
  name: string;
  email?: string;
  content: string;
  isPrivate: boolean;
}

export interface AIComfortResponse {
  verse: string;
  reference: string;
  message: string;
}