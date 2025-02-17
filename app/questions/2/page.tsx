import Link from "next/link";

export default function QuestionTwo() {
  return (
    <div className="max-w-4xl mx-auto min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-6">Question 2</h1>
      <p className="text-lg leading-relaxed">
      A customer has reached out asking, “When should I choose to use Edge Functions, Serverless Functions, or Edge Middleware with Vercel?” Please write a reply to the customer. 
      <br/><br/> a. Your Enterprise customer is Trevor (they/them), a frontend developer at a winery using Next.js and Statsig and they are primarily interested in being able to use the Vercel platform with Next.js to do 
      personalization when it comes to what they are able to offer in their online shop based on geolocation (some places don’t allow for shipping of alcohol via delivery). 

      </p>
      <h2 className="text-2xl font-bold mt-10 mb-4">Answer</h2>
      <p className="text-lg leading-relaxed">
      Hello Trevor, <br/><br/>Thank you for reaching out!  It sounds like Edge Middleware is more suitable to your use case, since you need to personalize your content based on geolocation.<br/><br/>Edge Middleware runs before your app processes a request, enabling you to show only the products available based on your user's location.
      Vercel makes this simple: just add a middleware.ts file at the root of your project, and you’re all set to get started. <br/><br/><a href="https://vercel.com/docs/functions/runtimes/edge/edge-functions#edge-function-api-support" className="text-blue-500 underline hover:text-blue-700">Edge Functions</a> are best for more complex tasks that require heavier processing, like calculations or data handling based on the user's location. Edge Functions are a good choice if you need to perform these types of operations at the edge.
      <br/><br/><a href="https://vercel.com/guides/how-can-i-increase-the-limit-of-redirects-or-use-dynamic-redirects-on-vercel#using-a-serverless-function" className="text-blue-500 underline hover:text-blue-700">Serverless Functions</a> are great for handling dynamic server-side logic, but they don't run at the edge, so they wouldn't be the best fit for your geolocation routing needs.<br/><br/>Vercel provides templates and guides so you can start with Edge middleware in minutes.
     Resources:
     <a href="https://vercel.com/docs/functions/edge-middleware/quickstart"
     className="text-blue-500 underline hover:text-blue-700"
     >Edge Middleware Quickstart</a><br/>
     <a
     href="https://vercel.com/docs/functions/edge-middleware "
     className="text-blue-500 underline hover:text-blue-700">Edge Middleware Documentation</a>
     <br/><br/>I hope this helps! If you’d like to schedule a quick chat to go over the details, please let me know.<br/><br/>
     Daniele Zils (she/her) <br/>Customer Success Manager

      </p>
      <div className="mt-10">
        <Link
          href="/questions/3"
          className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium border border-gray-300 rounded-full hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700 transition-colors"
        >
          Question 3
        </Link>
      </div>
    </div>
  );
}