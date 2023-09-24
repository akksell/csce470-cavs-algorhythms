import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "About | Cav's Algorhythms "
}

const AboutPage = () => {
  return (
    <>
      <div className='flex flex-row justify-center pt-10'>
        <nav>
          <ul className='flex flex-row space-x-5'>
            <li><Link href={'/'}>home</Link></li>
            <li><Link href={'#'}>about</Link></li>
            <li><Link href={'/records'}>records</Link></li>
          </ul>
        </nav>
      </div>

      <div className="h-screen flex flex-row justify-center items-center">
          <h1>Coming Soon</h1>
      </div>
    </>
  )
}

export default AboutPage