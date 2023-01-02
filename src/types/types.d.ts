export type Intent = {
    id: string
    name: string
    description: string
    trainingData: {
        expressionCount: number,
        expressions: Expressions[]
    }
    reply: Expressions
}

export type Expressions ={
    id: string,
    text: string
}