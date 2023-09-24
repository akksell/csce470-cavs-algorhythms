
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <div className='container mx-auto px-4 md:border md:border-violet-500'>
        <div className='flex flex-row justify-center pt-10'>
          <nav>
            <ul className='flex flex-row space-x-5'>
              <li><Link href={'#'}>home</Link></li>
              <li><Link href={'/about'}>about</Link></li>
              <li><Link href={'/records'}>records</Link></li>
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

        <div className='grid p-5 grid-cols-1 md:grid-cols-2'>
          <div className='p-3 space-y-4'>
            <h4 className='text-lg font-bold text-violet-400'>The Record Store</h4>
            <p>This is a demo project to demonstrate SEO and some of the methods used to rank web pages. This site is being optimized to support SEO for the phrase query &quot;Cav&apos;s AlgoRhythms&quot;. </p>
            <p>Also included in this project is the ability to query songs that you can stream from spotify.</p>
            <p className='text-end text-lg text-violet-500'><Link href={'/about'}>⊹ Learn More</Link></p>
          </div>

          <div className='flex flex-col items-center justify-center'>
            <div className="w-48 bg-violet-500 before:content-[''] rounded-full justify-center items-center flex animate-spin" style={{'height': '11.75rem'}}>
              <div className="w-40 h-40 bg-violet-500 before:content-[''] rounded-full border border-black justify-center items-center flex animate-spin">
                <div className="w-5/6 h-5/6 bg-violet-500 before:content-[''] rounded-full border border-black justify-center items-center flex animate-spin">
                  <div className="w-3/4 h-3/4 bg-violet-500 before:content-[''] rounded-full border border-black justify-center items-center flex animate-spin">
                    <div className="w-1/2 h-1/2 bg-white before:content-[''] rounded-full border border-black justify-center items-center flex animate-spin">
                      <div className='w-1/4 h-1/4 bg-black rounded-full'></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col py-5 items-center'>
          <div>
            <p className='text-sm'>⊹ made by <Link className='underline decoration-violet-500' href={'http://axel.to'}>Axel Ramone</Link> ⊹</p>
          </div>
          <div className='flex flex-row mt-3'>
            <ul className='flex flex-row space-x-4'>
              <li className='w-7 p-1 hover:text-violet-500 ease-in-out duration-150'><Link href={'https://github.com/akksell'}><FontAwesomeIcon icon={faGithub} /></Link></li>
              <li className='w-7 p-1 hover:text-violet-500 ease-in-out duration-150'><Link href={'https://www.linkedin.com/in/axel-ramone-051aa9235/'}><FontAwesomeIcon icon={faLinkedin} /></Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
