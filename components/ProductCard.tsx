import { EyeIcon, HeartIcon, ShoppingCartIcon, StarIcon } from "lucide-react-native";
import { Dispatch, SetStateAction, useState } from "react";
import { Image, Pressable, Text, View, useWindowDimensions } from "react-native";

export interface Category {
    data: CategoryData;
}

export interface CategoryData {
    id:         number;
    attributes: PurpleAttributes;
}

export interface PurpleAttributes {
    categoryName: string;
    categoryDesc: string;
    slug:         string;
    createdAt:    string;
    updatedAt:    string;
    publishedAt:  string;
}

export interface IndexImage {
    data: IndexImageData;
}

export interface IndexImageData {
    id:         number;
    attributes: FluffyAttributes;
}

export interface FluffyAttributes {
    name:              string;
    alternativeText:   null;
    caption:           null;
    width:             number;
    height:            number;
    formats:           Formats;
    hash:              string;
    ext:               EXT;
    mime:              MIME;
    size:              number;
    url:               string;
    previewUrl:        null;
    provider:          Provider;
    provider_metadata: ProviderMetadata;
    createdAt:         string;
    updatedAt:         string;
}

export enum EXT {
    Jpg = ".jpg",
    PNG = ".png",
    Webp = ".webp",
}

export interface Formats {
    thumbnail: Large;
    small?:    Large;
    medium?:   Large;
    large?:    Large;
}

export interface Large {
    name:              string;
    hash:              string;
    ext:               EXT;
    mime:              MIME;
    path:              null;
    width:             number;
    height:            number;
    size:              number;
    url:               string;
    provider_metadata: ProviderMetadata;
}

export enum MIME {
    ImageJPEG = "image/jpeg",
    ImagePNG = "image/png",
}

export interface ProviderMetadata {
    public_id:     string;
    resource_type: ResourceType;
}

export enum ResourceType {
    Image = "image",
}

export enum Provider {
    Cloudinary = "cloudinary",
}

export interface Meta {
    pagination: Pagination;
}

export interface Pagination {
    page:      number;
    pageSize:  number;
    pageCount: number;
    total:     number;
}

export type Product = {
    id: number,
    attributes: {
        productName: string;
        inStock: boolean;
        isDiscount: boolean;
        oldPrice: number | null;
        currentPrice: number;
        quantity: number;
        slug: string;
        highlights: string;
        details: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        indexImage: IndexImage;
        productImageOne: IndexImage;
        productImageTwo: IndexImage;
        productImageThree: IndexImage;
        category: Category;
    };
};

const ProductCard = ({ product }: { product: Product; }): JSX.Element => {

    const { width } = useWindowDimensions();

    const productCardWidth: number = width - 106;

    type state = {
        initialValue: boolean,
        setValue: () => Dispatch<SetStateAction<boolean>>
    }

    const [isHovered, setIsHovered] = useState(false);

    return (
        <View style={{rowGap: 20, width: productCardWidth}}>
            <Pressable className="relative h-[300] rounded-xl group" onTouchStart={() => setIsHovered(!isHovered)}>
                <Image className="w-full h-full rounded-xl object-center object-cover" source={{uri: `${product.attributes.indexImage.data.attributes.url}`}} resizeMethod="resize" resizeMode="cover" alt={product.attributes.productName} />

                <View className={`bg-black/50 h-full absolute rounded-xl w-full ease-in-out transition-transform ${isHovered ? 'scale-100' : 'scale-0'} group-focus-within:scale-100`}>
                    <View className="p-4 rounded-lg bg-white absolute top-4 right-4">
                        <HeartIcon className="text-rose-500" size={30} />
                    </View>

                    <View className="items-center justify-center top-1/3 flex-row">
                        <Pressable className="p-4 rounded-lg bg-white mr-2">
                            <EyeIcon className="text-black" size={30} />
                        </Pressable>

                        <Pressable className="p-4 rounded-lg bg-white ml-2">
                            <ShoppingCartIcon className="text-black" size={30} />
                        </Pressable>
                    </View>
                </View>
            </Pressable>

            <View className="px-4" style={{rowGap: 20}}>
                <View style={{rowGap: 5}}>
                    <Text className="text-lg font-bold tracking-widest">
                        {product.attributes.category.data.attributes.categoryName}
                    </Text>

                    <Text className="text-xl font-extrabold text-[#181818] tracking-widest">
                        {product.attributes.productName}
                    </Text>
                </View>

                <View className="flex-row items-center justify-between flex-wrap" style={{gap: 15}}>
                    <View className="flex-row items-center" style={{columnGap: 7}}>
                        <Text className="bg-sky-100 rounded-md pt-3 pb-1.5 px-2 font-bold text-sky-950 tracking-widest text-lg leading-none">
                            {product.attributes.currentPrice}<Text className="text-sm leading-none">30</Text>
                        </Text>

                        {product.attributes.isDiscount && (
                            <Text className="bg-rose-100 rounded-md pt-3 pb-1.5 px-2 font-bold text-rose-950 tracking-widest text-lg leading-none line-through">
                                ${product.attributes.oldPrice}<Text className="text-sm leading-none">30</Text>
                            </Text>
                        )}
                    </View>

                    <View className="flex-row items-center" style={{columnGap: 3}}>
                        <StarIcon className="text-rose-700" size={20} />
                        <StarIcon className="text-rose-700" size={20} />
                        <StarIcon className="text-rose-700" size={20} />
                        <StarIcon className="text-rose-700" size={20} />
                        <StarIcon className="text-rose-700" size={20} />
                    </View>
                </View>

                <View style={{rowGap: 10}}>
                    <Pressable className="bg-rose-600 rounded-lg py-2.5 px-4 text-center flex-row items-center justify-center" style={{columnGap: 10}}>
                        <ShoppingCartIcon className="text-white" strokeWidth={3} size={20} />

                        <Text className="text-white font-bold text-lg">
                            Add to Cart
                        </Text>
                    </Pressable>

                    <Pressable className="text-rose-600 text-center flex-row items-center justify-center" style={{columnGap: 10}}>
                        <EyeIcon className="text-rose-600" size={20} />

                        <Text className="text-rose-600 text-lg">
                            Quick View
                        </Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

export default ProductCard;
