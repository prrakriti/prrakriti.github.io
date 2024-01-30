import React from "react";

const Features = () => {
  return (
    <div className=" px-2 py-10">
      <div id="features" className="mx-auto max-w-6xl">
        <p className="text-center text-base font-semibold leading-7 text-gray-200">
          Features
        </p>
        <h2 className="text-center font-display text-3xl font-bold tracking-tight  md:text-4xl">
          Security
        </h2>
        <ul className="mt-16 grid grid-cols-1 gap-6 text-center text-gray-200 md:grid-cols-3">
          <li className="rounded-xl bg-slate-600 px-6 py-8 shadow-sm">
            <img
              src="https://www.svgrepo.com/show/530438/ddos-protection.svg"
              alt=""
              className="mx-auto h-10 w-10"
            />
            <h3 className="my-3 font-display font-medium">Feature</h3>
            <p className="mt-1.5 text-sm leading-6 text-secondary-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec
              orci quis justo aliquam euismod eget a leo.
            </p>
          </li>
          <li className="rounded-xl bg-slate-600 px-6 py-8 shadow-sm">
            <img
              src="https://www.svgrepo.com/show/530442/port-detection.svg"
              alt=""
              className="mx-auto h-10 w-10"
            />
            <h3 className="my-3 font-display font-medium">Feature</h3>
            <p className="mt-1.5 text-sm leading-6 text-secondary-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec
              orci quis justo aliquam euismod eget a leo.
            </p>
          </li>
          <li className="rounded-xl bg-slate-600 px-6 py-8 shadow-sm">
            <img
              src="https://www.svgrepo.com/show/530444/availability.svg"
              alt=""
              className="mx-auto h-10 w-10"
            />
            <h3 className="my-3 font-display font-medium">Feature</h3>
            <p className="mt-1.5 text-sm leading-6 text-secondary-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec
              orci quis justo aliquam euismod eget a leo.
            </p>
          </li>
          <li className="rounded-xl bg-slate-600 px-6 py-8 shadow-sm">
            <a href="/" className="group">
              <img
                src="https://www.svgrepo.com/show/530440/machine-vision.svg"
                alt=""
                className="mx-auto h-10 w-10"
              />
              <h3 className="my-3 font-display font-medium group-hover:text-primary-500">
                Feature
              </h3>
              <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                nec orci quis justo aliquam euismod eget a leo.
              </p>
            </a>
          </li>
          <li className="rounded-xl bg-slate-600 px-6 py-8 shadow-sm">
            <a href="/" className="group">
              <img
                src="https://www.svgrepo.com/show/530450/page-analysis.svg"
                alt=""
                className="mx-auto h-10 w-10"
              />
              <h3 className="my-3 font-display font-medium group-hover:text-primary-500">
                Feature
              </h3>
              <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                nec orci quis justo aliquam euismod eget a leo.
              </p>
            </a>
          </li>
          <li className="rounded-xl bg-slate-600 px-6 py-8 shadow-sm">
            <a href="/" className="group">
              <img
                src="https://www.svgrepo.com/show/530453/mail-reception.svg"
                alt=""
                className="mx-auto h-10 w-10"
              />
              <h3 className="my-3 font-display font-medium group-hover:text-primary-500">
                Feature
              </h3>
              <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                nec orci quis justo aliquam euismod eget a leo.
              </p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Features;
