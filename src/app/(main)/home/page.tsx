// Internal deps
import CreditCard from "@/components/home/CreditCard/CreditCard";
import CreditCardsCarousel from "@/components/home/CreditCardsCarousel/CreditCardsCarousel";
import TopBar from "@/components/home/TopBar/TopBar";

const items = [
  <CreditCard
    key={1}
    isVisa
    currency="USD"
    balance={12345.67}
    lastDigits={1234}
    name="Paisanx"
    expDate="09/24"
  />,
  <CreditCard
    key={2}
    currency="USD"
    balance={12345.67}
    lastDigits={1234}
    name="Paisanx"
    expDate="09/24"
  />,
];

function HomePage() {
  return (
    <div className="flex w-full flex-col gap-8 px-6 pt-9">
      <TopBar />
      <CreditCardsCarousel items={items} />
    </div>
  );
}

export default HomePage;
