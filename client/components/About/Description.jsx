import React from "react";

function Description() {
  return (
    <div className="px-4 sm:px-8 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 justify-center">
        {/** Description column 1 */}
        <div className="text-start p-4">
          <div className="my-4">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
              Learn a New Skill Online
            </h1>
            <p className="text-xl sm:text-2xl font-semibold">
              On Your Time
            </p>
          </div>
          <p className="text-lg sm:text-xl">4 Online Courses</p>
          <p className="text-base sm:text-lg leading-snug mt-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, ut
            obcaecati explicabo doloremque molestias, vitae repellat in dolore
            laborum similique natus quibusdam tenetur ducimus! Obcaecati quae
            vero doloremque quod perspiciatis.
          </p>
          <button className="flex justify-start text-base sm:text-lg py-2 px-4 bg-orange-400 text-white rounded-sm mt-4">
            Join Now
          </button>
        </div>

        {/** Column 2 */}
        <div className="p-4">
          {/** Icon */}
          <div className="flex justify-start mt-6">
            <img src="/assets/icon/trophy.png" className="w-12 h-12 sm:w-16 sm:h-16" alt="" />
          </div>
          {/** Text */}
          <div className="text-start mt-4">
            <h2 className="text-xl sm:text-2xl font-bold">Our Mission</h2>
            <p className="text-sm sm:text-base leading-snug mt-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Cupiditate esse incidunt reprehenderit, rem provident voluptatibus
              quod. Fugiat id facere odio maxime, ducimus vel nihil. Fugiat unde
              ipsa sunt sed quam.
            </p>
          </div>
        </div>

        {/** Column 3 */}
        <div className="p-4">
          {/** Icon */}
          <div className="flex justify-start mt-6">
            <img src="/assets/icon/trophy.png" className="w-12 h-12 sm:w-16 sm:h-16" alt="" />
          </div>
          {/** Text */}
          <div className="text-start mt-4">
            <h2 className="text-xl sm:text-2xl font-bold">Our Offering</h2>
            <p className="text-sm sm:text-base leading-snug mt-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Cupiditate esse incidunt reprehenderit, rem provident voluptatibus
              quod. Fugiat id facere odio maxime, ducimus vel nihil. Fugiat unde
              ipsa sunt sed quam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Description;
