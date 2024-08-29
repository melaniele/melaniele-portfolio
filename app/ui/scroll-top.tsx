"use client";
import { ChevronDoubleUpIcon } from "@heroicons/react/24/outline";
import ScrollToTop from "react-scroll-up";

export default function ScrollToTopButton() {
  return (
    <div className="relative z-400">
      <ScrollToTop showUnder={160}>
        <p
          className="font-bold cursor-pointer text-rose text-3xl p-3
                    hover:border-2 hover:border-rose hover:rounded-full hover:scale-110
                    transition ease-in-out duration-700"
        >
          <ChevronDoubleUpIcon width={50} />
        </p>
      </ScrollToTop>
    </div>
  );
}
