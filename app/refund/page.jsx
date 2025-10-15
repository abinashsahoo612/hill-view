import SEO from "@/components/seo";
import BreadCrumb from "../breadcrumb/breadcrumb";
import Footer from "../footer/footer";
import ScrollToTopButton from "../scroll-to-top/scrollToTop";
import HeaderOne from "../header/HeaderOne";

const RefundPolicy = () => {
  return (
    <>
      <SEO pageTitle="Refund Policy" />
      <HeaderOne />
      <BreadCrumb
        title="Refund Policy"
        innerTitle="Refund Policy"
        bgImage="/img/contact_banner.jpeg"
      />
        <div className="contact__area section-padding pb-2">
            <div className="container">
                <div className="row">
                    <div className="py-16 px-6 md:px-20 max-w-5xl mx-auto text-gray-700 leading-relaxed">
                        <h2 className="text-2xl font-semibold mb-6">1. Introduction</h2>
                        <p className="mb-4">
                        This Refund Policy explains how and when refunds are issued for
                        bookings made through our website. By completing a booking, you agree
                        to the refund terms stated below.
                        </p>

                        <h2 className="text-2xl font-semibold mb-6">2. Eligibility for Refund</h2>
                        <p className="mb-4">
                        Refunds are applicable only for cancellations made in accordance with
                        our{" "}
                        <a
                            href="/cancellation-policy"
                            className="text-blue-600 underline"
                        >
                            Cancellation Policy
                        </a>
                        . If a booking does not meet the cancellation timeline or criteria,
                        it will not be eligible for a refund.
                        </p>

                        <h2 className="text-2xl font-semibold mb-6">3. Refund Timeline</h2>
                        <p className="mb-4">
                        Once a cancellation is confirmed and approved, the refund will be
                        initiated within <strong>7–10 business days</strong>. In some cases,
                        due to banking or payment gateway delays, the refund may take up to{" "}
                        <strong>15 business days</strong> to reflect in your account.
                        </p>

                        <h2 className="text-2xl font-semibold mb-6">4. Mode of Refund</h2>
                        <p className="mb-4">
                        Refunds will be credited to the same payment method used during the
                        original transaction. We do not issue refunds in cash or to
                        alternative payment modes.
                        </p>

                        <h2 className="text-2xl font-semibold mb-6">5. Non-Refundable Charges</h2>
                        <ul className="list-disc list-inside mb-4">
                        <li>Payment gateway or transaction processing fees.</li>
                        <li>Taxes and service charges where applicable.</li>
                        <li>
                            Charges related to partial usage of the booking (e.g., early
                            check-out).
                        </li>
                        </ul>

                        <h2 className="text-2xl font-semibold mb-6">6. Failed or Declined Transactions</h2>
                        <p className="mb-4">
                        In case your payment fails or is deducted but the booking is not
                        confirmed, the system will automatically initiate a refund within{" "}
                        <strong>5–7 business days</strong>. If you do not receive it within
                        that time frame, please contact our support team with the transaction
                        reference.
                        </p>

                        <h2 className="text-2xl font-semibold mb-6">7. Disputed Payments</h2>
                        <p className="mb-4">
                        If a payment dispute or chargeback is initiated by the customer, we
                        reserve the right to suspend or cancel the booking until the dispute
                        is resolved by the payment provider. Refunds in such cases will depend
                        on the outcome of the dispute.
                        </p>

                        <h2 className="text-2xl font-semibold mb-6">8. Refund Exceptions</h2>
                        <p className="mb-4">
                        Refunds will not be provided under the following circumstances:
                        </p>
                        <ul className="list-disc list-inside mb-4">
                        <li>No-show without prior cancellation.</li>
                        <li>Misuse or violation of property rules or policies.</li>
                        <li>
                            Bookings made under special promotional or non-refundable offers.
                        </li>
                        </ul>

                        <h2 className="text-2xl font-semibold mb-6">9. Contact for Refund Queries</h2>
                        <p className="mb-4">
                        For refund-related queries or to track your refund status, please
                        contact our support team at{" "}
                        <a href="mailto:support@example.com" className="text-blue-600 underline">
                            support@example.com
                        </a>
                        . Kindly include your booking ID and payment reference number for
                        faster resolution.
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

export default RefundPolicy;
