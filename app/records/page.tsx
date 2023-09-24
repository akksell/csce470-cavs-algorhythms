"use client";
import type { Metadata } from 'next'
import Link from 'next/link'
import { useState, useEffect, useMemo, ReactEventHandler, SyntheticEvent } from 'react'
import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { isEmpty, debounce, reduce, get, map } from 'lodash'
import RecordCard from '@/components/Record'

const reduceTrack = (track: { album: {}, id: string, artists: [], external_urls: {} }) => {
  const id = get(track, 'id')
  const name = get(track, 'name', 'Name')
  const image = get(track, 'album.images[0].url')
  const artists = reduce(
    get(track, 'artists'), 
    (memo: [], artist: { name: never }) => {
      memo.push(artist.name)
      return memo
    }, [])
  const url = get(track, 'external_urls.spotify')
  return {
    id,
    name,
    image,
    artists,
    url
  }
}

const RecordsPage = () => {
  const [query, setQuery] = useState<string>('')
  const [songs, setSongs] = useState<Array<Object>>([])

  const getTracks = async () => {
    const body = {
      query,
      page: 0
    }
    const response = await (await fetch(`/api/getRecord`, {
      method: 'POST',
      body: JSON.stringify(body)
    })).json()

    const { res } = response
    const { tracks } = res
    const { items } = tracks
    const songs: Array<Object> = map(items, (song: { album: {}, id: string, artists: [], external_urls: {} }) => reduceTrack(song))
    setSongs(songs)
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  const debouncedResults = useMemo(() => {
    return debounce(handleSearch, 300);
  }, []);

  useEffect(() => {
    if (query != '') {
      getTracks()
    }

    return () => {
      debouncedResults.cancel();
    };
  }, [query]);

  return (
    <>
      <Head>
        <title>Search For Records | Cav&apos;s Algorhythms </title>
      </Head>
      <div className='flex flex-row justify-center pt-10'>
        <nav>
          <ul className='flex flex-row space-x-5'>
            <li><Link href={'/'}>home</Link></li>
            <li><Link href={'/about'}>about</Link></li>
            <li><Link href={'#'}>records</Link></li>
          </ul>
        </nav>
      </div>

      <div className='flex flex-col items-center mt-5'>
        <h1 className='text-violet-500 font-rubik text-2xl md:text-5xl capitalize z-30'>Cav&apos;s AlgoRhythms</h1>
        <h1 className='text-black text-shadow shadow-violet-500 font-rubik text-2xl md:text-5xl capitalize -my-5 z-20'>Cav&apos;s AlgoRhythms</h1>
        <div className='h-50 block z-10 opacity-50'>
          <h1 className='text-black text-shadow shadow-violet-500 font-rubik text-2xl md:text-5xl capitalize'>Cav&apos;s AlgoRhythms</h1>
        </div>
      </div>

      <div className="flex flex-row justify-center my-5">
        <div className=' h-12 bg-white px-2 flex flex-row items-center w-full md:w-1/2'>
          <FontAwesomeIcon className='text-slate-500 text-xl' icon={faMagnifyingGlass} />
          <input type='text' name='search' placeholder='Search' className='text-black bg-transparent focus:outline-none w-full h-full ps-2' onChange={debouncedResults}></input>
        </div>
      </div>

      <div className='flex flex-row justify-center'>
        <div className="flex flex-col items-center w-full md:w-3/4">
          {map(songs, (song: { image: string, id: string, artists: [], name: string, url: string}) => (
            <RecordCard key={song.id} name={song.name} url={song.url} image={song.image} artists={song.artists} id={song.id} />
          ))
          }
        </div>
      </div>
    </>
  )
}

export default RecordsPage