export const PrivacyPolicyPage = () => {
  return (
    <main
      className="max-w-3xl mx-auto px-6 py-12 text-gray-800 leading-relaxed"
      style={{ fontFamily: 'var(--font-headline)' }}
    >
      {/* Privacy Policy Section */}
      <section className="space-y-4">
        <h1 className="text-2xl font-semibold">Privacy Policy</h1>
        <p><strong>Effective Date:</strong> 5th September, 2025</p>

        <p>
          Prototyp3 (“we,” “our,” or “us”) values your privacy. This Privacy Policy explains
          what information we collect, how we use it, and your rights when using our website and services.
        </p>

        <h2 className="text-xl font-medium mt-6">1. Information We Collect</h2>
        <p className="ml-4">
          When you interact with Prototyp3 (for example, by filling out our interest form or joining our Discord), we may collect:
        </p>
        <ul className="list-disc ml-8 space-y-1">
          <li><strong>Personal Information:</strong> Your name, email address, academic year, program of study, or similar details you provide.</li>
          <li><strong>Usage Information:</strong> Basic analytics (e.g., page visits, time on site) to help us understand engagement.</li>
          <li><strong>Community Interactions:</strong> If you join our Discord or social media, those platforms may also collect information under their own privacy policies.</li>
        </ul>

        <h2 className="text-xl font-medium mt-6">2. How We Use Your Information</h2>
        <ul className="list-disc ml-8 space-y-1">
          <li>Share updates, events, and opportunities related to Prototyp3.</li>
          <li>Understand student demographics and interests so we can design better programs.</li>
          <li>Improve our website and community experience.</li>
        </ul>

        <h2 className="text-xl font-medium mt-6">3. How We Share Information</h2>
        <ul className="list-disc ml-8 space-y-1">
          <li>We do not sell or rent your data. We may share limited information with:</li>
          <li>Service providers that help us manage forms, emails, or analytics.</li>
          <li>University or community partners only for program-related purposes (never for marketing).</li>
        </ul>

        <h2 className="text-xl font-medium mt-6">4. Data Storage & Security</h2>
        <p className="ml-4">
          We store information securely and only keep it as long as needed for program purposes. While no method of transmission is 100% secure, we use reasonable safeguards to protect your data.
        </p>

        <h2 className="text-xl font-medium mt-6">5. Your Choices</h2>
        <p className="ml-4">
          You may request to have your information updated or deleted by contacting us at{" "}
          <a href="mailto:prototyp3.org@gmail.com" className="text-teal-600">prototyp3.org@gmail.com</a>.
        </p>

        <h2 className="text-xl font-medium mt-6">6. External Links</h2>
        <p className="ml-4">
          Our site contains links to Discord and social media. Please note that Prototyp3 is not responsible for the privacy practices of those platforms.
        </p>

        <h2 className="text-xl font-medium mt-6">7. Contact Us</h2>
        <p className="ml-4">
          If you have questions about this policy or how your data is used, contact us at:{" "}
          <a href="mailto:prototyp3.org@gmail.com" className="text-teal-600">prototyp3.org@gmail.com</a>
        </p>
      </section>

      {/* Divider */}
      <hr className="my-12 border-gray-300" />

      {/* Terms of Service Section */}
      <section className="space-y-4">
        <h1 className="text-2xl font-semibold">Terms of Service</h1>
        <p><strong>Effective Date:</strong> 5th September, 2025</p>

        <p>
          Welcome to Prototyp3! By accessing our website, interest form, or community spaces (including
          Discord and social media), you agree to these Terms of Service. Please read them carefully.
        </p>

        <h2 className="text-xl font-medium mt-6">1. Purpose</h2>
        <p className="ml-4">
          Prototyp3 provides students with opportunities to join real-world project cohorts, mentorship, and community events.
          Participation is for educational and community purposes only, not employment.
        </p>

        <h2 className="text-xl font-medium mt-6">2. Eligibility</h2>
        <p className="ml-4">
          You must be a student, recent graduate, or community member interested in tech to participate in Prototyp3 programs.
          By joining, you confirm that the information you provide is accurate.
        </p>

        <h2 className="text-xl font-medium mt-6">3. Community Conduct</h2>
        <p className="ml-4">By joining our events, website, or Discord, you agree to:</p>
        <ul className="list-disc ml-8 space-y-1">
          <li>Treat all members with respect.</li>
          <li>Avoid harassment, discrimination, spam, or harmful behavior.</li>
          <li>Follow any additional community guidelines shared in Discord or at events.</li>
          <li>Failure to follow these rules may result in removal from our programs or community.</li>
        </ul>

        <h2 className="text-xl font-medium mt-6">4. Use of Content</h2>
        <ul className="list-disc ml-8 space-y-1">
          <li>You may share Prototyp3 resources for personal, educational use.</li>
          <li>You may not misuse our name, brand, or materials for commercial purposes without written permission.</li>
        </ul>

        <h2 className="text-xl font-medium mt-6">5. Links to Other Services</h2>
        <p className="ml-4">
          We provide links to Discord, Instagram, LinkedIn, and other external sites. Prototyp3 is not responsible for the content or policies of these third parties.
        </p>

        <h2 className="text-xl font-medium mt-6">6. Limitation of Liability</h2>
        <p className="ml-4">
          Prototyp3 provides programs and events “as-is.” We are not liable for any issues arising from participation, including but not limited to technical problems, unfinished projects, or outcomes outside our control.
        </p>

        <h2 className="text-xl font-medium mt-6">7. Changes to These Terms</h2>
        <p className="ml-4">
          We may update these Terms of Service from time to time. Continued use of our website or participation in our community means you accept the latest version.
        </p>

        <h2 className="text-xl font-medium mt-6">8. Contact Us</h2>
        <p className="ml-4">
          If you have questions about these Terms, reach us at:{" "}
          <a href="mailto:prototyp3.org@gmail.com" className="text-teal-600">prototyp3.org@gmail.com</a>
        </p>
      </section>
    </main>
  );
};
