import ThankYouPage from "../thank-you/page";

// Keep /thanks as a fully rendered route for the post-form redirect.
// Some production adapters do not reliably serve a direct re-export as a page.
export default function ThanksPage() {
  return <ThankYouPage />;
}
