import { Product } from "@components/ProductCard";
import { Pressable, View } from "react-native";

const ProductIndicator = ({ products }: {products: []}): JSX.Element | null => {
    if (products?.length < 1) return null;

    return (
        <View className="flex-row items-center text-center justify-center" style={{ columnGap: 10 }}>
            <Pressable className="rounded-full py-1 px-3 bg-rose-500"></Pressable>

            {products?.map((product: Product): JSX.Element => (
                <Pressable className="rounded-full p-1.5 bg-gray-500" key={product?.id}></Pressable>
            ))}
        </View>
    );
};

export default ProductIndicator;
