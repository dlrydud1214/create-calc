import { buttonProps } from "@/components/common/Button";

export type CalcItemType = 
| {type:'function'; value:string; color?: buttonProps["color"]; halfwidth?: boolean}
| {type:'operator'; value:string; color?: buttonProps["color"]; halfwidth?: boolean}
| {type:'number'; value:number | "."; color?: buttonProps["color"]; halfwidth?: boolean}
