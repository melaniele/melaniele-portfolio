import { HeartIcon, RocketLaunchIcon } from "@heroicons/react/24/solid";

export default function Footer() {
  return (
    <footer
      className="footer bg-[#fee2e2] mt-10
                      dark:bg-slate-800 dark:text-white"
    >
      <div className="p-12 flex flex-col lg:flex-row justify-between items-center">
        <div className="flex items-center gap-2">
          {/* Added flex and gap */}
          <span> &copy; Melanie, {new Date().getFullYear()}</span>
          <HeartIcon width={20} height={20} className="text-dark-rose" />
        </div>

        <div className="flex items-center">
          <span>Built with</span>
          <span className="font-semibold ml-1">Next.js,</span>
          <span className="font-semibold ml-1">Tailwind CSS</span>, and
          <span className="font-semibold mx-1">Vercel</span>
          <RocketLaunchIcon width={15} height={15} />
        </div>
      </div>
    </footer>
  );
}
