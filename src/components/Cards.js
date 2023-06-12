import React from "react";

const products = [
  {
    id: 1,
    name: "Skate Deluxe",
    href: "#",
    imageSrc:
      "https://cdn.skatedeluxe.com/thumb/MrlzW6o8JOqOM8horuxLP9YWtvw=/fit-in/600x700/filters:fill(white):brightness(-4)/product/165527-0-skatedeluxe-AllEyes825.jpg",
    imageAlt: "Skate Deluxe",
    price: "$59.99",
    detail: "SkateDeluxe All Eyes 8.25",
  },
  {
    id: 2,
    name: "Polar",
    href: "#",
    imageSrc:
      "https://cdn.skatedeluxe.com/thumb/cJgpmrMikJnnDIU0tj-8LAopNk4=/fit-in/600x700/filters:fill(white):brightness(-4)/product/164286-0-Polar-GonzalezSoldier8375.jpg",
    imageAlt: "Polar",
    price: "$69.99",
    detail: "Gonzalez Soldier 8.375 Skateboard Deck",
  },
  {
    id: 3,
    name: "Toy Machine",
    href: "#",
    imageSrc:
      "https://cdn.skatedeluxe.com/thumb/mF3MX3CPc384FJNyButj-OwFeNM=/fit-in/600x700/filters:fill(white):brightness(-4)/product/120347-0-ToyMachine-Monster8.jpg",
    imageAlt: "Toy Machine",
    price: "$64.99",
    detail: "Monster 8 Skateboard Deck",
  },
  {
    id: 4,
    name: "Santa Cruz",
    href: "#",
    imageSrc:
      "https://cdn.skatedeluxe.com/thumb/253UUSPQ9D4W6yK0-dZxxEUiXRU=/fit-in/600x700/filters:fill(white):brightness(-4)/product/142676-0-SantaCruz-RadDot8.jpg",
    imageAlt: "Santa Cruz",
    price: "$57.99",
    detail: "Rad Dot 8 Skateboard Deck",
  },
  // More products...
];

export default function Cards() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Customers also purchased
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.detail}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
