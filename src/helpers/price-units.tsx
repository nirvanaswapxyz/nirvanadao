import { SvgIcon } from "@material-ui/core";
import { ReactComponent as UsdtImg } from "../assets/tokens/MIM.svg";
import { IAllBondData } from "../hooks/bonds";
import { usdt } from "../helpers/bond";

export const priceUnits = (bond: IAllBondData) => {
    if (bond.name === usdt.name) return <SvgIcon component={UsdtImg} viewBox="0 0 32 32" style={{ height: "15px", width: "15px" }} />;

    return "$";
};
