/// <reference types="@fastly/js-compute" />

addEventListener("fetch", (event) => event.respondWith(handleRequest(event)));

async function handleRequest(event) {
  // Log service version
  console.log("FASTLY_SERVICE_VERSION:", fastly.env.get('FASTLY_SERVICE_VERSION' || ''));
  
  return new Response("OK", { status: 200 });
}
