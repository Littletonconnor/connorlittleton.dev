import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
  const url = new URL(context.request.url);
  
  if (url.hostname !== "elanmed.dev") {
    const redirectUrl = `https://elanmed.dev${url.pathname}${url.search}`;
    return new Response(null, {
      status: 301,
      headers: {
        Location: redirectUrl,
      },
    });
  }
  
  return next();
});