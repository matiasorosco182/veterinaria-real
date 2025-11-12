import { Button } from "./button";
import { Card, CardContent } from "./card";

export default function FinzoLanding() {
  return (
    <div className="bg-[#F3F7F4] text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-20 bg-white">
        <div className="max-w-xl space-y-6">
          <span className="uppercase text-sm text-green-700 font-semibold tracking-wide">
            Modern Bank
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
            We’re building the future banking just for you
          </h1>
          <p className="text-gray-600 text-lg">
            Easy and fast international business account that saves you money wherever you want to use it.
          </p>
          <div className="flex gap-4">
            <Button className="bg-green-700 text-white px-6 py-3 rounded-lg">
              Get Started Now
            </Button>
            <Button variant="outline" className="px-6 py-3 rounded-lg border-gray-400">
              Learn More
            </Button>
          </div>
          <div className="flex items-center gap-4 pt-6 opacity-70">
            <img src="/logos/openai.svg" alt="OpenAI" className="h-6" />
            <img src="/logos/raycast.svg" alt="Raycast" className="h-6" />
            <img src="/logos/ramp.svg" alt="Ramp" className="h-6" />
          </div>
        </div>
        <div className="mt-10 lg:mt-0 lg:w-1/2 flex justify-center">
          <img
            src="/images/hero-woman.png"
            alt="Woman using laptop"
            className="rounded-xl shadow-lg max-w-sm"
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-green-800 text-white py-16 text-center flex flex-col md:flex-row justify-center gap-16">
        <div>
          <h2 className="text-4xl font-bold">75K+</h2>
          <p className="text-gray-300">Satisfied users globally</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold">12%</h2>
          <p className="text-gray-300">Beneficial Cashback</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold">190+</h2>
          <p className="text-gray-300">Countries supported</p>
        </div>
      </section>

      {/* Currency Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-20 bg-white">
        <div className="flex-1 space-y-6">
          <span className="uppercase text-sm text-green-700 font-semibold tracking-wide">
            Currency
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold">
            Hold and send money in 190+ currencies
          </h2>
          <p className="text-gray-600 text-lg">
            Create an account for your chosen currency in seconds. Get great prices with limit and stop orders.
          </p>
          <Button className="bg-green-700 text-white px-6 py-3 rounded-lg">
            Learn More
          </Button>
        </div>

        <div className="flex-1 mt-10 lg:mt-0 flex justify-center">
          <Card className="bg-[#E8F2EE] p-6 rounded-2xl shadow-md w-[300px] space-y-4">
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center bg-white p-3 rounded-lg shadow">
                <span>🇬🇧 GBP</span>
                <span className="font-semibold">+ €81.5</span>
              </div>
              <div className="flex justify-between items-center bg-white p-3 rounded-lg shadow">
                <span>🇸🇬 SGD</span>
                <span className="font-semibold">+ $30.1</span>
              </div>
              <div className="flex justify-between items-center bg-white p-3 rounded-lg shadow">
                <span>🇩🇪 EUR</span>
                <span className="font-semibold">+ €40.0</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
