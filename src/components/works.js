import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import WorkItem from "./workItem";

const Works = () => {
  const data = useStaticQuery(graphql`
    {
      allWorksJson {
        nodes {
          id
          title
          description
          image {
            childImageSharp {
              gatsbyImageData(
                width: 512
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  `);
  console.log(data.allWorksJson.nodes[1]);
  return (
    <div id="#work">
      <div className="container mx-auto">
        <div className="flex flex-col gap-12 lg:py-28 py-20">
          <div className="grid lg:grid-cols-12 grid-cols-1 gap-8 items-center">
            <div className="xl:col-span-6 lg:col-span-8 flex flex-row items-center gap-8 lg:pr-8">
              <h2 className="lg:text-display-lg text-display-md font-semibold lg:pl-10">
                Our Recent Work
              </h2>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex md:flex-row flex-col flex-wrap">
              {data.allWorksJson.nodes.map((node) => (
                <WorkItem
                  key={node.id}
                  image={getImage(node.image)}
                  title={node.title}
                  description={node.description}
                />
              ))}
            </div>
            <div className="flex items-start lg:px-10 md:-mt-7">
              <a
                href="/"
                className="text-body-sm font-semibold text-white bg-neutral-900 py-4 pl-5 pr-4 rounded-full flex flex-row gap-2 items-center justify-center">
                See more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
