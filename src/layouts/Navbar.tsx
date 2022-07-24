import { Menu } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const navigation = ["Link 1", "Link 2", "Link 3", "Link 4"];

const Navbar = () => {
  return (
    <nav className="w-full h-20 sticky top-0 flex flex-row justify-between items-center bg-white shadow-md">
      <div className="h-full pl-16 flex justify-between items-center w-48">
        <img src="./assets/logo.png" alt="logo" />
      </div>
      <Menu
        as="div"
        className="grow pr-16 flex flex-wrap flex-row justify-end items-center"
      >
        {({ open }: { open: boolean }) => (
          <>
            <Menu.Button className="lg:hidden">
              <span className="sr-only">Open main menu</span>
              {open ? (
                <XIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
              )}
            </Menu.Button>
            <Menu.Items
              static
              className={`flex flex-col absolute p-4 rounded-md shadow-md lg:shadow-none bg-white lg:bg-inherit top-16 lg:top-auto right-5 w-auto lg:flex-row lg:gap-4 lg:items-center lg:justify-end${
                open ? "" : " hidden lg:flex"
              }`}
            >
              {navigation.map((item) => (
                <Menu.Item>
                  {({ active }: { active: boolean }) => (
                    <button
                      className={`text-lg lg:text-xl px-4 py-2 rounded-md${
                        active ? "  bg-gray-300" : " bg-white"
                      }`}
                    >
                      {item}
                    </button>
                  )}
                </Menu.Item>
              ))}
              <Menu.Item>
                {({ active }: { active: boolean }) => (
                  <button
                    className={`text-lg lg:text-xl px-6 lg:px-12 py-2 border-2 border-black rounded-md${
                      active ? "  bg-gray-300" : " bg-white"
                    }`}
                  >
                    Sign Up
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </>
        )}
      </Menu>
    </nav>
  );
};

export default Navbar;
