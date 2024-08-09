import { Product } from "apps/commerce/types.ts";
import { clx } from "../../sdk/clx.ts";
import Icon from "../ui/Icon.tsx";
import Slider from "../ui/Slider.tsx";
import ProductCard from "./ProductCard.tsx";
import { useId } from "../../sdk/useId.ts";

interface Props {
  products: Product[];
  itemListName?: string;
}

function ProductSlider({ products, itemListName }: Props) {
  const id = useId();

  return (
    <>
      <div
        id={id}
        class="grid grid-rows-1"
        style={{
          gridTemplateColumns: "min-content 1fr min-content",
        }}
      >
        <div class="col-start-1 col-span-3 row-start-1 row-span-1">
          <Slider class="keen-slider">
            {products?.map((product, index) => (
              <Slider.Item
                index={index}
                class={clx(
                  "keen-slider__slide",
                  "min-w-[297px] max-w-[297px] sm:min-w-[320px] sm:max-w-[320px]",
                )}
              >
                <ProductCard
                  index={index}
                  product={product}
                  itemListName={itemListName}
                  class="w-[287px] sm:w-[300px]"
                />
              </Slider.Item>
            ))}
          </Slider>
        </div>

        <div class="col-start-1 col-span-1 row-start-1 row-span-1 z-10 self-center p-2 relative bottom-[15%]">
          <Slider.PrevButton class="hidden sm:flex disabled:invisible btn btn-outline btn-sm btn-circle no-animation">
            <Icon id="chevron-right" class="rotate-180" />
          </Slider.PrevButton>
        </div>

        <div class="col-start-3 col-span-1 row-start-1 row-span-1 z-10 self-center p-2 relative bottom-[15%]">
          <Slider.NextButton class="hidden sm:flex disabled:invisible btn btn-outline btn-sm btn-circle no-animation">
            <Icon id="chevron-right" />
          </Slider.NextButton>
        </div>
      </div>
      <Slider.JS rootId={id} infinite />
    </>
  );
}

export default ProductSlider;
