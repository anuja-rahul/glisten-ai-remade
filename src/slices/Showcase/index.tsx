import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Showcase`.
 */
export type ShowcaseProps = SliceComponentProps<Content.ShowcaseSlice>;

/**
 * Component for "Showcase" Slices.
 */
const Showcase = ({ slice }: ShowcaseProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for showcase (variation: {slice.variation}) Slices
    </section>
  );
};

export default Showcase;
