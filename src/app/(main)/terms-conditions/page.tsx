import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://crypto-invest-eight.vercel.app/"),
  title: "Terms & Conditions | CryptoInvestUSA",
  description:
    "By using the Website, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions",
  openGraph: {
    images: "/home.png",
    title: "Terms & Conditions | CryptoInvestUSA",
    description:
      "By using the Website, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions",
    url: "https://cryptoinvestusa.com",
    type: "website",
  },
};

export default function TremsCondition() {
  return (
    <main className="max-w-[75rem] m-auto flex min-h-screen w-full flex-col gap-3 p-6">
      <h1 className="text-3xl font-bold">Terms & Conditions</h1>

      <h2 className="text-2xl font-bold pt-2">Introduction</h2>
      <p>
        These Terms and Conditions govern your use of the cryptocurrency
        investing websit
        <Link className="text-primary hover:underline" href={"/"}>
          https://cryptoinvestusa.com/
        </Link>
        operated by CRYPTO INVEST USA. By accessing or using the Website, you
        agree to be bound by these Terms and Conditions, including any policies,
        guidelines, or amendments thereto that may be presented to you from time
        to time. If you do not agree to these terms, please do not use the
        Website.
      </p>

      <h2 className="text-2xl font-bold pt-2">Acceptance of Terms</h2>
      <p>
        By using the Website, you affirm that you are of legal age to enter into
        this Agreement and you agree to comply with all applicable laws and
        regulations.
      </p>

      <h2 className="text-2xl font-bold pt-2">Investment Risks</h2>
      <p>
        Investing in cryptocurrencies involves risks. The value of
        cryptocurrencies can be highly volatile and may result in significant
        losses. You acknowledge and accept these risks and agree that CRYPTO
        INVEST USA is not responsible for any losses incurred through your
        investment decisions
      </p>

      <h2 className="text-2xl font-bold pt-2">Accuracy of Information</h2>
      <p>
        The information provided on the Website is for informational purposes
        only and should not be considered financial advice. While we strive to
        provide accurate and up-to-date information, we do not guarantee the
        accuracy, completeness, or reliability of any information on the
        Website. You are responsible for conducting your own research and due
        diligence before making any investment decisions.
      </p>

      <h2 className="text-2xl font-bold pt-2">Registration</h2>
      <p>
        In order to access certain features of the Website, you may be required
        to register for an account. When registering, you agree to provide
        accurate and complete information about yourself. You are responsible
        for maintaining the confidentiality of your account information and for
        all activities that occur under your account.
      </p>

      <h2 className="text-2xl font-bold pt-2">Prohibited Activities</h2>
      <ul className="list-inside list-disc">
        <li> Use the Website for any illegal or unauthorized purpose.</li>
        <li>
          Attempt to gain unauthorized access to any part of the Website or its
          systems.
        </li>
        <li>
          Interfere with or disrupt the Website or servers or networks connected
          to the Website.
        </li>
        <li>
          Use the Website to engage in any form of market manipulation or
          fraudulent activities.
        </li>
      </ul>

      <h2 className="text-2xl font-bold pt-2">Intellectual Property</h2>
      <p>
        All content on the Website, including text, graphics, logos, and images,
        is the property of CRYPTO INVEST USA and is protected by copyright laws.
        You may not use, modify, reproduce, or distribute any content from the
        Website without prior written consent from CRYPTO INVEST USA.
      </p>

      <h2 className="text-2xl font-bold pt-2">Disclaimer of Warranties</h2>
      <p>
        The Website is provided on an &apos;as is&apos; and &apos;as
        available&apos; basis, without any warranties of any kind, either
        express or implied. CRYPTO INVEST USA disclaims all warranties,
        including but not limited to, the implied warranties of merchantability,
        fitness for a particular purpose, and non-infringement.
      </p>

      <h2 className="text-2xl font-bold pt-2">Limitation of Liability</h2>
      <p>
        In no event shall CRYPTO INVEST USA be liable for any indirect,
        incidental, special, consequential, or punitive damages, including
        without limitation, loss of profits, data, use, goodwill, or other
        intangible losses, resulting from:
      </p>
      <ul className="list-inside list-disc">
        <li>Your use or inability to use the Website.</li>
        <li>
          Unauthorized access to or use of our servers or any personal
          information stored therein.
        </li>
        <li>Any errors or omissions in the content of the Website.</li>
        <li>
          Any third-party content, products, or services obtained through the
          Website
        </li>
      </ul>

      <h2 className="text-2xl font-bold pt-2">Changes to Terms</h2>
      <p>
        CRYPTO INVEST USA reserves the right to modify or replace these Terms
        and Conditions at any time. It is your responsibility to review this
        Agreement periodically for changes. Your continued use of the Website
        after any modifications to these Terms constitutes acceptance of those
        changes.
      </p>

      <h2 className="text-2xl font-bold pt-2">Governing Law</h2>
      <p>
        These Terms and Conditions shall be governed by and construed in
        accordance with the laws of UNITED STATE OF AMERICA, without regard to
        its conflict of law principles.
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
