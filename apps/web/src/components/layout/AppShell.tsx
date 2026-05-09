import { Outlet } from 'react-router-dom';import { BottomNavigation } from './BottomNavigation';import { EmergencyButton } from './EmergencyButton';
export const AppShell=()=> <div className="min-h-screen bg-gradient-to-b from-skyforce-50 to-slate-50"><main className="safe-bottom mx-auto max-w-2xl px-4 py-5"><Outlet/></main><EmergencyButton/><BottomNavigation/></div>;
