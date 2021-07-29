import BoltLogo from "../assets/logos/BoltLogo";
import FreeNowLogo from "../assets/logos/FreeNowLogo";
import * as Vehicles from "../assets/logos/VehicleLogos"
import React from "react";

export const supplierImage = (supplier) => {
    return supplier.toLowerCase() === "bolt" ? (
        <BoltLogo width={50} height={50} />
    ) : (
        <FreeNowLogo width={50} height={50} />
    );
};

export const categoryImage = (productType, vehicleType) => {
    const logoMap = {
        "other_accessible": Vehicles.VehicleOtherAccessible,
        "other_eco": Vehicles.VehicleOtherEco,
        "standard_sedan": Vehicles.VehicleStandardSedan,
        "standard_minibus": Vehicles.VehicleStandardMinibus,
        "standard_suv": Vehicles.VehicleStandardSUV
    }
    const Logo = logoMap[productType.toLowerCase() + "_" + vehicleType.toLowerCase()]
    return <Logo height={50} width={50} />
}