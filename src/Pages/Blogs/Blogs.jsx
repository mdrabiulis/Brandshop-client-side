

const Blogs = () => {
    return (
        <div className="max-w-[1440px] mx-auto">

      <div className="grid md:grid-cols-4 gap-6 text-center mb-16 ">


        <div className="md:col-span-4 lg:col-span-3 grid md:grid-cols-1 lg:grid-cols-3 gap-6 mx-4 border">
        <h2 className="text-4xl font-bold text-center">All Blogs content</h2>
        </div>
        <div className="md:col-span-4 lg:col-span-1 border">
        <h2 className="text-4xl font-semibold">All Blogs Title</h2>
        <div className="">
        </div>
        </div>
      </div>
    </div>
    );
};

export default Blogs;