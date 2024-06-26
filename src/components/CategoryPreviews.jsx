import { Link } from "react-router-dom";

const callouts = [
  {
    name: "Living",
    description: "Nuestros mejores productos para tu Living 🛋️",
    imageSrc:
      "https://lh4.googleusercontent.com/proxy/a44rRLLygq-w2sKFJSMtROIIXn8PHvuk-juIsIYDIJ0192AAosAavw-JQyNTVTaDB2KQZ2KZ3Nzyw3ym9DdSnWwKM7PrZPPEwCCkIYKGJD4uzkImbl3PXXIS",
    imageAlt: "Nuestros mejores productos para tu Living",
    href: "/living",
  },
  {
    name: "Habitacion",
    description: "Nuestros mejores productos para tu habitación 🛏️",
    imageSrc:
      "https://hips.hearstapps.com/hmg-prod/images/nicole-franzen-1650558353.jpg",
    imageAlt: "Nuestros mejores productos para tu habitación",
    href: "/habitacion",
  },
  {
    name: "Viajes",
    description: "Nuestros mejores productos para tus viajes ✈️",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
    imageAlt: "Nuestros mejores productos para tus viajes",
    href: "/productos",
  },
];

export const CategoryPreviews = () => {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">
            Nuestras categorías
          </h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div
                key={callout.name}
                className="group relative overflow-hidden"
              >
                <div className="relative h-80 w-full rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 overflow-hidden transform transition-transform duration-300 ease-in-out group-hover:scale-105">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full w-full object-cover object-center transition-transform duration-300 ease-in-out"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <Link to={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </Link>
                </h3>
                <p className="text-base font-semibold text-gray-900">
                  {callout.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
