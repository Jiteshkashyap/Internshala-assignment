import InternshipCard from "./IntrenshipCard";
import EmptyState from "../common/EmptyState"

const InternshipList = ({ internships }) => {

    if (!internships.length) {
  return <EmptyState />;
}
  return (
    <div className="space-y-5">
      {internships.map((internship) => (
        <InternshipCard
          key={internship.id}
          internship={internship}
        />
      ))}
    </div>
  );
};

export default InternshipList;