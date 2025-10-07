import { Breadcrumbs } from "@/components/Breadcrumbs";

const Terms = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs items={[{ label: "Terms of Service" }]} />

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
          <p className="text-sm text-muted-foreground mb-8">Last updated: January 2025</p>

          <div className="prose prose-lg max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
              <p className="text-muted-foreground">
                By accessing or using NovaMart's website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
              <p className="text-muted-foreground mb-3">
                Permission is granted to temporarily download one copy of the materials on NovaMart's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on NovaMart's website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Product Information</h2>
              <p className="text-muted-foreground">
                We attempt to be as accurate as possible with product descriptions, pricing, and availability. However, we do not warrant that product descriptions or other content is accurate, complete, reliable, current, or error-free. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update information at any time without prior notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Pricing and Payment</h2>
              <p className="text-muted-foreground">
                All prices are listed in US Dollars and are subject to change without notice. We accept various payment methods including major credit cards and digital payment services. Payment must be received by us before your order is dispatched. If we are unable to process payment, we will contact you to arrange an alternative payment method.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Shipping and Delivery</h2>
              <p className="text-muted-foreground mb-3">
                We ship to addresses within the United States and select international locations. Shipping times and costs vary depending on destination and shipping method selected. Please note:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Standard shipping: 5-7 business days</li>
                <li>Express shipping: 2-3 business days</li>
                <li>Free shipping on orders over $50</li>
                <li>International shipping times may vary</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Returns and Refunds</h2>
              <p className="text-muted-foreground mb-3">
                We want you to be completely satisfied with your purchase. If you're not happy with your order, you may return it within 30 days of delivery for a full refund. Items must be:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Unused and in original condition</li>
                <li>In original packaging with all tags attached</li>
                <li>Accompanied by proof of purchase</li>
              </ul>
              <p className="text-muted-foreground mt-3">
                Refunds will be processed within 5-10 business days after we receive your return. Original shipping charges are non-refundable unless the return is due to our error.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. User Accounts</h2>
              <p className="text-muted-foreground">
                When you create an account with us, you must provide accurate, complete, and current information. Failure to do so constitutes a breach of the Terms. You are responsible for safeguarding your password and for all activities that occur under your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Prohibited Uses</h2>
              <p className="text-muted-foreground mb-3">
                You may not use our site:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>In any way that violates any applicable law or regulation</li>
                <li>To exploit, harm, or attempt to exploit or harm minors</li>
                <li>To transmit any advertising or promotional material</li>
                <li>To impersonate or attempt to impersonate NovaMart or another user</li>
                <li>To engage in any automated use of the system</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Intellectual Property</h2>
              <p className="text-muted-foreground">
                The content on NovaMart's website, including but not limited to text, graphics, logos, images, and software, is the property of NovaMart and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works from any content without our express written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                NovaMart shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service, even if we have been advised of the possibility of such damages. Our total liability shall not exceed the amount paid by you for the product or service in question.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">11. Changes to Terms</h2>
              <p className="text-muted-foreground">
                We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new Terms of Service on this page and updating the "Last updated" date. Your continued use of the service after any changes constitutes acceptance of the new Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">12. Contact Information</h2>
              <p className="text-muted-foreground">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="mt-4 text-muted-foreground">
                <p>Email: legal@novamart.com</p>
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

export default Terms;
