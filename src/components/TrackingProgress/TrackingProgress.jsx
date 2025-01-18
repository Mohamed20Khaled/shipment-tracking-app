import { Steps } from "antd";
import "./TrackingProgress.css";

const { Step } = Steps;

const TrackingProgress = () => {
  const currentStep = 1;
  const description = "Saturday Nov. 10";
  const steps = [
    { title: "Shipment Created", description },
    { title: "Picked Up" },
    { title: "In Transit" },
    { title: "Out for Delivery" },
    { title: "Delivered" },
  ];

  return (
    <div className="container mx-auto px-4 pb-12">
      <div className="mx-auto bg-white rounded-lg shadow-md p-8 border border-gray-200">
        {/* Order Information */}
        <div className="mb-8 text-left border-b border-gray-200 pb-4">
          <p className="text-lg text-gray-500 mb-2">ORDER #1234346534</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Arriving by <span className="text-[#0098A5]">Sun Nov. 13</span>
          </h2>
          <p className="text-lg text-gray-500">
            Your order is expected to arrive within 2–3 working days.
          </p>
        </div>

        {/* Tracking Progress */}
        <Steps
          current={currentStep}
          labelPlacement="vertical"
          size="medium"
          className="custom-steps"
        >
          {steps.map((step, index) => (
            <Step
              key={index}
              title={
                <span className="text-lg font-bold text-gray-700">
                  {step.title}
                </span>
              }
              description={
                step.description && (
                  <span className="text-sm font-bold text-gray-500">
                    {step.description}
                  </span>
                )
              }
            />
          ))}
        </Steps>
      </div>
    </div>
  );
};

export default TrackingProgress;
