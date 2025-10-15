import SEO from "@/components/seo";
import BreadCrumb from "../breadcrumb/breadcrumb";
import Footer from "../footer/footer";
import ScrollToTopButton from "../scroll-to-top/scrollToTop";
import HeaderOne from "../header/HeaderOne";

const PrivacyPolicy = () => {
  return (
    <>
      <SEO pageTitle="Privacy Policy" />
      <HeaderOne />
      <BreadCrumb
        title="Privacy Policy"
        innerTitle="Privacy Policy"
        bgImage="/img/contact_banner.jpeg"
      />
        <div className="contact__area section-padding pb-2">
            <div className="container">
                <div className="row">
                    <div className="py-16 px-6 md:px-20 max-w-5xl mx-auto text-gray-700 leading-relaxed">
                        <h2 className="text-2xl font-semibold mb-6">1. Introduction</h2>
                        <p className="mb-4">
                        We value your privacy and are committed to protecting your personal
                        data. This Privacy Policy explains how we collect, use, disclose, and
                        safeguard your information when you visit our website and use our
                        booking services. By using our platform, you agree to the terms of
                        this Privacy Policy.
                        </p>

                        <h2 className="text-2xl font-semibold mb-6">2. Information We Collect</h2>
                        <p className="mb-4">
                        We may collect the following types of personal and non-personal
                        information:
                        </p>
                        <ul className="list-disc list-inside mb-4">
                        <li>Full name, email address, and phone number</li>
                        <li>Payment information (processed securely through payment gateways)</li>
                        <li>Booking details such as check-in and check-out dates</li>
                        <li>Device and browser information</li>
                        <li>IP address, location data, and usage patterns</li>
                        </ul>

                        <h2 className="text-2xl font-semibold mb-6">3. How We Use Your Information</h2>
                        <p className="mb-4">
                        We use your information to provide and improve our services, including:
                        </p>
                        <ul className="list-disc list-inside mb-4">
                        <li>Processing and confirming your bookings</li>
                        <li>Sending booking confirmations, receipts, and updates</li>
                        <li>Improving our website functionality and customer experience</li>
                        <li>Complying with legal obligations and preventing fraud</li>
                        <li>Responding to your support requests and inquiries</li>
                        </ul>

                        <h2 className="text-2xl font-semibold mb-6">4. Data Sharing and Disclosure</h2>
                        <p className="mb-4">
                        We do not sell or rent your personal data. However, we may share
                        information with:
                        </p>
                        <ul className="list-disc list-inside mb-4">
                        <li>
                            Trusted third-party vendors (e.g., payment processors like Cashfree)
                            to complete your transactions securely.
                        </li>
                        <li>
                            Service providers who assist us in maintaining and improving our
                            website.
                        </li>
                        <li>
                            Law enforcement or government agencies when required by law or to
                            protect our rights.
                        </li>
                        </ul>

                        <h2 className="text-2xl font-semibold mb-6">5. Data Security</h2>
                        <p className="mb-4">
                        We implement industry-standard security measures to protect your
                        information from unauthorized access, alteration, or disclosure.
                        However, please note that no method of data transmission over the
                        Internet is 100% secure.
                        </p>

                        <h2 className="text-2xl font-semibold mb-6">6. Cookies and Tracking</h2>
                        <p className="mb-4">
                        Our website uses cookies and similar tracking technologies to enhance
                        user experience, analyze site traffic, and personalize content. You
                        can manage your cookie preferences through your browser settings.
                        </p>

                        <h2 className="text-2xl font-semibold mb-6">7. Your Data Rights</h2>
                        <p className="mb-4">
                        Depending on your jurisdiction, you may have the right to:
                        </p>
                        <ul className="list-disc list-inside mb-4">
                        <li>Access and review the personal data we hold about you</li>
                        <li>Request correction or deletion of your personal information</li>
                        <li>Withdraw consent for data processing (where applicable)</li>
                        </ul>
                        <p className="mb-4">
                        To exercise these rights, please contact us at{" "}
                        <a
                            href="mailto:privacy@example.com"
                            className="text-blue-600 underline"
                        >
                            privacy@example.com
                        </a>.
                        </p>

                        <h2 className="text-2xl font-semibold mb-6">8. Retention of Information</h2>
                        <p className="mb-4">
                        We retain your personal data only as long as necessary to fulfill the
                        purposes outlined in this policy, comply with legal obligations, or
                        resolve disputes.
                        </p>

                        <h2 className="text-2xl font-semibold mb-6">9. Updates to This Policy</h2>
                        <p className="mb-4">
                        We may update this Privacy Policy from time to time. Any changes will
                        be posted on this page with an updated “Last Updated” date. We
                        encourage you to review this policy periodically.
                        </p>

                        <h2 className="text-2xl font-semibold mb-6">10. Contact Us</h2>
                        <p className="mb-4">
                        If you have any questions or concerns about this Privacy Policy or our
                        data handling practices, please contact us at{" "}
                        <a href="mailto:support@example.com" className="text-blue-600 underline">
                            support@example.com
                        </a>.
                        </p>

                        <p className="text-sm text-gray-500 mt-10">
                        Last updated on: {new Date().toLocaleDateString("en-IN")}
                        </p>
                    </div>
                </div>
            </div>
        </div>

      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default PrivacyPolicy;
