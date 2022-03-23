

export type LangType = "FR" | "EN"


export interface WordData {

    word?: string,
    cat?: string,
    langage: LangType,
}

export interface JsonData {
    LANG: LangType,
    CAT : string,
    DATA: string[]
}

