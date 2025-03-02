import Link from "next/link"

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">

      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">1st University Of Virginia Math Tournament (UVAMT)</h1>
        <p className="text-xl">Saturday, April 19, 2025</p>
      </header>

      <main>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">About</h2>
          <p>
            The 1st University Of Virginia Math Tournament (UVAMT) will be held on <span className="font-medium">Saturday, April 19</span> at the University of Virginia.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Register</h2>
          <p className="mb-4">
            Registration is <span className="font-medium">open</span>! Team members may register using the following form.
          </p>
          <div className="text-center">
            <Link href="/register" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Register Now
            </Link>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Schedule Outline</h2>
          <div className="grid grid-cols-12 gap-x-6 gap-y-2">
            <div className="col-span-3 sm:col-span-2 font-medium text-right">9:00am</div>
            <div className="col-span-9 sm:col-span-10">Check-in, Setup</div>
            
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

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>Contact information will be posted soon.</p>
        </section>
      </main>

      <footer className="text-center text-sm text-gray-600 pt-8 border-t">
        <p>&copy; 2025 University of Virginia Math Tournament</p>
      </footer>
    </div>
  );
}