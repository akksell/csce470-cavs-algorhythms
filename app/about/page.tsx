import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "About | Cav's Algorhythms "
}

const AboutPage = () => {
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <div className='container mx-auto px-4 md:border md:border-violet-500'>
        <div className='flex flex-row justify-center pt-10'>
          <nav>
            <ul className='flex flex-row space-x-5'>
              <li><Link href={'/'}>home</Link></li>
              <li><Link href={'#'}>about</Link></li>
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

        <div className="grid grid-cols-1 md:grid-cols-2">
            <p className='px-5 py-5'>In our CSCE 470 SEO project at Texas A&M, we are taking a deep dive into the world of Search Engine Optimization (SEO). SEO is the art and science of enhancing a website&apos;s visibility on search engines like Google.</p>
            <p className='px-5 py-5'>It&apos;s a multifaceted approach that involves various strategies, from optimizing content and keywords to improving technical aspects of a website. Our current project focuses on optimizing a real website, Cav&apos;s AlgoRhythms, which serves as a digital playground for applying SEO techniques.</p>
            <p className='px-5 py-5'>To make Cav&apos;s AlgoRhythms shine in the digital realm, we are conducting extensive keyword research to understand what users are searching for in the context of algorithms and music. We are then strategically integrating these keywords into the website&apos;s content to enhance its relevance. </p>
            <p className='px-5 py-5'>Additionally, we are addressing technical SEO factors to improve the website&apos;s overall performance and user experience. By working on this project, we are not only learning the intricacies of SEO but also contributing to the success of a real online platform, making our CSCE 470 experience both educational and impactful.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutPage