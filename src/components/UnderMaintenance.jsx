/* UnderMaintenance.jsx
   Apple-style maintenance / coming-soon page.
   Pure white background, centered content, lightweight typography.
*/

import designIcon from './assets/fluent--design-ideas-32-filled.svg'

export default function UnderMaintenance() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white px-6">
      <div className="flex flex-col items-center text-center max-w-xl">

        {/* Icon */}
        <img
          src={designIcon}
          alt=""
          aria-hidden="true"
          className="mb-8 opacity-40"
          style={{ width: 50, height: 50, filter: 'brightness(0)' }}
        />

        {/* Heading */}
        <h1
          className="font-sans font-light tracking-tight text-[#1d1d1f] mb-5
                     text-[2rem] leading-[1.15]
                     sm:text-[2.75rem]
                     lg:text-[2.9rem]"
        >
          We&rsquo;ve got something<br />
          special in store for you.
        </h1>

        {/* Supporting text */}
        <p
          className="font-sans font-normal text-[#6e6e73] leading-relaxed
                     text-[1rem]
                     sm:text-[1.125rem]"
        >
          And we can&rsquo;t wait for you to see it.<br />
          Please check back soon.
        </p>

      </div>
    </div>
  )
}
