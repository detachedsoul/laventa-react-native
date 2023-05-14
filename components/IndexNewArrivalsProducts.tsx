import NoProduct from "@components/NoProduct";
import ProductCard from "@components/ProductCard";
import useFetch from "@helpers/useFetch";
import { FlatList, View } from "react-native";
import ProductIndicator from "./ProductIndicator";

const IndexNewArrivalsProducts = (): JSX.Element => {
    const apiEndpoint = "https://laventa-strapi-production.up.railway.app/api/products?sort=id%3Adesc&pagination[limit]=4&populate=*";

    const { data } = useFetch(apiEndpoint);

    const products = data?.data;

    return (
        <View style={{rowGap: 30}}>
            <FlatList
                data={products}
                contentContainerStyle={{gap: 10}}
                renderItem={({item}) => (<ProductCard product={item} />)}
                keyExtractor={item => item.id}
                horizontal={true}
                pagingEnabled={true}
                ListEmptyComponent={<NoProduct />}
                extraData={products}
                showsHorizontalScrollIndicator={false}
            />

            {products?.length > 0 ? (
                <View>
                    <ProductIndicator products={products} />
                </View>
            ) : null}
        </View>
    );
};

export default IndexNewArrivalsProducts;
