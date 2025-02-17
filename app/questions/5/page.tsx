import Link from "next/link";

export default function QuestionFive() {
  return (
    <div className="max-w-4xl mx-auto min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-6">Question 5</h1>
      <p className="text-lg leading-relaxed">
      A Pro customer who typically spends $900 monthly on Vercel has experienced a sudden increase to $2,100 for their next billing period due to increased data transfer costs. Their main website also shows poor Core Web Vitals performance, specifically a failed Largest Contentful Paint score. 
    Be proactive in reaching out to this customer about their increased usage and costs. Engage them in a conversation that explores the situation and leads to mutually beneficial solutions. 
    <br/><br/>a. Your champion is Travis (he/him) and he is the lead developer for a mobile game company, $14 million in revenue, 100 employees/10 Vercel team members. They are NOT an Enterprise customer yet, but have spent on average $900 per month in the last three months on Vercel. They are headquartered in Singapore. 

      </p>
      <h2 className="text-2xl font-bold mt-10 mb-4">Answer</h2>
      <p className="text-lg leading-relaxed">
      Dear Travis, <br/><br/>I hope you're doing well. I’m following up regarding your recent usage of Vercel. Our records show that your data transfer costs are set to increase significantly, with a projected bill of around $2,100 for the next period. We want to ensure this increase aligns with your expectations and find ways to help manage these costs. 
    We've also noticed that your main website is experiencing some performance issues, particularly with its Largest Contentful Paint (LCP) score, which is essential for a great user experience and strong search rankings.
    <br/><br/> Would you be open to scheduling a brief call to discuss this further next week?
    <br/><br/> Please let me know your availability. 
    Thank you for your continued partnership with Vercel.
    <br/><br/>Best Regards,
    <br></br>Daniele Zils (she/her)<br/>Customer Success Manager
      </p>
      <div className="mt-10">
        <Link
          href="/questions/6"
          className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium border border-gray-300 rounded-full hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700 transition-colors"
        >
          Question 6
        </Link>
      </div>
    </div>
  );
}