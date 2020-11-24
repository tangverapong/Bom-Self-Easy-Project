export interface WonModel {
    previewHash: string,
    user: string,
    date: string,
    time: string,
    email: string,
    aspectRatio: string,
    id: string,
    name: string,
    channel: string,
    requestedAt: string,
    parameters: graphicParameter[]
}

export interface graphicParameter {
    type: string,
    name: string,
    values: string[]
}