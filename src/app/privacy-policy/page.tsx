import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://crypto-invest-eight.vercel.app/"),
  title: "Privacy Policy | CryptoInvestUSA",
  description:
    "By using the Website, you acknowledge that you have read, understood all of our Privacy Policy.",
  openGraph: {
    images: "/home.png",
    title: "Privacy Policy | CryptoInvestUSA",
    description:
      "By using the Website, you acknowledge that you have read, understood all of our Privacy Policy.",
    url: "https://cryptoinvestusa.com",
    type: "website",
  },
};

export default function PrivacyPolicy() {
  return (
    <main className="max-w-[75rem] m-auto flex min-h-screen w-full flex-col gap-3 p-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold">Privacy Policy</h1>
        <span className="text-muted-foreground text-sm">
          Last Updated on <span className="text-primary">02/19/2024</span>
        </span>
      </div>
      <p>
        This Privacy Policy explains how https://cryptoinvestusa.com/
        (&apos;we&apos;, &apos;us&apos;, or &apos;our&apos;) collects, uses,
        shares, and protects the personal information of users (&apos;you&apos;
        or &apos;your&apos;) who visit our website or use our services. We are
        committed to safeguarding your privacy and ensuring the security of your
        personal information. By using our website and services, you agree to
        the collection and use of information in accordance with this policy.
      </p>
      <h2 className="text-2xl font-bold pt-2">Information We Collect</h2>
      <ol className="list-inside list-decimal flex flex-col gap-1">
        <li>
          <span className="font-semibold text-primary">
            Personal Information
          </span>
          : When you register for an account or use our services, we may collect
          personal information such as your name, email address, date of birth,
          and contact details.
        </li>

        <li>
          <span className="font-semibold text-primary">
            Financial Information
          </span>
          : To facilitate transactions and investments, we may collect financial
          information such as your bank account details, cryptocurrency wallet
          addresses, and transaction history.
        </li>

        <li>
          <span className="font-semibold text-primary">
            Device and Usage Information
          </span>
          : We automatically collect information about your device and how you
          interact with our website. This includes IP addresses, browser type,
          device type, pages visited, and timestamps.
        </li>

        <li>
          <span className="font-semibold text-primary">
            Cookies and Similar Technologies
          </span>
          : We use cookies and similar tracking technologies to enhance your
          experience on our website. Cookies are small files stored on your
          device that help us analyze website usage and customize content.
        </li>
      </ol>

      <h2 className="text-2xl font-bold pt-2">How We Use Your Information</h2>
      <ol className="list-inside list-decimal flex flex-col gap-1">
        <li>
          To Provide Services: We use your information to create and your
          account, process transactions, and provide customer support.
        </li>

        <li>
          Personalization: Your information helps us customize your experience,
          such as displaying relevant content and investment options.
        </li>

        <li>
          Communication: We may send you updates, newsletters, and promotional
          offers related to our services. You can opt-out of these
          communications at any time.
        </li>

        <li>
          Security and Fraud Prevention: Your information is crucial for
          maintaining the security of our platform, detecting and preventing
          fraud, and ensuring compliance with legal requirements.
        </li>
      </ol>

      <h2 className="text-2xl font-bold pt-2">Data Sharing and Disclosure</h2>
      <ol className="list-inside list-decimal flex flex-col gap-1">
        <li>
          <span className="font-semibold text-primary">Service Providers</span>:
          We may share your information with third-party service providers who
          assist us in operating our website, processing transactions, and
          providing services.
        </li>
        <li>
          <span className="font-semibold text-primary">Legal Compliance</span>:
          We may disclose your information when required by law, such as in
          response to legal processes or government requests.
        </li>
        <li>
          <span className="font-semibold text-primary">Business Transfers</span>
          : In the event of a merger, acquisition, or sale of assets, your
          information may be transferred as part of the transaction. We will
          notify you of any such change.
        </li>
      </ol>

      <h2 className="text-2xl font-bold pt-2">Data Retention</h2>
      <p>
        We retain your personal information for as long as necessary to fulfill
        the purposes outlined in this Privacy Policy unless a longer retention
        period is required or permitted by law.
      </p>

      <h2 className="text-2xl font-bold pt-2">Your Privacy Rights</h2>
      <ol className="list-inside list-decimal flex flex-col gap-1">
        <li>
          <span className="font-semibold text-primary">
            Access and Correction
          </span>
          : You have the right to access and update your personal information.
          You can do this by logging into your account or contacting us
          directly.
        </li>
        <li>
          <span className="font-semibold text-primary">Data Portability</span>:
          You can request a copy of your data in a structured, machine-readable
          format.
        </li>
        <li>
          <span className="font-semibold text-primary">Deletion</span>
          You can request the deletion of your account and associated data,
          subject to legal obligations.
        </li>
      </ol>

      <h2 className="text-2xl font-bold pt-2">Security Measures</h2>
      <p>
        We implement industry-standard security measures to protect your
        personal information from unauthorized access, disclosure, alteration,
        or destruction. Changes to this Privacy Policy We reserve the right to
        update this Privacy Policy periodically. Any changes will be posted on
        this page, and we encourage you to review this page regularly for
        updates.
      </p>

      <h2 className="text-2xl font-bold pt-2">Contact Information</h2>
      <p>
        If you have any questions or concerns about these Terms and Conditions,
        please contact us at{" "}
        <Link
          className="text-primary hover:underline"
          href={"mailto:contact@cryptoinvestusa.com"}
        >
          contact@cryptoinvestusa.com
        </Link>
        .
      </p>
    </main>
  );
}
