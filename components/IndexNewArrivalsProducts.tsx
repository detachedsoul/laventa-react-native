import NoProduct from "@components/NoProduct";
import ProductCard from "@components/ProductCard";
import useFetch from "@helpers/useFetch";
import { FlatList } from "react-native";

const IndexNewArrivalsProducts = () => {
    const apiEndpoint = "https://laventa-strapi-production.up.railway.app/api/products?sort=id%3Adesc&pagination[limit]=4&populate=*";

    const { data } = useFetch(apiEndpoint);

    const products = data?.data;

    return (
        <FlatList
            data={products}
            renderItem={({item}) => (<ProductCard product={item} />)}
            keyExtractor={item => item.id}
            horizontal={true}
            pagingEnabled={true}
            ListEmptyComponent={<NoProduct />}
            extraData={products}
            initialNumToRender={1}
            showsHorizontalScrollIndicator={false}
        />
    );
};

export default IndexNewArrivalsProducts;
