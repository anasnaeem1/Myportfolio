import WorkSection from "../../components/work/WorkSection";
import { WORK_PROJECTS } from "../../data/workProjects";

export default function WorkPage() {
  return <WorkSection projects={WORK_PROJECTS} maxProjects={3} />;
}
