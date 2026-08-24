export interface IUiImageProps {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  sizes?: string;
  objectFit?: "cover" | "contain" | "fill" | "none";
  rounded?: boolean;
  eager?: boolean;
  placeholder?: boolean;
}

export type ImageKind = "asset" | "public" | "external";
