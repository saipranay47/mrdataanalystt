import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconChartBar,
  IconLayersDifference,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconShare,
  IconLayoutDashboard,
} from "@tabler/icons-react";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Crafted for Creators",
      description:
        "Whether you're a freelancer, student, or industry expert, our dashboards are built to suit your needs.",
      icon: <IconLayoutDashboard />,
    },
    {
      title: "Ease of Customization",
      description:
        "Modify templates effortlessly to match your unique requirements with minimal effort.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Affordable Pricing",
      description:
        "Affordable, transparent pricing without any hidden costs or subscriptions. Pay once, use forever.",
      icon: <IconChartBar />,
    },
    {
      title: "Optimized Performance",
      description:
        "Our dashboards load quickly and are designed to provide real-time insights without any lag.",
      icon: <IconLayersDifference />,
    },
    {
      title: "Multi-Purpose Templates",
      description:
        "Use our dashboards for academic projects, business analytics, or personal insights.",
      icon: <IconShare />,
    },
    {
      title: "24/7 Support",
      description:
        "Our support team and AI assistant are here to help you anytime, anywhere.",
      icon: <IconHelp />,
    },
    {
      title: "Satisfaction Guaranteed",
      description:
        "We’re confident you’ll love our dashboards. If not, we’re here to make things right.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Join Our Community",
      description:
        "Be part of a growing community of creators, developers, and data enthusiasts.",
      icon: <IconHeart />,
    },
  ];

  return (
    <div className="relative z-10 py-10 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-neutral-800">
          Why Choose Our Dashboards?
        </h2>
        <p className="text-neutral-600 mt-2">
          Explore the features that make our templates stand out.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature",
        "border-neutral-200", // Light mode border color
        (index === 0 || index === 4) && "lg:border-l border-neutral-200",
        index < 4 && "lg:border-b border-neutral-200"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-blue-50 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-blue-50 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-blue-600">{icon}</div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-blue-100 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-700 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
