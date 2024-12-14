import { Carousel, CarouselContent } from "@/components/ui/carousel";
import { useNavigate } from "react-router-dom";

type Props = {
  title: string;
};

export default function Photos({ title }: Props) {
  const navigate = useNavigate();
  return (
    <>
      <div className="m5">
        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
          {title}
        </h1>

        <div className="h-full mt-8">
          <Carousel className="w-full">
            <CarouselContent className="gap-5 flex-wrap justify-center">
              <div className="" onClick={() => navigate("/cms/pictures/1")}>
                <span className="w-[300px] h-[450px] group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 ">
                  <img
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                </span>
              </div>
              <div className="flex flex-col">
                <div className="">
                  <span className="w-[300px] h-[200px] group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 ">
                    <img
                      src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  </span>
                </div>
                <div className="my-12">
                  <span className="w-[300px] h-[200px] group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                    <img
                      src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  </span>
                </div>
              </div>
              <div className="flex items-center h-full">
                <span className="w-[250px] h-[450px] group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4">
                  <img
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                </span>
              </div>
              <div className="flex items-center h-full">
                <span className="w-[250px] h-[450px] group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4">
                  <img
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                </span>
              </div>
              <div className="flex items-center h-full">
                <span className="w-[250px] h-[450px] group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4">
                  <img
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                </span>
              </div>
              <div className="flex flex-col">
                <span className="w-[300px] h-[200px] group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 ">
                  <img
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                </span>

                <div className="my-12">
                  <span className="w-[300px] h-[200px] group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                    <img
                      src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  </span>
                </div>
              </div>
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </>
  );
}
