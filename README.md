## NovaDating TelegramWebApp

This repository is the front-end source code of the telegram [@NovaDatingBot](https://t.me/TeleDatingBot).

This bot is written as a mini-app for [Telegram Mini-App Contest](https://t.me/contest/327).
It is developed and submitted as a dating mini-app for this contest and lets its users find their ideal friends/partner~~s~~ with mutual interests.

## Features / Flow

- No classic registrations required, users will be registered using their Telegram account.
- Choose your `Gender`, `Age`, `Interests` and upload your `profile photos` to let other users know you.
- Find friends based on your interests and filters. Like them and get their telegram username once you've matched!

## Tech Stack

- Typescript programming language, using NextJS framework.

## Build Requirements

- NodeJS
- `npm` package manager

## Build

- Clone the project.
- Run `npm install` to install required dependencies. (You can also consider using pnpm, yarn, bun or any similar package managers)
- Copy the `.env.example` to `.env` file and enter your backend server data into it.
- Run `npm run dev` to test and develop.
- To run the project in production mode, run `npm run build` and `npm run start` commands.

## Code architecture

> src/

This directory contains all the source code.

> src/api

Back-end services are defined and called here.

> src/components

All the base components used in the screens and pages are located here.

> src/contexts

React context codes like `useSession` are located here.

For example `useSession` (`MySessionProvider`) is responsible for validating the `telegram init data` and receiving the `token` from server, on start.

> src/helpers

`Localization` resources and prototype extensions are here.

> src/pages

All the routes are defined here and linked into different screens.

> src/screens

Each page in the web-application has a `screen` file here.

> src/styles

Global styles are located here.

> src/types

All the interface models used in the app, are defined here.