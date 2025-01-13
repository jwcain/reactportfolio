export type Experience = {
    title: string,
    employer: string,
    location: string,
    description: string,
    date: string,
    details: string[]
}


export type Link = {
    url: string,
    name: string,
    icon: string,
}

export type Project = {
    title: string,
    description: string,
    links: Link[]
    tags: string[],
}
export type Ingredient = {
    name: string,
    amount: string,
}

export type RecipeStep = {
    description: string,
    ingredient: Ingredient[]
}

export type Recipe = {
    title: string,
    description: string,
    steps: RecipeStep[]
}

export type Biography = {
    name: string,
    description: string,
    email: string,
}