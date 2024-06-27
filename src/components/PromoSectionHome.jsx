import { Link } from "react-router-dom";

export const PromoSectionHome = () => {
  return (
    <div className="relative overflow-hidden bg-gray-100">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              ¡Los estilos para tu hogar finalmente están aquí!
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              Este año, nuestra nueva colección de hogar te envolverá en la
              calidez y confort que te mereces, transformando cada rincón en un
              refugio acogedor donde la rutina se convierte en placer.
            </p>
          </div>
          <div>
            <div className="mt-10">
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                          src="https://www.cleanipedia.com/images/iohqr4whhl17/2hVW7vf4fn5nhx3KfKMaVg/669e3da363dc199825a7c7eb67687006/c2h1dHRlcnN0b2NrXzU4Nzc1NDg1Ny0xNDkxNjUxLWpwZy0xODAwdy0xMjAwaC5qcGc/600w/imagen-de-una-mesa-con-platos-y-cubiertos.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXCyvbKGncntDgWdvFYc5ru-o4jV6rW-q5PKunQZkHCw&s"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://media.admagazine.com/photos/618a5d8b96bc0f80f8b42ae9/master/w_1600%2Cc_limit/93495.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://www.zooplus.es/magazine/wp-content/uploads/2017/10/fotolia_131689630-768x512.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://i.blogs.es/fa6304/dfec23cce5e907a6bfb2b43c4eb8ffee4075ab9e_petmob003pin_uk_moby_pet_sofa_velvet_vintage_pink_and_copper_s_m_ar3_2_lb02_ls/1366_2000.jpeg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://dcdn.mitiendanube.com/stores/001/417/626/products/matera-y-mate-21-56b0a5649cd0b9933a16342520362455-1024-1024.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="data:image/jpeg;base64,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"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                to="/productos"
                href="#"
                className="inline-block rounded-md border border-transparent bg-black px-8 py-3 text-center font-medium text-white hover:bg-gray-700"
              >
                Ver productos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
