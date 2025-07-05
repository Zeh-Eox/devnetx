import { Disclosure } from "@headlessui/react";

export default function Header() {
  return (
    <Disclosure as="nav" className="px-6 py-4 fixed lg:left-36 left-10 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-start">
        Header
      </div>
    </Disclosure>
  );
}
