import SEO from "@/components/seo";
import BreadCrumb from "../breadcrumb/breadcrumb";
import Footer from "../footer/footer";
import ScrollToTopButton from "../scroll-to-top/scrollToTop";
import HeaderOne from "../header/HeaderOne";

const Terms = () => {
  return (
    <>
      <SEO pageTitle="Terms & Conditions" />
      <HeaderOne />
      <BreadCrumb
        title="Terms & Conditions"
        innerTitle="Terms & Conditions"
        bgImage="/img/contact_banner.jpeg"
      />
        <div className="contact__area section-padding pb-2">
            <div className="container">
                <div className="row">
                    <div className="py-16 px-6 md:px-20 max-w-5xl mx-auto text-gray-700 leading-relaxed">
                        <h2 className="text-2xl font-semibold mb-6">1. Introduction</h2>
                        <p className="mb-4">
                        Welcome to our website. By accessing or using this platform, you agree
                        to be bound by these Terms & Conditions. These terms govern your use
                        of our website, including any services, bookings, or content provided
                        herein. If you do not agree with any part of these terms, you may not
                        use the website or related services.
                        </p>

                        <h2 className="text-2xl font-semibold mb-6">2. Booking Policy</h2>
                        <p className="mb-4">
                        All room bookings made through our platform are subject to
                        availability and confirmation. Upon successful booking, you will
                        receive a confirmation message or email with relevant details. Please
                        ensure that all information entered during booking is accurate, as we
                        are not responsible for errors caused by incorrect data submission.
                        </p>

                        <h2 className="text-2xl font-semibold mb-6">3. Payment Terms</h2>
                        <p className="mb-4">
                        Payment for bookings must be made in full through our secure payment
                        gateway partners such as Cashfree. Prices displayed are in Indian
                        Rupees (INR) and may include applicable taxes and fees. The booking
                        will be considered confirmed only after successful payment.
                        </p>

                        <h2 className="text-2xl font-semibold mb-6">4. Check-In and Check-Out</h2>
                        <p className="mb-4">
                        Check-in and check-out times vary by property and will be mentioned at
                        the time of booking. Early check-in or late check-out may be available
                        on request and could attract additional charges.
                        </p>

                        <h2 className="text-2xl font-semibold mb-6">5. User Responsibilities</h2>
                        <p className="mb-4">
                        You agree to use this website only for lawful purposes and in
                        accordance with these terms. You must not attempt to misuse, hack, or
                        disrupt the website or interfere with other users. You are
                        responsible for maintaining the confidentiality of your account
                        credentials and for all activities under your account.
                        </p>

                        <h2 className="text-2xl font-semibold mb-6">6. Intellectual Property</h2>
                        <p className="mb-4">
                        All content on this website, including text, images, logos, and
                        software, is the property of the company or its licensors. You may not
                        copy, reproduce, or distribute any part of the website without prior
                        written consent.
                        </p>

                        <h2 className="text-2xl font-semibold mb-6">7. Limitation of Liability</h2>
                        <p className="mb-4">
                        We shall not be held responsible for any direct, indirect, or
                        consequential losses arising out of your use or inability to use the
                        website or services. This includes, without limitation, loss of data,
                        revenue, or business opportunities.
                        </p>

                        <h2 className="text-2xl font-semibold mb-6">8. Modifications to Terms</h2>
                        <p className="mb-4">
                        We reserve the right to modify or update these Terms & Conditions at
                        any time without prior notice. Any changes will take effect immediately
                        upon posting on this page. It is your responsibility to review the
                        terms periodically for updates.
                        </p>

                        <h2 className="text-2xl font-semibold mb-6">9. Contact Information</h2>
                        <p className="mb-4">
                        For questions or concerns related to these Terms & Conditions, you may
                        reach us at{" "}
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

export default Terms;
