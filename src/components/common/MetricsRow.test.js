import MetricsRow from "./MetricsRow";
import { metrics } from "../../mockup/metrics";
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

it("renders without crashing", () => {
  shallow(<MetricsRow metrics={metrics} />);
});

it("accepts metrics props", () => {
  const wrapper = mount(<MetricsRow metrics={metrics} />);
  expect(wrapper.props().metrics).toEqual(metrics);
});

it("shows the metrics from the server", async () => {
  metrics.forEach((metric) => server.create("metric", metric));

  const wrapper = mount(<MetricsRow metrics={metrics} />);
  expect(wrapper.props().metrics).toEqual(metrics);
});
