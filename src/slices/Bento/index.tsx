import Bounded from "@/components/Bounded";
import { asText, Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Bento`.
 */
export type BentoProps = SliceComponentProps<Content.BentoSlice>;

/**
 * Component for "Bento" Slices.
 */
const Bento = ({ slice }: BentoProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText
        components={{
          heading2: ({ children }) => (
            <h2 className="text-balance text-center text-5xl font-medium md:text-7xl">
              {children}
            </h2>
          ),
          em: ({ children }) => (
            <em className="bg-gradient-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
              {children}
            </em>
          ),
        }}
        field={slice.primary.heading}
      />
      <PrismicRichText field={slice.primary.body} />

      {slice.items.map((item) => (
        <div className="glass-container" key={asText(item.title)}>
          <PrismicRichText field={item.title} />
          <PrismicRichText field={item.body} />
          <PrismicNextImage field={item.image} />
        </div>
      ))}
    </Bounded>
  );
};

export default Bento;
