export const FacilityType = {
  PUSKESAU: 'PUSKESAU',
  RSPAU: 'RSPAU',
  RSAU: 'RSAU',
  LAKESGILUTAU: 'LAKESGILUTAU',
  LAKESPRA: 'LAKESPRA',
  LAFIAU: 'LAFIAU',
  CLINIC: 'CLINIC',
  OTHER: 'OTHER',
} as const;
export type FacilityType = (typeof FacilityType)[keyof typeof FacilityType];

export const UnitType = {
  KOTAMA: 'KOTAMA',
  LANUD: 'LANUD',
  WING: 'WING',
  DEPOHAR: 'DEPOHAR',
  BALAKPUS: 'BALAKPUS',
  PUSKESAU: 'PUSKESAU',
  OTHER: 'OTHER',
} as const;
export type UnitType = (typeof UnitType)[keyof typeof UnitType];

export const UserRole = {
  PATIENT: 'PATIENT',
  DOCTOR: 'DOCTOR',
  NURSE: 'NURSE',
  HEALTH_FACILITY_ADMIN: 'HEALTH_FACILITY_ADMIN',
  CENTRAL_ADMIN: 'CENTRAL_ADMIN',
  SUPER_ADMIN: 'SUPER_ADMIN',
} as const;
export type UserRole = (typeof UserRole)[keyof typeof UserRole];

export const PatientStatus = {
  PRAJURIT: 'PRAJURIT',
  PNS: 'PNS',
  KELUARGA: 'KELUARGA',
  SISWA: 'SISWA',
  PURNAWIRAWAN: 'PURNAWIRAWAN',
  MASYARAKAT_UMUM: 'MASYARAKAT_UMUM',
} as const;
export type PatientStatus = (typeof PatientStatus)[keyof typeof PatientStatus];

export const NeedType = {
  CONSULTATION: 'CONSULTATION',
  SUDDEN_COMPLAINT: 'SUDDEN_COMPLAINT',
  EMERGENCY: 'EMERGENCY',
  FOLLOW_UP: 'FOLLOW_UP',
  PRESCRIPTION_REFILL: 'PRESCRIPTION_REFILL',
  MEDICATION_QUESTION: 'MEDICATION_QUESTION',
  REFERRAL: 'REFERRAL',
  DENTAL: 'DENTAL',
  FLIGHT_HEALTH: 'FLIGHT_HEALTH',
  PSYCHOLOGY: 'PSYCHOLOGY',
  UPLOAD_LAB: 'UPLOAD_LAB',
  FIND_FACILITY: 'FIND_FACILITY',
  CONTACT_ADMIN: 'CONTACT_ADMIN',
} as const;
export type NeedType = (typeof NeedType)[keyof typeof NeedType];

export const NeedStatus = {
  DRAFT: 'DRAFT',
  SUBMITTED: 'SUBMITTED',
  TRIAGED: 'TRIAGED',
  ASSIGNED: 'ASSIGNED',
  IN_CONSULTATION: 'IN_CONSULTATION',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED',
} as const;
export type NeedStatus = (typeof NeedStatus)[keyof typeof NeedStatus];

export const PriorityLevel = {
  GREEN: 'GREEN',
  YELLOW: 'YELLOW',
  RED: 'RED',
} as const;
export type PriorityLevel = (typeof PriorityLevel)[keyof typeof PriorityLevel];
