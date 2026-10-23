import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <section className="px-4 py-16">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-[#0A1930] mb-8">
          Privacy Policy
        </h1>
        <div className="prose-lg text-[#344054] leading-relaxed space-y-6">
          <p>
            Wisnotech ("we," "our," "us") is committed to protecting your
            personal information. This privacy policy explains what personal
            information we collect, why we collect it, and how we process it.
          </p>

          <h2 className="text-xl font-bold text-[#0A1930] mt-8 mb-4">1. Information We Collect</h2>
          <p>
            We collect personal information you voluntarily provide through our
            enrollment forms, contact forms, and other interactions, including
            your name, email address, phone number, WhatsApp number, state and
            country of residence, and training preferences.
          </p>

          <h2 className="text-xl font-bold text-[#0A1930] mt-8 mb-4">2. How We Use Your Information</h2>
          <p>
            We use your information to process training applications, respond to
            inquiries, communicate about courses and services, and provide
            support. We do not sell your personal data to third parties.
          </p>

          <h2 className="text-xl font-bold text-[#0A1930] mt-8 mb-4">3. WhatsApp and Email Interactions</h2>
          <p>
            When you contact us via WhatsApp or email, your messages are
            processed through those platforms. WhatsApp messages are handled
            through WhatsApp's infrastructure, and emails are handled through
            Gmail. Please review the privacy policies of those providers.
          </p>

          <h2 className="text-xl font-bold text-[#0A1930] mt-8 mb-4">4. AI Chatbot</h2>
          <p>
            Our AI chatbot processes visitor messages to answer questions about
            Wisnotech's courses and services. Chatbot messages are sent through
            a secure server-side endpoint. We do not use chatbot conversations
            to train public AI models, and we do not store unnecessary personal
            information from chatbot interactions.
          </p>

          <h2 className="text-xl font-bold text-[#0A1930] mt-8 mb-4">5. Third-Party Providers</h2>
          <p>
            We may use third-party service providers for website hosting,
            analytics, and communication. These providers may process data on
            our behalf. We do not share personal information with unrelated
            third parties for marketing purposes.
          </p>

          <h2 className="text-xl font-bold text-[#0A1930] mt-8 mb-4">6. Data Retention</h2>
          <p>
            We retain enrollment and inquiry records for as long as necessary
            to fulfill the purposes described in this policy and to comply with
            applicable legal obligations. You may request deletion of your data
            by contacting us.
          </p>

          <h2 className="text-xl font-bold text-[#0A1930] mt-8 mb-4">7. Your Rights</h2>
          <p>
            You have the right to request access to, correction of, or deletion
            of your personal information. You may also object to processing or
            request data portability where applicable. To exercise these
            rights, contact us at wisnotech@gmail.com.
          </p>

          <h2 className="text-xl font-bold text-[#0A1930] mt-8 mb-4">8. Cookies and Analytics</h2>
          <p>
            We may use cookies and analytics tools to understand how visitors
            use our website. You can control cookie preferences through your
            browser settings.
          </p>

          <h2 className="text-xl font-bold text-[#0A1930] mt-8 mb-4">9. Contact Us</h2>
          <p>
            If you have questions about this privacy policy or wish to exercise
            your rights, contact us at:<br />
            Email: <a href="https://mail.google.com/mail/?view=cm&fs=1&to=wisnotech%40gmail.com">wisnotech@gmail.com</a><br />
            Phone: 09153541297<br />
            WhatsApp: +2349153541297<br />
            Location: Uromi, Edo State, Nigeria
          </p>

          <p className="mt-8 text-xs text-[#64748B]">
            <strong>Note:</strong> This privacy policy is provided for
            informational purposes. Some details require confirmation by
            Wisnotech or qualified legal counsel, particularly regarding
            compliance with the Nigeria Data Protection Act and other
            applicable laws.
          </p>
        </div>
      </div>
    </section>
  );
}