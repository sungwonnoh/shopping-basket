import { makeVar, ReactiveVar } from "@apollo/client";
import { CartItems } from "./modals/cartitems";

export const cartItemsVar: ReactiveVar<CartItems> = makeVar<CartItems>([]);
