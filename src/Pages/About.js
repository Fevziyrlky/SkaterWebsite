import React from "react";
import allSkates from "assets/allSkates.jpg";
import pumpTrack from "assets/pump-track.jpg";

export default function About() {
  return (
    <>
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-center mb-6">
          Welcome to our Biggest Skaters Website
        </h1>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img src={allSkates} alt="About Us" className="rounded-lg" />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <p className="text-gray-800 mb-4">
              At{" "}
              <i>
                <b>Skaters</b>
              </i>
              , we have a deep passion for skateboarding. We believe in the
              freedom, creativity, and sense of community that skateboarding
              brings. Whether you're a seasoned pro or just starting out, we are
              here to support you on your skateboarding journey.
            </p>
            <p className="text-gray-800 mb-4">
              Our mission is to provide high-quality skateboards and
              skateboarding gear that not only enhance your performance but also
              reflect your unique style. We carefully curate our collection to
              offer a wide range of options, from classic designs to the latest
              trends, ensuring that there's something for every skateboarder out
              there.
            </p>
            <p className="text-gray-800">
              We understand that skateboarding is more than just a sport; it's a
              way of life. It's about pushing boundaries, expressing yourself,
              and constantly pushing the limits of what's possible. That's why
              we strive to create a community where skateboarders can come
              together, share their experiences, and inspire each other.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-center ">
          <div className="md:w-1/2 md:pr-8 ">
            <p className="text-gray-800 mb-4">
              When you shop with us, you can expect exceptional customer service
              and expert advice from our knowledgeable team. We are
              skateboarders ourselves, and we are dedicated to helping you find
              the perfect skateboard, accessories, and apparel to suit your
              needs.
            </p>
            <p className="text-gray-800 mb-4">
              At{" "}
              <i>
                <b>Skaters</b>
              </i>
              , we believe in giving back to the skateboarding community. We
              actively support local skateboarding initiatives, events, and
              organizations that help nurture and grow the skateboarding
              culture.
            </p>
            <p className="text-gray-800">
              We are thrilled to be a part of your skateboarding journey, and we
              can't wait to see where it takes you. So, browse our collection,
              find the gear that speaks to you, and join us in celebrating the
              joy of skateboarding.
            </p>
            <br />
            <p className="text-gray-800">
              Stay stoked, keep rolling, and let's skate together!
            </p>{" "}
            <br />
            <h3>
              The{" "}
              <i>
                <b>Skaters</b>
              </i>{" "}
              Team
            </h3>
          </div>
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img src={pumpTrack} alt="About Us" className="rounded-lg" />
          </div>
        </div>
      </div>
    </>
  );
}
