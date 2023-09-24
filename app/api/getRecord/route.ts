import { type NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
const request = require('request');

const AUTH_URL = 'https://accounts.spotify.com/api/token'
const BASE_SEARCH_URL = 'https://api.spotify.com/v1/search'

const getAuthToken = async (hasError: boolean) => {
  const globalWithSpotify = global as typeof globalThis & {
    SPOTIFY_TOKEN?: string;
  }

  if (globalWithSpotify.SPOTIFY_TOKEN && !hasError) {
    return globalWithSpotify.SPOTIFY_TOKEN
  }

  const req = {
    url: AUTH_URL,
    headers: {
      Authorization: 'Basic ' + (Buffer.from(process.env.SPOTIFY_CLIENT + ':' + process.env.SPOTIFY_SECRET).toString('base64'))
    },
    form: {
      grant_type: 'client_credentials'
    },
    json: true
  }
  const token: string = await (new Promise((resolve, reject) => {
    request.post(req, (error: object, response: { status: number }, body: { access_token: string }) => {
      resolve(body.access_token)
    })
  }))

  globalWithSpotify.SPOTIFY_TOKEN = token

  return token
}

export async function POST(request: NextRequest) {
  const { query, page } = await request.json()

  let token = await getAuthToken(false)

  const SEARCH_URL = `${BASE_SEARCH_URL}?q=${query}&offset=${page ?? 1}&type=track`

  const songReq = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    },
  }
  let res = await (await fetch(SEARCH_URL, songReq)).json()

  // get a new token and submit request again
  if (res.error && res.error.status == 401) {
    token = await getAuthToken(true)
    res = await (await fetch(SEARCH_URL, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      },
    })).json()
  }

  return NextResponse.json({ res })
}