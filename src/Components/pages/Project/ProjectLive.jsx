import React from "react";

function Project() {

  const projects = [
    {
      id: 1,
      title: "Ecommerce Website",
      image: "https://bloomidea.com/sites/default/files/styles/og_image/public/blog/Tipos%20de%20come%CC%81rcio%20electro%CC%81nico_0.png?itok=jC9MlQZq",
      desc: "Full stack ecommerce website with authentication and cart system.",
      tech: "React, Tailwind, Node",
      live: "",
      github: "#"
    },
    {
      id: 2,
      title: "Portfolio Website",
       image: "https://cdn.dribbble.com/userupload/11836429/file/original-50ce4cf8f8a5d8304ffba34a22ed9c65.png?format=webp&resize=400x300&vertical=center",
      desc: "Personal portfolio website to showcase projects.",
      tech: "React, Tailwind",
      live: "#",
      github: "#"
    },
    {
      id: 3,
      title: "Weather App",
       image: "https://cdn.dribbble.com/userupload/4088184/file/original-f55ad126d73c2655af09bcdee1789a53.jpg?resize=400x0",
      desc: "Weather app using API to show real-time weather.",
      tech: "React, API",
      live: "#",
      github: "#"
    }
  ];

  return (
    <section className="max-w-[1200px] mx-auto py-20 px-4">

      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-14">
        My Projects
      </h1>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

        {projects.map((project) => (

          <div
            key={project.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
          >

            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="hover:scale-110 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6">

              <h2 className="text-xl font-bold mb-2">
                {project.title}
              </h2>

              <p className="text-gray-600 text-sm mb-3">
                {project.desc}
              </p>

              <p className="text-blue-600 text-sm mb-4">
                {project.tech}
              </p>

              {/* Buttons */}
              <div className="flex gap-4">

                <a
                  href={project.live}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
                >
                  Live
                </a>

                <a
                  href={project.github}
                  className="border border-gray-400 px-4 py-2 rounded hover:bg-gray-200 text-sm"
                >
                  Code
                </a>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Project;