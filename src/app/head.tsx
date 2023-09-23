import Script from "next/script";
import React from "react";

export default function Head() {
  return (
    <>
      <title>NovaDating</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Dating inside TelegramMessanger!" />
      <link rel="icon" href="/favicon.ico" />
      <Script src="https://telegram.org/js/telegram-web-app.js"></Script>
    </>
  )
}
