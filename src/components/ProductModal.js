import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  BackHandler, Dimensions,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedProduct } from "../store/actions";
import TimesCircleSolid from "../assets/logos/TimesCircleSolid";
import {categoryImage, supplierImage} from "../utils/mixins";

const ProductModal = () => {
  const dispatch = useDispatch();
  const selectedProduct = useSelector((state) => state.selectedProduct);
  const product = useSelector((state) =>
    state.availableProducts.find((x) => x.availabilityId == selectedProduct)
  );

  React.useEffect(() => {
    console.log(Dimensions.get("window").width)
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      closeModal
    );
    console.log("product", product);
    return function cleanup() {
      backHandler.remove();
    };
  }, []);

  const closeModal = () => {
    dispatch(setSelectedProduct(""));
  };
  return (
    <Modal
      animationType="slide"
      visible={selectedProduct !== ""}
      onRequestClose={() => {
        closeModal();
      }}
    >
      {product && (
        <View style={styles.productModal}>
          <TouchableOpacity
            onPress={() => closeModal()}
            style={styles.closeIcon}
          >
            <TimesCircleSolid height={30} width={30} />
          </TouchableOpacity>
          <View style={styles.table}>
            <View style={styles.supplierRow}>
              {supplierImage(product.supplier.supplierKey)}
              {product.supplier.supplierKey === "freenow" && (
                <Text style={styles.supplierNameText}>
                  {product.supplier.supplierName}
                </Text>
              )}
            </View>
            <View style={[styles.row, styles.rowAlt]}>
              <Text style={[styles.p, styles.bold]}>Max Pax: </Text>
              <Text style={styles.p}>{product.product.maxPax}</Text>
            </View>
            <View style={[styles.row]}>
              <Text style={[styles.p, styles.bold]}>Bags: </Text>
              <Text style={styles.p}>{product.product.bags.max} - </Text>
              <Text style={styles.p}>
                {product.product.bags.large > 0 &&
                  "Large: " + product.product.bags.large}
              </Text>
              <Text style={styles.p}>
                {product.product.bags.small > 0 &&
                  " Small: " + product.product.bags.small}
              </Text>
            </View>
            <View style={[styles.row, styles.rowAlt]}>
              <Text style={[styles.p, styles.bold]}>Max Seats: </Text>
              <Text style={styles.p}>{product.product.maxSeats}</Text>
            </View>
            <View style={[styles.row]}>
                <Text style={[styles.p, styles.bold]}>Price: </Text>
              <Text style={styles.p}>
                {parseInt(product.price.amount).toLocaleString("en-GB", {
                  style: "currency",
                  currency: "EUR",
                })}
              </Text>
            </View>
            <View style={[styles.row, styles.rowAlt]}>
              <Text style={[styles.p, styles.bold]}>ETA:</Text>
              <Text style={styles.p}> {product.eta}</Text>
              <Text style={styles.p}>
                {" "}
                {product.eta > 1 ? "minutes" : "minute"}
              </Text>
            </View>
            <View style={styles.row}>
                <Text style={[styles.p, styles.bold]}> Category: </Text>
                {categoryImage(product.category.productType, product.category.vehicleType)}
              <Text style={[styles.p, {textTransform: "capitalize"}]}>
                {product.category.productType} {product.category.vehicleType}
              </Text>
            </View>
          </View>
        </View>
      )}
    </Modal>
  );
};

const styles = StyleSheet.create({
  productModal: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  closeIcon: {
    position: "absolute",
    right: 20,
    top: 20,
  },
  table: {
    width: "100%",
    maxWidth: 300,
    borderColor: "#e0e0e0",
    borderRadius: 20,
    borderWidth: 2,
  },
  supplierRow: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
    height: 70,
  },
  supplierNameText: {
    color: "#21456d",
    fontSize: 25,
    fontFamily: "Quicksand-Medium",
    marginLeft: 30,
  },
  row: {
    flexDirection: "row",
    width: "100%",
    height: 50,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  rowAlt: {
    backgroundColor: "#e0e0e0",
  },
  p: {
    color: "#21456d",
    fontSize: 16,
    fontFamily: "Quicksand-Regular",
    textAlign: "left",
  },
    bold: {
      fontFamily: "Quicksand-Medium"
    }
});

export default ProductModal;
