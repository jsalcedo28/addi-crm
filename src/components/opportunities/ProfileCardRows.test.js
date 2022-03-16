import ProfileCardRow from "./ProfileCardsRow";
import { configure, shallow, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { contacts } from "../../mockup/contact";
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
  shallow(<ProfileCardRow contacts={contacts} />);
});

it("accepts metrics props", () => {
  const wrapper = mount(<ProfileCardRow contacts={contacts} />);
  expect(wrapper.props().contacts).toEqual(contacts);
});

it("shows the contacts from the server", async () => {
  contacts.forEach((contact) => server.create("contact", contact));

  const wrapper = mount(<ProfileCardRow contacts={contacts} />);
  expect(wrapper.props().contacts).toEqual(contacts);
});
