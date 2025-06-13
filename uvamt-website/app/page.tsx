import Link from "next/link"

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <link rel="icon" href="favicon.ico" sizes="any" />

      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">2nd University Of Virginia Math Tournament (UVAMT)</h1>
        <p className="text-xl">March/April 2026</p>
      </header>

      <main>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">About</h2>
          <p>
            The 2st University Of Virginia Math Tournament (UVAMT) will be held Spring 2026 at the University of Virginia. UVAMT brings together talented students from across the region to tackle fun and challenging math problems.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Register</h2>
          <p className="mb-4">
            Registration is <span className="font-medium">not yet open</span>. Stay tuned for updates!
          </p>
          {/* <div className="text-center">
            <Link href="/register" className="inline-block relative px-6 py-3 font-bold text-white rounded-lg transition duration-300 
                   bg-gradient-to-r from-blue-600 to-blue-500 
                   hover:from-blue-800 hover:to-blue-700">
              Register Now
            </Link>
          </div> */}
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Schedule Outline (Approximate)</h2>
          <div className="grid grid-cols-12 gap-x-6 gap-y-2">
            <div className="col-span-3 sm:col-span-2 font-medium text-right">9:00am</div>
            <div className="col-span-9 sm:col-span-10">Check-in</div>
            
            <div className="col-span-3 sm:col-span-2 font-medium text-right">10:00am</div>
            <div className="col-span-9 sm:col-span-10">Opening Ceremony</div>
            
            <div className="col-span-3 sm:col-span-2 font-medium text-right">10:30am</div>
            <div className="col-span-9 sm:col-span-10">Team Round</div>
            
            <div className="col-span-3 sm:col-span-2 font-medium text-right">11:15am</div>
            <div className="col-span-9 sm:col-span-10">Optimization Round</div>
            
            <div className="col-span-3 sm:col-span-2 font-medium text-right">11:55am</div>
            <div className="col-span-9 sm:col-span-10">Lunch</div>
            
            <div className="col-span-3 sm:col-span-2 font-medium text-right">1:10pm</div>
            <div className="col-span-9 sm:col-span-10">Individual Round</div>
            
            <div className="col-span-3 sm:col-span-2 font-medium text-right">2:20pm</div>
            <div className="col-span-9 sm:col-span-10">Game Round</div>
            
            <div className="col-span-3 sm:col-span-2 font-medium text-right">3:00pm</div>
            <div className="col-span-9 sm:col-span-10">Awards, Closing Ceremony</div>
          </div>
        </section>
      </main>
    </div>
  );
}

