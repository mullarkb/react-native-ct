import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Dimensions } from "react-native";
import { useDispatch } from "react-redux";
import { setSelectedProduct } from "../store/actions";
import {categoryImage, supplierImage} from "../utils/mixins";

const ProductBlock = ({ product }) => {
    const dispatch = useDispatch()


    const _selectProduct = (id) => {
        dispatch(setSelectedProduct(id))
    }


  return (
    <TouchableOpacity style={styles.productBlock} key={product.availabilityId} onPress={() => _selectProduct(product.availabilityId)}>
      <View style={styles.blockHead}>
        <Text style={styles.supplierNameText}>
          {product.supplier.supplierName}
        </Text>
      </View>
      <View style={styles.blockRow}>
        {supplierImage(product.supplier.supplierKey)}
        <View style={[styles.categoryWrap, Dimensions.get("window").width < 330 && styles.smallScreenCategories]}>
          {
            Dimensions.get("window").width > 330 &&
            <Text style={styles.p}>- {product.category.productType} {product.category.vehicleType}</Text>
          }
          {categoryImage(product.category.productType, product.category.vehicleType)}
        </View>
        <Text style={styles.priceText}>
          {parseInt(product.price.amount).toLocaleString("en-GB", {
            style: "currency",
            currency: "EUR",
          })}
        </Text>
      </View>
      <View style={styles.blockFooter}>
        <Text style={styles.p}>ETA:</Text>
        <Text style={styles.etaText}> {product.eta}</Text>
        <Text style={styles.p}> {product.eta > 1 ? "minutes" : "minute"}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({

  productBlock: {
    backgroundColor: "#f4f4f4",
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    shadowColor: "#000000",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 4,
    justifyContent: "space-between",
  },
  blockHead: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#cccccc",
    alignItems: "center",
  },
  blockRow: {
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  blockFooter: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: "#cccccc",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 5,
    flexDirection: "row",
  },
  supplierNameText: {
    color: "#21456d",
    fontSize: 15,
    fontFamily: "Quicksand-Medium",
  },
  p: {
    color: "#21456d",
    fontSize: 16,
    fontFamily: "Quicksand-Regular",
    textAlign: "left",
    textTransform: "capitalize",
  },
  etaText: {
    color: "#bcd13c",
    fontSize: 20,
    fontFamily: "Quicksand-Medium",
  },
  priceText: {
    color: "#bcd13c",
    fontSize: 22,
    fontFamily: "Quicksand-Medium",
  },
  categoryWrap: {
    flexGrow: 1,
    paddingLeft: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  smallScreenCategories:{
    justifyContent: "center"
  }
});

export default ProductBlock;
