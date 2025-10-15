import SEO from "@/components/seo";
import BreadCrumb from "../breadcrumb/breadcrumb";
import Footer from "../footer/footer";
import ScrollToTopButton from "../scroll-to-top/scrollToTop";
import HeaderOne from "../header/HeaderOne";

const CancellationPolicy = () => {
  return (
    <>
      <SEO pageTitle="Cancellation Policy" />
      <HeaderOne />
      <BreadCrumb
        title="Cancellation Policy"
        innerTitle="Cancellation Policy"
        bgImage="/img/contact_banner.jpeg"
      />
        <div className="contact__area section-padding pb-2">
            <div className="container">
                <div className="row">
                    <div className="py-16 px-6 md:px-20 max-w-5xl mx-auto text-gray-700 leading-relaxed">
                        <h2 className="text-2xl font-semibold mb-6">1. Introduction</h2>
                        <p className="mb-4">
                        This Cancellation Policy explains the rules and process for
                        cancellations and refunds for bookings made through our website. By
                        confirming a booking, you agree to the terms outlined below.
                        </p>

                        <h2 className="text-2xl font-semibold mb-6">2. Cancellation by Guest</h2>
                        <p className="mb-4">
                        Guests may cancel their booking by contacting our support team or
                        through their account dashboard (if available). The applicable refund
                        amount depends on the time of cancellation:
                        </p>
                        <ul className="list-disc list-inside mb-4">
                        <li>
                            <strong>More than 7 days before check-in:</strong> Full refund of
                            the booking amount, excluding transaction fees (if any).
                        </li>
                        <li>
                            <strong>Between 3 to 7 days before check-in:</strong> 50% of the
                            booking amount will be refunded.
                        </li>
                        <li>
                            <strong>Less than 3 days before check-in:</strong> No refund will be
                            issued.
                        </li>
                        </ul>

                        <h2 className="text-2xl font-semibold mb-6">3. No-Show Policy</h2>
                        <p className="mb-4">
                        If a guest fails to check in on the scheduled date without prior
                        notice, the booking will be considered a “no-show.” No refund will be
                        provided in such cases.
                        </p>

                        <h2 className="text-2xl font-semibold mb-6">4. Modification of Bookings</h2>
                        <p className="mb-4">
                        Any request to modify the booking (e.g., change dates or room type)
                        must be made at least 48 hours before the check-in date. Modifications
                        are subject to availability and may affect the final booking price.
                        </p>

                        <h2 className="text-2xl font-semibold mb-6">
                        5. Cancellation by the Property or Management
                        </h2>
                        <p className="mb-4">
                        In rare situations such as maintenance issues, overbooking, or
                        unforeseen circumstances, we reserve the right to cancel a booking.
                        In such cases, guests will receive a full refund or the option to
                        reschedule at no additional cost.
                        </p>

                        <h2 className="text-2xl font-semibold mb-6">6. Refund Process</h2>
                        <p className="mb-4">
                        Refunds will be processed within <strong>7–10 business days</strong>{" "}
                        from the date of cancellation approval. Refunds will be issued to the
                        original payment method used during booking. Transaction fees (if
                        applicable) are non-refundable.
                        </p>

                        <h2 className="text-2xl font-semibold mb-6">7. Early Check-Out</h2>
                        <p className="mb-4">
                        If a guest decides to check out before the scheduled date, no refund
                        will be provided for the unused nights unless otherwise stated in a
                        specific promotional offer.
                        </p>

                        <h2 className="text-2xl font-semibold mb-6">8. Force Majeure</h2>
                        <p className="mb-4">
                        In the event of circumstances beyond our control (e.g., natural
                        disasters, government restrictions, or pandemics), we may offer a
                        partial or full refund, rescheduling option, or a credit for future
                        bookings at our discretion.
                        </p>

                        <h2 className="text-2xl font-semibold mb-6">9. Contact Us</h2>
                        <p className="mb-4">
                        For any questions or assistance with cancellations, please contact our
                        support team at{" "}
                        <a href="mailto:support@example.com" className="text-blue-600 underline">
                            support@example.com
                        </a>
                        .
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

export default CancellationPolicy;
