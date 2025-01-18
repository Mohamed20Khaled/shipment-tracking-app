import { Timeline } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "./TrackingTimeline.css";

const TrackingTimeline = () => {
  const timelineData = [
    {
      date: "Monday, February 18, 2021",
      events: [
        {
          time: "2:42 PM",
          location: "Katameya, Cairo",
          description:
            "The order has been created. When the merchant is ready, we will receive the shipment.",
        },
        {
          time: "2:42 PM",
          location: "Katameya, Cairo",
          description:
            "The order has been received at a warehouse in Bosta and is being prepared.",
        },
      ],
    },
    {
      date: "Sunday, February 17, 2021",
      events: [
        {
          time: "2:42 PM",
          location: "Katameya, Cairo",
          description: "The order is being delivered.",
        },
        {
          time: "2:42 PM",
          location: "Katameya, Cairo",
          description:
            "The delivery of the order has been postponed because we were unable to contact you by phone.",
        },
        {
          time: "2:42 PM",
          location: "Katameya, Cairo",
          description:
            "The order has been received at a warehouse in Bosta and is being prepared.",
        },
      ],
    },
    {
      date: "Saturday, February 16, 2021",
      events: [
        {
          time: "2:42 PM",
          location: "Katameya, Cairo",
          description: "The order is being delivered.",
        },
      ],
    },
  ];

  return (
    <div className="mx-auto p-6 rounded-lg max-w-4xl ">
      <h2 className="text-2xl  text-[#667085] mb-10">Tracking Details</h2>
      <Timeline className="custom-timeline">
        {timelineData.map((day, index) => (
          <Timeline.Item key={index}>
            <div className="text-base text-[##111619] mb-2">{day.date}</div>
            {day.events.map((event, idx) => (
              <div
                key={idx}
                className="py-4 px-4 border border-gray-200 rounded-lg mb-3 last:mb-0 bg-white"
              >
                <p className="text-sm text-gray-800 mb-2">
                  {event.description}
                </p>
                <div className="text-xs text-gray-600">
                  <span className="mr-2">{event.time}</span>
                  <span>• {event.location}</span>
                </div>
              </div>
            ))}
          </Timeline.Item>
        ))}
      </Timeline>
      <div className="text-center text-sm text-[#0098a5] cursor-pointer mt-4">
        <span>More</span> <DownOutlined className="text-xs ml-1" />
      </div>
    </div>
  );
};

export default TrackingTimeline;
