import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BarChartBig,
  Bitcoin,
  CandlestickChart,
  DollarSign,
  Footprints,
  Globe,
  GraduationCap,
  Headset,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import Image from "next/image";

export default function Faq() {
  const cards = [
    {
      icon: <Globe className="w-5 h-5" />,
      question: "What is Crypto Invest USA?",
      answer:
        "Crypto Invest USA is a platform dedicated to providing individuals with a user-friendly and secure way to invest in cryptocurrencies. We offer a range of services to help both beginners and experienced investors grow their digital asset portfolios.",
    },
    {
      icon: <BarChartBig className="w-5 h-5" />,
      question: "How do I get started with Crypto Invest USA?",
      answer:
        "Getting started is easy! Simply sign up for an account on our website, complete the verification process, and you're ready to start investing in cryptocurrencies.",
    },
    {
      icon: <Bitcoin className="w-5 h-5" />,
      question: "What cryptocurrencies can I invest in with Crypto Invest USA?",
      answer:
        "We offer a wide selection of cryptocurrencies for investment, including popular options like Bitcoin (BTC), Ethereum (ETH), Litecoin (LTC), Ripple (XRP), and many more. Our platform continually adds new cryptocurrencies based on market demand and reliability.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      question: "Is my investment safe with Crypto Invest USA?",
      answer:
        "Yes, we take security very seriously. Our platform employs industry-leading security measures to protect your investments and personal information. Additionally, we recommend that users enable two-factor authentication (2FA) for an extra layer of security.",
    },
    {
      icon: <CandlestickChart className="w-5 h-5" />,
      question: "How can I fund my Crypto Invest USA account?",
      answer:
        "You can fund your account using various methods, including bank transfers, credit/debit cards, and other supported payment options. Simply navigate to the 'Deposit' section of your account dashboard to see all available options.",
    },
    {
      icon: <DollarSign className="w-5 h-5" />,
      question: "What are the fees associated with using Crypto Invest USA?",
      answer:
        "We strive to keep our fees competitive and transparent. Our fees typically include a small percentage of the transaction amount and may vary based on the specific cryptocurrency. You can find detailed information about our fees on our website.",
    },
    {
      icon: <Footprints className="w-5 h-5" />,
      question: "Can I withdraw my funds anytime?",
      answer:
        "Yes, you can withdraw your funds at any time, subject to our withdrawal policies. Simply go to the 'Withdraw' section of your account dashboard, select the amount you wish to withdraw, and follow the instructions. Please note that withdrawal processing times may vary based on the payment method.",
    },
    {
      icon: <GraduationCap className="w-5 h-5" />,
      question: "Does Crypto Invest USA offer any educational resources?",
      answer:
        "Absolutely! We understand that cryptocurrency investment can be complex, especially for beginners. That's why we provide a range of educational resources, including articles, tutorials, and market insights, to help you make informed investment decisions.",
    },
    {
      icon: <Smartphone className="w-5 h-5" />,
      question: "Is there a mobile app for Crypto Invest USA?",
      answer:
        "Yes, we offer a mobile app for both iOS and Android devices, allowing you to manage your investments on the go. You can download the app from the App Store or Google Play Store.",
    },
    {
      icon: <Headset className="w-5 h-5" />,
      question: "How can I contact Crypto Invest USA for support?",
      answer:
        "If you have any questions or need assistance, our customer support team is here to help. You can reach us through the 'Contact Us' page on our website, where you'll find options to email us or submit a support ticket. We strive to respond to all inquiries promptly.",
    },
  ];

  return (
    <div className="p-4 md:p-10">
      <div className="mx-auto grid w-full max-w-6xl gap-10">
        <div className="grid gap-2 mx-auto text-center max-w-lg">
          <h2 className="text-4xl max-sm:text-3xl font-semibold">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-muted-foreground">
            Have any questions? We&apos;re here to assist you.
          </p>
        </div>
        <div className="mx-auto grid w-full max-w-6xl items-start gap-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {cards.map(({ question, answer, icon }, i) => (
              <Card key={i} className="shadow-md shadow-black">
                <CardHeader className="gap-2">
                  <div className="p-3 bg-primary/30 text-primary backdrop-blur-sm rounded-full w-fit">
                    {/* <div className="p-0.5 w-fit rounded-full bg-muted flex-1"> */}
                    {icon}
                    {/* </div> */}
                  </div>
                  <CardTitle className="text-xl">{question}</CardTitle>
                  <CardDescription>{answer}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
