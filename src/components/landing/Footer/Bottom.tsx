import Link from "next/link";
import Image from "next/image";
import { logoImg } from "../../../../public/assets/images/landing";

const Bottom = () => {
  return (
    <div className="py-[5rem] px-[3.5rem]">
      <div className="flex mx-auto justify-between">
        <div className="max-w-[20rem] flex flex-col items-start text-textGray">
          <Link
            href=""
            className="flex flex-row items-center justify-center gap-2 h-[2.25rem] mb-6"
          >
            <Image
              src={logoImg}
              alt=""
              className="h-[40px] w-[40px] object-fit"
            />
            <span className="text-textWhite font-extrabold text-xl">
              Quizzes
            </span>
          </Link>
          <div>
            <p className="my-0 text-[1em] leading-snug">
              We are fully compliant with the EU General Data Protection
              Regulation (GDPR) and guarantee ISO 27001 certified server
              locations in Europe.
            </p>
          </div>
          <div className="flex gap-x-[1.25rem] gap-y-[1.25rem] mt-auto flex-col items-start">
            <a
              href="https://apps.apple.com/us/app/awork-organize-your-work/id1466945183?ls=1"
              target="_blank"
              className="inline-block max-w-full"
            >
              <img
                src="https://global-uploads.webflow.com/6418f5bfe5bc0a3438109c1d/641bcd0e5b92d3a0923684eb_iosBadge.svg"
                loading="lazy"
                alt=""
                className="c-image cc-contain"
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=io.awork"
              target="_blank"
              className="inline-block max-w-full"
            >
              <img
                src="https://global-uploads.webflow.com/6418f5bfe5bc0a3438109c1d/641bcd0e86e0191aa861c6e8_iosBadge-1.svg"
                loading="lazy"
                alt=""
                className="c-image cc-contain"
              />
            </a>
          </div>
        </div>

        <div className="grid auto-cols-[1fr] grid-cols-auto grid-rows-auto gap-x-[70px] gap-y-[40px]">
          <div className="flex flex-col items-start gap-y-[1rem]">
            <div className="c-footer_label">
              <div className="text-textWhite text-[1.13em] leading-[1.45] font-bold">
                Quizzes
              </div>
            </div>
            <a href="/" aria-current="page" className="text-textGray">
              Home
            </a>
            <a href="/pricing" className="text-textGray">
              Pricing
            </a>
            <a href="/roadmap" className="text-textGray">
              Roadmap
            </a>
            <div className="c-footer_label cc-sub-label">
              <div className="text-textWhite text-[1.13em] leading-[1.45] font-bold">
                Features
              </div>
            </div>
            <a href="/product/project-management" className="text-textGray">
              Project management
            </a>
            <a href="/product/team-scheduling" className="text-textGray">
              Team scheduling
            </a>
            <a href="/product/time-tracking" className="text-textGray">
              Time tracking
            </a>
            <div className="c-footer_label cc-sub-label">
              <div className="text-textWhite text-[1.13em] leading-[1.45] font-bold">
                Solutions
              </div>
            </div>
            <a href="/solutions/agencies" className="text-textGray">
              Agencies
            </a>
            <a href="/solutions/consulting" className="text-textGray">
              Consultancies
            </a>
            <a href="/solutions/tech" className="text-textGray">
              Software &amp; IT
            </a>
            <a href="/solutions/public-services" className="text-textGray">
              Public services
            </a>
          </div>

          <div className="flex flex-col items-start gap-y-[1rem]">
            <div className="c-footer_label">
              <div className="text-textWhite text-[1.13em] leading-[1.45] font-bold">
                About
              </div>
            </div>
            <a href="/about-us" className="text-textGray">
              About us
            </a>
            <a href="/about-us" className="text-textGray">
              Job
            </a>
            <a href="/about-us" className="text-textGray">
              Press
            </a>
            <a href="/about-us" className="text-textGray">
              Blog
            </a>
            <a href="/work-happiness-report" className="text-textGray">
              Work Happiness Report
            </a>
            <a href="/legal-and-privacy/imprint" className="text-textGray">
              Imprint
            </a>
            <a href="/legal-and-privacy" className="text-textGray">
              Legal &amp; data privacy
            </a>
            <a href="/legal-and-privacy/imprint" className="text-textGray">
              Imprint
            </a>
          </div>

          <div className="flex flex-col items-start gap-y-[1rem]">
            <div className="c-footer_label">
              <div className="text-textWhite text-[1.13em] leading-[1.45] font-bold">
                Support
              </div>
            </div>
            <a href="/webinars" className="text-textGray">
              Webinars
            </a>
            <a
              href="http://support.awork.io/en/"
              target="_blank"
              className="text-textGray"
            >
              Help center
            </a>
            <a
              href="https://developers.awork.com"
              target="_blank"
              className="text-textGray"
            >
              Developer portal
            </a>
            <a
              href="http://status.awork.io"
              target="_blank"
              className="text-textGray"
            >
              System status
            </a>
            <div className="c-footer_contact">
              <a
                href="tel:+4940238312300"
                className="c-footer_contact-link w-inline-block"
              >
                <div className="text-textGray">+49 40 238 312 300</div>
              </a>
              <a
                href="mailto:binbin18092003@gmail.com"
                className="c-footer_contact-link w-inline-block"
              >
                <div className="text-textGray">quizuitkq16@gmail.com</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
