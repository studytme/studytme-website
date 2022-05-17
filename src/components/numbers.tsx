export const Numbers = () => {
  return (
    <div className="col-span-2 py-6 bg-white sm:py-8 lg:py-12">
      <div className="max-w-screen-xl px-4 mx-auto md:px-8">
        <div className="mb-8 md:mb-12">
          <h2 className="mb-4 text-2xl font-bold text-center text-gray-800 lg:text-3xl md:mb-6">
            Our Team by the numbers
          </h2>

          <p className="max-w-screen-md mx-auto text-center text-gray-500 md:text-lg">
            This is a section of some simple filler text, also known as placeholder text. It shares
            some characteristics of a real written text but is random or otherwise generated.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-8">
          <div className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg lg:p-8">
            <div className="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">200</div>
            <div className="text-sm font-semibold sm:text-base">People</div>
          </div>
          <div className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg md:p-8">
            <div className="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">500+</div>
            <div className="text-sm font-semibold sm:text-base">People</div>
          </div>
          <div className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg md:p-8">
            <div className="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">1000+</div>
            <div className="text-sm font-semibold sm:text-base">Customers</div>
          </div>
          <div className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg md:p-8">
            <div className="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">
              A couple
            </div>
            <div className="text-sm font-semibold sm:text-base">Coffee breaks</div>
          </div>
        </div>
      </div>
    </div>
  );
};
