import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VibesLinks Privacy Policy",
  description:
    "VibesLinks Platform Privacy Policy - Learn how we collect, use, and protect your personal information.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <main className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-8 lg:px-16">
        <div className="bg-white dark:bg-black rounded-lg shadow-sm p-8 sm:p-12">
          {/* Header */}
          <div className="mb-12 border-b border-zinc-200 dark:border-zinc-800 pb-8">
            <h1 className="text-4xl font-bold text-black dark:text-zinc-50 mb-4">
              VIBESLINKS PLATFORM PRIVACY POLICY
            </h1>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Last Updated: November 20, 2025
            </p>
          </div>

          {/* Section 1: Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-black dark:text-zinc-50 mb-4">
              1. INTRODUCTION
            </h2>
            <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300 mb-4">
              Vibeslinks, Inc. (&quot;Vibeslinks,&quot; &quot;we,&quot;
              &quot;us,&quot; or &quot;our&quot;) is committed to protecting
              your privacy and being transparent about how we collect, use, and
              share your personal information. This Privacy Policy describes our
              privacy practices for the Vibeslinks Platform, including our
              websites, mobile applications, and related services (collectively,
              the &quot;Platform&quot; or &quot;Services&quot;).
            </p>
            <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300 mb-4">
              This Privacy Policy applies to all users of our Platform,
              including individual consumers seeking venue discovery and dining
              experiences, as well as business users and venue partners. By
              using our Platform, you agree to the collection and use of
              information in accordance with this policy.
            </p>
            <div className="bg-zinc-50 dark:bg-zinc-900 rounded-lg p-6 mt-6">
              <h3 className="text-lg font-semibold text-black dark:text-zinc-50 mb-3">
                Key Points:
              </h3>
              <ul className="space-y-2 text-base leading-7 text-zinc-700 dark:text-zinc-300 list-disc list-inside">
                <li>
                  We collect information to provide personalized venue
                  recommendations and real-time venue intelligence
                </li>
                <li>
                  We use AI and machine learning to improve venue discovery and
                  dining recommendations
                </li>
                <li>
                  We share certain information with venues to facilitate
                  bookings and enhance service quality
                </li>
                <li>
                  You have control over your privacy settings and dining
                  preference data
                </li>
                <li>
                  We implement security measures to protect your personal
                  information
                </li>
              </ul>
            </div>
          </section>

          {/* Section 2: Information We Collect */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-black dark:text-zinc-50 mb-4">
              2. INFORMATION WE COLLECT
            </h2>

            {/* 2.1 Information You Provide Directly */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-black dark:text-zinc-50 mb-3">
                2.1 Information You Provide Directly
              </h3>

              <div className="mb-4">
                <h4 className="text-lg font-medium text-black dark:text-zinc-50 mb-2">
                  Account Information:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-base leading-7 text-zinc-700 dark:text-zinc-300 ml-4">
                  <li>Name, email address, phone number, date of birth</li>
                  <li>Profile photos and personal descriptions</li>
                  <li>Authentication credentials and security questions</li>
                  <li>
                    Payment information (processed securely through third-party
                    payment processors)
                  </li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="text-lg font-medium text-black dark:text-zinc-50 mb-2">
                  Preference and Profile Data:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-base leading-7 text-zinc-700 dark:text-zinc-300 ml-4">
                  <li>
                    Dining preferences, dietary restrictions, and allergies
                  </li>
                  <li>
                    Social preferences, interests, and lifestyle information
                  </li>
                  <li>Budget preferences and spending patterns</li>
                  <li>Group size preferences and social intent</li>
                  <li>Accessibility requirements and special needs</li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="text-lg font-medium text-black dark:text-zinc-50 mb-2">
                  Dining and Preference Data:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-base leading-7 text-zinc-700 dark:text-zinc-300 ml-4">
                  <li>
                    Dining preferences, dietary restrictions, and allergies
                  </li>
                  <li>
                    Cuisine preferences, price range preferences, and venue type
                    interests
                  </li>
                  <li>Budget preferences and spending patterns</li>
                  <li>Party size preferences and dining occasion types</li>
                  <li>Accessibility requirements and special needs</li>
                  <li>Dining history and venue visit patterns</li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="text-lg font-medium text-black dark:text-zinc-50 mb-2">
                  Communication and Feedback Data:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-base leading-7 text-zinc-700 dark:text-zinc-300 ml-4">
                  <li>Communications with venues and customer support</li>
                  <li>
                    Reviews, ratings, and feedback about venues and dining
                    experiences
                  </li>
                  <li>Reservation requests and special dining requirements</li>
                  <li>Venue save lists and personal dining collections</li>
                </ul>
              </div>
            </div>

            {/* 2.2 Information We Collect Automatically */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-black dark:text-zinc-50 mb-3">
                2.2 Information We Collect Automatically
              </h3>

              <div className="mb-4">
                <h4 className="text-lg font-medium text-black dark:text-zinc-50 mb-2">
                  Device and Usage Information:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-base leading-7 text-zinc-700 dark:text-zinc-300 ml-4">
                  <li>
                    Device type, operating system, and unique device identifiers
                  </li>
                  <li>IP address and general location information</li>
                  <li>
                    App usage patterns, feature interactions, and session
                    duration
                  </li>
                  <li>Search queries, browsing history within the Platform</li>
                  <li>Crash reports and performance data</li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="text-lg font-medium text-black dark:text-zinc-50 mb-2">
                  Location Data:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-base leading-7 text-zinc-700 dark:text-zinc-300 ml-4">
                  <li>Precise GPS location (when permission is granted)</li>
                  <li>Approximate location based on IP address or network</li>
                  <li>Venue check-ins and location-based activity</li>
                  <li>
                    Travel patterns and movement data for recommendation
                    improvement
                  </li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="text-lg font-medium text-black dark:text-zinc-50 mb-2">
                  Technical Data:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-base leading-7 text-zinc-700 dark:text-zinc-300 ml-4">
                  <li>Browser type and version, screen resolution</li>
                  <li>Network connection information and service provider</li>
                  <li>
                    Cookies, local storage data, and similar tracking
                    technologies
                  </li>
                  <li>Integration data from connected third-party services</li>
                </ul>
              </div>
            </div>

            {/* 2.3 Information from Third Parties */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-black dark:text-zinc-50 mb-3">
                2.3 Information from Third Parties
              </h3>

              <div className="mb-4">
                <h4 className="text-lg font-medium text-black dark:text-zinc-50 mb-2">
                  Venue Partners:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-base leading-7 text-zinc-700 dark:text-zinc-300 ml-4">
                  <li>Reservation confirmations and dining history</li>
                  <li>
                    Point-of-sale data including order details and spending
                    patterns
                  </li>
                  <li>Service ratings and experience feedback</li>
                  <li>Special occasion and preference information</li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="text-lg font-medium text-black dark:text-zinc-50 mb-2">
                  Authentication and Profile Services:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-base leading-7 text-zinc-700 dark:text-zinc-300 ml-4">
                  <li>
                    Profile information from connected authentication services
                  </li>
                  <li>Basic account verification information</li>
                  <li>
                    Public activity related to venues or dining experiences (if
                    shared publicly)
                  </li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="text-lg font-medium text-black dark:text-zinc-50 mb-2">
                  Business Partners and Data Providers:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-base leading-7 text-zinc-700 dark:text-zinc-300 ml-4">
                  <li>Venue information, hours, menus, and availability</li>
                  <li>
                    Event listings, entertainment schedules, and special offers
                  </li>
                  <li>Market research data and demographic information</li>
                  <li>
                    Credit reporting information for business account
                    verification
                  </li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="text-lg font-medium text-black dark:text-zinc-50 mb-2">
                  Referral Sources:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-base leading-7 text-zinc-700 dark:text-zinc-300 ml-4">
                  <li>Information when you are referred by existing users</li>
                  <li>Promotional and marketing campaign attribution data</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3: How We Use Your Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-black dark:text-zinc-50 mb-4">
              3. HOW WE USE YOUR INFORMATION
            </h2>

            {/* 3.1 Core Platform Services */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-black dark:text-zinc-50 mb-3">
                3.1 Core Platform Services
              </h3>

              <div className="mb-4">
                <h4 className="text-lg font-medium text-black dark:text-zinc-50 mb-2">
                  Social Discovery and Matching:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-base leading-7 text-zinc-700 dark:text-zinc-300 ml-4">
                  <li>
                    Provide personalized venue recommendations based on your
                    preferences
                  </li>
                  <li>
                    Match you with compatible users for group formation and
                    shared experiences
                  </li>
                  <li>
                    Analyze social compatibility using AI algorithms considering
                    interests, timing, and preferences
                  </li>
                  <li>Facilitate group coordination and communication</li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="text-lg font-medium text-black dark:text-zinc-50 mb-2">
                  Reservation and Booking Services:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-base leading-7 text-zinc-700 dark:text-zinc-300 ml-4">
                  <li>Process and confirm reservations at partner venues</li>
                  <li>
                    Manage waitlist positions and availability notifications
                  </li>
                  <li>
                    Coordinate group bookings and cost-sharing arrangements
                  </li>
                  <li>Send booking confirmations, reminders, and updates</li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="text-lg font-medium text-black dark:text-zinc-50 mb-2">
                  Dining Experience Enhancement:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-base leading-7 text-zinc-700 dark:text-zinc-300 ml-4">
                  <li>
                    Create personalized feeds and venue discovery experiences
                  </li>
                  <li>
                    Provide real-time venue information including crowd density,
                    atmosphere, and special offers
                  </li>
                  <li>
                    Suggest optimal timing for dining based on venue conditions
                    and your preferences
                  </li>
                  <li>
                    Generate post-dining follow-up and dining history tracking
                  </li>
                </ul>
              </div>
            </div>

            {/* 3.2 AI and Machine Learning */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-black dark:text-zinc-50 mb-3">
                3.2 AI and Machine Learning
              </h3>

              <div className="mb-4">
                <h4 className="text-lg font-medium text-black dark:text-zinc-50 mb-2">
                  Venue Recommendation Systems:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-base leading-7 text-zinc-700 dark:text-zinc-300 ml-4">
                  <li>
                    Use machine learning to improve venue suggestions and dining
                    recommendation accuracy
                  </li>
                  <li>
                    Analyze user dining patterns to predict preferences and
                    optimize venue matching
                  </li>
                  <li>
                    Process natural language from reviews and preferences to
                    enhance recommendation algorithms
                  </li>
                  <li>
                    Develop predictive models for optimal dining timing and
                    venue selection based on real-time intelligence
                  </li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="text-lg font-medium text-black dark:text-zinc-50 mb-2">
                  Content and Safety Moderation:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-base leading-7 text-zinc-700 dark:text-zinc-300 ml-4">
                  <li>
                    Automatically detect and filter inappropriate content in
                    reviews and venue feedback
                  </li>
                  <li>
                    Identify potentially fraudulent venues or suspicious booking
                    activity
                  </li>
                  <li>
                    Monitor communications for safety concerns and policy
                    violations
                  </li>
                  <li>
                    Generate insights for platform improvement and user dining
                    experience enhancement
                  </li>
                </ul>
              </div>
            </div>

            {/* 3.3 Business Operations */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-black dark:text-zinc-50 mb-3">
                3.3 Business Operations
              </h3>

              <div className="mb-4">
                <h4 className="text-lg font-medium text-black dark:text-zinc-50 mb-2">
                  Analytics and Insights:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-base leading-7 text-zinc-700 dark:text-zinc-300 ml-4">
                  <li>
                    Generate anonymized usage statistics and platform
                    performance metrics
                  </li>
                  <li>
                    Provide business intelligence to venue partners about
                    customer preferences and trends
                  </li>
                  <li>
                    Conduct market research and competitive analysis to improve
                    services
                  </li>
                  <li>
                    Measure and report on platform effectiveness and user
                    satisfaction
                  </li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="text-lg font-medium text-black dark:text-zinc-50 mb-2">
                  Customer Support:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-base leading-7 text-zinc-700 dark:text-zinc-300 ml-4">
                  <li>
                    Respond to user inquiries, technical issues, and feedback
                  </li>
                  <li>
                    Investigate and resolve disputes between users or with
                    venues
                  </li>
                  <li>Provide personalized assistance and platform guidance</li>
                  <li>Maintain help resources and documentation</li>
                </ul>
              </div>
            </div>

            {/* 3.4 Marketing and Communications */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-black dark:text-zinc-50 mb-3">
                3.4 Marketing and Communications
              </h3>

              <div className="mb-4">
                <h4 className="text-lg font-medium text-black dark:text-zinc-50 mb-2">
                  Platform Communications:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-base leading-7 text-zinc-700 dark:text-zinc-300 ml-4">
                  <li>
                    Send service-related notifications, booking confirmations,
                    and platform updates
                  </li>
                  <li>
                    Provide personalized venue recommendations and dining
                    suggestions
                  </li>
                  <li>
                    Share relevant venue promotions and special dining offers
                  </li>
                  <li>
                    Deliver availability alerts and important reservation
                    changes
                  </li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="text-lg font-medium text-black dark:text-zinc-50 mb-2">
                  Marketing Activities:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-base leading-7 text-zinc-700 dark:text-zinc-300 ml-4">
                  <li>
                    Send newsletters and promotional content about new venues,
                    dining features, or restaurant partners
                  </li>
                  <li>
                    Create targeted campaigns based on dining preferences and
                    venue history
                  </li>
                  <li>
                    Conduct surveys and research to improve venue discovery and
                    booking offerings
                  </li>
                  <li>
                    Share dining success stories and venue partnerships (with
                    permission)
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4: How We Share Your Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-black dark:text-zinc-50 mb-4">
              4. HOW WE SHARE YOUR INFORMATION
            </h2>

            {/* 4.1 Venue Partners and Restaurants */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-black dark:text-zinc-50 mb-3">
                4.1 Venue Partners and Restaurants
              </h3>

              <div className="mb-4">
                <h4 className="text-lg font-medium text-black dark:text-zinc-50 mb-2">
                  Reservation and Service Information:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-base leading-7 text-zinc-700 dark:text-zinc-300 ml-4">
                  <li>
                    Share booking details including name, contact information,
                    party size, and special requests
                  </li>
                  <li>
                    Provide dining history and preference information to enhance
                    service personalization
                  </li>
                  <li>
                    Enable direct communication between users and venues for
                    reservation coordination
                  </li>
                  <li>
                    Share feedback and reviews to help venues improve their
                    offerings
                  </li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="text-lg font-medium text-black dark:text-zinc-50 mb-2">
                  Business Analytics:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-base leading-7 text-zinc-700 dark:text-zinc-300 ml-4">
                  <li>
                    Provide aggregated and anonymized customer insights and
                    trends
                  </li>
                  <li>
                    Share performance metrics and booking patterns (without
                    personal identification)
                  </li>
                  <li>Enable targeted marketing and promotion opportunities</li>
                  <li>
                    Support venue optimization and service improvement
                    initiatives
                  </li>
                </ul>
              </div>
            </div>

            {/* 4.2 Platform Features and Reviews */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-black dark:text-zinc-50 mb-3">
                4.2 Platform Features and Reviews
              </h3>

              <div className="mb-4">
                <h4 className="text-lg font-medium text-black dark:text-zinc-50 mb-2">
                  Public Content and Venue Reviews:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-base leading-7 text-zinc-700 dark:text-zinc-300 ml-4">
                  <li>
                    Display reviews, ratings, and photos associated with your
                    public profile on venue pages
                  </li>
                  <li>
                    Share venue check-ins and dining experiences according to
                    your privacy settings
                  </li>
                  <li>
                    Enable venue discovery through user-generated content and
                    dining recommendations
                  </li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="text-lg font-medium text-black dark:text-zinc-50 mb-2">
                  Dining History and Preferences:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-base leading-7 text-zinc-700 dark:text-zinc-300 ml-4">
                  <li>
                    Use your dining history to improve venue recommendations for
                    you and similar users
                  </li>
                  <li>
                    Share anonymized dining patterns with venues to help them
                    optimize their offerings
                  </li>
                </ul>
              </div>
            </div>

            {/* 4.3 Service Providers and Business Partners */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-black dark:text-zinc-50 mb-3">
                4.3 Service Providers and Business Partners
              </h3>

              <div className="mb-4">
                <h4 className="text-lg font-medium text-black dark:text-zinc-50 mb-2">
                  Payment Processing:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-base leading-7 text-zinc-700 dark:text-zinc-300 ml-4">
                  <li>
                    Share necessary payment information with secure payment
                    processors (e.g., Stripe)
                  </li>
                  <li>
                    Process individual dining payments and reservation deposits
                    through financial service partners
                  </li>
                  <li>
                    Handle refunds and payment disputes through authorized
                    financial institutions
                  </li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="text-lg font-medium text-black dark:text-zinc-50 mb-2">
                  Technology and Infrastructure Partners:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-base leading-7 text-zinc-700 dark:text-zinc-300 ml-4">
                  <li>
                    Share data with cloud hosting providers for platform
                    operations and data storage
                  </li>
                  <li>
                    Enable integrations with reservation systems (OpenTable,
                    Resy) and point-of-sale systems
                  </li>
                  <li>
                    Utilize analytics and performance monitoring services for
                    platform optimization
                  </li>
                  <li>
                    Work with security providers for fraud detection and
                    prevention
                  </li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="text-lg font-medium text-black dark:text-zinc-50 mb-2">
                  Marketing and Venue Discovery Partners:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-base leading-7 text-zinc-700 dark:text-zinc-300 ml-4">
                  <li>
                    Share aggregated and de-identified data for market research
                    and trend analysis
                  </li>
                  <li>
                    Enable targeted venue recommendations and dining suggestions
                  </li>
                  <li>
                    Collaborate with promotional partners for special dining
                    offers and events
                  </li>
                </ul>
              </div>
            </div>

            {/* 4.4 Legal and Safety Requirements */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-black dark:text-zinc-50 mb-3">
                4.4 Legal and Safety Requirements
              </h3>

              <div className="mb-4">
                <h4 className="text-lg font-medium text-black dark:text-zinc-50 mb-2">
                  Legal Compliance:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-base leading-7 text-zinc-700 dark:text-zinc-300 ml-4">
                  <li>
                    Comply with legal obligations, court orders, and government
                    requests
                  </li>
                  <li>Respond to lawful subpoenas and regulatory inquiries</li>
                  <li>
                    Share information required for tax reporting and financial
                    compliance
                  </li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="text-lg font-medium text-black dark:text-zinc-50 mb-2">
                  Safety and Security:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-base leading-7 text-zinc-700 dark:text-zinc-300 ml-4">
                  <li>
                    Report suspected illegal activity or safety threats to
                    appropriate authorities
                  </li>
                  <li>
                    Share information necessary to prevent fraud, abuse, or harm
                    to users
                  </li>
                  <li>
                    Coordinate with law enforcement for legitimate
                    investigations
                  </li>
                  <li>
                    Protect the rights, property, and safety of Vibeslinks,
                    users, and the public
                  </li>
                </ul>
              </div>
            </div>

            {/* 4.5 Business Transfers */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-black dark:text-zinc-50 mb-3">
                4.5 Business Transfers
              </h3>
              <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300">
                In the event of a merger, acquisition, or sale of assets, your
                personal information may be transferred to the acquiring company
                as part of the business transaction. We will provide notice of
                any such change and ensure continued protection of your personal
                information.
              </p>
            </div>
          </section>

          {/* Section 5: Data Retention and Storage */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-black dark:text-zinc-50 mb-4">
              5. DATA RETENTION AND STORAGE
            </h2>

            {/* 5.1 Retention Periods */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-black dark:text-zinc-50 mb-3">
                5.1 Retention Periods
              </h3>

              <div className="mb-4">
                <h4 className="text-lg font-medium text-black dark:text-zinc-50 mb-2">
                  Active Account Data:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-base leading-7 text-zinc-700 dark:text-zinc-300 ml-4">
                  <li>
                    Profile information and preferences: Retained while your
                    account is active
                  </li>
                  <li>
                    Reservation and booking history: Retained for 5 years for
                    business and legal purposes
                  </li>
                  <li>
                    Communications and messages: Retained for 2 years for
                    dispute resolution and support
                  </li>
                  <li>
                    Location and usage data: Retained for 1 year for analytics
                    and service improvement
                  </li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="text-lg font-medium text-black dark:text-zinc-50 mb-2">
                  Inactive Account Data:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-base leading-7 text-zinc-700 dark:text-zinc-300 ml-4">
                  <li>
                    Account information retained for 18 months after last
                    activity to enable easy reactivation
                  </li>
                  <li>
                    Essential business records retained as required by law
                    (typically 7 years)
                  </li>
                  <li>
                    Anonymized and aggregated data may be retained indefinitely
                    for research and analytics
                  </li>
                </ul>
              </div>
            </div>

            {/* 5.2 Data Storage and Security */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-black dark:text-zinc-50 mb-3">
                5.2 Data Storage and Security
              </h3>

              <div className="mb-4">
                <h4 className="text-lg font-medium text-black dark:text-zinc-50 mb-2">
                  Security Measures:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-base leading-7 text-zinc-700 dark:text-zinc-300 ml-4">
                  <li>
                    Encryption of data in transit and at rest using
                    industry-standard protocols
                  </li>
                  <li>
                    Multi-factor authentication and access controls for internal
                    systems
                  </li>
                  <li>Regular security audits and vulnerability assessments</li>
                  <li>
                    Secure cloud infrastructure with redundant backup systems
                  </li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="text-lg font-medium text-black dark:text-zinc-50 mb-2">
                  International Data Transfers:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-base leading-7 text-zinc-700 dark:text-zinc-300 ml-4">
                  <li>
                    Data may be processed and stored in countries where we or
                    our service providers operate
                  </li>
                  <li>
                    We implement appropriate safeguards for international
                    transfers as required by applicable law
                  </li>
                  <li>
                    Users in the European Union benefit from adequacy decisions
                    and standard contractual clauses
                  </li>
                </ul>
              </div>
            </div>

            {/* 5.3 Data Deletion */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-black dark:text-zinc-50 mb-3">
                5.3 Data Deletion
              </h3>

              <div className="mb-4">
                <h4 className="text-lg font-medium text-black dark:text-zinc-50 mb-2">
                  User-Initiated Deletion:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-base leading-7 text-zinc-700 dark:text-zinc-300 ml-4">
                  <li>
                    You may request deletion of your account and associated data
                    at any time
                  </li>
                  <li>
                    Some information may be retained for legal compliance or
                    legitimate business interests
                  </li>
                  <li>
                    Anonymized and aggregated data may continue to be used after
                    account deletion
                  </li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="text-lg font-medium text-black dark:text-zinc-50 mb-2">
                  Automatic Deletion:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-base leading-7 text-zinc-700 dark:text-zinc-300 ml-4">
                  <li>
                    Inactive accounts are deleted after 24 months of inactivity
                  </li>
                  <li>
                    Temporary data such as session information is automatically
                    purged
                  </li>
                  <li>
                    Backup systems follow automated retention schedules with
                    secure deletion procedures
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 6: Your Privacy Rights and Choices */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-black dark:text-zinc-50 mb-4">
              6. YOUR PRIVACY RIGHTS AND CHOICES
            </h2>

            {/* 6.1 Account Management and Access */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-black dark:text-zinc-50 mb-3">
                6.1 Account Management and Access
              </h3>

              <div className="mb-4">
                <h4 className="text-lg font-medium text-black dark:text-zinc-50 mb-2">
                  Profile Control:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-base leading-7 text-zinc-700 dark:text-zinc-300 ml-4">
                  <li>
                    Update your personal information, preferences, and privacy
                    settings at any time
                  </li>
                  <li>
                    Control the visibility of your profile and activity to other
                    users
                  </li>
                  <li>
                    Manage friend connections and social graph information
                  </li>
                  <li>
                    Download a copy of your personal data in a portable format
                  </li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="text-lg font-medium text-black dark:text-zinc-50 mb-2">
                  Communication Preferences:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-base leading-7 text-zinc-700 dark:text-zinc-300 ml-4">
                  <li>
                    Opt out of marketing emails and promotional communications
                  </li>
                  <li>
                    Control push notifications and in-app messaging preferences
                  </li>
                  <li>
                    Set preferences for venue communications and promotional
                    offers
                  </li>
                  <li>
                    Choose communication channels and frequency for platform
                    updates
                  </li>
                </ul>
              </div>
            </div>

            {/* 6.2 Privacy Settings and Controls */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-black dark:text-zinc-50 mb-3">
                6.2 Privacy Settings and Controls
              </h3>

              <div className="mb-4">
                <h4 className="text-lg font-medium text-black dark:text-zinc-50 mb-2">
                  Location Privacy:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-base leading-7 text-zinc-700 dark:text-zinc-300 ml-4">
                  <li>
                    Enable or disable location services for the Platform at any
                    time
                  </li>
                  <li>
                    Control precision of location data shared (exact vs.
                    approximate)
                  </li>
                  <li>Manage location history and venue check-in visibility</li>
                  <li>
                    Opt out of location-based recommendations and features
                  </li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="text-lg font-medium text-black dark:text-zinc-50 mb-2">
                  Dining and Venue Privacy:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-base leading-7 text-zinc-700 dark:text-zinc-300 ml-4">
                  <li>
                    Control who can see your dining reviews and venue ratings
                  </li>
                  <li>
                    Manage dining history visibility and preference sharing
                  </li>
                  <li>
                    Opt out of personalized venue recommendations while
                    maintaining basic platform functionality
                  </li>
                  <li>
                    Control sharing of dietary restrictions and special dining
                    requirements
                  </li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="text-lg font-medium text-black dark:text-zinc-50 mb-2">
                  Data Sharing Controls:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-base leading-7 text-zinc-700 dark:text-zinc-300 ml-4">
                  <li>
                    Opt out of data sharing with specific categories of partners
                  </li>
                  <li>
                    Control use of your information for marketing and
                    promotional purposes
                  </li>
                  <li>
                    Manage consent for dining pattern analysis and venue
                    optimization
                  </li>
                  <li>
                    Request limitations on sensitive dietary and health
                    information processing
                  </li>
                </ul>
              </div>
            </div>

            {/* 6.3 Legal Privacy Rights */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-black dark:text-zinc-50 mb-3">
                6.3 Legal Privacy Rights
              </h3>

              <div className="mb-4">
                <h4 className="text-lg font-medium text-black dark:text-zinc-50 mb-2">
                  Rights Under GDPR (EU Users):
                </h4>
                <ul className="list-disc list-inside space-y-1 text-base leading-7 text-zinc-700 dark:text-zinc-300 ml-4">
                  <li>Right to access your personal data and receive a copy</li>
                  <li>Right to rectify inaccurate or incomplete information</li>
                  <li>Right to erase your data under certain circumstances</li>
                  <li>Right to restrict processing of your personal data</li>
                  <li>
                    Right to data portability in a machine-readable format
                  </li>
                  <li>Right to object to certain types of data processing</li>
                  <li>
                    Right to lodge a complaint with a supervisory authority
                  </li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="text-lg font-medium text-black dark:text-zinc-50 mb-2">
                  Rights Under CCPA (California Users):
                </h4>
                <ul className="list-disc list-inside space-y-1 text-base leading-7 text-zinc-700 dark:text-zinc-300 ml-4">
                  <li>
                    Right to know what personal information is collected and
                    shared
                  </li>
                  <li>
                    Right to delete personal information (with certain
                    exceptions)
                  </li>
                  <li>
                    Right to opt out of the sale or sharing of personal
                    information
                  </li>
                  <li>Right to correct inaccurate personal information</li>
                  <li>
                    Right to non-discrimination for exercising privacy rights
                  </li>
                  <li>
                    Right to request information about data sharing with third
                    parties
                  </li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="text-lg font-medium text-black dark:text-zinc-50 mb-2">
                  Rights Under Other Applicable Laws:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-base leading-7 text-zinc-700 dark:text-zinc-300 ml-4">
                  <li>
                    Additional rights may apply based on your jurisdiction
                  </li>
                  <li>
                    We will comply with applicable privacy laws where you reside
                  </li>
                  <li>
                    Contact us for information about your specific privacy
                    rights
                  </li>
                </ul>
              </div>
            </div>

            {/* 6.4 Exercising Your Rights */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-black dark:text-zinc-50 mb-3">
                6.4 Exercising Your Rights
              </h3>
              <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300 mb-4">
                To exercise your privacy rights or make requests:
              </p>
              <ul className="list-disc list-inside space-y-1 text-base leading-7 text-zinc-700 dark:text-zinc-300 ml-4 mb-4">
                <li>Email us at privacy@vibeslinks.com</li>
                <li>Use the privacy settings in your account dashboard</li>
                <li>Submit requests through our online privacy portal</li>
                <li>
                  Contact our Data Protection Officer for complex requests
                </li>
              </ul>
              <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300">
                We will respond to your requests within the timeframes required
                by applicable law, typically within 30 days. We may need to
                verify your identity before processing certain requests.
              </p>
            </div>
          </section>

          {/* Section 7: Cookies and Tracking Technologies */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-black dark:text-zinc-50 mb-4">
              7. COOKIES AND TRACKING TECHNOLOGIES
            </h2>

            {/* 7.1 Types of Cookies We Use */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-black dark:text-zinc-50 mb-3">
                7.1 Types of Cookies We Use
              </h3>

              <div className="mb-4">
                <h4 className="text-lg font-medium text-black dark:text-zinc-50 mb-2">
                  Essential Cookies:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-base leading-7 text-zinc-700 dark:text-zinc-300 ml-4">
                  <li>
                    Authentication and security cookies to keep you logged in
                    safely
                  </li>
                  <li>Shopping cart and booking session cookies</li>
                  <li>Preference cookies to remember your settings</li>
                  <li>Performance cookies to ensure platform functionality</li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="text-lg font-medium text-black dark:text-zinc-50 mb-2">
                  Analytics Cookies:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-base leading-7 text-zinc-700 dark:text-zinc-300 ml-4">
                  <li>
                    Google Analytics and similar services to understand platform
                    usage
                  </li>
                  <li>Performance monitoring and error tracking</li>
                  <li>
                    User behavior analysis to improve features and user
                    experience
                  </li>
                  <li>A/B testing cookies for platform optimization</li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="text-lg font-medium text-black dark:text-zinc-50 mb-2">
                  Marketing Cookies:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-base leading-7 text-zinc-700 dark:text-zinc-300 ml-4">
                  <li>
                    Advertising cookies for personalized content and promotions
                  </li>
                  <li>
                    Social media cookies for sharing and integration features
                  </li>
                  <li>
                    Remarketing cookies to show relevant ads on other platforms
                  </li>
                  <li>
                    Attribution cookies to measure advertising effectiveness
                  </li>
                </ul>
              </div>
            </div>

            {/* 7.2 Cookie Management */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-black dark:text-zinc-50 mb-3">
                7.2 Cookie Management
              </h3>

              <div className="mb-4">
                <h4 className="text-lg font-medium text-black dark:text-zinc-50 mb-2">
                  Browser Controls:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-base leading-7 text-zinc-700 dark:text-zinc-300 ml-4">
                  <li>
                    Most browsers allow you to control cookies through settings
                  </li>
                  <li>
                    You can block, delete, or manage cookies for specific sites
                  </li>
                  <li>
                    Some features may not work properly if essential cookies are
                    disabled
                  </li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="text-lg font-medium text-black dark:text-zinc-50 mb-2">
                  Platform Controls:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-base leading-7 text-zinc-700 dark:text-zinc-300 ml-4">
                  <li>
                    Use our cookie preference center to manage non-essential
                    cookies
                  </li>
                  <li>
                    Opt out of analytics and marketing cookies while maintaining
                    functionality
                  </li>
                  <li>
                    Update your preferences at any time through your account
                    settings
                  </li>
                </ul>
              </div>
            </div>

            {/* 7.3 Third-Party Tracking */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-black dark:text-zinc-50 mb-3">
                7.3 Third-Party Tracking
              </h3>

              <div className="mb-4">
                <h4 className="text-lg font-medium text-black dark:text-zinc-50 mb-2">
                  Advertising Partners:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-base leading-7 text-zinc-700 dark:text-zinc-300 ml-4">
                  <li>
                    We work with advertising networks that may use tracking
                    technologies
                  </li>
                  <li>
                    These partners may collect information about your visits to
                    our Platform and other websites
                  </li>
                  <li>
                    You can opt out of interest-based advertising through
                    industry choice mechanisms
                  </li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="text-lg font-medium text-black dark:text-zinc-50 mb-2">
                  Social Media Integration:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-base leading-7 text-zinc-700 dark:text-zinc-300 ml-4">
                  <li>
                    Social media buttons and widgets may collect information
                    about your visits
                  </li>
                  <li>
                    This information is subject to the privacy policies of the
                    respective social media companies
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 8: Special Considerations */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-black dark:text-zinc-50 mb-4">
              8. SPECIAL CONSIDERATIONS
            </h2>

            {/* 8.1 Sensitive Information */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-black dark:text-zinc-50 mb-3">
                8.1 Sensitive Information
              </h3>

              <div className="mb-4">
                <h4 className="text-lg font-medium text-black dark:text-zinc-50 mb-2">
                  Dietary and Health Information:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-base leading-7 text-zinc-700 dark:text-zinc-300 ml-4">
                  <li>
                    We collect dietary restrictions and allergies to ensure safe
                    dining experiences
                  </li>
                  <li>
                    This information is shared with venues only as necessary for
                    service provision
                  </li>
                  <li>You can update or remove this information at any time</li>
                  <li>
                    We do not use health information for advertising or
                    marketing purposes
                  </li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="text-lg font-medium text-black dark:text-zinc-50 mb-2">
                  Financial Information:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-base leading-7 text-zinc-700 dark:text-zinc-300 ml-4">
                  <li>
                    Payment information is processed by secure third-party
                    payment processors
                  </li>
                  <li>
                    We do not store complete credit card numbers or payment
                    credentials
                  </li>
                  <li>
                    Financial data is used only for transaction processing and
                    fraud prevention
                  </li>
                </ul>
              </div>
            </div>

            {/* 8.2 Children's Privacy */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-black dark:text-zinc-50 mb-3">
                8.2 Children&apos;s Privacy
              </h3>

              <div className="mb-4">
                <h4 className="text-lg font-medium text-black dark:text-zinc-50 mb-2">
                  Age Requirements:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-base leading-7 text-zinc-700 dark:text-zinc-300 ml-4">
                  <li>
                    Our Platform is not intended for users under 18 years of age
                  </li>
                  <li>
                    We do not knowingly collect personal information from
                    children under 18
                  </li>
                  <li>
                    If we become aware of collection from a minor, we will
                    delete such information promptly
                  </li>
                  <li>
                    Parents or guardians may contact us to report underage use
                  </li>
                </ul>
              </div>
            </div>

            {/* 8.3 Artificial Intelligence and Automated Decision-Making */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-black dark:text-zinc-50 mb-3">
                8.3 Artificial Intelligence and Automated Decision-Making
              </h3>

              <div className="mb-4">
                <h4 className="text-lg font-medium text-black dark:text-zinc-50 mb-2">
                  AI-Powered Features:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-base leading-7 text-zinc-700 dark:text-zinc-300 ml-4">
                  <li>
                    We use AI and machine learning for recommendations,
                    matching, and content moderation
                  </li>
                  <li>
                    Automated systems help personalize your experience and
                    improve platform safety
                  </li>
                  <li>
                    You have the right to understand and challenge automated
                    decision-making in certain jurisdictions
                  </li>
                  <li>
                    Human review is available for significant automated
                    decisions affecting you
                  </li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="text-lg font-medium text-black dark:text-zinc-50 mb-2">
                  Algorithm Transparency:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-base leading-7 text-zinc-700 dark:text-zinc-300 ml-4">
                  <li>
                    We strive to be transparent about how our recommendation
                    systems work
                  </li>
                  <li>
                    Factors include your preferences, behavior patterns,
                    location, and social compatibility
                  </li>
                  <li>
                    You can influence recommendations through your profile
                    settings and feedback
                  </li>
                  <li>
                    Contact us for more information about our algorithmic
                    decision-making processes
                  </li>
                </ul>
              </div>
            </div>

            {/* 8.4 Business User Privacy */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-black dark:text-zinc-50 mb-3">
                8.4 Business User Privacy
              </h3>

              <div className="mb-4">
                <h4 className="text-lg font-medium text-black dark:text-zinc-50 mb-2">
                  Enhanced Data Processing:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-base leading-7 text-zinc-700 dark:text-zinc-300 ml-4">
                  <li>
                    Business accounts involve additional data collection for
                    analytics and venue performance measurement
                  </li>
                  <li>
                    We may collect information about dining patterns, customer
                    preferences, and reservation trends
                  </li>
                  <li>
                    Business data is used to improve platform services and
                    provide competitive dining market insights
                  </li>
                  <li>
                    Business users have additional controls over data sharing
                    and analytics participation
                  </li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="text-lg font-medium text-black dark:text-zinc-50 mb-2">
                  Staff and Venue Data:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-base leading-7 text-zinc-700 dark:text-zinc-300 ml-4">
                  <li>
                    Business accounts may include information about venue staff
                    and management for platform access
                  </li>
                  <li>
                    Staff data is collected only as necessary for platform
                    functionality and venue operations
                  </li>
                  <li>
                    Venue employees have the same privacy rights as other
                    platform users regarding their personal information
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 9: International Transfers and Compliance */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-black dark:text-zinc-50 mb-4">
              9. INTERNATIONAL TRANSFERS AND COMPLIANCE
            </h2>

            {/* 9.1 Global Operations */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-black dark:text-zinc-50 mb-3">
                9.1 Global Operations
              </h3>

              <div className="mb-4">
                <h4 className="text-lg font-medium text-black dark:text-zinc-50 mb-2">
                  Data Transfer Mechanisms:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-base leading-7 text-zinc-700 dark:text-zinc-300 ml-4">
                  <li>
                    We operate globally and may transfer data to countries where
                    we or our service providers operate
                  </li>
                  <li>
                    Transfers comply with applicable international data
                    protection laws
                  </li>
                  <li>
                    We implement appropriate safeguards such as standard
                    contractual clauses and adequacy decisions
                  </li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="text-lg font-medium text-black dark:text-zinc-50 mb-2">
                  Regional Compliance:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-base leading-7 text-zinc-700 dark:text-zinc-300 ml-4">
                  <li>
                    We comply with privacy laws in jurisdictions where we
                    operate
                  </li>
                  <li>
                    Additional protections may apply based on your location
                  </li>
                  <li>
                    Local representatives may be available for privacy inquiries
                    in certain regions
                  </li>
                </ul>
              </div>
            </div>

            {/* 9.2 Data Protection Frameworks */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-black dark:text-zinc-50 mb-3">
                9.2 Data Protection Frameworks
              </h3>

              <div className="mb-4">
                <h4 className="text-lg font-medium text-black dark:text-zinc-50 mb-2">
                  EU-US Data Privacy Framework:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-base leading-7 text-zinc-700 dark:text-zinc-300 ml-4">
                  <li>
                    We comply with applicable data privacy framework
                    requirements
                  </li>
                  <li>
                    Appropriate safeguards are in place for EU personal data
                    transfers
                  </li>
                  <li>
                    EU users have specific rights and protections under GDPR
                  </li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="text-lg font-medium text-black dark:text-zinc-50 mb-2">
                  Other International Frameworks:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-base leading-7 text-zinc-700 dark:text-zinc-300 ml-4">
                  <li>
                    We participate in relevant international privacy frameworks
                    as appropriate
                  </li>
                  <li>
                    Cross-border data transfer mechanisms are reviewed and
                    updated regularly
                  </li>
                  <li>
                    Local law requirements are incorporated into our privacy
                    practices
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 10: Updates to This Privacy Policy */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-black dark:text-zinc-50 mb-4">
              10. UPDATES TO THIS PRIVACY POLICY
            </h2>

            {/* 10.1 Policy Changes */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-black dark:text-zinc-50 mb-3">
                10.1 Policy Changes
              </h3>
              <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300 mb-4">
                We may update this Privacy Policy from time to time to reflect
                changes in our practices, technology, or legal requirements. We
                will:
              </p>
              <ul className="list-disc list-inside space-y-1 text-base leading-7 text-zinc-700 dark:text-zinc-300 ml-4">
                <li>
                  Post the updated policy on our Platform with a new &quot;Last
                  Updated&quot; date
                </li>
                <li>
                  Notify you of material changes through email or prominent
                  platform notices
                </li>
                <li>Provide a summary of significant changes when practical</li>
                <li>
                  Give you the opportunity to review changes before they take
                  effect
                </li>
              </ul>
            </div>

            {/* 10.2 Continued Use */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-black dark:text-zinc-50 mb-3">
                10.2 Continued Use
              </h3>
              <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300">
                Your continued use of the Platform after policy updates
                constitutes acceptance of the revised Privacy Policy. If you
                disagree with changes, you may delete your account or stop using
                the Platform.
              </p>
            </div>
          </section>

          {/* Section 11: Contact Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-black dark:text-zinc-50 mb-4">
              11. CONTACT INFORMATION
            </h2>

            {/* 11.1 General Privacy Inquiries */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-black dark:text-zinc-50 mb-3">
                11.1 General Privacy Inquiries
              </h3>
              <div className="bg-zinc-50 dark:bg-zinc-900 rounded-lg p-6">
                <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300 mb-2">
                  <strong className="text-black dark:text-zinc-50">
                    Vibeslinks, Inc.
                  </strong>
                </p>
                <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300 mb-1">
                  <strong className="text-black dark:text-zinc-50">
                    Email:
                  </strong>{" "}
                  privacy@vibeslinks.com
                </p>
                <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300 mb-1">
                  <strong className="text-black dark:text-zinc-50">
                    Subject Line:
                  </strong>{" "}
                  Privacy Inquiry
                </p>
                <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300 mt-2">
                  For general questions about this Privacy Policy, our privacy
                  practices, or to exercise your privacy rights.
                </p>
              </div>
            </div>

            {/* 11.2 Data Protection Officer */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-black dark:text-zinc-50 mb-3">
                11.2 Data Protection Officer
              </h3>
              <div className="bg-zinc-50 dark:bg-zinc-900 rounded-lg p-6">
                <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300 mb-2">
                  <strong className="text-black dark:text-zinc-50">
                    Data Protection Officer
                  </strong>
                </p>
                <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300 mb-1">
                  <strong className="text-black dark:text-zinc-50">
                    Email:
                  </strong>{" "}
                  dpo@vibeslinks.com
                </p>
                <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300 mb-1">
                  <strong className="text-black dark:text-zinc-50">
                    Subject Line:
                  </strong>{" "}
                  Data Protection Inquiry
                </p>
                <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300 mt-2">
                  For complex privacy matters, GDPR-related inquiries, or formal
                  complaints about our data handling practices.
                </p>
              </div>
            </div>

            {/* 11.3 Regional Contacts */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-black dark:text-zinc-50 mb-3">
                11.3 Regional Contacts
              </h3>

              <div className="mb-4">
                <h4 className="text-lg font-medium text-black dark:text-zinc-50 mb-2">
                  European Union Users:
                </h4>
                <div className="bg-zinc-50 dark:bg-zinc-900 rounded-lg p-4">
                  <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300 mb-1">
                    <strong className="text-black dark:text-zinc-50">
                      EU Representative:
                    </strong>{" "}
                    [EU Representative Details]
                  </p>
                  <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300">
                    <strong className="text-black dark:text-zinc-50">
                      Email:
                    </strong>{" "}
                    eu-privacy@vibeslinks.com
                  </p>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-lg font-medium text-black dark:text-zinc-50 mb-2">
                  California Users:
                </h4>
                <div className="bg-zinc-50 dark:bg-zinc-900 rounded-lg p-4">
                  <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300">
                    <strong className="text-black dark:text-zinc-50">
                      California Privacy Inquiries:
                    </strong>{" "}
                    ca-privacy@vibeslinks.com
                  </p>
                </div>
              </div>
            </div>

            {/* 11.4 Business Privacy Inquiries */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-black dark:text-zinc-50 mb-3">
                11.4 Business Privacy Inquiries
              </h3>
              <div className="bg-zinc-50 dark:bg-zinc-900 rounded-lg p-6">
                <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300 mb-2">
                  <strong className="text-black dark:text-zinc-50">
                    Business Users and Venue Partners:
                  </strong>
                </p>
                <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300 mb-1">
                  <strong className="text-black dark:text-zinc-50">
                    Email:
                  </strong>{" "}
                  business-privacy@vibeslinks.com
                </p>
                <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300 mb-1">
                  <strong className="text-black dark:text-zinc-50">
                    Subject Line:
                  </strong>{" "}
                  Business Privacy Inquiry
                </p>
                <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300 mt-2">
                  For privacy matters related to business accounts, venue
                  partnerships, and B2B data processing.
                </p>
              </div>
            </div>

            {/* 11.5 Response Times */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-black dark:text-zinc-50 mb-3">
                11.5 Response Times
              </h3>
              <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300 mb-4">
                We aim to respond to privacy inquiries within:
              </p>
              <ul className="list-disc list-inside space-y-1 text-base leading-7 text-zinc-700 dark:text-zinc-300 ml-4">
                <li>
                  <strong className="text-black dark:text-zinc-50">
                    General inquiries:
                  </strong>{" "}
                  5-10 business days
                </li>
                <li>
                  <strong className="text-black dark:text-zinc-50">
                    Privacy rights requests:
                  </strong>{" "}
                  30 days (as required by law)
                </li>
                <li>
                  <strong className="text-black dark:text-zinc-50">
                    Urgent safety or security matters:
                  </strong>{" "}
                  24-48 hours
                </li>
              </ul>
              <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300 mt-4">
                Complex requests may require additional time, and we will keep
                you informed of our progress.
              </p>
            </div>
          </section>

          {/* Footer Note */}
          <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800">
            <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300 text-center italic">
              This Privacy Policy is effective as of the date listed above and
              applies to all information collected through the Vibeslinks
              Platform. By using our services, you acknowledge that you have
              read and understood this Privacy Policy.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
