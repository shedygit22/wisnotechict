"use client";

import * as React from "react";
import Link from "next/link";
import Button from "@/components/ui/button";
import {
  Input,
  Select,
  Textarea,
} from "@/components/ui/input";
import Card from "@/components/ui/card";
import {
  getAvailableCourses,
  getPlannedCourses,
  Course,
  TRAINING_FORMATS,
  NIGERIAN_STATES,
  TRAINING_LOCATIONS,
} from "@/lib/courses";
import {
  calculatePricing,
  formatNaira,
  type LocationCategory,
} from "@/lib/pricing";
import { WHATSAPP_URL } from "@/types";

type EnrollmentStep = 1 | 2 | 3 | 4 | 5;

interface EnrollmentFormData {
  courses: string[];
  quantityPerCourse: Record<string, number>;
  fullName: string;
  email: string;
  phone: string;
  state: string;
  country: string;
  locationCategory: LocationCategory;
  trainingFormat: string;
  learningGoals: string;
  additionalMessage: string;
  accommodationEligible: boolean;
  accommodationConfirmed: boolean;
  agreePrivacy: boolean;
}

const INITIAL_FORM: EnrollmentFormData = {
  courses: [],
  quantityPerCourse: {},
  fullName: "",
  email: "",
  phone: "",
  state: "",
  country: "Nigeria",
  locationCategory: "edo-state",
  trainingFormat: "",
  learningGoals: "",
  additionalMessage: "",
  accommodationEligible: false,
  accommodationConfirmed: false,
  agreePrivacy: false,
};

const STEP_TITLES: Record<EnrollmentStep, string> = {
  1: "Select Training",
  2: "Your Details & Location",
  3: "Fee Breakdown",
  4: "Review & Submit",
  5: "Complete",
};

