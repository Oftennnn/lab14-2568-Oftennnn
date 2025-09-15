import { create } from "zustand";
import { type MarathonFormState } from "../libs/Store";
export const useMarathonFormStore = create<MarathonFormState>((set) => ({
  fname: "",
  lname: "",
  plan: "funrun",
  gender: "male",
  email: "",
  password: "",
  confirmPassword: "",
  couponCode: "",
  total:0,
  setFname: (fname) =>
    set(() => ({
      fname: fname,
    })),
  setLname: (_lname) =>
    set(() => ({
      lname: _lname,
    })),
  setPlan: (_plan) =>
    set(() => ({
      plan: _plan,
    })),
  setGender: (_gender) =>
    set(() => ({
      gender: _gender,
    })),
  setEmail: (_email) =>
    set(() => ({
      email: _email,
    })),
  setPassword: (_password) =>
    set(() => ({
      password: _password,
    })),
  setConfirmPassword: (_confirmPassword) =>
    set(() => ({
      confirmPassword: _confirmPassword,
    })),
  setCouponCode: (_couponCode) =>
    set(() => ({
      couponCode: _couponCode,
    })),
  // Function ชื่อ discountCupon คำนวณ total ตรงนี้
  discountCoupon: () => set((state)=>{
    let totalPay = 0;
    if (state.plan === "funrun") totalPay += 500;
    else if (state.plan === "mini") totalPay += 800;
    else if (state.plan === "half") totalPay += 1200;
    else if (state.plan === "full") totalPay += 1500;
    if(state.couponCode === "CMU2025") totalPay *= 0.7;

    return {total: totalPay};
  }),
  reset: () =>
    set({
      fname: "",
      lname: "",
      plan: "funrun",
      gender: "male",
      email: "",
      total:0,
    }),
}));
