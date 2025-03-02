import Link from "next/link"

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">

      <main>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
          
          <div className="mb-4">
            <h3 className="font-medium">Q: When/where will the contest be hosted?</h3>
            <p>A: The contest will be hosted in-person at the University of Virginia on April 19, 2025.</p>
          </div>
          
          <div className="mb-4">
            <h3 className="font-medium">Q: How many people per team?</h3>
            <p>A: Teams will consist of 6 students. However, smaller teams or individuals are also welcome to register – we will merge them into full teams.</p>
          </div>

          <div className="mb-4">
            <h3 className="font-medium">Q: Are there prizes for winning?</h3>
            <p>A: We will award certificates and some other small prizes - stay tuned!</p>
          </div>

          <div className="mb-4">
            <h3 className="font-medium">Q: Is there a registration fee?</h3>
            <p>A: UVAMT is free for all participants.</p>
          </div>
        </section>
      </main>

      <footer className="text-center text-sm text-gray-600 pt-8 border-t">
        <p>&copy; 2025 University of Virginia Math Tournament</p>
      </footer>
    </div>
  );
}