export interface ApiResponse<T> {
    data: T,
    message: string
}

export interface ApiResponseError {
    error: string
}