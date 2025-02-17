import Link from "next/link";
import Image from "next/image";

export default function QuestionEight() {
  return (
    <div className="max-w-4xl mx-auto min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-6">Question 8</h1>
      <p className="text-lg leading-relaxed">
      How could we improve or alter this familiarization exercise? 
      </p>
      <h2 className="text-2xl font-bold mt-10 mb-4">Answer</h2>
      <p className="text-lg leading-relaxed">
      Thanks for the opportunity to learn more about Vercel and complete this exercise. <br/>I enjoyed working through all of these questions, and I found Vercel's Documentation to be very easy to navigate through.
      <br/><br/>Best Regards,
      <br/>Daniele Zils (she/her)

      


      </p>
      <div className="mt-10">
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium border border-gray-300 rounded-full hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700 transition-colors"
        >
            <Image
                      className="dark:invert"
                      src="/next.svg"
                      alt="Next.js logo"
                      width={180}
                      height={38}
                      priority
                    />
        
        </Link>
      </div>
    </div>
  );
}