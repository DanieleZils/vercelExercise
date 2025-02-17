import Link from "next/link";

export default function QuestionThree() {
  return (
    <div className="max-w-4xl mx-auto min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-6">Question 3</h1>
      <p className="text-lg leading-relaxed">
      Through use of a monitoring dashboard, you notice that an Enterprise customer has reduced the number of builds and their usage has gone down by about half quarter over quarter. Please write an email to the champion and executive sponsor of the account to re-engage and start to perform some discovery. 
    <br/><br/> a. Your customer is an SMB with yearly revenue about $5.5 million, 20 employees total with one developer. They have a $22K ARR Vercel subscription. The executive sponsor is the VP of marketing and Vercel hosts their marketing pages. They have a reverse proxy in
    front of Vercel (Cloudflare) and history shows some errors in thei builds. The manager’s name is Alex (she/her), Engineering Manager The champion, Tanner – the lead on the project – it is found out, has left the company. 
      </p>
      <h2 className="text-2xl font-bold mt-10 mb-4">Answer</h2>
      <p className="text-lg leading-relaxed">
      Dear Alex,<br/><br/>I hope you’re doing well. My name is Daniele Zils from Vercel, and I’m reaching out regarding your company's Vercel subscription. We have noticed some changes in your usage patterns, and I wanted to check in to ensure you’re getting the most out of our platform. <br/><br/>I understand that Tanner, our previous point of contact, has recently left the company. I’d like to schedule a brief call to introduce myself, discuss your current needs, review some build errors we noticed, and explore ways to improve your marketing page's performance. <br/><br/>Let's set up a 30-minute call next week. I’m available on Monday at 9 am and Tuesday at 10 am EST. If those times don’t work, please let me know a convenient time for you and your team.
     <br/>We truly appreciate your continued partnership. <br/><br/>Looking forward to hearing from you, <br/><br/>Daniele Zils<br/>Customer Success Manager

      </p>
      <div className="mt-10">
        <Link
          href="/questions/4"
          className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium border border-gray-300 rounded-full hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700 transition-colors"
        >
          Question 4
        </Link>
      </div>
    </div>
  );
}