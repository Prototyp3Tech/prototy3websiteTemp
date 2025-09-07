export const PrivacyPolicy = () => {
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
    </main>
  );
};
