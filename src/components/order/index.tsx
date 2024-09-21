//todo Import mui
import Timeline from "@mui/lab/Timeline";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";

//todo Import components
import { Description, MyCard, Section, Title } from "../../components";

//todo Import utils
import { orderCardType, fDateTime } from "../../utils";

//! ----------------------------------------------------------------------

export const OrderCard = ({ title, subheader, list }: orderCardType) => {
  return (
    <MyCard className="p-5 max-[600px]:p-3">
      <Section>
        <Title className="max-[600px]:text-[1rem]">{title}</Title>
        <Description
          className="text-[1rem] max-[1500px]:text-[0.8rem] max-[600px]:text-[0.6rem]"
          sx={{ color: "text.disabled" }}
        >
          {subheader}
        </Description>
      </Section>

      <Timeline
        sx={{
          m: 0,
          p: 3,
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        {list.map((item, index: number) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot
                color={
                  (item?.type === 1 && "primary") ||
                  (item?.type === 2 && "success") ||
                  (item?.type === 3 && "info") ||
                  (item?.type === 4 && "warning") ||
                  "error"
                }
              />
              {index === list?.length - 1 ? null : <TimelineConnector />}
            </TimelineSeparator>

            <TimelineContent>
              <Typography variant="subtitle2">{item?.title}</Typography>

              <Typography variant="caption" sx={{ color: "text.disabled" }}>
                {fDateTime(item?.time)}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </MyCard>
  );
};
