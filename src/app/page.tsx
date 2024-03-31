import axios from "@/lib/axios";
import { Category, Product } from "@/types";
import Container from "@/ui/container";
import Menu from "@/ui/menu";
import PayButton from "@/ui/pay-button";
import Progress from "@/ui/progress";
import Steps from "@/ui/steps";
import Summary from "@/ui/summary";
import pluralize from "pluralize";

export default async function Homepage() {
  const { data: categories }: { data: Category[] } =
    await axios.get("/api/categories");

  const responses = await Promise.all(
    categories.map((c) => axios.get(`/api/products?category=${c.slug}`)),
  );

  const groups: Product[][] = await Promise.all(responses.map((r) => r.data));

  const menu = categories.reduce(
    (carry, current, index) => {
      return { ...carry, [pluralize(current.name)]: groups[index] };
    },
    {} as { [key: string]: Product[] },
  );

  return (
    <>
      <div className="relative bg-white">
        <Container>
          <div className="flex h-24 items-center justify-between px-4">
            <div className="sr-only order-2 lg:not-sr-only">
              <Steps count={3} current={1} />
            </div>

            <div className="order-1 flex items-center gap-x-6 lg:gap-x-10">
              <h1 className="order-2 text-2xl font-bold leading-7">
                Select your meals
              </h1>
              <button className="order-1 flex aspect-square h-12 items-center justify-center rounded-full bg-[#F3F3F3]">
                <span className="sr-only">Close</span>
                <i className="fi fi-rr-cross-small text-2xl text-[#0E0E0E]" />
              </button>
            </div>
          </div>
        </Container>

        <div className="absolute bottom-0 left-0 h-1.5 w-full bg-[#F3F3F3]" />
        <Progress percent={Math.ceil((1 / 3) * 100)} />
      </div>

      <Container>
        <main className="mt-4 flex flex-col lg:my-[57px] lg:flex-row lg:gap-x-11 lg:px-4">
          <Menu data={menu} />
          <Summary />
        </main>
      </Container>

      <footer className="bg-white">
        <Container>
          <div className="flex h-24 items-center justify-end">
            <PayButton />
          </div>
        </Container>
      </footer>
    </>
  );
}
