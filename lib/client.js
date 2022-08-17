import SanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const client = SanityClient({
  projectId: "1c9vtinc",
  dataset: "production", //
  apiVersion: "2022-08-16",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_TOKEN,
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
