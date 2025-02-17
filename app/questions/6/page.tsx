import Link from "next/link";

export default function QuestionSix() {
  return (
    <div className="max-w-4xl mx-auto min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-6">Question 6</h1>
      <p className="text-lg leading-relaxed">
      An Enterprise customer, new to Next.js and Vercel, asks about a high usage bill regarding fast origin transfer and fast data transfer. They have two questions:
    <br/>a. Why didn’t my MIUs cover this bill? I didn’t use all my MIUs la month…so why didn’t those roll over 
    <br/>b. What would be the best way to help mitigate this so we don’t se these overage bills in the future? 
    <br/>c. Feel free to use AI to help supplement your answer, but only use AI to help guide your answer and put it into your own words. Help the customer by providing Vercel or Next.js resources if necessary. 
    <br/>d. Your Enterprise customer is an SMB customer, under 50 employees, with an ARR of $18,500. Their last overage bill was $1,800 and consisted primarily of fast data transfer and function duration. 
    <br/>e. MIU == Managed Infrastructure Unit and is a monthly entitlement for usage purchased by a customer that does not roll over every month. 

      </p>
      <h2 className="text-2xl font-bold mt-10 mb-4">Answer</h2>
      <p className="text-lg leading-relaxed">
      Dear valued customer,<br/><br/>
    Thank you for reaching out with your recent bill questions. 
    MIUs (Managed Infrastructure Units) are a monthly entitlement that do not roll over from one month to the next. This means that even if you didn't use all your MIUs in a given month, the unused portion does not carry over into the next billing period. 
    Your recent overage bill is mainly due to high data transfer and extended function durations, which aren’t covered by your MIUs.
    To help avoid these overage charges in the future, we recommend closely monitoring your data transfer and function usage.<br/><br/> Please find below some resources that will help you understand how to manage fast data transfer and optimize performance: 
    <br/><a href="https://vercel.com/docs/pricing/networking#fast-data-transfer" className="text-blue-500 underline hover:text-blue-700">Fast Data Transfer</a>
    <br/><a href="https://vercel.com/docs/pricing/networking#fast-origin-transfer"className="text-blue-500 underline hover:text-blue-700" >Fast Origin Transfer</a>
    <br></br>If you’d like, we can schedule a call to go over these materials and discuss your billing questions further.
    Please let me know if you have any questions. 
   <br/><br/> Best Regards,
    <br></br>Daniele Zils (she/her)<br/>Customer Success Manager
      </p>
      <div className="mt-10">
        <Link
          href="/questions/7"
          className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium border border-gray-300 rounded-full hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700 transition-colors"
        >
          Question 7
        </Link>
      </div>
    </div>
  );
}