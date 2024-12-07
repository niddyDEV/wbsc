import Image from 'next/image'
import Link from 'next/link'
import { PlayCircle, User } from 'lucide-react'



export default function Homepage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-purple-950 text-white">
      {/* Navigation */}
      <header className="w-full px-4 lg:px-20 h-30 flex items-center justify-between bg-black">
        <div className="container flex justify-between items-center">
          <Link className="flex items-center justify-center" href="#">
            <Image
              src="/images/WWlogo.png"
              alt="WW Logo"
              width={150}
              height={100}
              className="object-contain"
            />
          </Link>
        </div>
        <nav className="flex items-center justify-center gap-8 px-20">
          <Link href="/" className="nav-text  hover:text-gray-300">Home</Link>
          <Link href="#about" className="nav-text hover:text-gray-300">About us</Link>
          <Link href="#apply" className="nav-text hover:text-gray-300">How to apply?</Link>
          <Link href="#courses" className="nav-texthover:text-gray-300">Courses</Link>
          <div>
            <User href="/login" className="h-12 w-12 mb-2 text-white font-bold"/>
          </div>
        </nav>

      </header>
      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <div className="flex justify-center" >
            <Image
              src="/images/wiswirfull.png"
              alt="WISWIR"
              width={1000}
              height={225}
              className="object-contain items-center justify-center px-20"
            />
          </div>
          <p className="text-7xl mb-12">business school-club</p>
          <div className="text-left text-3xl ml-4 space-y-1 margin-left">
            <p>WE</p>
            <p>WORK in</p>
            <p>SPACESHARE</p>
            <p>WE</p>
            <p>WORK in</p>
            <p className="font-bold">REALITY</p>
          </div>
        </section>

        {/* Quote Section */}
        <section className="container mx-auto w-3/4 px-4 py-14 text-center border-t border-b border-white my-20">
          <p className="text-xl italic">"One of the best business school that matches our reality."</p>
          <p className="mt-4">New York Times</p>
        </section>

        {/* About Section */}
        <section id="about" className="container mx-auto px-4 py-25">
          <h2 className="text-3xl font-bold mb-8 text-center py-25">ABOUT US</h2>
          <div className="max-w-6xl text-2xl mx-auto w-3/4 space-y-6 text-gray-300">
            <p>
              Elite school "WISWIR" provides small-term and long-term courses in real work production 2.0 starting with smart/contract engineer or web 2.0 developer and ending with a management of blockchain projects and products.
            </p>
            <p>
              WISWIR suggests you, your worker or team to upgrade their experience with new cases, extraordinary problems and working with top-companies.
            </p>
            <p>
              If you do not have practical experience in managing or developing or you are trying to find something new, we can help you to choose right course.
            </p>
          </div>
        </section>

        {/* Partners Section */}
        <section className="container flex items-center justify-center mx-auto px-4 py-25">
          <div className="rectangle flex-col text-center">
            <h2 className="text-6xl font-bold mb-12 text-center text-white ">OUR PARTNERS</h2>
            <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">      
              <div className="p-6 rounded-lg px-4">
                <Link href="https://www.manchester.ac.uk/">
                  <Image
                    src = "/images/manchesteruni.png"
                    alt='Manchester University'
                    width={300}
                    height={91}
                    className="object-contain partner mx-auto" 
                  />
                </Link>
              </div>
              <div className="p-6 rounded-lg px-3">
                <Link href="https://www.lse.ac.uk/">
                  <Image
                    src = "/images/lseuni.png"
                    alt='London School of Economics University'
                    width={200}
                    height={200}
                    className="object-contain partner mx-auto"
                  />
                </Link>
              </div>
              <div className="p-6 rounded-lg px-3">
                <Link href="https://www.cbs.dk/en">
                  <Image
                    src = "/images/CBS-logo_ny.png"
                    alt='Copenhagen Business School'
                    width={300}
                    height={200}
                    className="object-contain cbs mx-auto"
                  />
                </Link>
              </div>
            </div>            
          </div>
        </section>

        {/* How to Apply Section */}
        <section id="apply" className="container mx-auto px-4 py-25">
          <h2 className="text-3xl font-bold mb-12 text-center">HOW TO APPLY?</h2>
          <div className="max-w-2xl mx-auto space-y-8">
            {[
              'Choose your course',
              'Application',
              'Interview',
              'Studying'
            ].map((step, index) => (
              <div key={step} className="flex items-center gap-4">
                <div className="flex items-center gap-4 flex-1">
                  <span className="w-8 h-8 rounded-full border-2 flex items-center justify-center">
                    {index + 1}
                  </span>
                  <div className="flex-1 h-0.5 bg-white/20"></div>
                </div>
                <div className="flex items-center gap-4">
                  <span>{step}</span>
                  <PlayCircle className="w-12 h-12" />
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-6xl text-2xl mx-auto w-3/4 space-y-6 text-gray-300 mt-20">
            <p>1. Check our entry requirements and make sure you are suitable for them.</p>
            <p>2. Make and send us your application.</p>
            <p>3. Pay application fee (we will not consider your application without fee payment).</p>
            <p>4. If you suits us, we will send you invitation to interview to check your knowledges and talk about field of activity in course you choose.</p>
            <p>5. Pay full course or make it with part-times payments.</p>
            <p>6. Start studying and working in real business today, in real time.</p>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className=" w-full flex justify-center bg-black py-6 text-sm text-gray-400">
        All rights are reserved 2024 WISWIR GROUP COMPANY.
      </footer>
    </div>
  )
}

