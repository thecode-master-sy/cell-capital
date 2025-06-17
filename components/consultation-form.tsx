"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import Booker from "./cal-component";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { AnimatePresence, motion } from "motion/react";
import { useConsultationFormContext } from "./providers/consultation-provider";

const personalSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string(),
});

const companySchema = z.object({
  organizationName: z.string().min(1, "Company name is required"),
  industry: z.string().min(1, "Industry is required"),
  fundingGoal: z.string(),
});

type CompanyFormType = z.infer<typeof companySchema>;
type PersonalFormType = z.infer<typeof personalSchema>;

const formSchema = personalSchema.merge(companySchema);

type FormSchemaType = z.infer<typeof formSchema>;

export default function ConsultationForm() {
  const [step, setStep] = useState(1);

  const { toggleConsultationForm, toggleBooker, addClientDetails } =
    useConsultationFormContext();
  const [formData, setFormData] = useState<FormSchemaType>({
    name: "",
    email: "",
    phone: "",
    organizationName: "",
    industry: "",
    fundingGoal: "",
  });
  const personalForm = useForm<PersonalFormType>({
    resolver: zodResolver(personalSchema),
    defaultValues: {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
    },
  });
  const companyForm = useForm<CompanyFormType>({
    resolver: zodResolver(companySchema),
    defaultValues: {
      organizationName: formData.organizationName,
      industry: formData.industry,
      fundingGoal: formData.fundingGoal,
    },
  });

  const onPersonalSubmit: SubmitHandler<PersonalFormType> = (data) => {
    console.log("Step 1 submitted with data:", data);
    setFormData((prev) => ({ ...prev, ...data }));
    addClientDetails({
      email: data.email,
      name: data.name,
    });
    setStep(2);
  };

  const onCompanySubmit: SubmitHandler<CompanyFormType> = (data) => {
    console.log("Step 2 submitted with data:", data);
    setFormData((prev) => ({ ...prev, ...data }));
    toggleConsultationForm();
    toggleBooker();
  };

  const stepVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: { opacity: 0, transition: { duration: 0.3, ease: "easeIn" } },
  };

  return (
    <div>
      <span className="font-bold text-paragraph mt-16 inline-block">
        {step === 1 ? "Personal information" : "Organization information"}
      </span>
      <div className="mt-2 border-t border-gray-200" />

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            variants={stepVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="grid gap-4 mt-4"
          >
            <form
              onSubmit={personalForm.handleSubmit(onPersonalSubmit)}
              className="grid gap-4"
            >
              <div className="grid gap-2">
                <label htmlFor="name" className="text-paragraph">
                  <span>Name</span>
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  placeholder="Tochi Chimeremeze"
                  className="p-3 bg-background-gray rounded-sm text-paragraph"
                  type="text"
                  id="name"
                  {...personalForm.register("name")}
                />
                {personalForm.formState.errors.name && (
                  <p className="text-red-500 text-sm">
                    {personalForm.formState.errors.name.message}
                  </p>
                )}
              </div>
              <div className="grid gap-2">
                <label htmlFor="email" className="text-paragraph">
                  <span>Email address</span>
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  placeholder="tochi@cellcapital.com"
                  className="p-3 bg-background-gray rounded-sm text-paragraph"
                  type="email"
                  id="email"
                  {...personalForm.register("email")}
                />
                {personalForm.formState.errors.email && (
                  <p className="text-red-500 text-sm">
                    {personalForm.formState.errors.email.message}
                  </p>
                )}
              </div>
              <div className="grid gap-2">
                <label htmlFor="phone" className="text-paragraph">
                  Phone number
                </label>
                <input
                  placeholder="08123456789"
                  className="p-3 bg-background-gray rounded-sm text-paragraph"
                  type="tel"
                  id="phone"
                  {...personalForm.register("phone")}
                />
                {personalForm.formState.errors.phone && (
                  <p className="text-red-500 text-sm">
                    {personalForm.formState.errors.phone.message}
                  </p>
                )}
              </div>
              <div className="flex justify-end gap-4">
                <Button
                  type="submit"
                  size="lg"
                  className="font-bold w-full max-w-[150px] cursor-pointer rounded-sm flex items-center justify-center gap-2"
                >
                  <span>Continue</span>
                  <ArrowRight size={20} />
                </Button>
              </div>
            </form>
          </motion.div>
        )}
        {step === 2 && (
          <motion.div
            key="step2"
            variants={stepVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="grid gap-4 mt-4"
          >
            <form
              onSubmit={companyForm.handleSubmit(onCompanySubmit)}
              className="grid gap-4"
            >
              <div className="grid gap-2">
                <label htmlFor="organization-name" className="text-paragraph">
                  <span>Organization name</span>
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  placeholder="Cell capital"
                  className="p-3 bg-background-gray rounded-sm text-paragraph"
                  type="text"
                  id="organization-name"
                  {...companyForm.register("organizationName")}
                />
                {companyForm.formState.errors.organizationName && (
                  <p className="text-red-500 text-sm">
                    {companyForm.formState.errors.organizationName.message}
                  </p>
                )}
              </div>
              <div className="grid gap-2">
                <label htmlFor="industry" className="text-paragraph">
                  <span>Organization industry/sector</span>
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  placeholder="transportation"
                  className="p-3 bg-background-gray rounded-sm text-paragraph"
                  type="text"
                  id="industry"
                  {...companyForm.register("industry")}
                />
                {companyForm.formState.errors.industry && (
                  <p className="text-red-500 text-sm">
                    {companyForm.formState.errors.industry.message}
                  </p>
                )}
              </div>
              <div className="grid gap-2">
                <label htmlFor="funding-goal" className="text-paragraph">
                  Funding goal
                </label>
                <input
                  placeholder="$1000"
                  className="p-3 bg-background-gray rounded-sm text-paragraph"
                  type="text"
                  id="funding-goal"
                  {...companyForm.register("fundingGoal")}
                />
                {companyForm.formState.errors.fundingGoal && (
                  <p className="text-red-500 text-sm">
                    {companyForm.formState.errors.fundingGoal.message}
                  </p>
                )}
              </div>
              <div className="flex justify-end gap-4">
                <Button
                  type="button"
                  size="lg"
                  variant="ghost"
                  className="text-paragraph"
                  onClick={() => setStep(1)}
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  size="lg"
                  className="font-bold w-full max-w-[150px] cursor-pointer rounded-sm flex items-center justify-center gap-2"
                >
                  <span>Book a call</span>
                  <ArrowRight size={20} />
                </Button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
