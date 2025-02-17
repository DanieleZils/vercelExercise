import Link from "next/link";

export default function QuestionFour() {
  return (
    <div className="max-w-4xl mx-auto min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-6">Question 4</h1>
      <p className="text-lg leading-relaxed">
      An Enterprise customer who has been sold Vercel through a reseller called Sitecore has reached out to the team to ask about the product. Can you give a brief 2-5 sentence introduction to Vercel to showcase what Vercel does 
      <br/><br/>a. Your new Enterprise customer is Acme University’s Marketing Department and their lead point person is called Clara (she/her). They have no web development or technical background and don't’ know what Vercel is. 

      </p>
      <h2 className="text-2xl font-bold mt-10 mb-4">Answer</h2>
      <p className="text-lg leading-relaxed">
      Dear Clara, <br/><br/>Welcome to Vercel! <br></br>We’re thrilled to support Acme University's Marketing Department website. Vercel is a cloud platform that makes it easy for organizations like yours to create fast, user-friendly websites. We handle all the complex details behind the scenes so you can focus on sharing great content with your audience.
      <br/><br/>Don't hesitate to reach out if you have any questions about our services or if you need assistance with uploading new content or navigating the platform.
      <br/><br/>Thank you again for your time and trust in us. 
      We're excited to work with you and support your team's success.
      <br/><br/>Daniele Zils (she/her)<br/>Customer Success Manager


      </p>
      <div className="mt-10">
        <Link
          href="/questions/5"
          className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium border border-gray-300 rounded-full hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700 transition-colors"
        >
          Question 5
        </Link>
      </div>
    </div>
  );
}