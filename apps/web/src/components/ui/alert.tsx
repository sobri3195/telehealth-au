import type React from 'react';import { cn } from '@/lib/utils';
export const Alert=({className,...p}:React.HTMLAttributes<HTMLDivElement>)=><div className={cn('rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm',className)} {...p}/>;
