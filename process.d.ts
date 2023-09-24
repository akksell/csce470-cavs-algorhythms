declare namespace NodeJS {
  export interface ProcessEnv {
    SPOTIFY_CLIENT: string;
    SPOTIFY_SECRET: string;
    BASE_URL: string;
  }
}

declare global {
  var SPOTIFY_TOKEN: string;
}