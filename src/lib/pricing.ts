import type { Course } from "./courses";
import { COURSES } from "./courses";

export type LocationCategory = "edo-state" | "outside-edo" | "international" | "online";

export interface PriceOption {
  course: Course;
  quantity: number;
  fee: number;
}

export interface PricingBreakdown {
  selectedCourses: PriceOption[];
  subtotal: number;
  locationCategory: LocationCategory;
  locationAdjustment: number;
  accommodationIncluded: boolean;
  accommodationFee: number;
  additionalCharges: number;
  total: number;
  isEstimate: boolean;
  notes: string[];
}

export const PRICING_RULES = {
  edoStateInPerson: 300000,
  outsideEdoInPerson: 500000,
  accommodationIncluded: true,
  accommodationNote:
    "Accommodation is provided for eligible students travelling from outside Edo State for in-person programs where the offer has been confirmed.",
  accommodationNotConfirmed:
    "Accommodation for this course/cohort has not yet been confirmed. Please confirm with our team before making travel arrangements.",
} as const;

const COURSES_BY_ID: Record<string, Course> = {};
for (const c of COURSES) {
  COURSES_BY_ID[c.id] = c;
}

export function getCourseById(id: string): Course | undefined {
  return COURSES_BY_ID[id];
}

export function calculatePricing({
  courseIds,
  locationCategory,
  quantityPerCourse = {},
  accommodationEligible = false,
  accommodationConfirmed = false,
}: {
  courseIds: string[];
  locationCategory: LocationCategory;
  quantityPerCourse?: Record<string, number>;
  accommodationEligible?: boolean;
  accommodationConfirmed?: boolean;
}): PricingBreakdown {
  const notes: string[] = [];
  let locationAdjustment = 0;
  let accommodationIncluded = false;
  const accommodationFee = 0;
  const additionalCharges = 0;
  let isEstimate = false;

  const selectedCourses: PriceOption[] = [];

  for (const courseId of courseIds) {
    const course = COURSES_BY_ID[courseId];
    if (!course) continue;

    const quantity = quantityPerCourse[courseId] || 1;
    const fee = course.baseFee ?? 0;
    if (course.baseFee === null) isEstimate = true;

    selectedCourses.push({ course, quantity, fee: fee * quantity });

    if (course.additionalCharges && course.additionalCharges.length > 0) {
      notes.push(
        `${course.name}: ${course.additionalCharges.join(", ")} (if applicable).`,
      );
    }
  }

  const subtotal = selectedCourses.reduce((sum, s) => sum + s.fee, 0);

  if (locationCategory === "online") {
    notes.push("Online training pricing is course-specific.");
  } else if (locationCategory === "edo-state") {
    notes.push(
      `Standard in-person training for Edo State residents: ${formatNaira(PRICING_RULES.edoStateInPerson)}.`,
    );
    if (subtotal === 0) locationAdjustment = PRICING_RULES.edoStateInPerson;
  } else if (locationCategory === "outside-edo") {
    notes.push(
      `Standard in-person training for students from outside Edo State: ${formatNaira(PRICING_RULES.outsideEdoInPerson)}.`,
    );
    if (accommodationEligible && accommodationConfirmed) {
      accommodationIncluded = true;
      notes.push(
        "Accommodation is included for eligible outside-Edo State in-person students.",
      );
    } else if (accommodationEligible && !accommodationConfirmed) {
      notes.push(PRICING_RULES.accommodationNotConfirmed);
    } else {
      notes.push(
        "Accommodation is not included for this selection. Please contact us for details.",
      );
    }
    if (subtotal === 0) locationAdjustment = PRICING_RULES.outsideEdoInPerson;
  } else if (locationCategory === "international") {
    notes.push(
      "International applicants: please contact us to confirm availability, delivery format, fees, and logistics.",
    );
    isEstimate = true;
  }

  const total = subtotal + locationAdjustment + accommodationFee + additionalCharges;

  return {
    selectedCourses,
    subtotal,
    locationCategory,
    locationAdjustment,
    accommodationIncluded,
    accommodationFee,
    additionalCharges,
    total,
    isEstimate,
    notes,
  };
}

export function formatNaira(amount: number): string {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}