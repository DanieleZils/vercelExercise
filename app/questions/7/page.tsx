import Link from "next/link";

export default function QuestionSeven() {
  return (
    <div className="max-w-4xl mx-auto min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-6">Question 7</h1>
      <p className="text-lg leading-relaxed">
      What resources would you want to prepare to make sure that the CISO of a newly signed Enterprise customer has everything they need to succeed as 
    they migrate to the Enterprise version of the platform? Feel free to use documentation from vercel.com, and our YouTube channel to find assets to help. 
    <br/>a. Your customer is Ty, a CISO for a Fortune 500 firm that just signed on for Enterprise with Vercel Secure Compute. They would like to discuss the security products Vercel offers as well as Enterprise offering and roadmap. 
      </p>
      <h2 className="text-2xl font-bold mt-10 mb-4">Answer</h2>
      <p className="text-lg leading-relaxed">
      Dear Ty, <br/><br/>I look forward to our meeting this week, where we will review your comprehensive Enterprise package and help set you up for success as you migrate to this platform version. <br/><br/>This package includes an overview of the Vercel Enterprise Plan with detailed documentation on our advanced security and compliance features—such as Secure Compute, SSO/SAML login, dedicated DDoS support, and our firewall capabilities. 
      <br/><br/>Here are some of the resources that we’re going to provide for you:<br/><br/>

      <a href="https://vercel.com/docs/security/saml" className="text-blue-500 underline hover:text-blue-700">SSO/SAML login</a><br/>
      <a href="https://vercel.com/docs/security" className="text-blue-500 underline hover:text-blue-700">Compliance Mesures</a><br/>
      <a href="https://vercel.com/docs/security/secure-compute#vercel-secure-compute" className="text-blue-500 underline hover:text-blue-700">Secure Compute</a><br/>
      <a href="https://vercel.com/docs/security/vercel-firewall" className="text-blue-500 underline hover:text-blue-700">Vercel Firewall</a> <br/>
      <a href="https://vercel.com/docs/security/vercel-firewall#dedicated-ddos-support-for-enterprise-teams" className="text-blue-500 underline hover:text-blue-700">Dedicated DDoS</a> <br/>
      <a href="https://vercel.com/docs/observability/monitoring" className="text-blue-500 underline hover:text-blue-700"> Monitoring and Logging</a><br/>
      <a href="https://vercel.com/docs/accounts/plans/enterprise#conformance-and-code-owners" className="text-blue-500 underline hover:text-blue-700">Conformance and Code Owners</a><br/>
      <a href="https://vercel.com/docs/accounts/plans/enterprise#scalability-and-customizability" className="text-blue-500 underline hover:text-blue-700">Scalability and Customizability</a><br/>
      <a href="https://vercel.com/docs/accounts/plans/enterprise#administration-and-support" className="text-blue-500 underline hover:text-blue-700">Administration and Support</a><br/>
      <br/>This session will address your concerns, discuss risk management strategies, and ensure you’re fully equipped to secure your deployments. 
      </p>
      <br/><br/> Please let me if you have any questions. 
      Thank you for your continued partnership with Vercel.
      <br/><br/>Best Regards,
      <br></br>Daniele Zils (she/her)<br/>Customer Success Manager
      <div className="mt-10">
        <Link
          href="/questions/8"
          className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium border border-gray-300 rounded-full hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700 transition-colors"
        >
          Question 8
        </Link>
      </div>
    </div>
  );
}