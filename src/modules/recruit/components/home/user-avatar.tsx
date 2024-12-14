/**
 * @see https://tailwindflex.com/@lukas-muller/responsive-user-avatars-grid
 */

export default function UserAvatar() {
  return (
    <div className="flex w-full justify-center space-x-2 items-center animate-out zoom-in duration-200 delay-300">
      <div>
        <div className="font-semibold text-center md:text-left">Trusted by</div>
        <div className="flex space-x-2 items-center flex-col md:flex-row">
          <div className="flex -space-x-2 overflow-hidden p-2">
            <img
              className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-200 hover:scale-105 tranform duration-100"
              src="https://randomuser.me/api/portraits/men/51.jpg"
              alt=""
            />
            <img
              className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-200 hover:scale-105 tranform duration-100"
              src="https://randomuser.me/api/portraits/women/4.jpg"
              alt=""
            />
            <img
              className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-200 hover:scale-105 tranform duration-100"
              src="https://randomuser.me/api/portraits/men/34.jpg"
              alt=""
            />
            <img
              className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-200 hover:scale-105 tranform duration-100"
              src="https://randomuser.me/api/portraits/women/6.jpg"
              alt=""
            />
            <img
              className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-200 hover:scale-105 tranform duration-100"
              src="https://randomuser.me/api/portraits/men/9.jpg"
              alt=""
            />
            <img
              className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-200 hover:scale-105 tranform duration-100"
              src="https://randomuser.me/api/portraits/women/9.jpg"
              alt=""
            />
          </div>
          <div>Join 5,000+ other members</div>
        </div>
      </div>
    </div>
  );
}
