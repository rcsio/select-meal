"use client";

import useApp from "@/hooks/useApp";
import Rating from "@/ui/rating";
import clsx from "clsx";
import { Fragment } from "react";

export default function Summary() {
  const { selections, remove } = useApp();
  const total = selections.reduce((carry, current) => {
    return carry + current.price;
  }, 0);

  return (
    <div className="sr-only mt-4 shrink-0 self-start rounded-xl border border-[#D3DBDA] bg-white lg:not-sr-only lg:mt-0 lg:w-[408px]">
      <img
        src="https://source.unsplash.com/random/?restaurant"
        alt=""
        className="h-[179px] w-full rounded-t-xl object-cover"
      />

      <dl className="px-7">
        <div className="mt-[19px] flex items-center justify-center gap-x-3.5">
          <dt className="sr-only">Restaurant</dt>
          <dd className="text-lg font-bold leading-[21px]">
            Jawharat Esham Restaurant
          </dd>

          <dt className="sr-only">Rating</dt>
          <dd>
            <Rating value={4.7} />
          </dd>
        </div>

        <div className="mt-[3px] flex items-center gap-x-3">
          <dt className="sr-only">Address</dt>
          <dd className="text-sm leading-4">
            Wafi Mall, First Floor, Horus, Phase 5, Dubai
          </dd>

          <button className="flex aspect-square h-9 items-center justify-center rounded-xl bg-black">
            <span className="sr-only">Map</span>
            <i className="fi fi-rr-marker text-white" />
          </button>
        </div>

        <dt className="sr-only">Restaurant category</dt>
        <dd className="mt-[5px] flex justify-center">
          <a
            href="#"
            className="inline-flex h-[35px] items-center justify-center rounded-md bg-black px-5 text-sm leading-4 text-white"
          >
            Arabic Restaurant
          </a>
        </dd>
      </dl>

      {total === 0 && (
        <div
          className={clsx(
            "mt-10 border-[#E0E8E4] py-3 pl-[18px] pr-[23px]",
            total === 0 ? "border-t" : "border-y",
          )}
        >
          <p className="flex items-center justify-center gap-x-2 text-sm font-medium leading-[18px] text-[#2F3333A6]">
            <i className="fi fi-rr-arrow-left" />
            <span>Select items from the left.</span>
          </p>
        </div>
      )}

      {total > 0 && (
        <>
          <div className="mt-10 border-y border-y-[#E0E8E4] py-3 pl-[18px] pr-[23px]">
            {selections.map((data) => (
              <Fragment key={data.id}>
                <div className="flex items-center gap-x-3">
                  <img
                    src="https://source.unsplash.com/random/?food"
                    alt={data.name}
                    className="aspect-square w-[72px] rounded-lg object-cover"
                  />

                  <div>
                    <div className="text-lg font-semibold leading-[21px] text-brand-indigo">
                      {data.name}
                    </div>

                    <div className="mt-1.5 text-sm font-semibold leading-[18px]">
                      AED {data.price}
                    </div>
                  </div>

                  <button
                    onClick={() => remove(data)}
                    className="ml-auto flex items-center justify-center"
                  >
                    <span className="sr-only">Delete</span>
                    <i className="fi fi-rr-trash text-2xl text-black" />
                  </button>
                </div>

                <div className="my-2.5 h-px bg-[#E0E8E4] last:hidden" />
              </Fragment>
            ))}
          </div>

          <dl className="mb-[calc(15px+24px)] ml-[18px] mt-[30px] flex items-center gap-x-[13px]">
            <dt className="text-sm font-medium leading-[18px] text-[#2F3333A6]">
              Total Price
            </dt>
            <dd className="text-lg font-bold leading-[18px] text-[#020A05]">
              AED {total}
            </dd>
          </dl>
        </>
      )}
    </div>
  );
}
