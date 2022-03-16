import MetricsRow from "./MetricsRow";
import { configure, shallow, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { makeServer } from "../../server";

configure({ adapter: new Adapter() });

let server;

beforeEach(() => {
  server = makeServer();
});

afterEach(() => {
  server.shutdown();
});

const metrics = [
  {
    title: "Contacts",
    count: 12,
  },
  {
    title: "Leads",
    count: 8,
  },
  {
    title: "Prospects",
    count: 4,
  },
];

it("renders without crashing", () => {
  shallow(<MetricsRow metrics={metrics} />);
});

it("accepts metrics props", () => {
  const wrapper = mount(<MetricsRow metrics={metrics} />);
  expect(wrapper.props().metrics).toEqual(metrics);
});

it("shows the contacts from the server", async () => {
  metrics.forEach((metric) => server.create("contact", metric));

  const wrapper = mount(<MetricsRow metrics={metrics} />);
  expect(wrapper.props().metrics).toEqual(metrics);
});
