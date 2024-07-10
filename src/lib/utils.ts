// External deps
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Internal deps
import type { FilterCondition } from "@/types/global";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Filters an array by the given conditions.
 * Each condition is a function that receives an item of the array and returns a boolean.
 *
 * @example
 * interface Person {
 *   name: string
 *   age: number
 * }
 * const data: Person[] = [{ name: 'John', age: 18 }, { name: 'Jane', age: 16 }];
 *
 * You can create conditions that don't need parameters
 * const adultFilterCondition: FilterCondition<Person> = (item) => item.age >= 18;
 *
 * Or conditions that need parameters using a High Order Function
 * const nameFilterCondition = (name: string): FilterCondition<Person> => {
 *   return (item) => item.name === name
 * };
 *
 * Usage:
 * const filteredData = filterByConditions(
 *   data,
 *   [adultFilterCondition, nameFilterCondition('John')]
 * )
 * Result: [{ name: 'John', age: 18 }]
 */
export const filterByConditions = <T>(data: T[], conditions: FilterCondition<T>[]) =>
  data.filter((item) => conditions.every((condition) => condition(item)));
