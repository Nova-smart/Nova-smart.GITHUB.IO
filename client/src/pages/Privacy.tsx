import { Breadcrumbs } from "@/components/Breadcrumbs";

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs items={[{ label: "Privacy Policy" }]} />

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground mb-8">Last updated: January 2025</p>

          <div className="prose prose-lg max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p className="text-muted-foreground">
                Welcome to NovaMart. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
              <p className="text-muted-foreground mb-3">
                We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Identity Data: first name, last name, username</li>
                <li>Contact Data: email address, telephone numbers, billing address, delivery address</li>
                <li>Financial Data: payment card details</li>
                <li>Transaction Data: details about payments and products you have purchased from us</li>
                <li>Technical Data: internet protocol (IP) address, browser type and version, time zone setting and location</li>
                <li>Profile Data: your username and password, purchases made by you, your interests, preferences, feedback and survey responses</li>
                <li>Usage Data: information about how you use our website and products</li>
                <li>Marketing and Communications Data: your preferences in receiving marketing from us</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-3">
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>To process and deliver your order including managing payments and collecting money owed to us</li>
                <li>To manage our relationship with you including notifying you about changes to our terms or privacy policy</li>
                <li>To enable you to participate in prize draws, competitions or complete surveys</li>
                <li>To administer and protect our business and website including troubleshooting, data analysis, testing</li>
                <li>To deliver relevant website content and advertisements to you and measure their effectiveness</li>
                <li>To use data analytics to improve our website, products/services, marketing, customer relationships and experiences</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
              <p className="text-muted-foreground">
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Your Legal Rights</h2>
              <p className="text-muted-foreground mb-3">
                Under certain circumstances, you have rights under data protection laws in relation to your personal data:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Request access to your personal data</li>
                <li>Request correction of your personal data</li>
                <li>Request erasure of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Request restriction of processing your personal data</li>
                <li>Request transfer of your personal data</li>
                <li>Right to withdraw consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Cookies</h2>
              <p className="text-muted-foreground">
                Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site. A cookie is a small file of letters and numbers that we store on your browser or the hard drive of your computer if you agree.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Third-Party Links</h2>
              <p className="text-muted-foreground">
                Our website may include links to third-party websites, plug-ins and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this privacy policy or our privacy practices, please contact us at:
              </p>
              <div className="mt-4 text-muted-foreground">
                <p>Email: privacy@novamart.com</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Address: 123 Commerce Street, New York, NY 10001</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
