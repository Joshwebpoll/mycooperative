import { Button } from "@/components/ui/button";

export default function CallToAction2() {
  return (
    <section className="">
      <div className="max-w-10/12 mx-auto text-center bg-primary text-white py-16 px-4 rounded-xl mb-20  my-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Take Control of Your Finances?
        </h2>
        <p className="text-[16px] md:text-[18px] text-white/90 mb-8">
          Join our cooperative society today and start building wealth, saving
          smarter, and accessing reliable support.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            size="lg"
            className="bg-white w-[102.86px] lg:w-[180px] h-[32px] lg:h-[40px] rounded-[10px] text-primary hover:bg-white/90 transition font-bold"
          >
            Become a Member
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white bg-white/10 font-bold"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
