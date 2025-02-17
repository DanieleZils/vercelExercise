import Link from "next/link";

export default function QuestionOne() {
  return (
    <div className="max-w-4xl mx-auto min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-6">Question 1</h1>
      <p className="text-lg leading-relaxed">
        An Enterprise customer has come to you to ask about the difference between React and Next.js and what the benefits are of using Next.js for her team. Please write a response to the customer.
        <br /><br />
        a. Your customer is Christy (she/her), a project manager for the marketing department of a wearable tech company – in charge of making sure the marketing pages meet their core web vitals, SEO best practices, and conversion rate goals.
      </p>
      <h2 className="text-2xl font-bold mt-10 mb-4">Answer</h2>
      <p className="text-lg leading-relaxed">
        Hello Christy,
        <br /><br />
        I hear that you’re looking for the best solution to help your marketing campaigns thrive. If you prioritize a solution that ensures fast page loading, ranks well on search engines, and drives conversions, Next.js will best fit your team.
        <br /><br />
        React is an excellent library for building dynamic user interfaces, but it often requires extra work to optimize performance and improve SEO—both of which are essential for your marketing goals.
        <br /><br />
        Next.js provides these enhancements out of the box. It offers server-side rendering and static site generation, meaning your pages are pre-rendered and load quickly—boosting your core web vitals and SEO performance. This lets your team focus on creating great content without worrying about technical details.
        <br /><br />
        Here is a helpful resource that will assist your team in making an informed decision and kickstarting development:{" "}
        <a
          href="https://nextjs.org/docs/app/building-your-application/upgrading/single-page-applications"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline hover:text-blue-700"
        >
          Next.js Documentation
        </a>
        <br /><br />
        I hope this helps! We can schedule a quick chat to go over these details if you'd like.
        <br /><br />
        Daniele Zils (she/her)
        <br/>
        Customer Success Manager
      </p>
      <div className="mt-10">
        <Link
          href="/questions/2"
          className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium border border-gray-300 rounded-full hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700 transition-colors"
        >
          Question 2
        </Link>
      </div>
    </div>
  );
}

  