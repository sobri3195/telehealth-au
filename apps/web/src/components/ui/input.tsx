import * as React from 'react';import { cn } from '@/lib/utils';
export const Input=React.forwardRef<HTMLInputElement,React.InputHTMLAttributes<HTMLInputElement>>(({className,...p},ref)=><input ref={ref} className={cn('h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-skyforce-500',className)} {...p}/>);Input.displayName='Input';
