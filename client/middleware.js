import { NextResponse } from "next/server";

const userRequestsData = function (request) {
  return (
    request.headers.get("accept").includes("text/csv") ||
    request.headers.get("accept").includes("application/json") ||
    request.nextUrl.pathname.endsWith("csv") ||
    request.nextUrl.pathname.endsWith("json")
  );
};

export function middleware(request) {
  // For pages under the /dataset route - if the user sends a request with
  // an Accept header of text/csv, then the request is forwarded to the
  // /api/dataset route.
  if (request.nextUrl.pathname.startsWith("/dataset")) {
    if (userRequestsData(request)) {
      const url = request.nextUrl.clone();
      url.pathname = "/api" + request.nextUrl.pathname;
      return NextResponse.rewrite(url);
    }
  }
  return NextResponse.next();
}
