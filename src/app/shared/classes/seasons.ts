// export const Seasons = {
//     ALL_YEAR: 'ALL_YEAR',
//     SUMMER: "SUMMER", 
//     WINTER: "WINTER", 
//     SPRING: "SPRING", 
//     AUTUMN: "AUTUMN"
// } as const;
  
// export type Seasons = typeof Seasons[keyof typeof Seasons]
export type Seasons = 'ALL_YEAR' | 'SUMMER' | 'WINTER' | 'SPRING' | 'AUTUMN'
