import CurrentOpportunities from "./CurrentOpportunities";
import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  shallow(<CurrentOpportunities />);
});
