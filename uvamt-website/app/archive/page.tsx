import Link from "next/link";

interface ArchiveEntry {
    year: number;
    files: { name: string; href: string }[];
}

const archive: ArchiveEntry[] = [
    {
        year: 2025,
        files: [
            { name: "UVAMT 2025 Solutions", href: "/uvamt2025solutions.pdf" },
        ],
    },
];

export default function Archive() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <main>
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-6">UVAMT Problems/Solutions Archive</h2>

                    {archive.map(({ year, files }) => (
                        <details
                            key={year}
                            className="border rounded-lg mb-4 overflow-hidden"
                        >
                            <summary className="cursor-pointer select-none px-4 py-3 font-medium bg-gray-100 hover:bg-gray-200">
                                {year}
                            </summary>

                            <ul className="space-y-1 px-8 py-4 bg-white">
                                {files.map(({ name, href }) => (
                                    <li key={name}>
                                        <Link
                                            href={href}
                                            className="text-blue-600 hover:underline"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </details>
                    ))}
                </section>
            </main>
        </div>
    );
}
