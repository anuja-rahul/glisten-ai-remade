import Bounded from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Showcase`.
 */
export type ShowcaseProps = SliceComponentProps<Content.ShowcaseSlice>;

/**
 * Component for "Showcase" Slices.
 */
const Showcase = ({ slice }: ShowcaseProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.heading} />
      <PrismicNextImage field={slice.primary.image} />
      <>{slice.primary.icon}</>
      <PrismicRichText field={slice.primary.subheading} />
      <PrismicRichText field={slice.primary.body} />
      <>{slice.primary.button_text}</>
      <PrismicNextLink field={slice.primary.button_link}>Link</PrismicNextLink>
    </Bounded>
  );
};

export default Showcase;
