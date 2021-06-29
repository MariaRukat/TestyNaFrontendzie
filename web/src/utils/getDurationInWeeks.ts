import {
  PromotionDurationOutput,
  PromotionDurationType,
} from "../types/PromotionDurationType";

export const getDurationInWeeks = (days: number): PromotionDurationOutput => {
  if (Number.isNaN(Number(days))) {
    throw new Error("Days should be number");
  }

  const approximateNumberOfWeeks = Math.round(days / 7);

  return {
    type: PromotionDurationType.weeks,
    value: approximateNumberOfWeeks,
  };
};
