export type User =
    {
        name?: string | null | undefined;
        email?: string | null | undefined;
        image?: string | null | undefined;
    }

export type ExtractInformation = {
    imageUrl: string;
    response: {
        title: string;
        content: string;
        extra_informations?: string;
    }

}