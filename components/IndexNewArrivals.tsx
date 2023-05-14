import IndexNewArrivalsProducts from "@components/IndexNewArrivalsProducts";
import { Text, View } from "react-native";

const IndexNewArrivals = (): JSX.Element => {
    return (
        <View className="p-6">
            <View className="p-6 rounded-xl bg-white relative -top-16 -mb-10 w-full" style={{rowGap: 30}}>
                <View>
                    <Text className="font-bold text-3xl text-gray-950 text-center mb-2">
                        New Arrivals
                    </Text>

                    <Text className="text-center text-lg">
                        Every week we hand-pick some of the best items from our collection
                    </Text>
                </View>

                <IndexNewArrivalsProducts />
            </View>
        </View>
    );
};

export default IndexNewArrivals;
