import data from './placeholder-images.json';
import { siteConfig } from "@/config/site";

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

export const PlaceHolderImages: ImagePlaceholder[] = data.placeholderImages.map(
  (image) => ({
    ...image,
    imageUrl:
      image.imageUrl.startsWith("http://") ||
      image.imageUrl.startsWith("https://") ||
      image.imageUrl.startsWith("data:")
        ? image.imageUrl
        : `${siteConfig.basePath}${image.imageUrl}`,
  })
);