export default function EnrollmentPage() {
  const [step, setStep] = React.useState<EnrollmentStep>(1);
  const [form, setForm] = React.useState<EnrollmentFormData>(INITIAL_FORM);
  const [pricing, setPricing] = React.useState<any>(null);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [showFallback, setShowFallback] = React.useState(false);

  const allCourses = React.useMemo(
    () => [...getAvailableCourses(), ...getPlannedCourses()],
    [],
  );
  const availableCourses = getAvailableCourses();

  const goTo = (next: EnrollmentStep) => {
    setError(null);
    setStep(next);
  };

  const updateField = <K extends keyof EnrollmentFormData>(
    key: K,
    value: EnrollmentFormData[K],
  ) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const toggleCourse = (courseId: string) => {
    setForm((prev) => {
      const courses = prev.courses.includes(courseId)
        ? prev.courses.filter((id) => id !== courseId)
        : [...prev.courses, courseId];
      const qty = { ...prev.quantityPerCourse };
      if (!courses.includes(courseId)) delete qty[courseId];
      else if (!qty[courseId]) qty[courseId] = 1;
      return { ...prev, courses, quantityPerCourse: qty };
    });
  };

  const updateQuantity = (courseId: string, delta: number) => {
    setForm((prev) => {
      const qty = { ...prev.quantityPerCourse };
      const current = qty[courseId] || 1;
      const next = Math.max(1, current + delta);
      qty[courseId] = next;
      return { ...prev, quantityPerCourse: qty };
    });
  };

  const computePricing = React.useCallback(() => {
    const result = calculatePricing({
      courseIds: form.courses,
      locationCategory: form.locationCategory,
      quantityPerCourse: form.quantityPerCourse,
      accommodationEligible:
        form.locationCategory === "outside-edo" ? form.accommodationEligible : false,
      accommodationConfirmed: form.accommodationConfirmed,
    });
    setPricing(result);
  }, [form]);

  React.useEffect(() => {
    computePricing();
  }, [form, computePricing]);

  const isEdo = form.locationCategory === "edo-state";
  const isOutsideEdo = form.locationCategory === "outside-edo";
  const isOnline = form.locationCategory === "online";
  const isInternational = form.locationCategory === "international";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!form.courses.length) {
      setError("Please select at least one course.");
      setStep(1);
      return;
    }
    if (!form.fullName.trim()) {
      setError("Please enter your full name.");
      setStep(2);
      return;
    }
    if (!form.email.trim() || !/[^\s@]+@[^\s@]+\.[^\s@]+/.test(form.email)) {
      setError("Please enter a valid email address.");
      setStep(2);
      return;
    }
    if (!form.phone.trim()) {
      setError("Please enter your phone or WhatsApp number.");
      setStep(2);
      return;
    }
    if (!form.trainingFormat) {
      setError("Please select a training format.");
      setStep(2);
      return;
    }
    if (!form.agreePrivacy) {
      setError("You must agree to the privacy policy to continue.");
      setStep(4);
      return;
    }

    setIsSubmitting(true);

    // Simulate saving lead (in production, call a real backend endpoint)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setStep(5);
    }, 1000);
  };

  const openWhatsApp = () => {
    const selectedCourses = form.courses
      .map((id) => {
        const c = allCourses.find((x) => x.id === id);
        return c ? c.name : id;
      })
      .join(", ");

    const message = [
      `*Wisnotech Enrollment Inquiry*`,
      `Name: ${form.fullName}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Location: ${form.country} ${form.state ? `(${form.state})` : ""}`,
      `Training Format: ${form.trainingFormat}`,
      `Course(s): ${selectedCourses}`,
      `Quoted Fee: ${pricing ? formatNaira(pricing.total) : "To be confirmed"}`,
      `Learning Goals: ${form.learningGoals || "Not specified"}`,
      `Additional Message: ${form.additionalMessage || "None"}`,
    ].join("%0A");

    setShowFallback(false);
    window.location.href = `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
  };

  const renderStep1 = () => {
    return (
      <Card className="p-0 md:p-8">
        <div className="px-6 md:px-0">
          <h2 className="text-xl font-bold text-[#0A1930] mb-6">
            Step 1: Select Your Training
          </h2>
          <p className="text-[#344054] mb-8">
            Choose one or more courses from our catalog. You can adjust
            quantities below.
          </p>
          <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
            {allCourses.map((course) => {
              const isSelected = form.courses.includes(course.id);
              const qty = form.quantityPerCourse[course.id] || 1;
              const isPlanned = course.status === "planned";
              return (
                <Card key={course.id} className="p-4 border-b-0 last:border-b">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-[#0A1930]">
                      {course.name}
                    </span>
                    {isPlanned && (
                      <span className="text-xs font-semibold text-[#64748B] bg-[#E3E8EF] px-2 py-0.5 rounded">
                        Planned
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-[#344054] mb-3">
                    {course.shortDescription}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => toggleCourse(course.id)}
                          aria-label={`Select ${course.name}`}
                        />
                        {availableCourses.includes(course)
                          ? "Add to enrollment"
                          : "Register interest"}
                      </label>
                      {isSelected && (
                        <div className="flex items-center gap-2 text-xs text-[#344054]">
                          <button
                            onClick={() => updateQuantity(course.id, -1)}
                            disabled={qty <= 1}
                            className="w-6 h-6 rounded border border-[#E3E8EF] hover:bg-[#F5F7FA] flex items-center justify-center"
                            aria-label="Decrease quantity"
                          >
                            −
                          </button>
                          <span className="font-medium">{qty}</span>
                          <button
                            onClick={() => updateQuantity(course.id, 1)}
                            className="w-6 h-6 rounded border border-[#E3E8EF] hover:bg-[#F5F7FA] flex items-center justify-center"
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>
                      )}
                    </div>
                    <span className="font-bold text-[#0A1930]">
                      {course.baseFee ? formatNaira(course.baseFee) : "Request details"}
                    </span>
                  </div>
                </Card>
              );
            })}
          </div>
          <div className="mt-6 flex justify-end">
            <Button onClick={() => goTo(2)}>Continue to Details</Button>
          </div>
        </div>
      </Card>
    );
  };

  const renderStep2 = () => {
    return (
      <Card className="p-0 md:p-8">
        <div className="px-6 md:px-0">
          <h2 className="text-xl font-bold text-[#0A1930] mb-6">
            Step 2: Your Details & Location
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Input
                label="Full Name"
                value={form.fullName}
                onChange={(e) => updateField("fullName", e.target.value)}
                error={error && !form.fullName.trim() ? "Required" : undefined}
              />
              <Input
                label="Email Address"
                type="email"
                value={form.email}
                onChange={(e) => updateField("email", e.target.value)}
                error={
                  error && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
                    ? "Valid email required"
                    : undefined
                }
              />
            </div>
            <Input
              label="WhatsApp / Phone Number"
              value={form.phone}
              onChange={(e) => updateField("phone", e.target.value)}
              error={error && !form.phone.trim() ? "Required" : undefined}
              helper="We will use this to contact you via WhatsApp"
            />
            <div className="grid md:grid-cols-2 gap-6">
              <Select
                label="Country of Residence"
                value={form.country}
                onChange={(e) => {
                  updateField("country", e.target.value);
                  updateField(
                    "locationCategory",
                    e.target.value === "Nigeria"
                      ? (form.state === "Edo" ? "edo-state" : "outside-edo")
                      : "international",
                  );
                }}
                options={TRAINING_LOCATIONS.map((l) => ({
                  value: l.value,
                  label: l.label,
                }))}
              />
              {form.country === "Nigeria" ? (
                <Select
                  label="State of Residence"
                  value={form.state}
                  onChange={(e) => {
                    updateField("state", e.target.value);
                    updateField(
                      "locationCategory",
                      e.target.value === "Edo"
                        ? "edo-state"
                        : "outside-edo",
                    );
                  }}
                  options={NIGERIAN_STATES.map((s) => ({
                    value: s,
                    label: s,
                  }))}
                />
              ) : (
                <Input
                  label="State / Province / Region"
                  value={form.state}
                  onChange={(e) => updateField("state", e.target.value)}
                />
              )}
            </div>
            <Select
              label="Preferred Training Format"
              value={form.trainingFormat}
              onChange={(e) => updateField("trainingFormat", e.target.value)}
              options={TRAINING_FORMATS.map((f) => ({
                value: f.value,
                label: f.label,
              }))}
              error={error && !form.trainingFormat ? "Required" : undefined}
            />
            {isOutsideEdo && (
              <Card className="p-4 bg-[#F5F7FA] border border-[#E3E8EF]">
                <div className="flex items-start gap-3 mb-3">
                  <input
                    type="checkbox"
                    id="accommodation"
                    checked={form.accommodationEligible}
                    onChange={(e) =>
                      updateField("accommodationEligible", e.target.checked)
                    }
                    className="mt-0.5"
                  />
                  <div>
                    <label htmlFor="accommodation" className="font-semibold text-[#0A1930]">
                      I am interested in the accommodation arrangement
                    </label>
                    <p className="text-xs text-[#64748B] mt-1">
                      Accommodation may be available for eligible students
                      travelling from outside Edo State for in-person programs,
                      where the offer has been confirmed.
                    </p>
                  </div>
                </div>
                {form.accommodationEligible && (
                  <div className="text-xs text-[#64748B]">
                    {form.accommodationConfirmed ? (
                      <>
                        <p className="text-[#102A56] font-medium">✓ Accommodation confirmed for this cohort.</p>
                        <label className="flex items-start gap-2 mt-2">
                          <input
                            type="checkbox"
                            checked={form.accommodationConfirmed}
                            onChange={(e) =>
                              updateField(
                                "accommodationConfirmed",
                                e.target.checked,
                              )
                            }
                          />
                          I confirm I have reviewed the accommodation details
                        </label>
                      </>
                    ) : (
                      <p className="text-[#B91C1C]">
                        ⚠ Accommodation for this course/cohort has not yet
                        been confirmed. Please contact our team before making
                        travel arrangements.
                      </p>
                    )}
                  </div>
                )}
              </Card>
            )}
            {isInternational && (
              <Card className="p-4 bg-[#F5F7FA] border border-[#E3E8EF]">
                <p className="text-sm text-[#344054]">
                  International applicants: please specify your country above.
                  We will contact you to confirm availability, delivery format,
                  fees, and logistics. We do not assume that international
                  students can attend in person or receive accommodation.
                </p>
              </Card>
            )}
            <div className="flex justify-end">
              <Button type="button" onClick={() => goTo(1)} variant="outline">
                Back
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="ml-4"
              >
                Continue to Fee Breakdown
              </Button>
            </div>
          </form>
        </div>
      </Card>
    );
  };

  const renderStep3 = () => {
    if (!pricing) return null;
    const selectedCourses = pricing.selectedCourses.map((sc: any) => {
      const c = allCourses.find((x) => x.id === sc.course.id);
      return c || sc.course;
    });

    return (
      <Card className="p-0 md:p-8">
        <div className="px-6 md:px-0">
          <h2 className="text-xl font-bold text-[#0A1930] mb-6">
            Step 3: Fee Breakdown
          </h2>
          <p className="text-[#344054] mb-6">
            Review your selected courses, location category, and the total
            amount before submission.
          </p>
          <div className="space-y-4 mb-8">
            {selectedCourses.map((course: Course) => {
              const sc = pricing.selectedCourses.find(
                (s: any) => s.course.id === course.id,
              );
              return (
                <div key={course.id} className="flex justify-between items-center pb-2 border-b border-[#E3E8EF] last:border-b-0">
                  <div>
                    <p className="text-sm font-medium text-[#344054]">
                      {course.name}
                    </p>
                    <p className="text-xs text-[#64748B]">
                      {sc.quantity} × {formatNaira(sc.fee / sc.quantity)}
                    </p>
                  </div>
                  <span className="text-sm font-bold text-[#0A1930]">
                    {formatNaira(sc.fee)}
                  </span>
                </div>
              );
            })}
            {pricing.locationAdjustment > 0 && (
              <div className="flex justify-between items-center pt-2 border-t border-[#E3E8EF]">
                <span className="text-sm text-[#344054]">
                  Location adjustment ({form.locationCategory})
                </span>
                <span className="text-sm font-bold text-[#0A1930]">
                  +{formatNaira(pricing.locationAdjustment)}
                </span>
              </div>
            )}
            {pricing.accommodationIncluded && (
              <div className="flex justify-between items-center pt-2 border-t border-[#E3E8EF]">
                <span className="text-sm text-[#344054]">Accommodation included</span>
                <span className="text-sm font-bold text-[#102A56]">Included</span>
              </div>
            )}
            <div className="flex justify-between items-center pt-4 border-t border-[#E3E8EF]">
              <span className="text-base font-semibold text-[#0A1930]">
                Total Amount
              </span>
              <span className="text-xl font-bold text-[#0A1930]">
                {pricing.isEstimate ? "Estimate: " : ""}{formatNaira(
                  pricing.total,
                )}
              </span>
            </div>
          </div>
          {pricing.notes.length > 0 && (
            <div className="space-y-2 mb-8 text-sm text-[#64748B]">
              {pricing.notes.map((note: string, i: number) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="flex-shrink-0 w-4 h-4 rounded-full bg-[#102A56]/10 text-[#102A56] text-xs flex items-center justify-center">
                    •
                  </span>
                  {note}
                </div>
              ))}
            </div>
          )}
          <div className="flex justify-end">
            <Button type="button" onClick={() => goTo(2)} variant="outline">
              Back
            </Button>
            <Button onClick={() => goTo(4)} className="ml-4">
              Review & Submit
            </Button>
          </div>
        </div>
      </Card>
    );
  };

  const renderStep4 = () => {
    return (
      <Card className="p-0 md:p-8">
        <div className="px-6 md:px-0">
          <h2 className="text-xl font-bold text-[#0A1930] mb-6">
            Step 4: Review & Submit
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-xs font-semibold text-[#0A1930] uppercase tracking-wide mb-1">
                  Full Name
                </p>
                <p className="text-sm text-[#344054]">{form.fullName}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-[#0A1930] uppercase tracking-wide mb-1">
                  Email
                </p>
                <p className="text-sm text-[#344054]">{form.email}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-[#0A1930] uppercase tracking-wide mb-1">
                  Phone / WhatsApp
                </p>
                <p className="text-sm text-[#344054]">{form.phone}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-[#0A1930] uppercase tracking-wide mb-1">
                  Location
                </p>
                <p className="text-sm text-[#344054]">
                  {form.country} {form.state ? `(${form.state})` : ""}
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold text-[#0A1930] uppercase tracking-wide mb-1">
                  Training Format
                </p>
                <p className="text-sm text-[#344054]">{form.trainingFormat}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-[#0A1930] uppercase tracking-wide mb-1">
                  Location Category
                </p>
                <p className="text-sm text-[#344054]">
                  {form.locationCategory.replace("-", " ")}
                </p>
              </div>
            </div>
            <div className="bg-[#F5F7FA] border border-[#E3E8EF] rounded-lg p-4">
              <p className="text-xs font-semibold text-[#0A1930] uppercase tracking-wide mb-3">
                Selected Courses
              </p>
              <div className="space-y-2">
                {form.courses.map((id) => {
                  const c = allCourses.find((x) => x.id === id);
                  const qty = form.quantityPerCourse[id] || 1;
                  const fee = c?.baseFee ? c.baseFee * qty : 0;
                  return (
                    <div key={id} className="flex justify-between items-center text-sm">
                      <span className="text-[#344054]">
                        {c?.name || id} (×{qty})
                      </span>
                      <span className="font-medium text-[#0A1930]">
                        {formatNaira(fee)}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="agree-privacy"
                checked={form.agreePrivacy}
                onChange={(e) => updateField("agreePrivacy", e.target.checked)}
                className="mt-0.5"
              />
              <label htmlFor="agree-privacy" className="text-sm text-[#344054] leading-relaxed">
                I agree to the{" "}
                <Link href="/privacy-policy" className="text-[#102A56] underline">
                  Privacy Policy
                </Link>
                {" and "}
                <Link href="/terms" className="text-[#102A56] underline">
                  Terms and Conditions
                </Link>
                {". Submission is an enrollment application, not proof of payment or guaranteed admission."}
              </label>
            </div>
            <p className="text-xs text-[#64748B]">
              {pricing?.isEstimate
                ? "This is an estimate. The final fee will be confirmed by our team before payment."
                : "The total shown is based on your current selections and location category."}
            </p>
            <div className="flex justify-end">
              <Button type="button" onClick={() => goTo(3)} variant="outline">
                Back
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="ml-4"
              >
                {isSubmitting ? "Submitting..." : "Submit Enrollment"}
              </Button>
            </div>
            {error && (
              <div className="mt-4 p-3 rounded bg-red-50 border border-red-100 text-red-700 text-sm">
                {error}
              </div>
            )}
          </form>
        </div>
      </Card>
    );
  };

  const renderStep5 = () => {
    return (
      <Card className="p-0 md:p-8 text-center">
        <div className="px-6 md:px-0 py-12">
          <div className="w-16 h-16 rounded-full bg-[#102A56]/10 flex items-center justify-center mx-auto mb-6 text-[#102A56] font-bold text-2xl">
            ✓
          </div>
          <h2 className="text-2xl font-bold text-[#0A1930] mb-4">
            Enrollment Submitted
          </h2>
          <p className="text-[#344054] leading-relaxed mb-8 max-w-md mx-auto">
            Thank you, {form.fullName}. Your enrollment application has been
            submitted. A Wisnotech representative will contact you via WhatsApp
            to confirm your training format, schedule, and fee.
          </p>
          <div className="space-y-3">
            <Button onClick={openWhatsApp} fullWidth className="md:w-auto">
              Continue on WhatsApp
            </Button>
            <Link href="/" className="text-sm text-[#102A56] hover:underline">
              Return to homepage
            </Link>
          </div>
          <p className="mt-8 text-xs text-[#64748B]">
            Submission is an enrollment application, not proof of payment or
            guaranteed admission. Our team will confirm all details before any
            payment is requested.
          </p>
        </div>
      </Card>
    );
  };

  const stepContent = {
    1: renderStep1(),
    2: renderStep2(),
    3: renderStep3(),
    4: renderStep4(),
    5: renderStep5(),
  };

  return (
    <section className="px-4 py-16">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0A1930] leading-tight mb-4">
            Training Enrollment
          </h1>
          <p className="text-lg text-[#344054] leading-relaxed">
            Apply to join Wisnotech Academy. Select your courses, provide your
            details, and review your fee before submission.
          </p>
        </div>

        <div className="flex items-center justify-between mb-8 px-4">
          {[1, 2, 3, 4, 5].map((n) => {
            const isActive = n === step;
            const isCompleted = n < step;
            return (
              <div
                key={n}
                className="flex items-center gap-2"
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                  isCompleted
                    ? "bg-[#102A56] text-white"
                    : isActive
                    ? "bg-[#102A56]/10 text-[#102A56] border border-[#102A56]"
                    : "bg-[#F5F7FA] text-[#64748B] border border-[#E3E8EF]"
                }`}>
                  {n}
                </div>
                {n < 5 && (
                  <div className={`h-px ${
                    isCompleted || isActive ? "bg-[#102A56]" : "bg-[#E3E8EF]"
                  }`} />
                )}
                <span className={`text-xs font-medium ${
                  isCompleted || isActive ? "text-[#0A1930]" : "text-[#64748B]"
                }`}>
                  {STEP_TITLES[n as EnrollmentStep]}
                </span>
              </div>
            );
          })}
        </div>

        {stepContent[step]}
      </div>
    </section>
  );
}
