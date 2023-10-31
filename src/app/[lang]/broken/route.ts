import {NextRequest, NextResponse} from "next/server";

interface RouteParams {
    params: {
        lang?: string;
    };
}


export const GET = async (
    request: NextRequest,
    { params }: RouteParams
): Promise<Response> => {
    console.log({ params });
    return new NextResponse();
}