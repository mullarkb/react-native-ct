import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Modal,
  BackHandler,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getAvailableProducts, setSelectedProduct } from "../store/actions";
import { signal } from "../utils/api";
import ProductBlock from "../components/ProductBlock";
import ProductModal from "../components/ProductModal";
import Button from "../components/Button";
const MainView = () => {
  const [showFilters, setShowFilters] = React.useState(false);
  const [filter, setFilter] = React.useState("ALL");
  const [showSortOrders, setShowSortOrders] = React.useState(false);
  const [sortOrder, setSortOrder] = React.useState("eta");

  const dispatch = useDispatch();
  const availableProducts = useSelector((state) => state.availableProducts);
  React.useEffect(() => {
    //prevent memory leaks in the case of a real api call
    let unmounted = false;
    dispatch(getAvailableProducts());

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      closeModal
    );
    return function cleanup() {
      unmounted = true;
      signal.cancel("Api is being cancelled");
      backHandler.remove();
    };
  }, []);

  const orderedProducts = () => {
    return sortOrder === "eta"
      ? availableProducts.sort((a, b) =>
          a[sortOrder] > b[sortOrder] ? 1 : a[sortOrder] < b[sortOrder] ? -1 : 0
        )
      : availableProducts.sort((a, b) =>
          a[sortOrder].amount > b[sortOrder].amount
            ? 1
            : a[sortOrder].amount < b[sortOrder].amount
            ? -1
            : 0
        );
  };
  const filteredProducts = () => {
    return filter !== "ALL"
      ? orderedProducts().filter(
          (product) => product.category.subCategory === filter
        )
      : orderedProducts();
  };
  const closeModal = () => {
    dispatch(setSelectedProduct(""));
  };
  return (
    <SafeAreaView style={styles.mainPage}>
      <ScrollView contentContainerStyle={styles.pageInner}>
        <View>
          <Button
            label={"Filter"}
            onPress={() => setShowFilters(!showFilters)}
            active={showFilters}
          />
          {showFilters && (
            <View style={{ flexDirection: "row" }}>
                <Button
                    label={"All"}
                    onPress={() => setFilter("ALL")}
                    active={filter === "ALL"}
                />
                <Button
                    label={"Popular"}
                    onPress={() => setFilter("MOST_POPULAR")}
                    active={filter === "MOST_POPULAR"}
                />
                <Button
                    label={"Reccommended"}
                    onPress={() => setFilter("HIGHLY_RECOMMENDED")}
                    active={filter === "HIGHLY_RECOMMENDED"}
                />
            </View>
          )}
            <Button
                label={"Sort"}
                onPress={() => setShowSortOrders(!showSortOrders)}
                active={showSortOrders}
            />
          {showSortOrders && (
            <View style={{ flexDirection: "row" }}>
                <Button
                    label={"ETA"}
                    onPress={() => setSortOrder("eta")}
                    active={sortOrder === "eta"}
                />
                <Button
                    label={" Price (lowest)"}
                    onPress={() => setSortOrder("price")}
                    active={sortOrder === "price"}
                />
            </View>
          )}
        </View>
        {availableProducts &&
          availableProducts.length > 0 &&
          filteredProducts().map((product, index) => (
            <ProductBlock product={product} key={"product-" + index} />
          ))}
      </ScrollView>
      <ProductModal />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainPage: {
    backgroundColor: "#fff",
    flex: 1,
  },
  pageInner: {
    marginHorizontal: 10,
    paddingVertical: 40,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#21456d",
    flexGrow: 0,
    margin: 3,
    borderRadius: 10,
  },
  buttonText: {
    fontFamily: "Quicksand-Regular",
    color: "#21456d",
  },
  buttonActive: {
    backgroundColor: "#21456d",
  },
  buttonActiveText: {
    color: "#fff",
  },
});

export default MainView;
