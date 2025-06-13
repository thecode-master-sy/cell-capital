import Divider from "../divider";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../ui/accordion";

export default function Faq() {
  return (
    <div className="bg-background-gray py-4">
      <div className="py-16 px-4">
        <h1 className="text-heading-0 font-bold max-w-[22ch]">
          Still not sure? See the most commonly asked questions
        </h1>

        <div className="mt-8 max-w-[700px]">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                What is grant writing and why do I need it?
              </AccordionTrigger>
              <AccordionContent>
                Grant writing is the process of creating a proposal that
                outlines your business idea and why you believe it is deserving
                of grant funding. It's an essential skill for any business owner
                looking to secure funding for their company. Our grant writing
                package can help you navigate this process successfully and
                increase your chances of securing the funding you need to start
                or grow your business businesses.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Do I need good credit to get grants?
              </AccordionTrigger>
              <AccordionContent>
                No credit checks are done during the process of applying to
                grants. You will not need to have good to apply or win grants at
                any point.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Is it guaranteed that I will get a grant if Cell Capital Applies
                For Me?
              </AccordionTrigger>
              <AccordionContent>
                No one can guarantee you will win as grants are competition
                based. We have to go through the process as everyone. Our grant
                writing services offer more expertise and support throughout the
                grant application process. Our professional grant writers have
                experience in identifying suitable grants, understanding
                criteria, and crafting compelling proposals. They can help save
                time, improve the quality of your application, and increase your
                chances of securing funding.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                How long does it take to win grants?
              </AccordionTrigger>
              <AccordionContent>
                We have had clients win in as little as 4 weeks and some take up
                to 12 months to see there first winnings with consistent
                applying. We will help you navigate this process.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                Are there grants for my business?
              </AccordionTrigger>
              <AccordionContent>
                Our grant writers have access to various resources, such as
                grant databases, grant directories, and industry networks. They
                use their research skills and knowledge to identify grants that
                align with your business's objectives, industry, and specific
                needs. Their expertise ensures you focus on grants where you
                have the best chance of success. There are grants for every
                business and any industry. We do not offer grant assistance for
                the following: Real Estate professionals looking to acquire real
                property. Cannabis industry, tobacco products, adult
                entertainment, Start-up Non profits, or Individuals without a
                registered businesses, credit repair or funding businesses, and
                franchise businesses.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>What do you need from me?</AccordionTrigger>
              <AccordionContent>
                Once you sign up we will send you a questionnaire to understand
                more about your business. This gives us an outline of who you
                are and what your business does. We will then conduct extensive
                research to provide you with the best proposal to help you win
                grants. We need you to monitor your inbox for communication from
                us and grantors.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
