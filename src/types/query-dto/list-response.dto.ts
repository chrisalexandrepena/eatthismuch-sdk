export type ListResponseDto<QueriedObject> = {
    meta: {
        limit: number;
        next?: unknown | null;
        offset: number;
        previous?: unknown | null;
    };
    objects: QueriedObject[];
};
