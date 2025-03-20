import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./FAQ.css";

export const FAQ = () => {
  const faqs = [
    {
      question: "What is SplitWizz?",
      answer:
        "SplitWizz is an AI-powered bill-splitting app that helps you automatically scan receipts, recognize items, and fairly split expenses among group members. Unlike other apps, it’s completely free and monetized through ads instead of subscriptions.",
    },
    {
      question: "How does SplitWizz work?",
      answer: (
        <>
          <strong>Create a Group</strong> – Add your friends and housemates.{" "}
          <br />
          <strong>Upload Your Bill</strong> – Our AI scans and extracts item
          details. <br />
          <strong>Split Smartly</strong> – Choose an equal split or assign
          specific items. <br />
          <strong>Track & Settle</strong> – Know exactly who owes what, no more
          confusion!
        </>
      ),
    },
    {
      question: "Do I need to manually enter expenses?",
      answer:
        "No! Our AI scans your uploaded bill and automatically identifies items and total amounts, saving you time.",
    },
    {
      question: "Is SplitWizz really free?",
      answer:
        "Yes! Unlike other bill-splitting apps that charge subscriptions, SplitWizz is completely free. We support the app through non-intrusive ads instead of charging users.",
    },
    {
      question: "Can I customize how expenses are split?",
      answer: (
        <>
          <strong>Equal Split</strong> – Divide the bill equally among group
          members. <br />
          <strong>Custom Split</strong> – Assign items to specific users based
          on what they purchased.
        </>
      ),
    },
    {
      question: "What types of expenses can I track?",
      answer: (
        <>
          <Typography component="span">
            SplitWizz is designed for all types of shared expenses, including:
          </Typography>
          <ul>
            <li>Groceries</li>
            <li>Restaurant Bills</li>
            <li>Rent & Utilities</li>
            <li>Travel & Trip Expenses</li>
            <li>Group Subscriptions</li>
          </ul>
        </>
      ),
    },
    {
      question: "Do my friends need to have SplitWizz to participate?",
      answer:
        "Yes, for a seamless experience, all group members should have the SplitWizz app. However, even if they don’t, you can still share detailed reports with them.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Absolutely! We use encryption and secure cloud storage to keep your expense data safe. Your receipts and financial details are never shared with third parties.",
    },
    {
      question: "Will there be a mobile app?",
      answer:
        "Yes! SplitWizz will be available for iOS and Android soon. Join our waitlist to be notified of the launch.",
    },
    {
      question: "How can I contact support?",
      answer:
        "You can reach out to us via email at splitwizzapp@gmail.com or through our Help Center in the app.",
    },
  ];

  return (
    <>
      <Box className="query">
        <Box className="faq-container">
          <Typography
            variant="h2"
            className="faq-title"
            sx={{
              marginBottom: "20px",
            }}
          >
            Frequently Asked Questions
          </Typography>
          {faqs.map((faq, index) => (
            <Accordion key={index} className="faq-item">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                className="faq-question"
              >
                <Typography variant="h6">{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails className="faq-answer">
                {typeof faq.answer === "string" ? (
                  <Typography>{faq.answer}</Typography>
                ) : (
                  faq.answer
                )}
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </>
  );
};
